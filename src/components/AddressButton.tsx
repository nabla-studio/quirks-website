"use client";

import { useChain, useConnect } from "@quirks/react";
import { AnimatePresence, m } from "framer-motion";
import Image from "next/image";

function AddressButton() {
  const { connected } = useConnect();
  const { address } = useChain("osmosis");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address ?? "");
  };

  return connected ? (
    <m.button
      type="button"
      className="max-w-address group m-auto flex w-full items-center rounded-[200px] border-2 border-solid border-white/50 px-11 py-4"
      onClick={copyToClipboard}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <span className="mr-13 text-base font-semibold leading-10 opacity-50">
        ADDRESS
      </span>
      <span className="mr-auto text-lg font-semibold leading-10">
        {address}
      </span>
      <Image
        src={"/icons/copy.svg"}
        alt="Copy"
        width={24}
        height={24}
        className="ml-5 opacity-50 transition-all duration-300 group-hover:opacity-100"
      />
    </m.button>
  ) : (
    false
  );
}

export default AddressButton;
