import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider";

const axifoma = localFont({
  src: [
    {
      path: "../../public/fonts/axiforma/Axiforma SemiBold.woff",
      weight: "600",
    },
    {
      path: "../../public/fonts/axiforma/Axiforma Medium.woff",
      weight: "500",
    },
    {
      path: "../../public/fonts/axiforma/Axiforma Regular.woff",
      weight: "400",
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
    <>
      {/* prettier-ignore */}
      <html lang="en" className="scroll-smooth dark" style={{ colorScheme: "dark" }}>
        <body className={axifoma.className}>
            <RootProvider>
                {children}
                <Analytics />
            </RootProvider>
        </body>
      </html>
    </>
  );
}
