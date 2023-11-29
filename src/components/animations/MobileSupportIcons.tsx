"use client";

import {
  mobileSupportPopContainer,
  mobileSupportPopItem,
} from "@/utils/animations";
import { MOBILE_SUPPORT_ITEMS } from "@/utils/globals";
import { m } from "framer-motion";
import Image from "next/image";

function MobileSupportIcons() {
  return (
    <div className="absolute bottom-0 right-0 flex flex-col gap-4 max-lg:mx-auto max-lg:max-w-sm max-lg:sm:left-0 lg:-bottom-13 lg:right-20">
      <m.div
        className={`grid grid-cols-2 gap-4.5`}
        variants={mobileSupportPopContainer}
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        {MOBILE_SUPPORT_ITEMS.map(({ id, name, uri }) => (
          <m.div
            key={name}
            className={`inline-flex h-33 w-33 items-center justify-center overflow-hidden rounded-10 lg:h-43 lg:w-43.75 ${
              id === 1 ? "bg-primary" : "bg-mobile-support-inactive"
            }`}
            variants={mobileSupportPopItem(id)}
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
      </m.div>
    </div>
  );
}

export default MobileSupportIcons;
