import SectionFadeIn from "@/components/animations/SectionFadeIn";
import Image from "next/image";
import Link from "next/link";

function Discuss() {
  return (
    <SectionFadeIn
      className="relative mt-44 flex flex-col rounded-std bg-discuss-card px-10 pb-8 pt-10 xl:min-h-[370px] xl:justify-between"
      id="community"
    >
      <h2 className="text-bento-h leading-9 xl:text-3.5xl xl:leading-12">
        Web3Modal: Simple, <br className="max-xl:hidden" /> intuitive wallet
        login.
      </h2>
      <Image
        src={"/chat-bubbles.png"}
        alt="Chat Bubbles"
        width={227}
        height={227}
        className="mt-8 -rotate-[8deg] max-xl:self-center xl:absolute xl:-top-36 xl:right-0 xl:h-[551px] xl:w-[551px]"
      />
      <ul className="mt-5 flex flex-col gap-4 xl:mt-0 xl:flex-row">
        <li>
          <Link
            href={"#"}
            className="inline-flex min-h-13.75 w-full items-center justify-center gap-x-3 rounded-std bg-primary pl-7 pr-6 xl:mt-12"
          >
            <p className="pb-1.5 pt-2.5 text-lg">View Docs</p>
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
            href={"#"}
            className="inline-flex min-h-13.75 w-full items-center justify-center gap-x-3 rounded-std bg-secondary pl-7 pr-6 xl:mt-12"
          >
            <p className="pb-1.5 pt-2.5 text-lg">View Docs</p>
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
