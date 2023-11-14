import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "./providers";
import { Navbar } from "@/app/components/navbar";

const axifoma = localFont({
  src: [
    {
      path: "../../public/fonts/axiforma/Axiforma Regular.woff",
      weight: "600",
    },
  ],
});

export const metadata: Metadata = {
  title: "Quirks",
  description:
    "Quirks is a library to easily connect your dapp with existing wallets in the Cosmos blockchain ecosystem.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${axifoma.className} bg-secondary`}>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
