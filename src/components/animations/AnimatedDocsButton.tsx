"use client";

import AnimatedImage from "@/components/animations/AnimatedImage";
import { useAnimationControls, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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
        animationCompleted ? "relative mt-36 xl:mt-12" : "mt-36 xl:mt-12"
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
      <AnimatedImage
        src={"/cursor-pointer.png"}
        alt="Pointer"
        width={91}
        height={91}
        className={`pointer-events-none absolute bottom-20 right-0 xl:bottom-14 xl:h-33 xl:w-33 ${
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
      />
    </div>
  );
};

export default AnimatedDocsButton;
