import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <div className="flex w-full max-w-[1336px] flex-col items-center justify-between self-center px-5 pb-10 pt-12 text-white xl:flex-row xl:pb-16 xl:pt-24">
      <div className="flex flex-col items-center gap-x-9 gap-y-5 xl:flex-row">
        <Image
          src={"/quirks-logo.svg"}
          alt="Quirks small logo"
          width={46}
          height={41}
          className="xl:h-[86px] xl:w-24"
        />
        <Image
          src={"/quirks-text.svg"}
          alt="Quirks text logo"
          width={94}
          height={30}
          className="xl:h-14 xl:w-40"
        />
      </div>
      <div className="hidden items-center gap-6 xl:flex">
        <p className="text-lg leading-10">features</p>
        <p className="text-lg leading-10">commie</p>
        <Link
          href={"/docs"}
          className="ml-5 inline-flex min-h-[55px] items-center  gap-x-3 rounded-std bg-primary pl-7 pr-6"
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
      </div>
    </div>
  );
}
