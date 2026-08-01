import type { MetadataRoute } from "next";

const siteUrl = "https://www.balagne-terra.example"; // À REMPLACER par le vrai domaine

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
