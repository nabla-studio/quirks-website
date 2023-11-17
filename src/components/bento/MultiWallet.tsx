import CardPop from "@/components/animations/CardPop";
import { WALLET_CARDS } from "@/utils/globals";

function MultiWallet() {
  return (
    <div className="bento-card-base relative min-h-[433px] overflow-hidden pl-10 pt-9 xl:col-span-2 xl:col-start-4">
      <h3 className="text-lg leading-none xl:text-bento-h">Multi Wallet</h3>
      <div className="max-xl:xsm:left-0 max-xl:xsm:mx-auto max-xl:xsm:max-w-xs relative -bottom-32 left-3 right-0 xl:-bottom-40 xl:left-4 xl:right-0">
        {WALLET_CARDS.map((props) => (
          <CardPop key={props.name} {...props} />
        ))}
      </div>
    </div>
  );
}

export default MultiWallet;
