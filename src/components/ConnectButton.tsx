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
  const LinkOrButton = wallet.injected ? "button" : Link;

  const onClick = async (name: string) => {
    await connect(name);
    onConnect();
  };

  return (
    <LinkOrButton
      href={
        wallet.injected
          ? ""
          : wallet.options.downloads && wallet.options.downloads.length > 0
            ? wallet.options.downloads[0].link
            : "#"
      }
      target="_blank"
      className="hover:bg-dark-2 rounded-2.5xl group flex w-full items-center bg-transparent px-8 py-6 transition-all duration-300"
      onClick={() => {
        if (wallet.injected) {
          onClick(wallet.options.name);
        }
      }}
    >
      <Image
        src={wallet.logoLight ?? ""}
        alt={wallet.options.prettyName}
        width={40}
        height={40}
        unoptimized
        priority
        loading="eager"
        className="object-contain"
      />

      <span className="ml-11 mr-auto text-lg font-semibold leading-10">
        {wallet.options.prettyName}
      </span>

      {wallet.injected ? (
        <Image
          src={"/icons/arrow-right.svg"}
          alt="Connect"
          width={24}
          height={24}
          className="opacity-30 group-hover:opacity-100"
        />
      ) : (
        <Image
          src={"/icons/arrow-up-right.svg"}
          alt="External Link"
          width={24}
          height={24}
          className="opacity-30 group-hover:opacity-100"
        />
      )}
    </LinkOrButton>
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
              y: 80,
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
            className="bg-dark min-w-chain-menu absolute bottom-0 left-1/2 h-[calc(100%-80px)] rounded-t-std pt-14"
          >
            <header className="mb-10 px-14">
              <h6 className="relative text-center text-bento-h font-semibold leading-10">
                Choose Wallet
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  type="button"
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src={"/icons/close.svg"}
                    alt="Close"
                    width={24}
                    height={24}
                  />
                </button>
              </h6>
            </header>
            <ul className="px-6.5">
              {wallets.map((wallet) => (
                <li key={wallet.options.name}>
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
