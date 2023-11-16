import Image from "next/image";
import Link from "next/link";
import React from "react";

function Docs() {
  return (
    <section className="relative mt-44 flex flex-col xl:mt-24">
      <h5 className="text-lg leading-10 text-primary">DOCS</h5>
      <h2 className="leading-12 mt-10 text-3.5xl">
        Web3Modal:
        <br className="xl:hidden" /> Simple, intuitive{" "}
        <br className="xl:hidden" /> wallet login. With this{" "}
        <br className="max-xl:hidden" /> drop-in UI <br className="xl:hidden" />{" "}
        SDK, enable any <br className="xl:hidden" /> wallet&apos;s users to.
      </h2>
      <Link
        href={"/docs"}
        className="min-h-13.75 mt-36 inline-flex max-w-[185px] items-center gap-x-3 rounded-std bg-primary pl-7 pr-6 xl:mt-12"
      >
        <span className="pb-1.5 pt-2.5 text-lg">View Docs</span>
        <Image
          src={"/icons/arrow-up-right.svg"}
          alt="Arrow Up Right icon"
          width={24}
          height={24}
          className="py-4"
        />
      </Link>
      <Image
        src={"/cursor-pointer.png"}
        alt="Pointer"
        width={91}
        height={91}
        className="xl:h-33 xl:w-33 absolute bottom-20 right-0 xl:bottom-14"
      />
    </section>
  );
}

export default Docs;
