"use client";

import { m } from "framer-motion";
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
      <m.img
        initial={{ y: 0 }}
        whileHover={{ y: -20 }}
        alt={`${name} wallet card`}
        src={uri}
        width={297}
        height={418}
        className={className}
      />
    </Link>
  );
}

export default CardPop;
