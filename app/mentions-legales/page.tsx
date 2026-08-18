import type { Metadata } from "next";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-3xl text-dusk-900">Mentions légales</h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-dusk-700">
        <p>
          Éditeur du site

SARL SAVIEZZA BUSINESS
SIRET : 753 315 159 00032
Villa Tignoso 89, Strada Di a Murza, lieu-dit Castelaccio
20220 Monticello, France
Email : bruno2bee@gmail.com
Téléphone : +33 6 86 91 46 62

Hébergeur

Vercel Inc.
340 S Lemon Ave #4133
Walnut, CA 91789
États-Unis

Numéro de déclaration en mairie Référence : WUQ93HTL

Directeur de la publication

M. Bruno Bee
        </p>
      </div>
    </div>
  );
}
