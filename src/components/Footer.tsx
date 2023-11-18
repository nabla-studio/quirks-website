import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mb-4 mt-32 flex flex-col px-5 text-white xl:mb-16 xl:mt-40">
      <div className="flex items-start justify-between xl:items-center">
        <Image
          src="/quirks-logo.svg"
          alt="Quirks logo"
          width={46}
          height={41}
          className="xl:h-21.5 xl:w-24"
        />
        <ul className="flex flex-col items-end text-right max-xl:mt-2">
          <Image
            src="/quirks-text.svg"
            alt="Quirks text logo"
            width={94}
            height={30}
            className="xl:h-13 xl:w-40"
          />
          <li>
            <Link
              href="https://nabla.studio/privacy-policy"
              className="opacity-30 transition-opacity duration-200 hover:opacity-100  xl:hidden"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-18.5 flex items-start justify-between">
        <p className="text-xs opacity-30 xl:text-lg">
          © 2023 nabla benefit company
          <br />
          vat number: 12648270960
        </p>
        <ul className="flex items-center gap-13">
          <li>
            <Link
              href="https://nabla.studio/privacy-policy"
              className="opacity-30 transition-opacity duration-200 hover:opacity-100 max-xl:hidden"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </li>
          <Link
            className="opacity-20 transition-opacity duration-200 hover:opacity-100"
            href="https://nabla.studio/"
            target="_blank"
          >
            <Image
              src={"/nabla-logo.svg"}
              alt="Nabla logo"
              width={44}
              height={30}
              className="xl:ml-2.5"
            />
          </Link>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
