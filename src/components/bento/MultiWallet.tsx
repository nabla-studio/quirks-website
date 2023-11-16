import Image from "next/image";
import React from "react";

function MultiWallet() {
  return (
    <div className="bento-card-base relative min-h-[433px] overflow-hidden pl-10 pt-9 xl:col-span-2 xl:col-start-4">
      <h3 className="text-lg leading-none xl:text-bento-h">Multi Wallet</h3>
      <Image
        src={"/wallet/wallet.png"}
        alt="Wallets"
        width={296}
        height={418}
        className="absolute -bottom-32 right-4 xl:-bottom-40 xl:right-8 xl:h-[464px] xl:w-[329px]"
      />
    </div>
  );
}

export default MultiWallet;
