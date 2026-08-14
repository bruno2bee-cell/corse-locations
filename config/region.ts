// ============================================================================
// CONTENU DE LA PAGE "DÉCOUVRIR LA BALAGNE"
// Modifie librement les textes et remplace les images placeholder.
// ============================================================================

export const regionIntro = {
  name: "La Balagne",
  subtitle: "Entre mer turquoise et villages de pierre",
text: "Surnommée le \"jardin de la Corse\", la Balagne s'étend entre Calvi et L'Île-Rousse, sur la côte nord-ouest de l'île. Cette région généreuse marie sans effort des plages de sable fin aux eaux turquoise, des collines couvertes d'oliviers et de vignes, et des villages perchés en pierre qui dominent la mer.",

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
     { name: "Plage de l'Ostriconi", note: "Un cadre sauvage entre dunes et embouchure de rivière, à l'extrémité de la Balagne" },
{ name: "Plage de Bodri", note: "Une crique préservée, accessible à pied par un joli sentier côtier" },
    ],
  },
  {
    slug: "villages",
    title: "Les villages perchés",
    icon: "village",
    text: "Perchés sur les collines, les villages de Balagne ont conservé tout leur cachet : ruelles pavées, maisons en pierre et vues imprenables sur la mer. Sant'Antonino, Pigna, Corbara ou Aregno se visitent à pied, au fil des artisans, des placettes ombragées et des points de vue à couper le souffle.",
    images: [
      "/images/corse/village-1.jpg",
      "/images/corse/village-2.jpg",
      "/images/corse/village-3.jpg",
    ],
    highlights: [
      { name: "Sant'Antonino", note: "Classé parmi les plus beaux villages de France, perché sur son piton rocheux" },
{ name: "Pigna", note: "Un village vivant d'artisans et de musiciens, réputé pour ses ateliers et ses concerts" },
    ],
  },
  {
    slug: "randonnees",
    title: "Randonnées",
    icon: "rando",
    text: "Entre mer et montagne, la Balagne offre des itinéraires pour tous les niveaux : le sentier Mare e Monti longe la côte et l'arrière-pays sur plusieurs jours, tandis que des balades plus courtes permettent de rejoindre facilement villages, criques et points de vue en famille.",
    images: ["/images/corse/rando-1.jpg", "/images/corse/rando-2.jpg"],
    highlights: [
     { name: "Sentier Mare e Monti", note: "Un itinéraire de plusieurs jours entre mer et montagne, à travers villages et paysages variés" },
    ],
  },
  {
    slug: "gastronomie",
    title: "Gastronomie locale",
    icon: "gastronomie",
    text: "La Balagne est une terre de saveurs : charcuterie corse, fromages de brebis, miel de maquis et vins AOP Calvi se dégustent dans les bonnes adresses de la région. Marchés locaux et petits producteurs font partie intégrante de l'expérience.",
    images: ["/images/corse/gastronomie-1.jpg", "/images/corse/gastronomie-2.jpg"],
    highlights: [
      { name: "Marché de L'Île-Rousse", note: "Un marché couvert animé où trouver produits fermiers et spécialités corses" },
    ],
  },
  {
    slug: "patrimoine",
    title: "Patrimoine",
    icon: "patrimoine",
    text: "L'histoire de la Balagne se lit dans son patrimoine : la citadelle de Calvi veille sur la baie, les tours génoises jalonnent le littoral, et les églises baroques témoignent du riche passé de la région.",
    images: ["/images/corse/patrimoine-1.jpg", "/images/corse/patrimoine-2.jpg"],
    highlights: [
      { name: "Citadelle de Calvi", note: "Une forteresse génoise imposante, dominant le golfe et la ville" },
    ],
  },
];
