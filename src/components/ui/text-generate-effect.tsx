"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils"; // Ensure this matches your utility function path

export const TextGenerateEffect = ({
  words,
  className = "",
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration]);

  const renderWords = () =>
    wordsArray.map((word, idx) => (
      <motion.span
        key={`${word}-${idx}`}
        className="dark:text-white text-white  text-5xl opacity-0"
        style={{
          filter: filter ? "blur(10px)" : "none",
        }}
      >
        {word}{" "}
      </motion.span>
    ));

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          <motion.div ref={scope}>{renderWords()}</motion.div>
        </div>
      </div>
    </div>
  );
};
