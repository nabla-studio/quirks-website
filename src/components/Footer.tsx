import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="mb-4 mt-32 flex flex-col px-5 text-white xl:mb-16 xl:mt-40">
      <div className="flex items-start justify-between xl:items-center">
        <Image
          src={"/quirks-logo.svg"}
          alt="Quirks logo"
          width={46}
          height={41}
          className="xl:h-21.5 xl:w-24"
        />
        <ul className="flex flex-col items-end text-right max-xl:mt-2">
          <Image
            src={"/quirks-text.svg"}
            alt="Quirks text logo"
            width={94}
            height={30}
            className="xl:h-13 xl:w-40"
          />
          <li>
            <Link href={"#"} className="mt-8 opacity-30 xl:hidden">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href={"#"} className="opacity-30 xl:hidden">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-18.5 flex items-start justify-between">
        <p className="text-xs opacity-30 xl:text-lg">
          © 2023 nabla benefit company
        </p>
        <ul className="flex items-center gap-13">
          <li>
            <Link href={"#"} className="opacity-30 max-xl:hidden">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href={"#"} className="opacity-30 max-xl:hidden">
              Privacy Policy
            </Link>
          </li>
          <Image
            src={"/nabla-logo.svg"}
            alt="Nabla logo"
            width={44}
            height={30}
            className="xl:ml-2.5"
          />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
