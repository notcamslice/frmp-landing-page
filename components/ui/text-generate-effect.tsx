"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function TextGenerateEffect({ words }: { words: string }) {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= words.length) {
        setDisplayedText(words.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [words]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-lg md:text-xl text-gray-300"
    >
      {displayedText}
      {displayedText.length < words.length && (
        <span className="animate-pulse">|</span>
      )}
    </motion.div>
  );
}