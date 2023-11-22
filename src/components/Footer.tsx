import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mb-4 mt-32 flex flex-col px-5 text-white lg:mb-16 lg:mt-40">
      <div className="flex items-start justify-between lg:items-center">
        <Image
          src="/quirks-logo.svg"
          alt="Quirks logo"
          width={46}
          height={41}
          className="lg:h-21.5 lg:w-24"
        />
        <ul className="flex flex-col items-end text-right max-lg:mt-2">
          <li>
            <Image
              src="/quirks-text.svg"
              alt="Quirks text logo"
              width={94}
              height={30}
              className="lg:h-13 lg:w-40"
            />
          </li>
          <li>
            <Link
              href="https://nabla.studio/privacy-policy"
              className="opacity-30 transition-opacity duration-200 hover:opacity-100  lg:hidden"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-18.5 flex items-start justify-between">
        <p className="text-xs opacity-30 lg:text-lg">
          © 2023 nabla benefit company
        </p>
        <ul className="flex items-center gap-13">
          <li>
            <Link
              href="https://nabla.studio/privacy-policy"
              className="opacity-30 transition-opacity duration-200 hover:opacity-100 max-lg:hidden"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
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
                className="lg:ml-2.5"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
