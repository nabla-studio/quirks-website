import { useInView, useAnimationControls } from "motion/react";
import { useRef, useEffect } from "react";

export const useFadeIn = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimationControls();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};
