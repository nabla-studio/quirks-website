import CardPop from "@/components/animations/CardPop";
import { WALLET_CARDS } from "@/utils/globals";

function MultiWallet() {
  return (
    <div className="bento-card-base relative min-h-[433px] overflow-hidden pl-10 pt-9 lg:col-span-2 lg:col-start-4">
      <h3 className="text-lg leading-none lg:text-bento-h lg:leading-7">Multi Wallet</h3>
      <div className="relative -bottom-32 left-3 right-0 max-lg:xsm:left-0 max-lg:xsm:mx-auto max-lg:xsm:max-w-xs lg:-bottom-40 lg:left-4 lg:right-0">
        {WALLET_CARDS.map((props) => (
          <CardPop key={props.name} {...props} />
        ))}
      </div>
    </div>
  );
}

export default MultiWallet;
