import type { Metadata } from "next";
import { GalleryFiltered } from "./GalleryFiltered";

export const metadata: Metadata = {
  title: "Galerie photo",
  description: "Nos deux locations et les plus beaux paysages de la Balagne en images.",
};

export default function GaleriePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Galerie</p>
      <h1 className="mt-3 font-display text-4xl text-dusk-900">
        Les locations et la Balagne en images
      </h1>
      <p className="mt-4 max-w-xl text-dusk-700">
        Un aperçu de nos deux maisons et de la région qui les entoure.
      </p>
      <div className="mt-10">
        <GalleryFiltered />
      </div>
    </div>
  );
}
