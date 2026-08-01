import Image from "next/image";
import Link from "next/link";
import { Bed, Users } from "lucide-react";
import type { Location } from "@/config/locations";

export function PropertyCard({ location, priority = false }: { location: Location; priority?: boolean }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-dusk-700/5 transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={location.coverImage}
          alt={location.name}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-whitewash/90 px-3 py-1 font-mono text-xs text-dusk-700">
          {location.village}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl text-dusk-900">{location.name}</h3>
        <p className="mt-1 text-sm text-terracotta">{location.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-dusk-700">
          {location.shortDescription}
        </p>
        <div className="mt-4 flex items-center gap-4 font-mono text-xs text-dusk-500">
          <span className="flex items-center gap-1.5">
            <Users size={14} /> {location.capacity} voyageurs
          </span>
          <span className="flex items-center gap-1.5">
            <Bed size={14} /> {location.bedrooms} chambres
          </span>
        </div>
        <span className="mt-5 inline-block text-sm font-medium text-dusk-900 underline decoration-terracotta decoration-2 underline-offset-4 group-hover:text-terracotta">
          Découvrir {location.name} →
        </span>
      </div>
    </Link>
  );
}
