import ConnectHero from "@/app/components/ConnectHero";
import Features from "@/app/components/Features";
import BentoShowcase from "@/app/components/bento/BentoShowcase";

export default function Home() {
  return (
    <main className="flex flex-col text-white max-xl:px-5">
      <ConnectHero />
      <Features />
      <BentoShowcase />
    </main>
  );
}
