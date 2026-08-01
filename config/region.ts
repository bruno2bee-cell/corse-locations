// ============================================================================
// CONTENU DE LA PAGE "DÉCOUVRIR LA BALAGNE"
// Modifie librement les textes et remplace les images placeholder.
// ============================================================================

export const regionIntro = {
  name: "La Balagne",
  subtitle: "Entre mer turquoise et villages de pierre",
  text: "À REMPLACER : présente la Balagne en 3-4 phrases — sa géographie (entre Calvi et l'Île-Rousse), son surnom de \"jardin de la Corse\", son mélange de plages et de villages perchés.",
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
    text: "À REMPLACER : décris les plages emblématiques de la Balagne (Lozari, Ostriconi, Bodri...), leur ambiance, l'accès.",
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
