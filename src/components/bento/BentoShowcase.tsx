import FrameworkAgnostic from "@/components/bento/FrameworkAgnostic";
import MultiChain from "@/components/bento/MultiChain";
import Web3Modal from "@/components/bento/Web3Modal";
import Image from "next/image";
import React from "react";

function BentoShowcase() {
  return (
    <div className="mt-30 flex flex-col gap-5 xl:mt-36 xl:grid xl:grid-cols-5 xl:gap-7">
      <MultiChain />
      <FrameworkAgnostic />
      <Web3Modal />
    </div>
  );
}

export default BentoShowcase;
