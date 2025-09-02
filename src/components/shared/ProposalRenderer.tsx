"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProposalRenderer({
  proposalText,
}: {
  proposalText: string;
}) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const lines = proposalText.split("\n");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedLines((prev) => [...prev, lines[i]]);
      i++;
      if (i >= lines.length) clearInterval(interval);
    }, 80); // adjust typing speed here
    return () => clearInterval(interval);
  }, [proposalText]);

  if (!proposalText || proposalText.length <= 0) return null;

  return (
    <div className="w-full mx-auto p-2 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 rounded-2xl dark:border-zinc-800">
      {displayedLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, translateY: 5 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.2, delay: index * 0.03 }}
          className="mb-2 leading-relaxed whitespace-pre-wrap"
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
}
