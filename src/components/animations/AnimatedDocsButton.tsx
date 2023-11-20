"use client";

import AnimatedImage from "@/components/animations/AnimatedImage";
import {
  useAnimationControls,
  useInView,
  m,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const clickAnimation: Variants = {
  hidle: {
    opacity: 1,
    scale: 0,
    translate: "0 -50%",
  },
  visible: {
    opacity: 0,
    scale: 3,
    translate: "0 -50%",
  },
};

const clickCursorAnimation: Variants = {
  hidle: {
    scale: 1,
  },
  visible: {
    scale: [1, 0.9, 1],
  },
};

const AnimatedDocsButton = () => {
  const docsButton = useRef<HTMLAnchorElement | null>(null);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const inView = useInView(docsButton, { once: true });
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const slide: Variants = useMemo(() => {
    const boundingRect = docsButton.current?.getBoundingClientRect();

    const left =
      (docsButton.current?.offsetLeft ?? 0) + (boundingRect?.width ?? 0) / 2;
    const top =
      (docsButton.current?.offsetTop ?? 0) + (boundingRect?.height ?? 0) / 2;

    return {
      hidle: { position: "absolute" },
      visible: {
        position: "absolute",
        left,
        top,
      },
    };
  }, [docsButton.current]);

  const onAnimationComplete = useCallback(() => {
    setAnimationCompleted(true);
  }, []);

  return (
    <div
      className={
        animationCompleted ? "relative mt-36 lg:mt-12" : "mt-36 lg:mt-12"
      }
    >
      <Link
        href="https://github.com/nabla-studio/quirks"
        className="inline-flex min-h-13.75 max-w-[185px] items-center gap-x-3 rounded-std bg-primary pl-7 pr-6"
        rel="external"
        target="_blank"
        ref={(ref) => (docsButton.current = ref)}
      >
        <span className="pb-1.5 pt-2.5 text-lg">View Docs</span>
        <Image
          src={"/icons/arrow-up-right.svg"}
          alt="Arrow Up Right icon"
          width={24}
          height={24}
          className="py-4"
        />
      </Link>
      <m.div
        className={`pointer-events-none absolute bottom-20 right-0 lg:bottom-14 ${
          animationCompleted
            ? "!left-0 !top-0 translate-x-[91px] translate-y-[28px]"
            : ""
        }`}
        animate={controls}
        variants={slide}
        transition={{
          delay: 0.5,
          duration: 250,
          type: "spring",
          damping: 20,
          bounce: 0,
          stiffness: 100,
          restDelta: 0.001,
        }}
        onAnimationComplete={onAnimationComplete}
        initial="hidle"
      >
        <AnimatedImage
          src={"/click-effect.svg"}
          alt="Click Effect"
          width={60}
          height={60}
          animate={controls}
          variants={clickAnimation}
          initial="hidle"
          transition={{
            delay: 1.45,
            duration: 250,
            type: "spring",
            damping: 50,
            bounce: 0,
            stiffness: 250,
            restDelta: 0.001,
          }}
          className="absolute left-0 top-0 will-change-transform"
        />
        <AnimatedImage
          src={"/cursor-pointer.png"}
          alt="Pointer"
          width={91}
          height={91}
          animate={controls}
          variants={clickCursorAnimation}
          initial="hidle"
          transition={{
            delay: 1.3,
            duration: 0.25,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          }}
          className="relative z-10 lg:h-33 lg:w-33"
        />
      </m.div>
    </div>
  );
};

export default AnimatedDocsButton;
