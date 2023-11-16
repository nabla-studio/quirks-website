import { MOBILE_SUPPORT_ITEMS } from "@/utils/globals";
import Image from "next/image";
import React from "react";

function MobileSupport() {
  return (
    <div className="bento-card-base relative min-h-[481px] overflow-hidden xl:col-span-3 xl:col-start-1">
      <div className="ml-11 mt-10 flex flex-col gap-3.5 xl:flex-row xl:items-center">
        <h3 className="text-lg leading-none xl:text-bento-h">Mobile Support</h3>
        <span className="inline-flex h-[35px] items-center justify-center rounded-std bg-primary px-5 max-xl:max-w-[73px]">
          <p className="text-sm">SOON</p>
        </span>
      </div>
      <div className="absolute bottom-0 right-0 flex flex-col gap-[15px] xl:-bottom-13 xl:right-20">
        {MOBILE_SUPPORT_ITEMS.map((row, i) => (
          <div
            key={`mobile support row ${i}`}
            className={`flex gap-[18px] ${i === 1 && "translate-x-10"}`}
          >
            {row.map(({ name, uri, id }) => (
              <div
                key={name}
                className={`inline-flex h-[132px] w-[132px] items-center justify-center overflow-hidden rounded-[40px] xl:h-[172px] xl:w-[175px] ${
                  id === 1 ? "bg-primary" : "bg-[#262626]"
                }`}
              >
                <Image
                  src={uri}
                  alt={name}
                  width={80}
                  height={75}
                  className={`xl:h-[105px] xl:w-[105px] ${
                    id !== 1 && "blur-md filter"
                  }`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MobileSupport;
