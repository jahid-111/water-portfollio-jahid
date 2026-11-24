import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://operator-jahid.vercel.app";
const siteTitle = "Mohd. Jahidul Islam | SWRO & Water Plant Operator";
const siteDescription =
  "Level 2 SWRO / Water Plant Operator with 5+ years of experience in desalination and water treatment operations across Saudi Arabia.";
const ogImage = "/jahid-og.png"; // 1200x630, PNG ba JPG (WebP na)

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Mohd. Jahidul Islam",
  },
  description: siteDescription,
  applicationName: "Jahidul Islam Portfolio",
  authors: [{ name: "Mohd. Jahidul Islam", url: siteUrl }],
  creator: "Mohd. Jahidul Islam",
  keywords: [
    "SWRO operator",
    "RO plant operator",
    "water plant operator",
    "desalination",
    "SCADA",
    "CIP",
    "Saudi Arabia",
    "Riyadh",
  ],

  alternates: {
    canonical: "/",
  },

  // Facebook, WhatsApp, LinkedIn, Telegram, Slack, Discord
  openGraph: {
    title: siteTitle,
    description:
      "5+ years in SWRO, BWRO, water treatment operations and SCADA monitoring.",
    type: "website",
    url: "/",
    siteName: "Jahidul Islam Portfolio",
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Mohd. Jahidul Islam - SWRO Plant Operator",
        type: "image/png",
      },
    ],
  },

  // X (Twitter)
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "5+ years in SWRO, BWRO, water treatment operations and SCADA monitoring.",
    images: [ogImage],
  },

  icons: {
    icon: [{ url: "/favicon.ico", sizes: "52x52", type: "image/png" }],
  },

  // Google
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "izrA110i86G-0CI1PpfygpddbiJ8gqPuQwWmgD0fwTA",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b3d5c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
