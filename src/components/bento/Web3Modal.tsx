import Image from "next/image";
import { ModalBanners } from "@/components/animations/ModalBanners";

function Web3Modal() {
  return (
    <div className="bento-card-base relative flex min-h-[372px] flex-col gap-4.5 overflow-hidden min-[750px]:flex-row lg:col-span-5">
      <div className="z-20 flex flex-col justify-between">
        <div className="ml-10 mt-10 flex items-center gap-5">
          <h3 className="text-lg leading-none lg:text-bento-h">Web3 Modal</h3>
          <span className="inline-flex h-8.75 items-center justify-center rounded-std bg-primary px-5">
            <p className="text-sm">ALPHA</p>
          </span>
        </div>
        <div className="relative ml-9 flex items-center gap-2.5 max-lg:mt-9 lg:mb-4">
          <Image
            src={"/icons/wallet-connect-logo.svg"}
            alt="Wallet Connect Logo"
            width={31}
            height={31}
            className="h-16 w-16"
          />
          <small className="text-xs lg:text-base">Wallet Connect Support</small>
        </div>
      </div>
      <div className="z-10">
        <ModalBanners />
      </div>
      <div className="absolute -left-40 top-2.5 h-56 w-56 rounded-full bg-primary blur-[100px] filter" />
      <div className="absolute -bottom-36 -right-80 h-88 w-88 rounded-full bg-primary blur-[100px] filter lg:-bottom-33 lg:left-[325px]" />
    </div>
  );
}

export default Web3Modal;
