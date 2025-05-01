import {
  useMotionValue,
  useTransform,
  useInView,
  animate,
  ValueAnimationTransition,
} from "motion/react";
import { useRef, useEffect } from "react";

export const useCounterAnimation = (
  from: number,
  to: number,
  options?: ValueAnimationTransition<number>,
) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: 1, ease: "circOut", ...options });
    }
  }, [count, inView, options, to]);

  return { rounded, ref };
};
