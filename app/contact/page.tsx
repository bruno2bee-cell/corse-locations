import type { Metadata } from "next";
import { CoastlineTrace } from "@/components/CoastlineTrace";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Une question sur nos locations en Balagne ? Écrivez-nous.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-terracotta">Contact</p>
      <h1 className="mt-3 font-display text-4xl text-dusk-900">Parlons de votre séjour</h1>
      <p className="mt-4 max-w-lg text-dusk-700">
        Question sur une location, une date, un accès... nous répondons
        généralement sous 24h.
      </p>

      <CoastlineTrace className="mt-8 h-8 w-48 text-terracotta/40" />

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_320px]">
        <ContactForm />

        <aside className="space-y-6 text-sm text-dusk-700">
          <div>
            <p className="font-display text-lg text-dusk-900">Coordonnées</p>
            <p className="mt-2">
  <a href="mailto:bruno2bee@gmail.com" className="hover:text-terracotta transition-colors">
    bruno2bee@gmail.com
  </a>
</p>
<p>
  <a href="tel:+33686914662" className="hover:text-terracotta transition-colors">
    +33 6 86 91 46 62
  </a>
</p>
          </div>
          <div>
            <p className="font-display text-lg text-dusk-900">Réseaux</p>
            <p className="mt-2 space-y-1">
  <span className="block">
    Facebook :{" "}
    
      href="https://www.facebook.com/ISULAROSSABELLAVISTA?locale=fr_FR"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-terracotta transition-colors"
    >
      IsulaRossaBellavista
    </a>{" "}
    ·{" "}
    
      href="https://www.facebook.com/profile.php?id=100087383082515&locale=fr_FR"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-terracotta transition-colors"
    >
      A Casa Tignoso
    </a>
  </span>
  <span className="block">
    Instagram :{" "}
    
      href="https://www.instagram.com/isularossabellavista"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-terracotta transition-colors"
    >
      @isularossabellavista
    </a>{" "}
    ·{" "}
    
      href="https://www.instagram.com/tignoso4"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-terracotta transition-colors"
    >
      @tignoso4
    </a>
  </span>
</p>
          </div>
          <div>
            <p className="font-display text-lg text-dusk-900">Réservation directe</p>
            <p className="mt-2">
              Pour réserver, passez par nos annonces Airbnb / Booking
              (liens sur chaque page location) ou écrivez-nous ici pour une
              réservation en direct.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
