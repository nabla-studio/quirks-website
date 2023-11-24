"use client";

import { useConnect, useQuirks } from "@quirks/react";
import { AnimatePresence, m } from "framer-motion";
import Image from "next/image";

function DisconnectButton() {
  const { connected, disconnect } = useConnect();
  const store = useQuirks();
  const wallet = store.use.wallet ? store.use.wallet() : undefined;

  return (
    <AnimatePresence>
      {connected && (
        <m.button
          className="bg-dark/30 absolute left-1/2 top-0 flex gap-4 rounded-full px-8 py-4 text-base font-semibold"
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
          <Image
            src={wallet?.logoLight ?? ""}
            alt={wallet?.options.prettyName ?? ""}
            width={24}
            height={24}
            unoptimized
            className="object-contain"
            priority
          />
          <span>disconnect</span>
        </m.button>
      )}
    </AnimatePresence>
  );
}

export default DisconnectButton;
