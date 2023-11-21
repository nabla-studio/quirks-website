import { SHOWCASE_ICONS } from "@/utils/globals";
import Image from "next/image";
import Link from "next/link";

function MultiChain() {
  return (
    <div className="bento-card-base relative min-h-[334px] overflow-hidden pl-8 pt-8 lg:col-span-2 lg:col-start-1 lg:pl-10 lg:pt-10">
      <h3 className="text-lg lg:text-bento-h">Multi Chain</h3>
      <div className="group absolute -bottom-8 left-0 right-0 flex flex-col gap-2 lg:-bottom-9">
        {SHOWCASE_ICONS.map((row, i) => (
          <div
            key={`row ${i}`}
            className={`${
              (i + 1) % 2 === 0
                ? "animate-marquee-sm-reverse lg:animate-marquee-reverse"
                : "animate-marquee-sm lg:animate-marquee"
            } group-hover:paused-animation lg:row-width-xl max-lg:row-width relative flex items-center gap-5 transition-transform`}
          >
            {row.map(({ name, uri, websiteURL }, i) => (
              <Link
                href={websiteURL}
                target="_blank"
                key={`${name} ${i} icon`}
                className="h-18.5 w-18.5 rounded-full border-8 border-mobile-support-inactive lg:h-chain-icon lg:w-chain-icon"
              >
                <Image
                  src={uri}
                  alt={name}
                  width={74}
                  height={74}
                  className="h-auto w-full"
                />
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultiChain;
