import ConnectHero from "@/components/ConnectHero";
import Discuss from "@/components/Discuss";
import Docs from "@/components/Docs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import BentoShowcase from "@/components/bento/BentoShowcase";
/* import { headers } from "next/headers";
import Script from "next/script"; */

export default function Home() {
  /* const nonce = headers().get("x-nonce"); */

  return (
    <>
      {/* <Script
        src={`https://${process.env.SITE_URL}`}
        strategy="afterInteractive"
        nonce={nonce ?? undefined}
      /> */}
      <main className="flex w-full max-w-wide-element flex-col self-center overflow-hidden px-5 text-white">
        <ConnectHero />
        <div className="flex max-w-regular-element flex-col self-center">
          <Features />
          <BentoShowcase />
          <Docs />
          <Discuss />
          <Footer />
        </div>
      </main>
    </>
  );
}
