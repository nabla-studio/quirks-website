import ConnectHero from "@/components/ConnectHero";
import Discuss from "@/components/Discuss";
import Docs from "@/components/Docs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import BentoShowcase from "@/components/bento/BentoShowcase";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden text-white max-xl:px-5">
      <ConnectHero />
      <div className="flex max-w-[1030px] flex-col self-center">
        <Features />
        <BentoShowcase />
        <Docs />
        <Discuss />
        <Footer />
      </div>
    </main>
  );
}
