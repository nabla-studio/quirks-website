"use client";

import { QuirksConfig } from "@quirks/react";
import { LazyMotion, domAnimation } from "motion/react";
import type { PropsWithChildren } from "react";
import { getConfig } from "@/config/quirks";

export const Provider = ({
  children,
  quirksInitialState,
}: PropsWithChildren<{ quirksInitialState?: string }>) => {
  return (
    <LazyMotion features={domAnimation}>
      <QuirksConfig store={getConfig(quirksInitialState)}>
        {children}
      </QuirksConfig>
    </LazyMotion>
  );
};
