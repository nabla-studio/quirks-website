import {
  chain as osmosis,
  assets as osmosisAssetList,
} from "chain-registry/mainnet/osmosis";
import {
  chain as cosmoshub,
  assets as cosmoshubAssetList,
} from "chain-registry/mainnet/cosmoshub";
import {
  cosmostationExtension,
  keplrExtension,
  leapExtension,
} from "@quirks/wallets";
import { generateConfig } from "@quirks/ssr";
import { QuirksConfigStore } from "@quirks/store";

let store: QuirksConfigStore;

const getConfig = (cookie: string | null | undefined) => {
  if (store) {
    return store;
  }

  store = generateConfig(
    {
      wallets: [keplrExtension, leapExtension, cosmostationExtension],
      chains: [osmosis, cosmoshub],
      assetsLists: [osmosisAssetList, cosmoshubAssetList],
    },
    undefined,
    cookie,
  );

  return store;
};

export { store, getConfig };
