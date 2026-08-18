import Link from "next/link";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/#locations", label: "Les locations" },
  { href: "/corse", label: "La Balagne" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-dusk-700/10 bg-whitewash/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl tracking-tight text-dusk-900"
        >
          Tignoso
        </Link>
        <nav aria-label="Navigation principale">
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-dusk-700 transition-colors hover:text-terracotta"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full bg-dusk-900 px-5 py-2 text-sm font-medium text-whitewash transition-colors hover:bg-terracotta md:inline-block"
        >
          Nous contacter
        </Link>
        {/* Nav mobile simplifiée : lien direct vers contact, menu complet en pied de page */}
        <Link
          href="/contact"
          className="rounded-full bg-dusk-900 px-4 py-2 text-sm font-medium text-whitewash md:hidden"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
