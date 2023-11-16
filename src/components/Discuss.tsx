import Image from "next/image";
import Link from "next/link";
import React from "react";

function Discuss() {
  return (
    <section className="bg-discuss-card relative mt-44 flex flex-col rounded-std px-10 pb-8 pt-10 xl:min-h-[370px] xl:justify-between">
      <h2 className="xl:leading-12 text-bento-h leading-9 xl:text-3.5xl">
        Web3Modal: Simple, <br className="max-xl:hidden" /> intuitive wallet
        login.
      </h2>
      <Image
        src={"/chat-bubbles.png"}
        alt="Chat Bubbles"
        width={227}
        height={227}
        className="-top-36 right-0 mt-8 -rotate-[8deg] xl:absolute xl:h-[551px] xl:w-[551px]"
      />
      <ul className="mt-5 flex flex-col gap-4 xl:mt-0 xl:flex-row">
        <li>
          <Link
            href={"#"}
            className="min-h-13.75 inline-flex items-center justify-center gap-x-3 rounded-std bg-primary pl-7 pr-6 xl:mt-12"
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
            className="min-h-13.75 inline-flex items-center justify-center gap-x-3 rounded-std bg-secondary pl-7 pr-6 xl:mt-12"
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
    </section>
  );
}

export default Discuss;
