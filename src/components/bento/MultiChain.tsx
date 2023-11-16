import { SHOWCASE_ICONS } from "@/utils/globals";
import Image from "next/image";
import React from "react";

function MultiChain() {
  return (
    <div className="bento-card-base relative min-h-[334px] overflow-hidden pl-8 pt-8 xl:col-span-2 xl:col-start-1 xl:pl-10 xl:pt-10">
      <h3 className="text-lg xl:text-bento-h">Multi Chain</h3>
      <div className="absolute -bottom-8 left-0 right-0 flex flex-col gap-2 xl:-bottom-9">
        {SHOWCASE_ICONS.map((row, i) => (
          <div
            key={`row ${i}`}
            className={`${
              (i + 1) % 2 === 0
                ? "animate-marquee-sm-reverse xl:animate-marquee-reverse"
                : "animate-marquee-sm xl:animate-marquee"
            } xl:row-width-xl max-xl:row-width relative flex items-center gap-5 transition-transform`}
          >
            {row.map(({ name, uri }) => (
              <Image
                key={`${name} icon`}
                src={uri}
                alt={name}
                width={74}
                height={74}
                className="xl:h-chain-icon xl:w-chain-icon"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultiChain;
