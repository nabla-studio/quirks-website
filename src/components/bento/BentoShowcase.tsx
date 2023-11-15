import FrameworkAgnostic from "@/components/bento/FrameworkAgnostic";
import MultiChain from "@/components/bento/MultiChain";
import React from "react";

function BentoShowcase() {
  return (
    <div className="mt-30 flex flex-col gap-5 xl:mt-36 xl:grid xl:grid-cols-5 xl:gap-7">
      <MultiChain />
      <FrameworkAgnostic />
    </div>
  );
}

export default BentoShowcase;
