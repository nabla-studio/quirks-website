import AnimatedBubbles from "@/components/animations/AnimatedBubbles";
import AnimatedImage from "@/components/animations/AnimatedImage";
import SectionFadeIn from "@/components/animations/SectionFadeIn";
import Image from "next/image";
import Link from "next/link";

function Discuss() {
  return (
    <SectionFadeIn
      className="relative mt-44 flex flex-col rounded-std bg-discuss-card px-10 pb-8 pt-10 lg:min-h-[370px] lg:justify-between"
      id="community"
    >
      <h2 className="text-bento-h leading-9 lg:text-3.5xl lg:leading-12">
        Questions or Assistance?
        <br />
        Engage with us on our
        <br className="hidden lg:inline" /> channels.
      </h2>
      <AnimatedBubbles />
      <ul className="mt-5 flex flex-col gap-4 lg:mt-0 lg:flex-row">
        <li>
          <Link
            href="https://discord.gg/rnEkXYPmhX"
            className="inline-flex min-h-13.75 w-full items-center justify-center gap-x-3 rounded-std bg-primary pl-7 pr-6 lg:mt-12"
            rel="external"
            target="_blank"
          >
            <p className="pb-1.5 pt-2.5 text-lg">Chat with us</p>
            <Image
              src={"/icons/arrow-up-right.svg"}
              alt="Arrow Up Right icon"
              width={24}
              height={24}
              className="py-4"
            />
          </Link>
        </li>
        <li>
          <Link
            href="https://calendly.com/nabla"
            className="inline-flex min-h-13.75 w-full items-center justify-center gap-x-3 rounded-std bg-secondary pl-7 pr-6 lg:mt-12"
            rel="external"
            target="_blank"
          >
            <p className="pb-1.5 pt-2.5 text-lg">Set a call</p>
            <Image
              src={"/icons/arrow-up-right.svg"}
              alt="Arrow Up Right icon"
              width={24}
              height={24}
              className="py-4"
            />
          </Link>
        </li>
      </ul>
    </SectionFadeIn>
  );
}

export default Discuss;
