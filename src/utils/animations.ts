import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

export const mobileSupportPopContainer: Variants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 2,
      delayChildren: 0.18,
      staggerChildren: 0.18,
      stiffness: 75,
    },
  },
};

export const mobileSupportPopItem = (id: number): Variants => ({
  hidden: {
    scale: 0,
    x: id > 2 ? 40 : 0,
  },
  visible: {
    scale: 1,
  },
});
