import DXFocused from "@/components/bento/DXFocused";
import FrameworkAgnostic from "@/components/bento/FrameworkAgnostic";
import MobileSupport from "@/components/bento/MobileSupport";
import MultiChain from "@/components/bento/MultiChain";
import MultiWallet from "@/components/bento/MultiWallet";
import TinyBundle from "@/components/bento/TinyBundle";
import Web3Modal from "@/components/bento/Web3Modal";
import React from "react";

function BentoShowcase() {
  return (
    <section className="mt-30 flex flex-col gap-5 xl:mt-36 xl:grid xl:grid-cols-5 xl:gap-7">
      <MultiChain />
      <FrameworkAgnostic />
      <Web3Modal />
      <MobileSupport />
      <MultiWallet />
      <DXFocused />
      <TinyBundle />
    </section>
  );
}

export default BentoShowcase;
