"use client";

import { MOBILE_SUPPORT_ITEMS } from "@/utils/globals";
import { m } from "framer-motion";
import Image from "next/image";

function MobileSupportIcons() {
  return (
    <div className="absolute bottom-0 right-0 flex flex-col gap-4 max-lg:mx-auto max-lg:max-w-sm max-lg:xsm:left-0 lg:-bottom-13 lg:right-20">
      {MOBILE_SUPPORT_ITEMS.map((row, i) => (
        <div
          key={`mobile support row ${i}`}
          className={`flex gap-4.5 ${i === 1 && "translate-x-10"}`}
        >
          {row.map(({ name, uri, id }, index) => (
            <m.div
              key={name}
              className={`inline-flex h-33 w-33 items-center justify-center overflow-hidden rounded-10 lg:h-43 lg:w-43.75 ${
                id === 1 ? "bg-primary" : "bg-mobile-support-inactive"
              }`}
              initial={{
                scale: 0,
              }}
              whileInView={{
                scale: 1,
                transition: {
                  type: "spring",
                  duration: 2,
                  delay: index * 0.2,
                  stiffness: 75,
                },
              }}
              viewport={{ once: true }}
            >
              <Image
                src={uri}
                alt={name}
                width={80}
                height={75}
                className={`lg:h-26.25 lg:w-26.25 ${
                  id !== 1 && "blur-md filter"
                }`}
              />
            </m.div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default MobileSupportIcons;
