"use client";

import {
  chain as osmosis,
  assets as osmosisAssetList,
} from "chain-registry/mainnet/osmosis";
import {
  chain as cosmoshub,
  assets as cosmoshubAssetList,
} from "chain-registry/mainnet/cosmoshub";
import { QuirksConfig } from "@quirks/react";
import {
  cosmostationExtension,
  keplrExtension,
  leapExtension,
} from "@quirks/wallets";
import { LazyMotion, domAnimation } from "motion/react";
import type { PropsWithChildren } from "react";
import { generateConfig, initialStateWithCookie } from "@quirks/ssr";

const config = generateConfig({
  wallets: [keplrExtension, leapExtension, cosmostationExtension],
  chains: [osmosis, cosmoshub],
  assetsLists: [osmosisAssetList, cosmoshubAssetList],
});

export const Provider = ({
  children,
  quirksInitialState,
}: PropsWithChildren<{ quirksInitialState?: string }>) => {
  const quirksConfigWithCookie = initialStateWithCookie(
    config,
    quirksInitialState,
  );

  return (
    <LazyMotion features={domAnimation}>
      <QuirksConfig config={quirksConfigWithCookie}>{children}</QuirksConfig>
    </LazyMotion>
  );
};
