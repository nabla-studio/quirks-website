import DXFocused from "@/components/bento/DXFocused";
import FrameworkAgnostic from "@/components/bento/FrameworkAgnostic";
import MobileSupport from "@/components/bento/MobileSupport";
import MultiChain from "@/components/bento/MultiChain";
import MultiWallet from "@/components/bento/MultiWallet";
import TinyBundle from "@/components/bento/TinyBundle";
import Web3Modal from "@/components/bento/Web3Modal";

function BentoShowcase() {
  return (
    <section className="mt-30 flex flex-col gap-5 lg:mt-36 lg:grid lg:grid-cols-5 lg:gap-7">
      <MultiChain />
      <FrameworkAgnostic />
      <Web3Modal />
      <MobileSupport />
      <MultiWallet />
      <DXFocused />
      <TinyBundle />
    </section>
  );
}

export default BentoShowcase;
