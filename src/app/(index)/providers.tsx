"use client";

import {
  cosmoshub,
  cosmoshubAssetList,
  osmosis,
  osmosisAssetList,
} from "@nabla-studio/chain-registry";
import { QuirksConfig, QuirksNextProvider } from "@quirks/react";
import { type Config } from "@quirks/store";
import {
  cosmostationExtension,
  keplrExtension,
  leapExtension,
} from "@quirks/wallets";
import { LazyMotion, domAnimation } from "framer-motion";
import type { PropsWithChildren } from "react";

const config: Config = {
  wallets: [keplrExtension, leapExtension, cosmostationExtension],
  chains: [osmosis, cosmoshub],
  assetsLists: [osmosisAssetList, cosmoshubAssetList],
};

export const Provider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <LazyMotion features={domAnimation}>
      <QuirksNextProvider>
        <QuirksConfig config={config}>{children}</QuirksConfig>
      </QuirksNextProvider>
    </LazyMotion>
  );
};
