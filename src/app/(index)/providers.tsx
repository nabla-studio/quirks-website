"use client";

import {
  cosmoshub,
  cosmoshubAssetList,
  osmosis,
  osmosisAssetList,
} from "@nabla-studio/chain-registry";
import { QuirksConfig } from "@quirks/react";
import {
  cosmostationExtension,
  keplrExtension,
  leapExtension,
} from "@quirks/wallets";
import { LazyMotion, domAnimation } from "framer-motion";
import type { PropsWithChildren } from "react";
import { generateConfig } from "@quirks/next";

const config = generateConfig({
  wallets: [keplrExtension, leapExtension, cosmostationExtension],
  chains: [osmosis, cosmoshub],
  assetsLists: [osmosisAssetList, cosmoshubAssetList],
});

export const Provider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <LazyMotion features={domAnimation}>
      <QuirksConfig config={config}>{children}</QuirksConfig>
    </LazyMotion>
  );
};
