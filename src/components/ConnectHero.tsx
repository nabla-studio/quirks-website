"use client";

import AddressButton from "@/components/AddressButton";
import ConnectButton from "@/components/ConnectButton";
import DisconnectButton from "@/components/DisconnectButton";
import { useConnect } from "@quirks/react";
import { getAddress, sign, broadcast } from "@quirks/store";
import { AnimatePresence, m } from "framer-motion";
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

  console.log(msg);

  const txRaw = await sign("osmosis", [msg]);

  const res = await broadcast("osmosis", txRaw);

  console.log(res);
};

function ConnectHero() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { connected } = useConnect();

  const sendTx = async () => {
    try {
      setLoading(true);
      setSuccess(false);

      await send();

      setSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative flex min-h-[551px] w-full flex-col items-center self-center overflow-hidden rounded-std bg-gradient-to-b from-primary to-connect-wallet-b">
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
              Test the component sending yourself
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
              className="absolute bottom-0 left-1/2 flex min-h-[75px] w-full max-w-[calc(100%-40px)] items-center justify-center rounded-[200px] bg-secondary px-5 text-center lg:w-auto lg:max-w-none  lg:px-18.5"
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
              disabled={loading}
            >
              <span className="text-lg font-semibold lg:text-2xl">
                {!loading
                  ? !success
                    ? "Test It"
                    : "Tx Success, Try Again"
                  : "Loading..."}
              </span>
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
