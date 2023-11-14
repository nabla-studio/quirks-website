import MultiChain from "@/components/bento/MultiChain";
import React from "react";

function BentoShowcase() {
  return (
    <div className="mt-30 flex flex-col gap-5 xl:mx-page-elements xl:mt-36 xl:grid xl:max-w-[1000px] xl:grid-cols-5 xl:gap-7">
      <MultiChain />
    </div>
  );
}

export default BentoShowcase;
