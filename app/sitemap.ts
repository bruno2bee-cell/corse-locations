import type { MetadataRoute } from "next";
import { locations } from "@/config/locations";

const siteUrl = "https://www.balagne-terra.example"; // À REMPLACER par le vrai domaine

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/corse", "/galerie", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const locationRoutes = locations.map((l) => ({
    url: `${siteUrl}/locations/${l.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...locationRoutes];
}
