"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { useFadeIn } from "@/utils/useFadeIn";
import { fadeIn } from "@/utils/animations";

interface SectionFadeInProps {
  className?: string;
}

const SectionFadeIn = (props: PropsWithChildren<SectionFadeInProps>) => {
  const { children, ...rest } = props;
  const { controls, ref } = useFadeIn();

  return (
    <motion.section
      ref={ref}
      animate={controls}
      variants={fadeIn}
      initial="hidden"
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export default SectionFadeIn;
