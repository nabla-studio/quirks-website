import Image from "next/image";
import React from "react";

function Web3Modal() {
  return (
    <div className="relative flex min-h-[372px] flex-col gap-[18px] overflow-hidden rounded-std border border-zinc-300 border-opacity-30 xl:col-span-5 xl:flex-row">
      <div className="z-10 flex flex-col justify-between">
        <div className="ml-10 mt-10 flex items-center gap-5">
          <p className="xl:text-bento-h text-lg leading-none">Web3 Modal</p>
          <div className="inline-flex h-[35px] items-center justify-center rounded-std bg-primary px-5">
            <p className="text-sm">ALPHA</p>
          </div>
        </div>
        <div className="ml-9 flex items-center gap-2.5 max-xl:mt-9 xl:mb-4">
          <Image
            src={"/icons/wallet-connect-logo.svg"}
            alt="Wallet Connect Logo"
            width={31}
            height={31}
            className="h-16 w-16"
          />
          <p className="text-xs xl:text-base">Wallet Connect Support</p>
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
          className="right-13 absolute top-8 max-xl:hidden"
        />
      </div>
      <div className="absolute -left-40 top-2.5 h-[230px] w-[230px] rounded-full bg-primary blur-[100px] filter" />
      <div className="absolute -bottom-36 -right-80 h-[353px] w-[353px] rounded-full bg-primary blur-[100px] filter xl:-bottom-[136px] xl:left-[325px]" />
    </div>
  );
}

export default Web3Modal;
