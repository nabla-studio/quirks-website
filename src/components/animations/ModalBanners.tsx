"use client";

import { m } from "framer-motion";

export function ModalBanners() {
  return (
    <>
      <m.img
        src={"/hero-banners/m.png"}
        alt="mobile banner"
        width={400}
        height={280}
        initial={{
          y: 30,
        }}
        whileInView={{
          y: 0,
          transition: {
            type: "spring",
            duration: 1,
            delay: 0.2,
            stiffness: 100,
          },
        }}
        viewport={{ once: true }}
        className="absolute -bottom-12 max-xsm:left-10 xsm:-bottom-20 xsm:right-10 lg:right-6 lg:hidden"
      />
      <m.img
        src={"/hero-banners/d.png"}
        alt="desktop banner"
        width={578}
        height={400}
        initial={{
          y: 40,
        }}
        whileInView={{
          y: 0,
          transition: {
            type: "spring",
            duration: 1,
            delay: 0.2,
            stiffness: 100,
          },
        }}
        viewport={{ once: true }}
        className="absolute right-13 top-8 max-lg:hidden"
      />
    </>
  );
}
