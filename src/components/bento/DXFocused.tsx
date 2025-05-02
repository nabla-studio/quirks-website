import Image from "next/image";

function DXFocused() {
  return (
    <div className="bento-card-base flex flex-col justify-between gap-16 px-9 py-9 lg:col-span-2 lg:col-start-1 lg:gap-[75px] lg:px-10 lg:py-10">
      <h3 className="text-lg leading-none lg:text-bento-h lg:leading-7">DX focused</h3>
      <Image
        src={"/brackets.png"}
        alt="Brackets"
        width={264}
        height={167}
        className="h-[183px] w-72 self-center"
      />
    </div>
  );
}

export default DXFocused;
