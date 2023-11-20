import { MOBILE_SUPPORT_ITEMS } from "@/utils/globals";
import Image from "next/image";

function MobileSupport() {
  return (
    <div className="bento-card-base relative min-h-[481px] overflow-hidden lg:col-span-3 lg:col-start-1">
      <div className="ml-11 mt-10 flex flex-col gap-3.5 lg:flex-row lg:items-center">
        <h3 className="text-lg leading-none lg:text-bento-h">Mobile Support</h3>
        <span className="inline-flex h-8.75 items-center justify-center rounded-std bg-primary px-5 max-lg:max-w-[73px]">
          <p className="text-sm">SOON</p>
        </span>
      </div>
      <div className="absolute bottom-0 right-0 flex flex-col gap-4 max-lg:mx-auto max-lg:max-w-sm max-lg:xsm:left-0 lg:-bottom-13 lg:right-20">
        {MOBILE_SUPPORT_ITEMS.map((row, i) => (
          <div
            key={`mobile support row ${i}`}
            className={`flex gap-4.5 ${i === 1 && "translate-x-10"}`}
          >
            {row.map(({ name, uri, id }) => (
              <div
                key={name}
                className={`inline-flex h-33 w-33 items-center justify-center overflow-hidden rounded-10 lg:h-43 lg:w-43.75 ${
                  id === 1 ? "bg-primary" : "bg-mobile-support-inactive"
                }`}
              >
                <Image
                  src={uri}
                  alt={name}
                  width={80}
                  height={75}
                  className={`lg:h-26.25 lg:w-26.25 ${
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
