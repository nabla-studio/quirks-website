"use client";

import { m } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface CardPopProps {
  name: string;
  uri: string;
  className: string;
  websiteURL: string;
}

function CardPop({ name, uri, className, websiteURL }: CardPopProps) {
  return (
    <Link href={websiteURL} target="_blank">
      <m.div
        initial={{ y: 0 }}
        whileHover={{ y: -20 }}
        className={
          className +
          ` flex items-start justify-center rounded-std px-13 ${
            name === "keplr" ? "pt-8" : "pt-5"
          }`
        }
      >
        <Image
          alt={`${name} wallet logo`}
          src={uri}
          width={187}
          height={57}
          className="h-auto w-full"
        />
      </m.div>
    </Link>
  );
}

export default CardPop;
