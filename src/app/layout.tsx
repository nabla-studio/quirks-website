import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

const axifoma = localFont({
  src: [
    {
      path: "../../public/fonts/axiforma/Axiforma SemiBold.woff",
      weight: "600",
    },
  ],
});

const baseUrl = process.env.SITE_URL
  ? new URL(`https://${process.env.SITE_URL}`)
  : new URL("https://www.quirks.nabla.studio");

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: "Quirks",
  description:
    "Quirks is a universal wallet adapter that easily connect your dapp with existing wallets in the Cosmos blockchain ecosystem.",
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Quirks",
    description:
      "Quirks is a universal wallet adapter that easily connect your dapp with existing wallets in the Cosmos blockchain ecosystem.",
    url: baseUrl,
    siteName: "Quirks",
  },
  twitter: {
    title: "Quirks",
    site: "@nabla_hq",
    description:
      "Quirks is a universal wallet adapter that easily connect your dapp with existing wallets in the Cosmos blockchain ecosystem.",
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${axifoma.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
