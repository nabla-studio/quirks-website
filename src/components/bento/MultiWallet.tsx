import { WALLET_CARDS } from "@/utils/globals";
import Image from "next/image";

function MultiWallet() {
  return (
    <div className="bento-card-base relative min-h-[433px] overflow-hidden pl-10 pt-9 xl:col-span-2 xl:col-start-4">
      <h3 className="text-lg leading-none xl:text-bento-h">Multi Wallet</h3>
      <div className="relative -bottom-32 left-3 right-0 xl:-bottom-40 xl:left-4 xl:right-0">
        {WALLET_CARDS.map(({ name, uri, cn }) => (
          <Image
            key={name}
            alt={`${name} wallet card`}
            src={uri}
            width={297}
            height={418}
            className={"absolute " + cn}
          />
        ))}
      </div>
    </div>
  );
}

export default MultiWallet;
