import type { Metadata } from "next";

export const metadata: Metadata = { title: "Politique de confidentialité" };

export default function ConfidentialitePage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-3xl text-dusk-900">
        Politique de confidentialité
      </h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-dusk-700">
        <p>
          Ce site utilise un formulaire de contact qui collecte votre nom,
          votre email et les informations que vous saisissez volontairement,
          dans le seul but de répondre à votre demande. Ces données ne sont
          ni revendues ni utilisées à des fins commerciales tierces.
        </p>
        <p>
          À REMPLACER — Durée de conservation des données du formulaire de
          contact (ex : 12 mois).
        </p>
        <p>
          À REMPLACER — Coordonnées pour exercer vos droits d&apos;accès, de
          rectification et de suppression (RGPD), conformément à la loi
          Informatique et Libertés.
        </p>
        <p>
          Ce site ne dépose pas de cookies de suivi publicitaire. Si tu
          ajoutes un outil d&apos;analyse d&apos;audience (Google Analytics,
          Plausible...), pense à mettre à jour cette page et, si nécessaire,
          à ajouter un bandeau de consentement cookies.
        </p>
      </div>
    </div>
  );
}
