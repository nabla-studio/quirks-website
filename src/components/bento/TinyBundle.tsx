"use client";

import { useCounterAnimation } from "@/utils/useCounterAnimation";
import { motion } from "framer-motion";

function TinyBundle() {
  const { ref: kbRef, rounded: kbValue } = useCounterAnimation(0, 7);
  const { ref: bundleSizeRef, rounded: budleSize } = useCounterAnimation(
    0,
    87,
    { delay: 1 },
  );

  return (
    <div className="bento-card-base flex flex-col px-10 pb-8 pt-10 xl:col-span-3 xl:col-start-3">
      <h3 className="text-lg leading-none xl:text-bento-h">Tiny Bundle</h3>
      <div className="mt-30 flex flex-col xl:mt-14 xl:flex-row xl:items-center xl:justify-end xl:gap-x-[60px]">
        <div className="relative flex items-baseline gap-4 xl:translate-y-12">
          <motion.p
            ref={kbRef}
            className="text-perc-big leading-12 text-primary xl:absolute xl:right-28 xl:top-3"
          >
            {kbValue}
          </motion.p>
          <p className="text-perc-unit">kb</p>
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
      <p className="mt-5 text-xs opacity-30 xl:text-lg">
        * Orem upsum dolor sit amet <br className="xl:hidden" /> consectetuer
        adipiscit elit.
      </p>
    </div>
  );
}

export default TinyBundle;
