import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Anciennes URLs (ancien site WordPress) -> nouvelles pages
      { source: "/casa-tignoso", destination: "/locations/casa-tignoso", permanent: true },
      { source: "/casa-tignoso/", destination: "/locations/casa-tignoso", permanent: true },
      { source: "/gallery", destination: "/galerie", permanent: true },
      { source: "/gallery/", destination: "/galerie", permanent: true },
      { source: "/alentours", destination: "/corse", permanent: true },
      { source: "/alentours/", destination: "/corse", permanent: true },
      { source: "/legal", destination: "/mentions-legales", permanent: true },
      { source: "/legal/", destination: "/mentions-legales", permanent: true },
      { source: "/booking-search", destination: "/contact", permanent: true },
      { source: "/booking-search/", destination: "/contact", permanent: true },
      { source: "/about-us", destination: "/", permanent: true },
      { source: "/about-us/", destination: "/", permanent: true },
      { source: "/nos-services", destination: "/", permanent: true },
      { source: "/nos-services/", destination: "/", permanent: true },
      { source: "/livre-dor", destination: "/", permanent: true },
      { source: "/livre-dor/", destination: "/", permanent: true },
      { source: "/coming-soon", destination: "/", permanent: true },
      { source: "/coming-soon/", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
