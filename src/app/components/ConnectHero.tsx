import React from "react";

function ConnectHero() {
  return (
    <div className="xl:mx-80 relative bg-gradient-to-b from-primary to-connect-wallet-b min-h-[551px] flex flex-col justify-center items-center rounded-std">
      <button className="min-h-[75px] xl:min-h-[110px] xl:rounded-[200px] rounded-std bg-secondary px-10 xl:px-[74px] xl:pt-10 xl:pb-8 pt-5 pb-3.5 inline-flex items-center text-center">
        <p className="text-1.1xl xl:text-3.5xl">Connect Wallet</p>
      </button>
      <p className="text-xs xl:text-lg px-16 text-center opacity-30 leading-[18px] absolute bottom-7">
        Lorem upsum dolor sit amet consectetuer adipiscit elit.
      </p>
    </div>
  );
}

export default ConnectHero;
