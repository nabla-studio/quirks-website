import AnimatedDocsButton from "@/components/animations/AnimatedDocsButton";
import SectionFadeIn from "@/components/animations/SectionFadeIn";
import Image from "next/image";
import Link from "next/link";

function Docs() {
  return (
    <SectionFadeIn className="relative mt-44 flex flex-col lg:mt-24" id="docs">
      <h6 className="text-lg leading-10 text-primary">DOCS</h6>
      <h2 className="mt-10 text-3.5xl leading-12">
        Explore the code:
        <br />
        Access the project repository to test and install Quirks.
      </h2>
      <div className="relative mt-36 lg:mt-12">
        <Link
          href="/docs"
          className="inline-flex min-h-13.75 items-center gap-x-3 rounded-std bg-primary pl-7 pr-6"
        >
          <span className="pb-1.5 pt-2.5 text-lg">Getting started</span>
          <Image
            src={"/icons/arrow-up-right.svg"}
            alt="Github"
            width={24}
            height={24}
            className="rotate-45 py-4"
          />
        </Link>
      </div>
    </SectionFadeIn>
  );
}

export default Docs;
