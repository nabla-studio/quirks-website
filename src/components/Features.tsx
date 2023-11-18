import SectionFadeIn from "@/components/animations/SectionFadeIn";

function Features() {
  return (
    <SectionFadeIn className="mt-24 flex flex-col gap-5" id="features">
      <h5 className="text-lg leading-10 text-primary">FEATURES</h5>
      <h2 className="text-3.5xl leading-12">
        Web3Modal: <br className="xl:hidden" /> Simple, intuitive{" "}
        <br className="xl:hidden" />
        wallet login. With
        <br className="xl:hidden" /> this <br className="max-lg:hidden" />{" "}
        drop-in UI SDK, enable any wallet&apos;s users to{" "}
        <br className="max-lg:hidden" /> seamlessly log in to your app and enjoy
        a
        <br className="xl:hidden" /> smooth, <br className="max-lg:hidden" />
        unified experience.
      </h2>
    </SectionFadeIn>
  );
}

export default Features;
