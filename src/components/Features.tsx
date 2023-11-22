import SectionFadeIn from "@/components/animations/SectionFadeIn";

function Features() {
  return (
    <SectionFadeIn className="mt-24 flex flex-col gap-5" id="features">
      <h5 className="text-lg leading-10 text-primary">FEATURES</h5>
      <h1 className="text-3.5xl leading-12">
        Write once, use everywhere: Your Universal Wallet Adapter.
        <br />
        Quirks aim to optimize performance and minimize bundle size.
        <br />A library for developers to focus entirely on dApp creation.
      </h1>
    </SectionFadeIn>
  );
}

export default Features;
