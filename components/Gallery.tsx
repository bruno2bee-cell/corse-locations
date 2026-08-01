"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));

  useEffect(() => {
    if (openIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openIndex]);

  // Support swipe tactile basique (useRef : ne doit pas déclencher de re-render)
  const touchStartX = useRef(0);
  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.changedTouches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) prev();
    if (delta < -50) next();
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl focus-visible:outline-terracotta"
          >
            <Image
              src={src}
              alt={`${alt} — photo ${i + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dusk-900/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} — visionneuse plein écran`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute right-4 top-4 rounded-full p-2 text-whitewash hover:bg-whitewash/10"
          >
            <X size={24} />
          </button>
          <button
            type="button"
            onClick={prev}
            aria-label="Photo précédente"
            className="absolute left-2 rounded-full p-2 text-whitewash hover:bg-whitewash/10 sm:left-6"
          >
            <ChevronLeft size={28} />
          </button>
          <div className="relative h-[70vh] w-full max-w-4xl">
            <Image
              src={images[openIndex]}
              alt={`${alt} — photo ${openIndex + 1} sur ${images.length}`}
              fill
              sizes="90vw"
              className="object-contain"
              priority
            />
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Photo suivante"
            className="absolute right-2 rounded-full p-2 text-whitewash hover:bg-whitewash/10 sm:right-6"
          >
            <ChevronRight size={28} />
          </button>
          <span className="absolute bottom-4 font-mono text-xs text-whitewash/60">
            {openIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
