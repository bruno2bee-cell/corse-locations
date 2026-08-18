import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

const siteUrl = "https://www.tignoso.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tignoso — Locations saisonnières en Corse",
    template: "%s — Tignoso",
  },
  description:
    "Deux locations de charme en Balagne, entre mer et villages perchés. Photos, disponibilités en temps réel et guide de la région.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Tignoso",
    title: "Tignoso — Locations saisonnières en Corse",
    description: "Deux locations de charme en Balagne, entre mer et villages perchés.",
    images: ["/images/corse/og-cover.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
