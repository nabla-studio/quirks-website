"use client";

import { motion } from "framer-motion";

interface CardPopProps {
  name: string;
  uri: string;
  className: string;
}

function CardPop({ name, uri, className }: CardPopProps) {
  return (
    <motion.img
      initial={{ y: 0 }}
      whileHover={{ y: -20 }}
      alt={`${name} wallet card`}
      src={uri}
      width={297}
      height={418}
      className={className}
    />
  );
}

export default CardPop;
