"use client";

import AddressButton from "@/components/AddressButton";
import ConnectButton from "@/components/ConnectButton";
import DisconnectButton from "@/components/DisconnectButton";
import { useConnect } from "@quirks/react";
import { getAddress, sign, broadcast } from "@quirks/store";
import { AnimatePresence, m } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const send = async () => {
  const cosmos = (await import("osmojs")).cosmos;
  const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

  const address = getAddress("osmosis");

  const msg = send({
    amount: [
      {
        denom: "uosmo",
        amount: "1",
      },
    ],
    toAddress: address,
    fromAddress: address,
  });

  const txRaw = await sign("osmosis", [msg]);

  const res = await broadcast("osmosis", txRaw);
};

function ConnectHero() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const { connected } = useConnect();

  const sendTx = async () => {
    try {
      setLoading(true);
      setSuccess(false);
      setError(false);

      await send();

      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);

      setTimeout(() => {
        setError(false);
        setSuccess(false);
      }, 3000);
    }
  };

  return (
    <>
      <section className="relative flex min-h-[551px] w-full flex-col items-center self-center overflow-hidden rounded-std bg-linear-to-b from-primary to-connect-wallet-b">
        <ConnectButton />
        <DisconnectButton />
        <AddressButton />

        <AnimatePresence>
          {connected ? (
            <m.p
              className="absolute bottom-36 left-1/2 w-full -translate-x-1/2 text-center text-xs font-semibold lg:w-auto lg:text-2xl lg:leading-9"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 0.3,
              }}
              exit={{
                opacity: 0,
              }}
            >
              Test the component by sending yourself
              <br />
              fractions of a token.
            </m.p>
          ) : (
            false
          )}
        </AnimatePresence>

        <AnimatePresence>
          {connected ? (
            <m.button
              type="button"
              role="button"
              className={`${
                loading || success || error ? "active w-[272px]" : ""
              } ${loading ? "loading" : ""} ${success ? "success" : ""} ${
                error ? "error" : ""
              } group absolute bottom-0 left-1/2 flex min-h-[78px] w-56 items-center justify-center overflow-hidden rounded-[200px] bg-secondary px-6 transition-all duration-300 ease-in-out lg:px-9`}
              initial={{
                y: "100%",
                x: "-50%",
                opacity: 0,
              }}
              animate={{
                y: -34,
                opacity: 1,
                transition: {
                  type: "spring",
                  duration: 1,
                  stiffness: 100,
                  damping: 14,
                },
              }}
              exit={{
                y: "100%",
                opacity: 0,
                transition: {
                  type: "spring",
                  duration: 1,
                  stiffness: 100,
                  damping: 15,
                },
              }}
              onClick={sendTx}
              disabled={loading || success || error}
            >
              <div className="relative flex h-full w-full">
                <span className="relative left-1/2 -translate-x-1/2 text-lg font-semibold leading-10! transition-all duration-300 ease-in-out group-[.active]:left-0 group-[.active]:-translate-x-0 group-[.active]:text-base lg:text-2xl group-[.active]:lg:text-1.1xl">
                  {loading ? "Waiting" : !success && !error ? "Test It" : ""}
                  {success ? "Success" : ""}
                  {error ? "Failed" : ""}
                </span>

                <Image
                  src="/icons/loading.svg"
                  alt="Loading"
                  width={20}
                  height={20}
                  className="absolute right-0 top-2 opacity-0 transition-all duration-300 ease-in-out group-[.loading]:animate-spin group-[.loading]:opacity-100 lg:h-6 lg:w-6"
                />

                <Image
                  src="/icons/success.svg"
                  alt="Success"
                  width={20}
                  height={20}
                  className="absolute right-0 top-2 opacity-0 transition-all duration-300 ease-in-out group-[.success]:opacity-100 lg:h-6 lg:w-6"
                />
                <Image
                  src="/icons/failed.svg"
                  alt="Fail"
                  width={20}
                  height={20}
                  className="absolute right-0 top-2 opacity-0 transition-all duration-300 ease-in-out group-[.error]:opacity-100 lg:h-6 lg:w-6"
                />
              </div>
            </m.button>
          ) : (
            false
          )}
        </AnimatePresence>
      </section>
      <small className="mt-6 px-16 text-center text-xs leading-4 opacity-30 lg:text-lg">
        Try it yourself, connect and go!
      </small>
    </>
  );
}

export default ConnectHero;
