"use client";

import { useChain, useConnect } from "@quirks/react";
import { m } from "framer-motion";
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
      className="group m-auto mx-5 flex w-full max-w-[calc(100%-40px)] flex-col rounded-3xl border-2 border-solid border-white/50 px-5 py-4 lg:mx-auto lg:max-w-address lg:flex-row lg:items-center lg:rounded-[200px] lg:px-11"
      onClick={copyToClipboard}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <span className="flex w-full items-center text-xs font-semibold leading-10 opacity-50 lg:mr-13 lg:w-auto lg:text-base">
        ADDRESS
        <Image
          src={"/icons/copy.svg"}
          alt="Copy"
          width={20}
          height={20}
          className="ml-auto opacity-50 transition-all duration-300 group-hover:opacity-100 lg:hidden"
        />
      </span>
      <span className="max-w-full overflow-hidden text-ellipsis text-lg font-semibold leading-10 lg:mr-auto">
        {address}
      </span>
      <Image
        src={"/icons/copy.svg"}
        alt="Copy"
        width={24}
        height={24}
        className="ml-5 hidden opacity-50 transition-all duration-300 group-hover:opacity-100 lg:block"
      />
    </m.button>
  ) : (
    false
  );
}

export default AddressButton;
