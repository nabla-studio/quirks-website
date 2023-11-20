"use client";

import { PropsWithChildren } from "react";
import { m } from "framer-motion";
import { useFadeIn } from "@/utils/useFadeIn";
import { fadeIn } from "@/utils/animations";

interface SectionFadeInProps {
  className?: string;
  id?: string;
}

const SectionFadeIn = (props: PropsWithChildren<SectionFadeInProps>) => {
  const { children, ...rest } = props;
  const { controls, ref } = useFadeIn();

  return (
    <m.section
      ref={ref}
      animate={controls}
      variants={fadeIn}
      initial="hidden"
      {...rest}
    >
      {children}
    </m.section>
  );
};

export default SectionFadeIn;
