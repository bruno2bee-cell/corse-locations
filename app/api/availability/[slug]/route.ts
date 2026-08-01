import { NextResponse } from "next/server";
import { getLocationBySlug } from "@/config/locations";
import { getAvailability } from "@/lib/ical";

// Revalide les données au maximum une fois par heure : évite de re-télécharger
// les flux iCal à chaque visite tout en gardant des disponibilités à jour.
export const revalidate = 3600;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return NextResponse.json({ error: "Location introuvable" }, { status: 404 });
  }

  if (location.icalFeeds.length === 0) {
    return NextResponse.json({
      fetchedAt: new Date().toISOString(),
      feeds: [],
      blockedRanges: [],
    });
  }

  const availability = await getAvailability(location.icalFeeds);
  return NextResponse.json(availability);
}
