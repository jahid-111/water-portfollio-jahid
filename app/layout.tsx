import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohd. Jahidul Islam | SWRO & Water Plant Operator",
  description:
    "Professional portfolio of Mohd. Jahidul Islam, Level 2 SWRO / Water Plant Operator with 5+ years of experience in desalination and water treatment operations.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Mohd. Jahidul Islam | SWRO & Water Plant Operator",
    description:
      "5+ years in SWRO, BWRO, water treatment operations and SCADA monitoring.",
    type: "website",
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
