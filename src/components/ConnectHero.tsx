import React from "react";

function ConnectHero() {
  return (
    <div className="relative flex min-h-[551px] flex-col items-center justify-center rounded-std bg-gradient-to-b from-primary to-connect-wallet-b xl:mx-80">
      <button className="inline-flex min-h-[75px] items-center rounded-std bg-secondary px-10 pb-3.5 pt-5 text-center xl:min-h-[110px] xl:rounded-[200px] xl:px-[74px] xl:pb-8 xl:pt-10">
        <p className="text-1.1xl xl:text-3.5xl">Connect Wallet</p>
      </button>
      <p className="absolute bottom-7 px-16 text-center text-xs leading-[18px] opacity-30 xl:text-lg">
        Lorem upsum dolor sit amet consectetuer adipiscit elit.
      </p>
    </div>
  );
}

export default ConnectHero;
