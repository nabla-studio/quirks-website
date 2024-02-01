"use client";

import { useConfig, useConnect } from "@quirks/react";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import type { Wallet } from "@quirks/core";

interface ChainButtonProps {
  wallet: Wallet<unknown>;
  onConnect: () => void;
}

function ChainButton({ wallet, onConnect }: ChainButtonProps) {
  const { connect } = useConnect();

  const onClick = async (name: string) => {
    await connect(name);
    onConnect();
  };

  const wrapperClass =
    "hover:bg-dark-2 rounded-2.5xl group flex w-full items-center bg-transparent px-8 py-6 transition-all duration-300";

  const content = (
    <>
      <Image
        src={wallet.logoLight ?? ""}
        alt={wallet.options.pretty_name}
        width={24}
        height={24}
        unoptimized
        priority
        loading="eager"
        className="object-contain lg:h-10 lg:w-10"
      />

      <span className="ml-5 mr-auto text-lg font-semibold leading-10 lg:ml-11">
        {wallet.options.pretty_name}
      </span>

      {wallet.injected ? (
        <Image
          src={"/icons/arrow-right.svg"}
          alt="Connect"
          width={20}
          height={20}
          className="opacity-30 group-hover:opacity-100 lg:h-6 lg:w-6"
        />
      ) : (
        <Image
          src={"/icons/arrow-up-right.svg"}
          alt="External Link"
          width={20}
          height={20}
          className="opacity-30 group-hover:opacity-100 lg:h-6 lg:w-6"
        />
      )}
    </>
  );

  if (wallet.injected) {
    return (
      <button
        onClick={() => {
          if (wallet.injected) {
            onClick(wallet.options.wallet_name);
          }
        }}
        className={wrapperClass}
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={
        wallet.injected
          ? ""
          : wallet.options.platforms &&
              wallet.options.platforms.length > 0 &&
              wallet.options.platforms[0].install_link
            ? wallet.options.platforms[0].install_link
            : "#"
      }
      target="_blank"
      className={wrapperClass}
    >
      {content}
    </Link>
  );
}

function ConnectButton() {
  const { connected } = useConnect();
  const { wallets } = useConfig();
  const [open, setOpen] = useState(false);

  return (
    <>
      {!connected ? (
        <m.button
          type="button"
          role="button"
          className="my-auto inline-flex min-h-[75px] items-center rounded-std bg-secondary px-10 pb-3.5 pt-5 text-center lg:min-h-[110px] lg:rounded-[200px] lg:px-18.5 lg:pb-8 lg:pt-10"
          onClick={() => setOpen(!open)}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <span className="text-1.1xl lg:text-3.5xl">Connect Wallet</span>
        </m.button>
      ) : (
        false
      )}

      <AnimatePresence>
        {open && !connected && (
          <m.menu
            initial={{
              y: "100%",
              x: "-50%",
            }}
            animate={{
              y: 60,
              transition: {
                type: "spring",
                duration: 1,
                stiffness: 100,
                damping: 14,
              },
            }}
            exit={{
              y: "100%",
              transition: {
                type: "spring",
                duration: 1,
                stiffness: 100,
                damping: 15,
              },
            }}
            className="absolute bottom-0 left-1/2 h-[calc(100%-80px)] w-full rounded-t-3xl bg-dark pt-8 lg:w-auto lg:min-w-chain-menu lg:rounded-t-std lg:pt-14"
          >
            <header className="mb-10 px-6 lg:px-14">
              <h6 className="relative text-center text-xl font-semibold leading-10 lg:text-bento-h">
                Choose Wallet
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src={"/icons/close.svg"}
                    alt="Close"
                    width={20}
                    height={20}
                    className="lg:h-6 lg:w-6"
                  />
                </button>
              </h6>
            </header>
            <ul className="px-6.5">
              {wallets.map((wallet) => (
                <li key={wallet.options.wallet_name}>
                  <ChainButton
                    wallet={wallet}
                    onConnect={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </m.menu>
        )}
      </AnimatePresence>
    </>
  );
}

export default ConnectButton;
