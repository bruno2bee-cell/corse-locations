import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Bath, Bed, Maximize, MapPin, Users } from "lucide-react";
import { amenityLabels, locations, getLocationBySlug } from "@/config/locations";
import { Gallery } from "@/components/Gallery";
import { AvailabilityCalendar } from "@/components/AvailabilityCalendar";
import { LocationMap } from "@/components/LocationMap";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: location.name,
    description: location.shortDescription,
    openGraph: { images: [location.coverImage] },
  };
}

const factItems = (location: ReturnType<typeof getLocationBySlug>) =>
  location
    ? [
        { icon: Users, label: `${location.capacity} voyageurs` },
        { icon: Bed, label: `${location.bedrooms} chambres` },
        { icon: Bath, label: `${location.bathrooms} salle(s) de bain` },
        { icon: Maximize, label: `${location.surfaceM2} m²` },
      ]
    : [];

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  return (
    <>
     <section className="relative flex h-[60vh] items-end overflow-hidden bg-dusk-900">
  <Image
    src={location.coverImage}
    alt={location.name}
    fill
    priority
    sizes="100vw"
    className="object-cover opacity-80"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-dusk-900 via-dusk-900/10 to-transparent" />
  <div className="absolute top-6 left-6 w-32 sm:w-40">
    <Image
      src={location.logo}
      alt={`Logo ${location.name}`}
      width={400}
      height={260}
      className="w-full h-auto rounded-lg shadow-lg"
    />
  </div>
  <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 text-whitewash">

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-16 lg:grid-cols-[1fr_360px]">
          <div>
            {/* Repères rapides */}
            <div className="flex flex-wrap gap-6 border-b border-dusk-700/10 pb-8 font-mono text-sm text-dusk-700">
              {factItems(location).map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2">
                  <Icon size={16} className="text-terracotta" /> {label}
                </span>
              ))}
            </div>

            {/* Description */}
            <div className="mt-8 space-y-4 text-dusk-700">
              {location.longDescription.map((p, i) => (
                <p key={i} className="leading-relaxed">{p}</p>
              ))}
            </div>

            {/* Équipements */}
            <div className="mt-12">
              <h2 className="font-display text-2xl text-dusk-900">Équipements</h2>
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {location.amenities.map((a) => (
                  <li
                    key={a}
                    className="rounded-lg bg-dusk-700/[0.04] px-3 py-2.5 text-sm text-dusk-700"
                  >
                    {amenityLabels[a]}
                  </li>
                ))}
              </ul>
            </div>

            {/* Galerie */}
<div className="mt-12">
  <h2 className="font-display text-2xl text-dusk-900">Photos</h2>
  <div className="mt-5">
    <Gallery images={location.gallery} alt={location.name} />
  </div>
</div>

            {/* À proximité */}
            <div className="mt-12">
              <h2 className="font-display text-2xl text-dusk-900">À proximité</h2>
              <ul className="mt-5 space-y-4">
                {location.nearby.map((poi) => (
                  <li key={poi.name} className="flex justify-between gap-4 border-b border-dusk-700/10 pb-4">
                    <div>
                      <p className="font-medium text-dusk-900">{poi.name}</p>
                      <p className="mt-1 text-sm text-dusk-700">{poi.description}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-dusk-500">
                      {poi.distanceKm} km
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Carte */}
            <div className="mt-12">
              <h2 className="font-display text-2xl text-dusk-900">Localisation</h2>
              <div className="mt-5">
                <LocationMap
                  lat={location.coordinates.lat}
                  lng={location.coordinates.lng}
                  label={location.name}
                />
              </div>
            </div>
          </div>

          {/* Colonne calendrier / réservation, collante sur desktop */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-sm text-dusk-500">{location.priceIndication}</p>
            <div className="mt-4">
            <AvailabilityCalendar slug={location.slug} airbnbUrl={location.externalLinks.airbnb} rating={location.rating} reviewCount={location.reviewCount} />
            </div>
            {location.externalLinks.booking && (
              <a
                href={location.externalLinks.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-center text-sm text-dusk-500 underline hover:text-terracotta"
              >
                Voir aussi sur Booking.com
              </a>
            )}
          </aside>
        </div>

        {/* Lien vers l'autre location */}
        <div className="mt-20 border-t border-dusk-700/10 pt-10 text-center">
          <p className="text-sm text-dusk-500">Vous hésitez encore ?</p>
          {locations
            .filter((l) => l.slug !== location.slug)
            .map((other) => (
              <Link
                key={other.slug}
                href={`/locations/${other.slug}`}
                className="mt-2 inline-block font-display text-2xl text-dusk-900 underline decoration-terracotta decoration-2 underline-offset-4 hover:text-terracotta"
              >
                Découvrez aussi {other.name} →
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
