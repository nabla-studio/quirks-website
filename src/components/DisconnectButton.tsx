"use client";

import { useConnect, useQuirks } from "@quirks/react";
import { AnimatePresence, m } from "motion/react";
import Image from "next/image";

function DisconnectButton() {
  const { connected, disconnect } = useConnect();
  const store = useQuirks();
  const wallet = store.use.wallet ? store.use.wallet() : undefined;

  return (
    <AnimatePresence>
      {connected && (
        <m.button
          className="absolute left-1/2 top-0 flex items-center justify-center gap-4 rounded-full bg-dark/30 px-8 py-4 text-base font-semibold"
          onClick={disconnect}
          initial={{
            y: "-100%",
            x: "-50%",
            opacity: 0,
          }}
          animate={{
            y: 44,
            opacity: 1,
            transition: {
              type: "spring",
              duration: 1,
              stiffness: 100,
              damping: 14,
            },
          }}
          exit={{
            y: "-100%",
            opacity: 0,
            transition: {
              type: "spring",
              duration: 1,
              stiffness: 100,
              damping: 15,
            },
          }}
        >
          {wallet && (
            <Image
              src={wallet?.logoLight ?? ""}
              alt={wallet?.options.pretty_name ?? ""}
              width={24}
              height={24}
              unoptimized
              className="object-contain"
              priority
              loading="eager"
            />
          )}
          <span>disconnect</span>
        </m.button>
      )}
    </AnimatePresence>
  );
}

export default DisconnectButton;
