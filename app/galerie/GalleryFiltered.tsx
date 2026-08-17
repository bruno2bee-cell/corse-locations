"use client";

import { useState } from "react";
import { locations } from "@/config/locations";
import { regionSections } from "@/config/region";
import { Gallery } from "@/components/Gallery";

type FilterKey = "toutes" | "villa-mare" | "casa-monte" | "region";

const filters: { key: FilterKey; label: string }[] = [
  { key: "toutes", label: "Toutes" },
  { key: "villa-mare", label: "Tignoso" },
  { key: "casa-monte", label: "IsulaRossa BellaVista" },
  { key: "region", label: "La Balagne" },
];

export function GalleryFiltered() {
  const [active, setActive] = useState<FilterKey>("toutes");

  const regionImages = regionSections.flatMap((s) => s.images);
  const villaMare = locations.find((l) => l.slug === "Tignoso")?.gallery ?? [];
  const casaMonte = locations.find((l) => l.slug === "IsulaRossa BellaVista")?.gallery ?? [];

  const imagesByFilter: Record<FilterKey, string[]> = {
    toutes: [...villaMare, ...casaMonte, ...regionImages],
    "villa-mare": villaMare,
    "casa-monte": casaMonte,
    region: regionImages,
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrer la galerie">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            role="tab"
            aria-selected={active === f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === f.key
                ? "bg-dusk-900 text-whitewash"
                : "bg-dusk-700/[0.06] text-dusk-700 hover:bg-dusk-700/10"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="mt-8">
        <Gallery images={imagesByFilter[active]} alt="Balagne Terra" />
      </div>
    </div>
  );
}
