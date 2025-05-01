"use client";

import { FRAMEWORKS } from "@/utils/globals";
import { m, useInView } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

function FrameworkAgnostic() {
  const group = useRef<HTMLDivElement | null>(null);

  const inView = useInView(group, { once: true });

  return (
    <div className="bento-card-base flex flex-col gap-8 px-11 py-9 lg:col-span-3 lg:col-start-3 lg:gap-18.5 lg:px-10 lg:py-10">
      <h3 className="text-lg lg:text-bento-h">Framework Agnostic</h3>
      <div
        ref={(ref) => {
          group.current = ref;
        }}
        className="grid w-full grid-cols-3 justify-items-center gap-3 self-center lg:gap-6.5"
      >
        {FRAMEWORKS.map(({ name, uri, color }, index) => (
          <div key={name} className="group relative">
            <div
              style={{
                borderColor: color,
              }}
              className={`flex h-[77px] w-[77px] items-center justify-center rounded-full border-2 brightness-[20] filter transition-all duration-200 group-hover:brightness-100 lg:h-[167px] lg:w-[167px]`}
            >
              <Image
                src={uri}
                alt={`${name} icon`}
                width={37}
                height={31}
                className="brightness-[20] filter transition-all duration-200 group-hover:brightness-100 lg:h-16 lg:w-18.5"
              />
            </div>
            <m.div
              style={{
                backgroundImage: "radial-gradient(transparent, #121212)",
                // @ts-ignore
                "--index": index,
              }}
              className={`absolute inset-0 rounded-full transition-all delay-[calc(500ms*var(--index))] duration-[2000ms] ${
                inView ? "bg-[0_77px] lg:bg-[0_167px]" : ""
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrameworkAgnostic;
