import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Navbar() {
  return (
    <header className="max-w-wide-element w-full self-center">
      <nav className="flex flex-col items-center justify-between px-5 pb-10 pt-12 text-white xl:flex-row xl:pb-16 xl:pt-24">
        <div className="flex flex-col items-center gap-x-9 gap-y-5 xl:flex-row">
          <Image
            src={"/quirks-logo.svg"}
            alt="Quirks small logo"
            width={46}
            height={41}
            className="xl:h-21.5 xl:w-24"
          />
          <Image
            src={"/quirks-text.svg"}
            alt="Quirks text logo"
            width={94}
            height={30}
            className="xl:h-14 xl:w-40"
          />
        </div>
        <ul className="hidden items-center gap-6 xl:flex">
          <li>
            <Link href={"#"} className="text-lg leading-10">
              features
            </Link>
          </li>
          <li>
            <Link href={"#"} className="text-lg leading-10">
              commie
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="min-h-13.75 ml-5 inline-flex items-center  gap-x-3 rounded-std bg-primary pl-7 pr-6"
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
          </li>
        </ul>
      </nav>
    </header>
  );
}
