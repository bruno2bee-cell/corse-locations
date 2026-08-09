// ============================================================================
// CONTENU DE LA PAGE "DÉCOUVRIR LA BALAGNE"
// Modifie librement les textes et remplace les images placeholder.
// ============================================================================

export const regionIntro = {
  name: "La Balagne",
  subtitle: "Entre mer turquoise et villages de pierre",
 text: "Surnommée le \"jardin de la Corse\", la Balagne s'étend entre Calvi et L'Île-Rousse, sur la côte nord-ouest de l'île. Cette région généreuse marie sans effort des plages de sable fin aux eaux turquoise, des collines couvertes d'oliviers et de vignes, et des villages perchés en pierre qui dominent la mer. Un condensé de tout ce qui fait le charme de la Corse, entre douceur de vivre et paysages spectaculaires.",
};

export interface RegionSection {
  slug: string;
  title: string;
  icon: "plage" | "village" | "rando" | "gastronomie" | "patrimoine";
  text: string;
  images: string[];
  highlights: { name: string; note: string }[];
}

export const regionSections: RegionSection[] = [
  {
    slug: "plages",
    title: "Les plages",
    icon: "plage",
    text: "La Balagne compte parmi les plus belles plages de Corse : de longues étendues de sable fin bordées d'eaux turquoise, des criques plus sauvages accessibles à pied, et des spots pour tous les goûts, entre farniente en famille et coins plus confidentiels.",
    images: [
      "/images/corse/plage-1.jpg",
      "/images/corse/plage-2.jpg",
      "/images/corse/plage-3.jpg",
    ],
    highlights: [
      { name: "Plage de l'Ostriconi", note: "À REMPLACER : dunes sauvages, embouchure de rivière" },
      { name: "Plage de Bodri", note: "À REMPLACER : crique accessible à pied depuis un sentier côtier" },
    ],
  },
  {
    slug: "villages",
    title: "Les villages perchés",
    icon: "village",
    text: "À REMPLACER : présente les villages typiques (Sant'Antonino, Pigna, Corbara, Aregno) et leur architecture en pierre.",
    images: [
      "/images/corse/village-1.jpg",
      "/images/corse/village-2.jpg",
      "/images/corse/village-3.jpg",
    ],
    highlights: [
      { name: "Sant'Antonino", note: "À REMPLACER : un des plus beaux villages de France" },
      { name: "Pigna", note: "À REMPLACER : village d'artisans et de musiciens" },
    ],
  },
  {
    slug: "randonnees",
    title: "Randonnées",
    icon: "rando",
    text: "À REMPLACER : évoque les sentiers de la région (Mare e Monti, accès au GR20, balades familiales).",
    images: ["/images/corse/rando-1.jpg", "/images/corse/rando-2.jpg"],
    highlights: [
      { name: "Sentier Mare e Monti", note: "À REMPLACER : itinéraire entre mer et montagne, plusieurs jours" },
    ],
  },
  {
    slug: "gastronomie",
    title: "Gastronomie locale",
    icon: "gastronomie",
    text: "À REMPLACER : parle des produits locaux (charcuterie, fromages, vins AOP Calvi, miel) et des bonnes adresses.",
    images: ["/images/corse/gastronomie-1.jpg", "/images/corse/gastronomie-2.jpg"],
    highlights: [
      { name: "Marché de L'Île-Rousse", note: "À REMPLACER : marché couvert, produits fermiers" },
    ],
  },
  {
    slug: "patrimoine",
    title: "Patrimoine",
    icon: "patrimoine",
    text: "À REMPLACER : évoque la citadelle de Calvi, les tours génoises, les églises baroques.",
    images: ["/images/corse/patrimoine-1.jpg", "/images/corse/patrimoine-2.jpg"],
    highlights: [
      { name: "Citadelle de Calvi", note: "À REMPLACER : forteresse génoise dominant le golfe" },
    ],
  },
];
