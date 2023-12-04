import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="w-full max-w-wide-element self-center">
      <nav className="flex flex-col items-center justify-between px-5 pb-10 pt-12 text-white lg:flex-row lg:pb-16 lg:pt-24">
        <div className="flex flex-col items-center gap-x-9 gap-y-5 lg:flex-row">
          <Image
            src={"/quirks-logo.svg"}
            alt="Quirks small logo"
            width={46}
            height={41}
            className="lg:h-21.5 lg:w-24"
          />
          <Image
            src={"/quirks-text.svg"}
            alt="Quirks text logo"
            width={94}
            height={30}
            className="lg:h-14 lg:w-40"
            priority
          />
        </div>
        <ul className="hidden items-center gap-6 lg:flex">
          <li>
            <Link href="#features" className="text-lg leading-10">
              features
            </Link>
          </li>
          <li>
            <Link href="#docs" className="text-lg leading-10">
              docs
            </Link>
          </li>
          <li>
            <Link href="#community" className="text-lg leading-10">
              community
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/nabla-studio/quirks"
              rel="external"
              target="_blank"
              className="text-lg leading-10"
            >
              github
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/sponsors/nabla-studio"
              className="ml-5 inline-flex min-h-13.75 items-center  gap-x-3 rounded-std bg-primary pl-7 pr-6"
              rel="external"
              target="_blank"
            >
              <span className="pb-1.5 pt-2.5 text-lg">Support us</span>
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
