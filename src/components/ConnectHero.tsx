function ConnectHero() {
  return (
    <section className="relative flex min-h-[551px] w-full flex-col items-center justify-center self-center rounded-std bg-gradient-to-b from-primary to-connect-wallet-b">
      <button
        type="button"
        role="button"
        className="inline-flex min-h-[75px] items-center rounded-std bg-secondary px-10 pb-3.5 pt-5 text-center lg:min-h-[110px] lg:rounded-[200px] lg:px-18.5 lg:pb-8 lg:pt-10"
      >
        <h1 className="text-1.1xl lg:text-3.5xl">Connect Wallet</h1>
      </button>
      <small className="absolute bottom-7 px-16 text-center text-xs leading-4 opacity-30 lg:text-lg">
        Lorem upsum dolor sit amet consectetuer adipiscit elit.
      </small>
    </section>
  );
}

export default ConnectHero;
