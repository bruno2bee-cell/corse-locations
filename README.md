# Balagne Terra — Site vitrine

Site vitrine Next.js pour deux locations saisonnières en Balagne (Corse),
avec galerie photo, guide de la région, et calendrier de disponibilité
agrégé depuis Airbnb / Booking (flux iCal).

## 1. Lancer le projet en local

Prérequis : [Node.js](https://nodejs.org) 20 ou plus récent.

```bash
npm install
npm run dev
```

Le site est disponible sur http://localhost:3000.

## 2. Modifier les textes et informations des locations

**Tout se passe dans `config/locations.ts`.** Chaque location est un objet
avec ses textes, équipements, coordonnées GPS, photos et liens externes.
Cherche les mentions **"À REMPLACER"** dans ce fichier : ce sont les
contenus d'exemple à personnaliser.

Le contenu de la page "Découvrir la Balagne" se modifie de la même façon
dans `config/region.ts`.

Aucune compétence en code n'est nécessaire pour ces deux fichiers : il
s'agit uniquement de remplacer du texte entre guillemets.

## 3. Ajouter tes vraies photos

Les images sont actuellement des **placeholders générés automatiquement**
(fonds colorés avec la mention "Photo à remplacer") pour que tu visualises
la mise en page. Pour les remplacer :

1. Prépare tes photos au format `.jpg` ou `.webp` (idéalement 1600px de large
   minimum pour les photos de couverture).
2. Remplace les fichiers dans `public/images/villa-mare/`,
   `public/images/casa-monte/` et `public/images/corse/` **en gardant
   exactement les mêmes noms de fichiers** (ex : `cover.jpg`, `salon.jpg`...).
3. Si tu veux ajouter ou retirer des photos, mets à jour la liste
   correspondante dans `config/locations.ts` (tableau `gallery`) ou
   `config/region.ts` (tableau `images`).

Pour régénérer des placeholders (par exemple si tu ajoutes une nouvelle
photo dans la config avant d'avoir la vraie image) :

```bash
python3 scripts/gen_placeholders.py
```

## 4. Configurer la synchronisation des calendriers (iCal)

Le site n'a **pas** de moteur de réservation : il affiche seulement les
disponibilités réelles de tes annonces existantes, en te renvoyant vers
Airbnb / Booking pour réserver.

### Où trouver l'URL du flux iCal

- **Airbnb** : dans ton espace hôte → *Calendrier* → icône ⚙️ (paramètres
  de disponibilité) → *"Synchronisation des calendriers"* → *"Exporter le
  calendrier"*. Copie l'URL fournie (elle se termine par `.ics`).
- **Booking.com** : dans Extranet → *Tarifs et disponibilité* →
  *Synchronisation de calendrier* → *"Exporter le calendrier"*.
- Toute autre plateforme qui propose un export iCal fonctionne de la même
  façon.

### Où renseigner ces URLs

Dans `config/locations.ts`, chaque location a un tableau `icalFeeds` :

```ts
icalFeeds: [
  { label: "Airbnb", url: "https://www.airbnb.fr/calendar/ical/XXXX.ics?s=YYYY" },
  { label: "Booking.com", url: "https://admin.booking.com/hotel/hoteladmin/ical.html?..." },
],
```

Ajoute autant de flux que nécessaire (Airbnb + Booking + un flux manuel pour
des réservations hors plateforme, par exemple). Le site les fusionne
automatiquement et affiche toutes les dates bloquées.

### Comment ça fonctionne techniquement

- La route `app/api/availability/[slug]/route.ts` télécharge tous les flux
  iCal d'une location en parallèle, les parse, et fusionne les périodes
  réservées.
- Les données sont revalidées automatiquement toutes les heures
  (`revalidate = 3600`) pour rester à jour sans surcharger les plateformes.
- Si un flux est temporairement indisponible, le calendrier continue de
  s'afficher avec les autres flux (l'erreur est indiquée discrètement sous
  le calendrier).

### Tester sans URLs réelles

Un exemple de flux se trouve dans `public/ics-examples/exemple-airbnb.ics`.
Pour tester en local, tu peux temporairement pointer un `icalFeeds.url`
vers `http://localhost:3000/ics-examples/exemple-airbnb.ics`.

## 5. Configurer l'envoi du formulaire de contact

Le formulaire de contact envoie un email via [Resend](https://resend.com)
(offre gratuite largement suffisante pour ce volume).

1. Crée un compte sur resend.com et vérifie un domaine (ou utilise leur
   domaine de test en développement).
2. Récupère ta clé API.
3. Copie `.env.example` en `.env.local` et renseigne `RESEND_API_KEY`,
   `CONTACT_TO_EMAIL` et `CONTACT_FROM_EMAIL`.
4. Ajoute les mêmes variables dans Vercel (voir ci-dessous) pour la
   production.

Sans configuration, le formulaire fonctionne quand même en développement :
les messages s'affichent simplement dans le terminal.

## 6. Déployer sur Vercel

1. Pousse ce projet sur un dépôt GitHub.
2. Sur [vercel.com](https://vercel.com), clique sur *"Add New Project"* et
   importe ton dépôt.
3. Vercel détecte automatiquement Next.js, aucune configuration
   supplémentaire n'est nécessaire.
4. Dans *Project Settings → Environment Variables*, ajoute
   `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
5. Une fois le nom de domaine définitif choisi, mets-le à jour dans
   `app/layout.tsx`, `app/sitemap.ts` et `app/robots.ts` (constante
   `siteUrl`).

## Structure du projet

```
config/
  locations.ts       → toutes les infos des 2 locations (À MODIFIER)
  region.ts           → contenu de la page "Découvrir la Balagne" (À MODIFIER)
lib/
  ical.ts             → récupération et fusion des flux iCal
app/
  page.tsx            → page d'accueil
  locations/[slug]/   → page dédiée à chaque location
  corse/              → page "Découvrir la Balagne"
  galerie/            → galerie photo générale avec filtres
  contact/            → page + formulaire de contact
  api/availability/   → route API du calendrier (agrégation iCal)
  api/contact/        → route API d'envoi du formulaire
components/           → composants réutilisables (Header, Gallery, calendrier...)
public/images/        → toutes les photos (placeholders à remplacer)
scripts/
  gen_placeholders.py → régénère les images placeholder si besoin
```

## Stack technique

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- `node-ical` pour parser les flux de calendrier
- `date-fns` pour la gestion des dates
- `lucide-react` pour les icônes
- Cartographie via OpenStreetMap (aucune clé API requise)
