import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <div className="flex text-white flex-col xl:flex-row xl:pt-24 xl:pb-16 xl:px-80 pt-12 pb-10 items-center justify-between">
      <div className="flex items-center flex-col xl:flex-row gap-y-5 gap-x-9">
        <Image
          src={"/quirks-logo.svg"}
          alt="Quirks small logo"
          width={46}
          height={41}
          className="xl:w-24 xl:h-[86px]"
        />
        <Image
          src={"/quirks-text.svg"}
          alt="Quirks text logo"
          width={94}
          height={30}
          className="xl:w-40 xl:h-14"
        />
      </div>
      <div className="hidden xl:flex items-center gap-6">
        <p className="text-lg font-semibold leading-10">features</p>
        <p className="text-lg font-semibold leading-10">commie</p>
        <Link
          href={"/docs"}
          className="ml-5 inline-flex min-h-[55px] items-center  gap-x-3 pl-7 pr-6 bg-primary rounded-[50px]"
        >
          <p className="text-lg font-semibold pt-2.5 pb-1.5">View Docs</p>
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
