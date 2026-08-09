import Image from "next/image";
import Link from "next/link";
import { Compass, Leaf, MapPinned, Waves } from "lucide-react";
import { locations } from "@/config/locations";
import { regionSections } from "@/config/region";
import { PropertyCard } from "@/components/PropertyCard";
import { CoastlineTrace } from "@/components/CoastlineTrace";

const strengths = [
  {
    icon: Waves,
    title: "Face à la Méditerranée",
    text: "À REMPLACER : à quelques minutes à pied des plus belles plages de la Balagne.",
  },
  {
    icon: MapPinned,
    title: "Villages authentiques",
    text: "À REMPLACER : au cœur de villages en pierre, loin de l'agitation touristique.",
  },
  {
    icon: Leaf,
    title: "Accueil sur-mesure",
    text: "À REMPLACER : conseils personnalisés, remise des clés flexible, disponibles pendant le séjour.",
  },
  {
    icon: Compass,
    title: "Point de départ idéal",
    text: "À REMPLACER : proche de Calvi, L'Île-Rousse et des sentiers de randonnée du Mare e Monti.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-dusk-900">
        <Image
          src="/images/corse/hero.jpg"
          alt="Vue sur la côte de la Balagne, mer turquoise et village perché"
          fill
          priority
          sizes="100vw"
         className="object-cover opacity-70 animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dusk-900 via-dusk-900/20 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 text-whitewash">
          <p className="reveal font-mono text-xs uppercase tracking-[0.2em] text-stone-200">
            Balagne, Corse
          </p>
          <h1 className="reveal mt-4 max-w-2xl font-display text-5xl leading-[1.05] sm:text-6xl">
            Deux maisons, un même art de vivre corse.
          </h1>
          <p className="reveal mt-5 max-w-lg text-whitewash/85">
           C&apos;est en découvrant la Balagne, ses collines douces et sa lumière unique, que nous avons eu le coup de cœur. Nous avons voulu créer des lieux où l&apos;on se sent vraiment chez soi, entre mer et montagne. Partager cette douceur de vivre, ces moments de calme et de beauté avec nos hôtes est devenu une évidence. Chaque maison est née de cette envie simple : offrir une parenthèse authentique et ressourçante. Bienvenue dans notre coin de Balagne, nous serons heureux de vous y accueillir.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-4">
            <Link
              href="#locations"
              className="rounded-full bg-terracotta px-6 py-3 text-sm font-medium text-whitewash transition-colors hover:bg-terracotta-dark"
            >
              Découvrir les locations
            </Link>
            <Link
              href="/corse"
              className="rounded-full border border-whitewash/40 px-6 py-3 text-sm font-medium text-whitewash transition-colors hover:border-whitewash"
            >
              Explorer la Balagne
            </Link>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
            Nos locations
          </p>
          <h2 className="mt-3 font-display text-3xl text-dusk-900 sm:text-4xl">
            Choisissez votre ambiance
          </h2>
          <p className="mt-4 text-dusk-700">
            De la vue mer de Villa Mare au calme minéral de Casa Monte, deux
            façons différentes de vivre la Balagne.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {locations.map((location, i) => (
            <PropertyCard key={location.slug} location={location} priority={i === 0} />
          ))}
        </div>
      </section>

      {/* ATOUTS */}
      <section className="bg-dusk-700/[0.04] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-xl font-display text-3xl text-dusk-900 sm:text-4xl">
            Pourquoi séjourner chez nous
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <Icon className="text-terracotta" size={26} strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg text-dusk-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dusk-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEASER REGION */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">
              La région
            </p>
            <h2 className="mt-3 font-display text-3xl text-dusk-900 sm:text-4xl">
              Bienvenue en Balagne
            </h2>
            <p className="mt-4 text-dusk-700">
              À REMPLACER : deux phrases d&apos;accroche sur la région, son
              surnom de &laquo;&nbsp;jardin de la Corse&nbsp;&raquo;, son
              mélange unique de plages et de villages perchés.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {regionSections.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/corse#${s.slug}`}
                    className="inline-block rounded-full border border-dusk-700/15 px-4 py-1.5 text-sm text-dusk-700 transition-colors hover:border-terracotta hover:text-terracotta"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/corse"
              className="mt-8 inline-block text-sm font-medium text-dusk-900 underline decoration-terracotta decoration-2 underline-offset-4"
            >
              Explorer le guide complet de la Balagne →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src="/images/corse/village-1.jpg" alt="Village perché de la Balagne" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
              <Image src="/images/corse/plage-1.jpg" alt="Plage de la Balagne" fill sizes="25vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA CONTACT */}
      <section className="relative overflow-hidden bg-dusk-900 py-24 text-whitewash">
        <CoastlineTrace className="absolute inset-x-0 top-0 h-16 w-full text-stone-400/20" />
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            Une question avant de réserver ?
          </h2>
          <p className="mt-4 text-whitewash/75">
            Nous connaissons chaque recoin de la Balagne et serons ravis de
            vous aider à préparer votre séjour.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-terracotta px-7 py-3 text-sm font-medium text-whitewash transition-colors hover:bg-terracotta-dark"
          >
            Écrivez-nous
          </Link>
        </div>
      </section>
    </>
  );
}
