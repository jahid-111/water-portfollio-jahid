import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohd. Jahidul Islam | SWRO & Water Plant Operator",
  description:
    "Professional portfolio of Mohd. Jahidul Islam, Level 2 SWRO / Water Plant Operator with 5+ years of experience in desalination and water treatment operations.",
  metadataBase: new URL("https://operator-jahid.vercel.app"),
  openGraph: {
    title: "Mohd. Jahidul Islam | SWRO & Water Plant Operator",
    description:
      "5+ years in SWRO, BWRO, water treatment operations and SCADA monitoring.",
    type: "website",
    url: "/",
    siteName: "Jahidul Islam Portfolio",
    images: [
      {
        url: "/jahid-og.webp",
        width: 1200,
        height: 630,
        alt: "Mohd. Jahidul Islam - SWRO Plant Operator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd. Jahidul Islam | SWRO & Water Plant Operator",
    description:
      "5+ years in SWRO, BWRO, water treatment operations and SCADA monitoring.",
    images: ["/jahid-og.webp"],
  },
  icons: {
    icon: "/favicon.ico",
  },
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
