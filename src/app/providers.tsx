'use client';

import {
    cosmoshub,
  cosmoshubAssetList,
  osmosis,
  osmosisAssetList,
} from '@nabla-studio/chain-registry';
import { QuirksConfig, QuirksNextProvider } from '@quirks/react';
import { type Config, ssrPersistOptions } from '@quirks/store';
import {
    cosmostationExtension,
  keplrExtension, leapExtension,
} from '@quirks/wallets';
import { PropsWithChildren } from 'react';

const config: Config = {
  wallets: [keplrExtension, leapExtension, cosmostationExtension],
  chains: [osmosis, cosmoshub],
  assetsLists: [osmosisAssetList, cosmoshubAssetList],
  persistOptions: ssrPersistOptions,
};

export const Provider = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <QuirksConfig config={config}>
      <QuirksNextProvider>{children}</QuirksNextProvider>
    </QuirksConfig>
  );
};
