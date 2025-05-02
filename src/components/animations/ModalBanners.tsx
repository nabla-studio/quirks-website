"use client";

import AnimatedImage from "@/components/animations/AnimatedImage";
import { m } from "motion/react";

export function ModalBanners() {
  return (
    <m.div className="absolute -bottom-20 -right-24 flex items-start gap-5 lg:-bottom-14 lg:right-13 lg:items-center lg:gap-7">
      <AnimatedImage
        src={"/hero-banners/web3-modal-chain-list.webp"}
        alt="Web3 Modal Chain List"
        className="h-auto lg:w-[271px]"
        width={190}
        height={224}
        initial={{
          y: 40,
        }}
        whileInView={{
          y: 0,
          transition: {
            type: "spring",
            duration: 2,
            stiffness: 100,
          },
        }}
        viewport={{ once: true }}
      />
      <AnimatedImage
        src={"/hero-banners/wallet-connect-qr-code.webp"}
        alt="Wallet Connect QR Code"
        className="h-auto lg:w-[271px]"
        width={190}
        height={278}
        initial={{
          y: 20,
        }}
        whileInView={{
          y: 0,
          transition: {
            type: "spring",
            duration: 2,
            delay: 0.5,
            stiffness: 100,
          },
        }}
        viewport={{ once: true }}
      />
    </m.div>
  );
}
