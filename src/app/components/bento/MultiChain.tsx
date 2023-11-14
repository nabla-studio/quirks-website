import Image from "next/image";
import React from "react";

const showcaseIcons = [
  [
    {
      uri: "/showcase/celestia.png",
      name: "celestia",
    },
    {
      uri: "/showcase/osmosis.png",
      name: "osmosis",
    },
    {
      uri: "/showcase/mars.png",
      name: "mars",
    },
    {
      uri: "/showcase/atom.png",
      name: "atom",
    },
  ],
  [
    {
      uri: "/showcase/desmos.png",
      name: "desmos",
    },
    {
      uri: "/showcase/evmos.png",
      name: "evmos",
    },
    {
      uri: "/showcase/dydx.png",
      name: "dydx",
    },
    {
      uri: "/showcase/cre.png",
      name: "cre",
    },
  ],
  [
    {
      uri: "/showcase/akt.png",
      name: "akt",
    },
    {
      uri: "/showcase/kuji.png",
      name: "kuji",
    },
    {
      uri: "/showcase/neutron.png",
      name: "neutron",
    },
    {
      uri: "/showcase/juno.png",
      name: "juno",
    },
  ],
];

function MultiChain() {
  return (
    <div className="relative min-h-[334px] overflow-hidden rounded-std border-2 border-zinc-300 border-opacity-30 pl-8 pt-8 xl:col-span-2 xl:col-start-1">
      <p className="text-lg">Multi Chain</p>
      <div className="absolute -bottom-8 left-0 right-0 flex flex-col gap-2 xl:-bottom-9">
        {showcaseIcons.map((row, i) => (
          <div key={`row ${i}`} className="flex items-center gap-5">
            {row.map(({ name, uri }) => (
              <Image
                key={`${name} icon`}
                src={uri}
                alt={name}
                width={74}
                height={74}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MultiChain;
