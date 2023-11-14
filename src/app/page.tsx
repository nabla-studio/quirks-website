import ConnectHero from "@/app/components/connect-hero";
import Features from "@/app/components/features";

export default function Home() {
  return (
    <main className="flex flex-col px-5 text-white">
      <ConnectHero />
      <Features />
    </main>
  );
}
