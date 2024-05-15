"use client";

import { useCounterAnimation } from "@/utils/useCounterAnimation";
import { m } from "framer-motion";
import Link from "next/link";

function TinyBundle() {
  const { ref: kbRef, rounded: kbValue } = useCounterAnimation(0, 3, {
    duration: 1.5,
  });
  const { ref: bundleSizeRef, rounded: budleSize } = useCounterAnimation(
    0,
    93,
    { duration: 2.5 },
  );

  return (
    <div className="bento-card-base flex flex-col px-10 pb-8 pt-10 lg:col-span-3 lg:col-start-3">
      <h3 className="text-lg leading-none lg:text-bento-h">Tiny Bundle</h3>
      <div className="mt-30 flex flex-col max-lg:self-center lg:mt-14 lg:flex-row lg:items-center lg:justify-end lg:gap-x-[60px]">
        <div className="relative flex items-baseline gap-4 lg:translate-y-12">
          <m.p
            ref={kbRef}
            className="text-perc-big leading-12 text-primary lg:absolute lg:right-28 lg:top-3"
          >
            {kbValue}
          </m.p>
          <p className="text-perc-unit">KB</p>
        </div>
        <div className="flex flex-col lg:text-center">
          <div className="flex">
            <m.p ref={bundleSizeRef} className="text-perc-half text-primary">
              {budleSize}
            </m.p>
            <span className="text-perc-half text-primary">%</span>
          </div>
          <p className="text-1.1xl">Less than Cosmoskit *</p>
        </div>
      </div>
      <p className="mt-5 text-xs opacity-30 max-lg:self-center lg:text-lg">
        * Bundlephobia compare{" "}
        <Link
          href="https://bundlephobia.com/package/@quirks/react@0.3.10"
          target="_blank"
          rel="external"
          className="underline"
        >
          Quirks
        </Link>{" "}
        vs{" "}
        <Link
          href="https://bundlephobia.com/package/@cosmos-kit/react-lite@2.5.9"
          target="_blank"
          rel="external"
          className="underline"
        >
          Cosmos Kit
        </Link>
      </p>
    </div>
  );
}

export default TinyBundle;
