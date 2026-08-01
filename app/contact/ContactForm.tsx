"use client";

import { useState, type FormEvent } from "react";
import { locations } from "@/config/locations";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-maquis-600/10 p-6 text-maquis-600">
        <p className="font-display text-lg">Message envoyé</p>
        <p className="mt-1 text-sm">Merci, nous revenons vers vous très vite.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-dusk-900">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1.5 w-full rounded-lg border border-dusk-700/15 px-3.5 py-2.5 text-sm outline-none focus:border-terracotta"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-dusk-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1.5 w-full rounded-lg border border-dusk-700/15 px-3.5 py-2.5 text-sm outline-none focus:border-terracotta"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label htmlFor="location" className="text-sm font-medium text-dusk-900">
            Location concernée
          </label>
          <select
            id="location"
            name="location"
            className="mt-1.5 w-full rounded-lg border border-dusk-700/15 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-terracotta"
          >
            <option value="">Peu importe</option>
            {locations.map((l) => (
              <option key={l.slug} value={l.name}>
                {l.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="arrival" className="text-sm font-medium text-dusk-900">
            Arrivée souhaitée
          </label>
          <input
            id="arrival"
            name="arrival"
            type="date"
            className="mt-1.5 w-full rounded-lg border border-dusk-700/15 px-3.5 py-2.5 text-sm outline-none focus:border-terracotta"
          />
        </div>
        <div>
          <label htmlFor="departure" className="text-sm font-medium text-dusk-900">
            Départ souhaité
          </label>
          <input
            id="departure"
            name="departure"
            type="date"
            className="mt-1.5 w-full rounded-lg border border-dusk-700/15 px-3.5 py-2.5 text-sm outline-none focus:border-terracotta"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-dusk-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-lg border border-dusk-700/15 px-3.5 py-2.5 text-sm outline-none focus:border-terracotta"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-terracotta-dark">
          L&apos;envoi a échoué. Vous pouvez réessayer ou nous écrire
          directement par email.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-full bg-dusk-900 px-6 py-3 text-sm font-medium text-whitewash transition-colors hover:bg-terracotta disabled:opacity-60"
      >
        {status === "sending" ? "Envoi..." : "Envoyer le message"}
      </button>
    </form>
  );
}
