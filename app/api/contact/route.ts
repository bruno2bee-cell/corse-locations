import { NextResponse } from "next/server";

// À CONFIGURER : crée un compte sur https://resend.com (offre gratuite
// largement suffisante pour un site vitrine), récupère une clé API, puis
// ajoute-la dans les variables d'environnement Vercel sous le nom
// RESEND_API_KEY. Ajoute aussi CONTACT_TO_EMAIL (ton adresse de réception)
// et CONTACT_FROM_EMAIL (une adresse sur un domaine vérifié dans Resend).
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "contact@exemple.corsica";
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "site@exemple.corsica";

interface ContactPayload {
  name?: string;
  email?: string;
  location?: string;
  arrival?: string;
  departure?: string;
  message?: string;
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const { name, email, location, arrival, departure, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Merci de renseigner au moins votre nom, votre email et un message." },
      { status: 400 }
    );
  }

  const emailBody = `
Nouvelle demande de contact — Balagne Terra

Nom : ${name}
Email : ${email}
Location concernée : ${location || "Non précisée"}
Dates souhaitées : ${arrival || "?"} → ${departure || "?"}

Message :
${message}
  `.trim();

  // Si aucune clé Resend n'est configurée (ex: en développement local),
  // on log simplement le message au lieu de faire échouer le formulaire.
  if (!RESEND_API_KEY) {
    console.log("[contact] RESEND_API_KEY absente — message reçu :\n", emailBody);
    return NextResponse.json({ ok: true, mode: "logged-only" });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM_EMAIL,
        to: CONTACT_TO_EMAIL,
        reply_to: email,
        subject: `Nouvelle demande de contact — ${name}`,
        text: emailBody,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[contact] Échec Resend :", detail);
      return NextResponse.json({ error: "Échec de l'envoi" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Erreur réseau :", err);
    return NextResponse.json({ error: "Échec de l'envoi" }, { status: 502 });
  }
}
