import ical from "node-ical";
import type { IcalFeed } from "@/config/locations";

export interface BlockedRange {
  start: string; // ISO date (yyyy-MM-dd)
  end: string; // ISO date (yyyy-MM-dd), exclusif (nuit de départ, comme le fait Airbnb)
  source: string; // label de la plateforme d'origine
}

export interface FeedResult {
  label: string;
  ok: boolean;
  error?: string;
  ranges: BlockedRange[];
}

export interface AvailabilityResult {
  fetchedAt: string;
  feeds: FeedResult[];
  blockedRanges: BlockedRange[]; // fusion de tous les flux qui ont fonctionné
}

function toISODate(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/**
 * Récupère et parse un flux iCal unique.
 * Ne lève jamais d'exception : les erreurs réseau/format sont capturées
 * et renvoyées dans le résultat pour que l'UI puisse afficher
 * "flux X indisponible" sans casser l'affichage du calendrier.
 */
async function fetchSingleFeed(feed: IcalFeed): Promise<FeedResult> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(feed.url, {
      signal: controller.signal,
      // Les flux iCal Airbnb/Booking changent régulièrement (nouvelles résas,
      // annulations) : on ne les met pas en cache côté fetch, la revalidation
      // se fait au niveau de la route API (voir app/api/availability).
      cache: "no-store",
      headers: { "User-Agent": "Mozilla/5.0 (compatible; SiteVitrineLocation/1.0)" },
    });
    clearTimeout(timeout);

    if (!res.ok) {
      return { label: feed.label, ok: false, error: `HTTP ${res.status}`, ranges: [] };
    }

    const text = await res.text();
    const parsed = ical.parseICS(text);

    const ranges: BlockedRange[] = [];
    for (const key in parsed) {
      const event = parsed[key];
      if (event && event.type === "VEVENT" && event.start && event.end) {
        ranges.push({
          start: toISODate(event.start as Date),
          end: toISODate(event.end as Date),
          source: feed.label,
        });
      }
    }

    return { label: feed.label, ok: true, ranges };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return { label: feed.label, ok: false, error: message, ranges: [] };
  }
}

/** Fusionne des intervalles [start, end) qui se chevauchent ou se touchent. */
function mergeRanges(ranges: BlockedRange[]): BlockedRange[] {
  if (ranges.length === 0) return [];

  const sorted = [...ranges].sort((a, b) => a.start.localeCompare(b.start));
  const merged: BlockedRange[] = [{ ...sorted[0] }];

  for (let i = 1; i < sorted.length; i++) {
    const last = merged[merged.length - 1];
    const current = sorted[i];
    if (current.start <= last.end) {
      if (current.end > last.end) last.end = current.end;
      if (!last.source.includes(current.source)) {
        last.source = `${last.source} + ${current.source}`;
      }
    } else {
      merged.push({ ...current });
    }
  }

  return merged;
}

/**
 * Récupère tous les flux iCal d'une location en parallèle et fusionne
 * les périodes bloquées. Un flux en échec n'empêche pas les autres
 * de s'afficher.
 */
export async function getAvailability(feeds: IcalFeed[]): Promise<AvailabilityResult> {
  const results = await Promise.all(feeds.map(fetchSingleFeed));
  const allRanges = results.flatMap((r) => r.ranges);

  return {
    fetchedAt: new Date().toISOString(),
    feeds: results,
    blockedRanges: mergeRanges(allRanges),
  };
}

/** Vrai si la date (yyyy-MM-dd) tombe dans une période bloquée. */
export function isDateBlocked(dateISO: string, blockedRanges: BlockedRange[]): boolean {
  return blockedRanges.some((r) => dateISO >= r.start && dateISO < r.end);
}
