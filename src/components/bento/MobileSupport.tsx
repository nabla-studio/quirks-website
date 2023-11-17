import { MOBILE_SUPPORT_ITEMS } from "@/utils/globals";
import Image from "next/image";

function MobileSupport() {
  return (
    <div className="bento-card-base relative min-h-[481px] overflow-hidden xl:col-span-3 xl:col-start-1">
      <div className="ml-11 mt-10 flex flex-col gap-3.5 xl:flex-row xl:items-center">
        <h3 className="text-lg leading-none xl:text-bento-h">Mobile Support</h3>
        <span className="inline-flex h-8.75 items-center justify-center rounded-std bg-primary px-5 max-xl:max-w-[73px]">
          <p className="text-sm">SOON</p>
        </span>
      </div>
      <div className="absolute bottom-0 right-0 flex flex-col gap-4 max-xl:mx-auto max-xl:max-w-sm max-xl:sm:left-0 xl:-bottom-13 xl:right-20">
        {MOBILE_SUPPORT_ITEMS.map((row, i) => (
          <div
            key={`mobile support row ${i}`}
            className={`flex gap-4.5 ${i === 1 && "translate-x-10"}`}
          >
            {row.map(({ name, uri, id }) => (
              <div
                key={name}
                className={`inline-flex h-33 w-33 items-center justify-center overflow-hidden rounded-10 xl:h-43 xl:w-43.75 ${
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
