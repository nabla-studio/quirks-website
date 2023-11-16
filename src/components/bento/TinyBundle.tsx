import React from "react";

function TinyBundle() {
  return (
    <div className="bento-card-base flex flex-col px-10 pb-8 pt-10 xl:col-span-3 xl:col-start-3">
      <h3 className="text-lg leading-none xl:text-bento-h">Tiny Bundle</h3>
      <div className="mt-30 flex flex-col xl:mt-14 xl:flex-row xl:items-center xl:gap-x-[60px]">
        <div className="flex items-baseline gap-4 xl:translate-y-12">
          <p className="text-[180px] leading-[48px] text-primary">7</p>
          <p className="text-[80px]">kb</p>
        </div>
        <div className="flex flex-col xl:text-center">
          <p className="text-[90px] text-primary">87%</p>
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
