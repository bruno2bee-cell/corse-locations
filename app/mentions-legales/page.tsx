import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-3xl text-dusk-900">Mentions légales</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-dusk-700">
        <p>
          À REMPLACER — Éditeur du site : nom/raison sociale, adresse, email,
          numéro de téléphone, numéro SIRET si activité déclarée.
        </p>
        <p>
          À REMPLACER — Hébergeur : nom de l&apos;hébergeur (ex : Vercel Inc.),
          adresse.
        </p>
        <p>
          À REMPLACER — Numéro de déclaration en mairie / numéro
          d&apos;enregistrement meublé de tourisme, si applicable pour tes
          locations en France.
        </p>
        <p>
          À REMPLACER — Directeur de la publication.
        </p>
      </div>
    </div>
  );
}
