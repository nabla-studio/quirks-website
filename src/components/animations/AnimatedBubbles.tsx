"use client";
import AnimatedImage from "@/components/animations/AnimatedImage";

const AnimatedBubbles = () => {
  return (
    <div className="relative mt-8 h-56 w-56 max-lg:self-center lg:static lg:h-auto lg:w-auto">
      <AnimatedImage
        src={"/chat-bubble-2.webp"}
        alt="Chat Bubbles Left"
        width={158}
        height={158}
        className="absolute left-0 top-0 lg:-top-28 lg:left-auto lg:right-28 lg:h-[430px] lg:w-[430px]"
        quality={100}
        initial={{
          scale: 0,
          rotate: "-6deg",
        }}
        whileInView={{
          scale: 1,
          rotate: "-6deg",
          transition: {
            type: "spring",
            duration: 1,
            stiffness: 100,
          },
        }}
        viewport={{ once: true }}
      />
      <AnimatedImage
        src={"/chat-bubble-1.webp"}
        alt="Chat Bubbles Right"
        width={140}
        height={140}
        className="absolute right-0 top-[70px] lg:-right-6 lg:h-[340px] lg:w-[340px]"
        quality={85}
        initial={{
          scale: 0,
          rotate: "-6deg",
        }}
        whileInView={{
          scale: 1,
          rotate: "-6deg",
          transition: {
            type: "spring",
            duration: 1,
            delay: 0.25,
            stiffness: 100,
          },
        }}
        viewport={{ once: true }}
      />
    </div>
  );
};

export default AnimatedBubbles;
