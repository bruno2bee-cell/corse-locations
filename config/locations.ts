// ============================================================================
// CONFIGURATION DES LOCATIONS
// ----------------------------------------------------------------------------
// Ce fichier est LE seul endroit à modifier pour mettre à jour les textes,
// équipements, photos et flux de calendrier de tes deux locations.
// Aucune connaissance en code n'est nécessaire pour éditer ce fichier :
// remplace juste les valeurs entre guillemets.
// ============================================================================
 
export type Amenity =
  | "wifi"
  | "parking"
  | "clim"
  | "piscine"
  | "vue-mer"
  | "jardin"
  | "cuisine-equipee"
  | "lave-linge"
  | "terrasse"
  | "barbecue"
  | "animaux"
  | "acces-plage";
 
export const amenityLabels: Record<Amenity, string> = {
  wifi: "Wifi haut débit",
  parking: "Parking privé",
  clim: "Climatisation",
  piscine: "Piscine",
  "vue-mer": "Vue mer",
  jardin: "Jardin privatif",
  "cuisine-equipee": "Cuisine équipée",
  "lave-linge": "Lave-linge",
  terrasse: "Terrasse",
  barbecue: "Barbecue",
  animaux: "Animaux acceptés",
  "acces-plage": "Accès plage à pied",
};
 
export interface IcalFeed {
  // Nom affiché en interne uniquement (ex: "Airbnb", "Booking.com", "Réservations directes")
  label: string;
  // URL du flux iCal (.ics) — à récupérer dans les paramètres de calendrier
  // de chaque plateforme ("Exporter le calendrier" / "Synchronisation calendrier").
  url: string;
};
 
export interface PointOfInterest {
  name: string;
  category: "plage" | "village" | "restaurant" | "randonnee" | "commerce";
  distanceKm: number;
  description: string;
}
 
export interface Location {
  slug: string; // utilisé dans l'URL : /locations/casa-tignoso
  name: string;
  tagline: string;
  shortDescription: string; // affichée sur la page d'accueil
  longDescription: string[]; // paragraphes affichés sur la page dédiée
  village: string; // ex: "Sant'Antonino"
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  surfaceM2: number;
  amenities: Amenity[];
  coordinates: { lat: number; lng: number };
  coverImage: string;
  gallery: string[]; // chemins vers /public/images/...
  nearby: PointOfInterest[];
  externalLinks: {
    airbnb?: string;
    booking?: string;
  };
  icalFeeds: IcalFeed[];
  priceIndication: string; // ex: "À partir de 120€/nuit" — reste volontairement flou, pas de moteur de réservation
 rating?: number;
  reviewCount?: number;
}
 
export const locations: Location[] = [
  {
    slug: "casa-tignoso",
    name: "Casa Tignoso",
    tagline: "Villa calme avec vue mer, à deux pas des plages de Monticello",
    shortDescription:
      "Villa avec piscine à débordement et vue sur la baie, à quelques minutes à pied des plages et du centre de Monticello.",
   longDescription: [
        "Bienvenue à Casa Tignoso, une demeure paisible et entièrement climatisée, idéalement située à Monticello. Nichée dans un cadre verdoyant et reposant, cette villa offre une vue mer apaisante et tout le confort nécessaire pour des vacances inoubliables en famille ou entre amis.",
        "La villa dispose de 4 chambres spacieuses, toutes équipées de lits doubles et chacune dotée de sa salle de bain privative. Vous profiterez d'une grande terrasse ensoleillée et d'une piscine chauffée, parfaite pour se détendre à toute heure de la journée.",
        "Pour les moments de détente et de jeux, la propriété propose également une salle de jeux, un terrain de badminton et un espace pétanque. Les familles avec jeunes enfants seront particulièrement bien accueillies : lits parapluie, poussettes et chaise haute sont mis à disposition.",
        "La villa dispose de 4 places de parking privatives, dont une équipée d'une borne de recharge pour véhicule électrique. Boulangerie, supérette, centre-ville et plages sont accessibles en quelques minutes.",
      ],
    village: "Monticello",
    capacity: 8,
    bedrooms: 4,
    bathrooms: 4,
    surfaceM2: 150, // À REMPLACER : surface réelle en m²
     amenities: [
        "wifi",
        "parking",
        "clim",
        "piscine",
        "vue-mer",
        "cuisine-equipee",
        "terrasse",
        "acces-plage",
      ],
    coordinates: { lat: 42.617, lng: 8.955 }, // Centre de Monticello, à affiner avec la position exacte de la villa
    coverImage: "/images/villa-mare/cover.jpg",
    gallery: [
      "/images/villa-mare/salon.jpg",
      "/images/villa-mare/terrasse.jpg",
      "/images/villa-mare/chambre-1.jpg",
      "/images/villa-mare/chambre-2.jpg",
      "/images/villa-mare/cuisine.jpg",
      "/images/villa-mare/vue-mer.jpg",
    ],
    nearby: [
      {
        name: "Plage la plus proche",
        category: "plage",
        distanceKm: 0.4,
        description: "À REMPLACER : nom et ambiance de la plage.",
      },
      {
        name: "Centre de Monticello",
        category: "village",
        distanceKm: 0.9,
        description: "À REMPLACER : boulangerie, supérette, ambiance du village.",
      },
    ],
    externalLinks: {
      airbnb: "https://www.airbnb.ch/rooms/51254967",
    },
    icalFeeds: [
      {
        label: "Airbnb",
        url: "REMPLACER : coller ici l'URL du flux iCal Airbnb pour Casa Tignoso",
      },
    ],
    priceIndication: "À REMPLACER : ex. À partir de 200€ / nuit selon saison",
   rating: 5.0,
      reviewCount: 8,
  },
  {
    slug: "isula-rossa-bellavista",
    name: "IsulaRossa Bellavista",
    tagline: "Penthouse avec jacuzzi et vue panoramique, à L'Île-Rousse",
    shortDescription:
      "Penthouse récent (2023) de 128 m² avec 100 m² de terrasse et jacuzzi, vue panoramique sur L'Île-Rousse, les Agriates et le Cap Corse.",
    longDescription: [
   "Sur une surface spacieuse de 128 m², complétée par une terrasse exceptionnelle de 100 m², imaginez-vous vous détendre dans le jacuzzi tout en admirant une vue mer époustouflante. Les panoramas à couper le souffle s'étendent sur L'Île-Rousse, les Agriates, le Cap Corse, Monticello et les majestueuses montagnes environnantes.",
"L'appartement se compose de trois chambres, chacune disposant de sa propre terrasse privée, offrant intimité et vues exclusives à tous les occupants. Deux salles de bain modernes et deux WC assurent un confort optimal.",
"Construit en 2023, ce penthouse neuf se distingue par sa modernité et ses équipements de qualité. La climatisation intégrale vous garantit la fraîcheur même lors des plus chaudes journées d'été, tandis que l'agencement et la décoration soignés créent une ambiance chaleureuse et accueillante pour vous et vos proches.",
    ],
    village: "L'Île-Rousse",
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    surfaceM2: 128,
    amenities: [
      "wifi",
      "clim",
      "vue-mer",
      "cuisine-equipee",
      "terrasse",
      "parking",
      "acces-plage",
    ],
    coordinates: { lat: 42.632, lng: 8.935 }, // Centre de L'Île-Rousse, à affiner avec la position exacte de l'appartement
    coverImage: "/images/casa-monte/cover.jpg",
    gallery: [
     "/images/casa-monte/cuisine.jpg",
"/images/casa-monte/chambre-1.jpg",
"/images/casa-monte/chambre-2.jpg",
"/images/casa-monte/chambre-3.jpg",
"/images/casa-monte/terrasse.jpg",
"/images/casa-monte/vue-mer.jpg",
    ],
    nearby: [
      {
        name: "Centre-ville et port de L'Île-Rousse",
        category: "village",
        distanceKm: 0.5,
        description: "À REMPLACER : ambiance du port, commerces, marché couvert...",
      },
      {
        name: "Plage la plus proche",
        category: "plage",
        distanceKm: 0.5,
        description: "À REMPLACER : nom et ambiance de la plage.",
      },
    ],
    externalLinks: {
      airbnb: "https://www.airbnb.ch/rooms/776763722570318905",
    },
    icalFeeds: [
      {
        label: "Airbnb",
        url: "REMPLACER : coller ici l'URL du flux iCal Airbnb pour IsulaRossa Bellavista",
      },
    ],
    priceIndication: "À REMPLACER : ex. À partir de 180€ / nuit selon saison",
   rating: 4.82,
      reviewCount: 28,
  },
];
 
export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
 
