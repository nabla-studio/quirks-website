"use client";

import { useCounterAnimation } from "@/utils/useCounterAnimation";
import { motion } from "framer-motion";
import Link from "next/link";

function TinyBundle() {
  const { ref: kbRef, rounded: kbValue } = useCounterAnimation(0, 2, {
    duration: 0.5,
  });
  const { ref: bundleSizeRef, rounded: budleSize } = useCounterAnimation(
    0,
    86,
    { duration: 0.5 },
  );

  return (
    <div className="bento-card-base flex flex-col px-10 pb-8 pt-10 xl:col-span-3 xl:col-start-3">
      <h3 className="text-lg leading-none xl:text-bento-h">Tiny Bundle</h3>
      <div className="mt-30 flex flex-col max-xl:self-center xl:mt-14 xl:flex-row xl:items-center xl:justify-end xl:gap-x-[60px]">
        <div className="relative flex items-baseline gap-4 xl:translate-y-12">
          <motion.p
            ref={kbRef}
            className="text-perc-big leading-12 text-primary xl:absolute xl:right-28 xl:top-3"
          >
            {kbValue}
          </motion.p>
          <p className="text-perc-unit">KB</p>
        </div>
        <div className="flex flex-col xl:text-center">
          <div className="flex">
            <motion.p
              ref={bundleSizeRef}
              className="text-perc-half text-primary"
            >
              {budleSize}
            </motion.p>
            <span className="text-perc-half text-primary">%</span>
          </div>
          <p className="text-1.1xl">Less than Cosmoskit *</p>
        </div>
      </div>
      <p className="mt-5 text-xs opacity-30 max-xl:self-center xl:text-lg">
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
