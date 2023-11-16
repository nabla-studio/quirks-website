import { MOBILE_SUPPORT_ITEMS } from "@/utils/globals";
import Image from "next/image";
import React from "react";

function MobileSupport() {
  return (
    <div className="bento-card-base relative min-h-[481px] overflow-hidden xl:col-span-3 xl:col-start-1">
      <div className="ml-11 mt-10 flex flex-col gap-3.5 xl:flex-row xl:items-center">
        <h3 className="text-lg leading-none xl:text-bento-h">Mobile Support</h3>
        <span className="h-8.75 inline-flex items-center justify-center rounded-std bg-primary px-5 max-xl:max-w-[73px]">
          <p className="text-sm">SOON</p>
        </span>
      </div>
      <div className="absolute bottom-0 right-0 flex flex-col gap-4 xl:-bottom-13 xl:right-20">
        {MOBILE_SUPPORT_ITEMS.map((row, i) => (
          <div
            key={`mobile support row ${i}`}
            className={`gap-4.5 flex ${i === 1 && "translate-x-10"}`}
          >
            {row.map(({ name, uri, id }) => (
              <div
                key={name}
                className={`rounded-10 h-33 w-33 xl:h-43 xl:w-43.75 inline-flex items-center justify-center overflow-hidden ${
                  id === 1 ? "bg-primary" : "bg-mobile-support-inactive"
                }`}
              >
                <Image
                  src={uri}
                  alt={name}
                  width={80}
                  height={75}
                  className={`xl:h-26.25 xl:w-26.25 ${
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
