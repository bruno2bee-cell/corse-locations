// Signature graphique du site : un tracé de côte stylisé façon carte marine,
// dessiné à la main (chemin SVG), qui relie symboliquement les deux locations
// et les points d'intérêt évoqués sur le site. Réutilisé en fil rouge
// sur plusieurs pages (hero, séparateurs de section, page contact).
export function CoastlineTrace({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 800 120"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M0 60 C 60 20, 100 90, 160 70 S 260 30, 320 55 C 370 75, 400 100, 460 80 S 560 20, 620 45 C 670 65, 710 40, 760 55 S 800 60, 800 60"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />
      <circle cx="160" cy="70" r="4" fill={color} />
      <circle cx="460" cy="80" r="4" fill={color} />
    </svg>
  );
}
