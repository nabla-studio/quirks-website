import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { type ReactNode } from "react";
import "./docs.css";
import { Metadata } from "next";
import { baseOptions } from "@/app/docs/layout.config";
import {source} from "@/app/source";

const baseUrl = process.env.SITE_URL
  ? new URL(`https://${process.env.SITE_URL}`)
  : new URL("https://www.quirks.nabla.studio");

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    template: "%s | Quirks",
    default: "Quirks",
  },
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

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <DocsLayout tree={source.pageTree} {...baseOptions}>
        {children}
      </DocsLayout>
    </div>
  );
}
