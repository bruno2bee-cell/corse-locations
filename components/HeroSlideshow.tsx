"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/images/corse/hero.jpg",
    alt: "Vue sur la côte de la Balagne, mer turquoise et village perché",
  },
  {
    src: "/images/villa-mare/cover.jpg",
    alt: "Casa Tignoso, villa avec piscine à Monticello",
  },
  {
    src: "/images/casa-monte/cover.jpg",
    alt: "IsulaRossa Bellavista, penthouse avec vue panoramique à L'Île-Rousse",
  },
];

export function HeroSlideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Image
      key={index}
      src={slides[index].src}
      alt={slides[index].alt}
      fill
      priority
      sizes="100vw"
      className="object-cover opacity-70 animate-hero-zoom"
    />
  );
}
