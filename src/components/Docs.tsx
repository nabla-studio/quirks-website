import AnimatedDocsButton from "@/components/animations/AnimatedDocsButton";
import SectionFadeIn from "@/components/animations/SectionFadeIn";

function Docs() {
  return (
    <SectionFadeIn className="relative mt-44 flex flex-col xl:mt-24">
      <h5 className="text-lg leading-10 text-primary">DOCS</h5>
      <h2 className="mt-10 text-3.5xl leading-12">
        Web3Modal:
        <br className="xl:hidden" /> Simple, intuitive{" "}
        <br className="xl:hidden" /> wallet login. With this{" "}
        <br className="max-xl:hidden" /> drop-in UI <br className="xl:hidden" />{" "}
        SDK, enable any <br className="xl:hidden" /> wallet&apos;s users to.
      </h2>
      <AnimatedDocsButton />
    </SectionFadeIn>
  );
}

export default Docs;
