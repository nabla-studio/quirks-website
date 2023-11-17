"use client";

import { motion } from "framer-motion";

interface CardPopProps {
  name: string;
  uri: string;
  cn: string;
}

function CardPop({ name, uri, cn }: CardPopProps) {
  return (
    <motion.img
      initial={{ y: 0 }}
      whileHover={{ y: -20 }}
      alt={`${name} wallet card`}
      src={uri}
      width={297}
      height={418}
      className={"absolute " + cn}
    />
  );
}

export default CardPop;
