import { FRAMEWORKS } from "@/utils/globals";
import Image from "next/image";

function FrameworkAgnostic() {
  return (
    <div className="bento-card-base flex flex-col gap-8 px-11 py-9 lg:col-span-3 lg:col-start-3 lg:gap-18.5 lg:px-10 lg:py-10">
      <h3 className="text-lg lg:text-bento-h">Framework Agnostic</h3>
      <div className="grid w-full grid-cols-3 justify-items-center gap-3 self-center lg:gap-6.5">
        {FRAMEWORKS.map(({ name, uri }) => (
          <Image
            key={name}
            src={uri}
            alt={`${name} icon`}
            width={77}
            height={77}
            className="h-auto w-full max-w-[180px]"
          />
        ))}
      </div>
    </div>
  );
}

export default FrameworkAgnostic;
