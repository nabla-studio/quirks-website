import Image from "next/image";
import React from "react";

function DXFocused() {
  return (
    <div className="bento-card-base flex flex-col justify-between gap-16 px-9 py-9 xl:col-span-2 xl:col-start-1 xl:gap-[75px] xl:px-10 xl:py-10">
      <p className="xl:text-bento-h text-lg leading-none">DX focused</p>
      <Image
        src={"/brackets.png"}
        alt="Brackets"
        width={264}
        height={167}
        className="h-[183px] w-[290px] self-center"
      />
    </div>
  );
}

export default DXFocused;
