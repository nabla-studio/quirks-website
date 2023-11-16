import Image from "next/image";
import React from "react";

function Web3Modal() {
  return (
    <div className="bento-card-base gap-4.5 relative flex min-h-[372px] flex-col overflow-hidden xl:col-span-5 xl:flex-row">
      <div className="z-10 flex flex-col justify-between">
        <div className="ml-10 mt-10 flex items-center gap-5">
          <h3 className="text-lg leading-none xl:text-bento-h">Web3 Modal</h3>
          <span className="h-8.75 inline-flex items-center justify-center rounded-std bg-primary px-5">
            <p className="text-sm">ALPHA</p>
          </span>
        </div>
        <div className="ml-9 flex items-center gap-2.5 max-xl:mt-9 xl:mb-4">
          <Image
            src={"/icons/wallet-connect-logo.svg"}
            alt="Wallet Connect Logo"
            width={31}
            height={31}
            className="h-16 w-16"
          />
          <small className="text-xs xl:text-base">Wallet Connect Support</small>
        </div>
      </div>
      <div className="z-10">
        <Image
          src={"/hero-banners/m.png"}
          alt="mobile banner"
          width={400}
          height={280}
          className="absolute -bottom-12 left-10 xl:hidden"
        />
        <Image
          src={"/hero-banners/d.png"}
          alt="desktop banner"
          width={578}
          height={400}
          className="absolute right-13 top-8 max-xl:hidden"
        />
      </div>
      <div className="absolute -left-40 top-2.5 h-56 w-56 rounded-full bg-primary blur-[100px] filter" />
      <div className="xl:-bottom-33 h-88 w-88 absolute -bottom-36 -right-80 rounded-full bg-primary blur-[100px] filter xl:left-[325px]" />
    </div>
  );
}

export default Web3Modal;
