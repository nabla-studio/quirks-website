import ConnectHero from "@/components/ConnectHero";
import Features from "@/components/Features";
import BentoShowcase from "@/components/bento/BentoShowcase";

export default function Home() {
  return (
    <main className="flex flex-col text-white max-xl:px-5">
      <ConnectHero />
      <div className="flex flex-col self-center">
        <Features />
        <BentoShowcase />
      </div>
    </main>
  );
}
