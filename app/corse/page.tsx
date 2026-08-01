import Image from "next/image";
import type { Metadata } from "next";
import { regionIntro, regionSections } from "@/config/region";

export const metadata: Metadata = {
  title: "Découvrir la Balagne",
  description:
    "Plages, villages perchés, randonnées et gastronomie : le guide de la Balagne, en Corse.",
};

export default function CorsePage() {
  return (
    <>
      <section className="relative flex h-[50vh] items-end overflow-hidden bg-dusk-900">
        <Image
          src="/images/corse/hero-region.jpg"
          alt="Panorama de la Balagne"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dusk-900 via-dusk-900/10 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 pb-12 text-whitewash">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone-200">
            Le guide
          </p>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl">{regionIntro.name}</h1>
          <p className="mt-2 max-w-xl text-whitewash/80">{regionIntro.subtitle}</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-lg leading-relaxed text-dusk-700">{regionIntro.text}</p>
      </div>

      {regionSections.map((section, i) => (
        <section
          key={section.slug}
          id={section.slug}
          className={`scroll-mt-24 py-16 ${i % 2 === 1 ? "bg-dusk-700/[0.04]" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="font-display text-3xl text-dusk-900">{section.title}</h2>
                <p className="mt-4 leading-relaxed text-dusk-700">{section.text}</p>
                <ul className="mt-6 space-y-3">
                  {section.highlights.map((h) => (
                    <li key={h.name} className="border-l-2 border-terracotta pl-4">
                      <p className="font-medium text-dusk-900">{h.name}</p>
                      <p className="text-sm text-dusk-700">{h.note}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`grid grid-cols-2 gap-3 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                {section.images.map((src, idx) => (
                  <div
                    key={src}
                    className={`relative overflow-hidden rounded-2xl ${
                      idx === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${section.title} — photo ${idx + 1}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
