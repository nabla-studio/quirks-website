import ConnectHero from "@/components/ConnectHero";
import Docs from "@/components/Docs";
import Features from "@/components/Features";
import BentoShowcase from "@/components/bento/BentoShowcase";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden text-white max-xl:px-5">
      <ConnectHero />
      <div className="flex max-w-[1030px] flex-col self-center">
        <Features />
        <BentoShowcase />
        <Docs />
      </div>
    </main>
  );
}
