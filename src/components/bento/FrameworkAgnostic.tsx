"use client";

import { FRAMEWORKS } from "@/utils/globals";
import { m } from "framer-motion";
import Image from "next/image";

function FrameworkAgnostic() {
  return (
    <div className="bento-card-base flex flex-col gap-8 px-11 py-9 lg:col-span-3 lg:col-start-3 lg:gap-18.5 lg:px-10 lg:py-10">
      <h3 className="text-lg lg:text-bento-h">Framework Agnostic</h3>
      <div className="grid w-full grid-cols-3 justify-items-center gap-3 self-center lg:gap-6.5">
        {FRAMEWORKS.map(({ name, uri, color }) => (
          <div key={name} className="group relative">
            <div
              style={{
                borderColor: color,
              }}
              className={`flex h-[77px] w-[77px] items-center justify-center rounded-full border-2 grayscale filter group-hover:grayscale-0 lg:h-[167px] lg:w-[167px]`}
            >
              <Image
                src={uri}
                alt={`${name} icon`}
                width={37}
                height={31}
                className="grayscale filter transition-all duration-300 group-hover:grayscale-0 lg:h-16 lg:w-18.5"
              />
            </div>
            <div
              style={{
                backgroundImage: "radial-gradient(transparent, #121212)",
              }}
              className="absolute inset-0 rounded-full opacity-100 transition-opacity duration-300 group-hover:opacity-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrameworkAgnostic;
