import ConnectHero from "@/components/ConnectHero";
import Discuss from "@/components/Discuss";
import Docs from "@/components/Docs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import BentoShowcase from "@/components/bento/BentoShowcase";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-full max-w-334 flex-col self-center overflow-hidden px-5 text-white">
        <ConnectHero />
        <div className="flex max-w-257.5 flex-col self-center">
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
