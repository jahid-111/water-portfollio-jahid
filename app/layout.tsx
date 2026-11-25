import type { Metadata, Viewport } from "next";
import { DM_Mono, DM_Sans, Manrope } from "next/font/google";
import "./globals.css";
import CustomCursor from "./CustomCursor";

/* ---------- Fonts (self-hosted by Next.js, no render-blocking @import) ---------- */
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

/* ---------- Site constants ---------- */
// Custom domain neya hole Vercel e NEXT_PUBLIC_SITE_URL set korun, code change lagbe na.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://operator-jahid.vercel.app";
const siteName = "Jahidul Islam Portfolio";
const personName = "Mohd. Jahidul Islam";
const siteTitle = `${personName} | SWRO & Water Plant Operator`;
const siteDescription =
  "Level 2 SWRO / Water Plant Operator with 5+ years of experience in desalination and water treatment operations across Saudi Arabia.";
const shareDescription =
  "5+ years in SWRO, BWRO, water treatment operations and SCADA monitoring.";

// Facebook, WhatsApp, LinkedIn WebP support kore na, tai PNG ba JPG (1200x630) use korun.
// File ta public/ folder e rakhun: public/jahid-og.png
const ogImage = {
  url: "/jahid-og.png",
  width: 1200,
  height: 630,
  alt: `${personName} - SWRO & Water Plant Operator`,
  type: "image/png",
};

/* ---------- Metadata ---------- */
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: `%s | ${personName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: personName, url: siteUrl }],
  creator: personName,
  keywords: [
    "SWRO operator",
    "RO plant operator",
    "water plant operator",
    "water treatment",
    "desalination",
    "SCADA",
    "CIP",
    "Saudi Arabia",
    "Riyadh",
  ],

  alternates: { canonical: "/" },

  // iOS e phone number ke automatic link na banay
  formatDetection: { telephone: false, email: false, address: false },

  // Facebook, WhatsApp, LinkedIn, Telegram, Slack, Discord
  openGraph: {
    title: siteTitle,
    description: shareDescription,
    type: "website",
    url: "/",
    siteName,
    locale: "en_US",
    images: [ogImage],
  },

  // X (Twitter)
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: shareDescription,
    images: [{ url: ogImage.url, alt: ogImage.alt }],
  },

  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
    apple: "/favicon.ico", // 180x180 PNG public/ e rakhle uncomment korun
  },

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
  themeColor: "#080f17", // site er --bg color er sathe mil
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/* ---------- Structured data (Google er jonno) ---------- */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personName,
  jobTitle: "Level 2 SWRO / Water Plant Operator",
  description: siteDescription,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riyadh",
    addressCountry: "SA",
  },
  knowsAbout: [
    "SWRO",
    "BWRO",
    "Water treatment",
    "Desalination",
    "SCADA",
    "CIP",
    "Chemical dosing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body>
        {children}
        <CustomCursor />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
} 