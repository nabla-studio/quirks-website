import MobileSupportIcons from "@/components/animations/MobileSupportIcons";

function MobileSupport() {
  return (
    <div className="bento-card-base relative min-h-[481px] overflow-hidden lg:col-span-3 lg:col-start-1">
      <div className="ml-11 mt-10 flex flex-col gap-3.5 lg:flex-row lg:items-center">
        <h3 className="text-lg leading-none lg:text-bento-h">Mobile Support</h3>
      </div>
      <MobileSupportIcons />
    </div>
  );
}

export default MobileSupport;
