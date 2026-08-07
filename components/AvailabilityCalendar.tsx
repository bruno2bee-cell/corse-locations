"use client";

import { useEffect, useMemo, useState } from "react";
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isBefore,
  startOfDay,
  startOfMonth,
} from "date-fns";
import { fr } from "date-fns/locale";
import { ChevronLeft, ChevronRight, CircleAlert } from "lucide-react";
import type { AvailabilityResult } from "@/lib/ical";

const WEEKDAY_LABELS = ["L", "M", "M", "J", "V", "S", "D"];

export function AvailabilityCalendar({
  slug,
  airbnbUrl,
  rating,
  reviewCount,
}: {
  slug: string;
  airbnbUrl?: string;
  rating?: number;
  reviewCount?: number;
}) {
  const [data, setData] = useState<AvailabilityResult | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [monthOffset, setMonthOffset] = useState(0);

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/availability/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Réponse serveur invalide");
        return res.json();
      })
      .then((json: AvailabilityResult) => {
        if (!cancelled) {
          setData(json);
          setLoadError(null);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLoadError(
            "Le calendrier est momentanément indisponible. Contactez-nous directement pour connaître les disponibilités."
          );
        }
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  const visibleMonth = addMonths(startOfMonth(new Date()), monthOffset);

  const days = useMemo(() => {
    const start = startOfMonth(visibleMonth);
    const end = endOfMonth(visibleMonth);
    return eachDayOfInterval({ start, end });
  }, [visibleMonth]);

  // Décalage pour que la semaine commence un lundi
  const leadingBlanks = (getDay(startOfMonth(visibleMonth)) + 6) % 7;

  const blockedRanges = data?.blockedRanges ?? [];
  const failedFeeds = data?.feeds.filter((f) => !f.ok) ?? [];
  const today = startOfDay(new Date());

  function isBlocked(day: Date): boolean {
    const iso = format(day, "yyyy-MM-dd");
    return blockedRanges.some((r) => iso >= r.start && iso < r.end);
  }

  return (
    <div className="rounded-2xl border border-dusk-700/10 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg text-dusk-900">Disponibilités</h3>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setMonthOffset((m) => Math.max(0, m - 1))}
            disabled={monthOffset === 0}
            aria-label="Mois précédent"
            className="rounded-full p-1.5 text-dusk-700 transition-colors hover:bg-whitewash-dim disabled:opacity-30"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="w-32 text-center text-sm font-medium capitalize text-dusk-700">
            {format(visibleMonth, "MMMM yyyy", { locale: fr })}
          </span>
          <button
            type="button"
            onClick={() => setMonthOffset((m) => Math.min(11, m + 1))}
            disabled={monthOffset === 11}
            aria-label="Mois suivant"
            className="rounded-full p-1.5 text-dusk-700 transition-colors hover:bg-whitewash-dim disabled:opacity-30"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {loadError && (
        <p className="mt-4 flex items-start gap-2 rounded-lg bg-terracotta/10 p-3 text-sm text-terracotta-dark">
          <CircleAlert size={16} className="mt-0.5 shrink-0" />
          {loadError}
        </p>
      )}

      {!loadError && !data && (
        <div className="mt-4 grid grid-cols-7 gap-1.5" aria-label="Chargement du calendrier">
          {Array.from({ length: 35 }).map((_, i) => (
            <div key={i} className="aspect-square animate-pulse rounded-md bg-whitewash-dim" />
          ))}
        </div>
      )}

      {data && (
        <>
          <div className="mt-4 grid grid-cols-7 gap-1.5 text-center font-mono text-xs text-dusk-500">
            {WEEKDAY_LABELS.map((d, i) => (
              <span key={`${d}-${i}`}>{d}</span>
            ))}
          </div>
          <div className="mt-1.5 grid grid-cols-7 gap-1.5">
            {Array.from({ length: leadingBlanks }).map((_, i) => (
              <div key={`blank-${i}`} />
            ))}
            {days.map((day) => {
              const past = isBefore(day, today);
              const blocked = isBlocked(day);
              return (
                <div
                  key={day.toISOString()}
                  className={[
                    "flex aspect-square items-center justify-center rounded-md font-mono text-xs",
                    past
                      ? "text-dusk-300"
                      : blocked
                        ? "bg-terracotta/15 text-terracotta-dark line-through"
                        : "bg-maquis-600/10 text-maquis-600",
                  ].join(" ")}
                >
                  {format(day, "d")}
                </div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center gap-4 text-xs text-dusk-500">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-maquis-600/30" /> Libre
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2.5 w-2.5 rounded-sm bg-terracotta/30" /> Réservé
            </span>
          </div>

          {failedFeeds.length > 0 && (
            <p className="mt-3 text-xs text-dusk-500">
              Certaines sources de calendrier n&apos;ont pas pu être vérifiées à
              l&apos;instant ({failedFeeds.map((f) => f.label).join(", ")}). Les
              dates affichées peuvent ne pas être exhaustives.
            </p>
          )}
        </>
      )}

     {rating && reviewCount && (
          <p className="mt-4 text-sm text-dusk-700">
            ★ {rating.toFixed(1)} · {reviewCount} avis sur Airbnb
          </p>
        )}

        <p className="mt-5 text-sm text-dusk-500">
          Ce calendrier reflète nos annonces Airbnb et Booking. Pour réserver,
          merci de passer directement par la plateforme de votre choix ou de
          nous contacter.
        </p>
      <div className="mt-3 flex flex-wrap gap-3">
        {airbnbUrl && (
          <a
            href={airbnbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-dusk-900 px-5 py-2.5 text-sm font-medium text-whitewash transition-colors hover:bg-terracotta"
          >
            Voir sur Airbnb
          </a>
        )}
        <a
          href="/contact"
          className="rounded-full border border-dusk-700/20 px-5 py-2.5 text-sm font-medium text-dusk-700 transition-colors hover:border-terracotta hover:text-terracotta"
        >
          Nous contacter
        </a>
      </div>
    </div>
  );
}
