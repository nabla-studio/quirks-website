import { Provider } from "./providers";
import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const results = await cookies();
  const quirksInitialState = results.get("quirks")?.value;

  return (
    <main className="flex flex-col bg-secondary font-semibold">
      <Provider quirksInitialState={quirksInitialState}>{children}</Provider>
    </main>
  );
}
