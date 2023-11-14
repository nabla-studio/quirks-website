import ConnectHero from "@/app/components/ConnectHero";
import Features from "@/app/components/Features";

export default function Home() {
  return (
    <main className="flex flex-col px-5 text-white">
      <ConnectHero />
      <Features />
    </main>
  );
}
