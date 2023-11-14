"use client";

import { useConfig, useConnect } from "@quirks/react";

const ConnectBtn = () => {
  const { wallets } = useConfig();
  const { connect, disconnect, connected } = useConnect();

  if (connected) {
    return <button onClick={disconnect}>Disconnect</button>;
  }

  return wallets.map((wallet) => (
    <div key={wallet.options.name}>
      <button
        onClick={async () => {
          await connect(wallet.options.name);
        }}
      >
        <img
          src={wallet.options.logoUrls?.light?.svg}
          alt={wallet.options.prettyName}
          height="48px"
          width="48px"
        />
      </button>

      {!wallet.injected ? (
        <a
          href={
            wallet.options.downloads && wallet.options.downloads.length > 0
              ? wallet.options.downloads[0].link
              : "#"
          }
          target="_blank"
        >
          Install
        </a>
      ) : null}
    </div>
  ));
};

export default ConnectBtn;
