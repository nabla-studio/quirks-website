import AnimatedDocsButton from "@/components/animations/AnimatedDocsButton";
import SectionFadeIn from "@/components/animations/SectionFadeIn";

function Docs() {
  return (
    <SectionFadeIn className="relative mt-44 flex flex-col xl:mt-24">
      <h5 className="text-lg leading-10 text-primary">DOCS</h5>
      <h2 className="mt-10 text-3.5xl leading-12">
        Explore the code:
        <br />
        Access the project repository to test and install Quirks.
      </h2>
      <AnimatedDocsButton />
    </SectionFadeIn>
  );
}

export default Docs;
