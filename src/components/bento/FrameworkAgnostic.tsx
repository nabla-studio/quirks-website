import { FRAMEWORKS } from "@/utils/globals";
import Image from "next/image";

function FrameworkAgnostic() {
  return (
    <div className="bento-card-base flex flex-col gap-8 px-11 py-9 xl:col-span-3 xl:col-start-3 xl:gap-18.5 xl:px-10 xl:py-10">
      <h3 className="text-lg xl:text-bento-h">Framework Agnostic</h3>
      <div className="flex gap-3 self-center xl:-translate-x-4 xl:gap-6.5">
        {FRAMEWORKS.map(({ name, uri }) => (
          <Image
            key={name}
            src={uri}
            alt={`${name} icon`}
            width={77}
            height={77}
            className="xl:h-framework-icon xl:w-framework-icon"
          />
        ))}
      </div>
    </div>
  );
}

export default FrameworkAgnostic;
