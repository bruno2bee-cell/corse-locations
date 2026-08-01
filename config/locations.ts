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
  slug: string; // utilisé dans l'URL : /locations/villa-mare
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
}

export const locations: Location[] = [
  {
    slug: "villa-mare",
    name: "Villa Mare",
    tagline: "Face à la mer, entre Calvi et l'Île-Rousse",
    shortDescription:
      "Maison de caractère avec vue mer imprenable, à deux pas des plages de sable fin de la Balagne.",
    longDescription: [
      "À REMPLACER : décris ici l'histoire de la maison, son ambiance, ce qui la rend unique. Parle de la lumière du soir sur le golfe, du bruit des cigales, de la terrasse où l'on prend le petit-déjeuner face au large.",
      "À REMPLACER : détaille les pièces de vie, l'agencement, le style de décoration (pierre, bois, tomettes...).",
    ],
    village: "Lumio",
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    surfaceM2: 110,
    amenities: [
      "wifi",
      "parking",
      "clim",
      "vue-mer",
      "jardin",
      "cuisine-equipee",
      "lave-linge",
      "terrasse",
      "barbecue",
    ],
    coordinates: { lat: 42.5397, lng: 8.8899 }, // Lumio, à ajuster avec les coordonnées réelles
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
        name: "Plage de Lumio",
        category: "plage",
        distanceKm: 1.2,
        description: "À REMPLACER : petite crique de sable, idéale en fin de journée.",
      },
      {
        name: "Calvi et sa citadelle",
        category: "village",
        distanceKm: 8,
        description: "À REMPLACER : citadelle génoise, port de plaisance, restaurants en bord de plage.",
      },
    ],
    externalLinks: {
      airbnb: "https://www.airbnb.fr/rooms/REMPLACER_PAR_TON_ID",
      booking: "https://www.booking.com/hotel/fr/REMPLACER.fr.html",
    },
    icalFeeds: [
      {
        label: "Airbnb",
        url: "https://www.airbnb.fr/calendar/ical/REMPLACER.ics?s=REMPLACER",
      },
      {
        label: "Booking.com",
        url: "https://admin.booking.com/hotel/hoteladmin/ical.html?REMPLACER",
      },
    ],
    priceIndication: "À partir de 140€ / nuit selon saison",
  },
  {
    slug: "casa-monte",
    name: "Casa Monte",
    tagline: "Bergerie rénovée au cœur des villages perchés",
    shortDescription:
      "Ancienne bergerie en pierre restaurée avec goût, nichée dans un village typique de la Balagne, entre maquis et montagne.",
    longDescription: [
      "À REMPLACER : décris l'authenticité du lieu, son caractère rustique-chic, la vue sur les villages perchés et le maquis environnant.",
      "À REMPLACER : évoque le calme, les matériaux d'origine conservés (pierre, poutres), le charme de l'intérieur.",
    ],
    village: "Pigna",
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    surfaceM2: 75,
    amenities: [
      "wifi",
      "parking",
      "jardin",
      "cuisine-equipee",
      "lave-linge",
      "terrasse",
      "animaux",
    ],
    coordinates: { lat: 42.6017, lng: 8.9236 }, // Pigna, à ajuster
    coverImage: "/images/casa-monte/cover.jpg",
    gallery: [
      "/images/casa-monte/facade.jpg",
      "/images/casa-monte/sejour.jpg",
      "/images/casa-monte/chambre-1.jpg",
      "/images/casa-monte/terrasse.jpg",
      "/images/casa-monte/village.jpg",
    ],
    nearby: [
      {
        name: "Village de Pigna",
        category: "village",
        distanceKm: 0.1,
        description: "À REMPLACER : village d'artisans, ruelles en pierre, ateliers d'artistes.",
      },
      {
        name: "Sentier vers Sant'Antonino",
        category: "randonnee",
        distanceKm: 3,
        description: "À REMPLACER : balade entre les villages perchés avec vue sur le golfe.",
      },
    ],
    externalLinks: {
      airbnb: "https://www.airbnb.fr/rooms/REMPLACER_PAR_TON_ID",
    },
    icalFeeds: [
      {
        label: "Airbnb",
        url: "https://www.airbnb.fr/calendar/ical/REMPLACER.ics?s=REMPLACER",
      },
    ],
    priceIndication: "À partir de 95€ / nuit selon saison",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
