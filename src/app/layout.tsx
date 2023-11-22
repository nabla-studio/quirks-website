import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./providers";
import { Navbar } from "@/components/Navbar";
import Script from "next/script";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/react";

const axifoma = localFont({
  src: [
    {
      path: "../../public/fonts/axiforma/Axiforma SemiBold.woff",
      weight: "600",
    },
  ],
});

const baseUrl = process.env.VERCEL_URL
  ? new URL(`https://${process.env.VERCEL_URL}`)
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
  const nonce = headers().get("x-nonce");

  return (
    <html lang="en" className="scroll-smooth">
      <Script
        src={process.env.VERCEL_URL}
        strategy="afterInteractive"
        nonce={nonce ?? undefined}
      />
      <body className={`${axifoma.className} flex flex-col bg-secondary`}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
