import Link from "next/link";
import { CoastlineTrace } from "./CoastlineTrace";

export function Footer() {
  return (
    <footer className="bg-dusk-900 text-whitewash">
      <CoastlineTrace className="h-10 w-full text-stone-400/60" />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-lg">Balagne Terra</p>
            <p className="mt-3 max-w-xs text-sm text-whitewash/70">
              Deux locations saisonnières au cœur de la Balagne, entre mer et
              villages perchés.
            </p>
          </div>
          <nav aria-label="Plan du site">
            <p className="text-sm font-semibold text-stone-400">Explorer</p>
            <ul className="mt-3 space-y-2 text-sm text-whitewash/80">
              <li><Link href="/locations/villa-mare" className="hover:text-stone-200">Villa Mare</Link></li>
              <li><Link href="/locations/casa-monte" className="hover:text-stone-200">Casa Monte</Link></li>
              <li><Link href="/corse" className="hover:text-stone-200">Découvrir la Balagne</Link></li>
              <li><Link href="/galerie" className="hover:text-stone-200">Galerie photo</Link></li>
            </ul>
          </nav>
          <div>
            <p className="text-sm font-semibold text-stone-400">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-whitewash/80">
              <li><Link href="/contact" className="hover:text-stone-200">Formulaire de contact</Link></li>
              <li>À REMPLACER : email@exemple.corsica</li>
              <li>À REMPLACER : +33 6 00 00 00 00</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-whitewash/10 pt-6 text-xs text-whitewash/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Balagne Terra. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-whitewash/80">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-whitewash/80">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
