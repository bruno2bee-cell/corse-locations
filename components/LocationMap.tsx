"use client";

// Carte via l'embed OpenStreetMap : aucune clé API à configurer, contrairement
// à Google Maps. Pour passer à Google Maps plus tard, remplace simplement le
// contenu de l'iframe par l'URL d'embed Google Maps (Partager > Intégrer une carte).
export function LocationMap({
  lat,
  lng,
  label,
}: {
  lat: number;
  lng: number;
  label: string;
}) {
  const delta = 0.01;
  const bbox = `${lng - delta}%2C${lat - delta}%2C${lng + delta}%2C${lat + delta}`;
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className="overflow-hidden rounded-2xl border border-dusk-700/10">
      <iframe
        title={`Carte de localisation — ${label}`}
        src={src}
        className="h-72 w-full"
        loading="lazy"
      />
      <a
        href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=15/${lat}/${lng}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white px-4 py-2 text-center text-xs text-dusk-500 hover:text-terracotta"
      >
        Voir en plein écran / itinéraire
      </a>
    </div>
  );
}
