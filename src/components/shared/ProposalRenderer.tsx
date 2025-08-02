"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// const proposalText = `Hi [Client Name],

// Your brief says it all: you need a site that loads in the blink of an eye, looks flawless on every screen, and can scale from MVP to full-blown web-app without a hiccup. I’ve spent the last four years shipping exactly that—pixel-perfect React/Next.js builds deployed on Vercel with sub-2-second LCP scores and Lighthouse 95-100 across the board.

// My approach
// 1. Turn your Figma file into a Tailwind-first component library in under 48 h.
// 2. Layer in Next.js SSR/ISR so Google loves you and users never wait.
// 3. Sprinkle Framer Motion for tasteful micro-interactions that convert visitors into users.
// 4. Wire up any Node.js/Firebase endpoints and secure them with JWT—all fully typed in TypeScript for future-proof hand-off.
// 5. GitHub Actions + Vercel preview deploys keep you in the loop every commit.

// Recent wins
// • Launched a SaaS landing page that cut bounce rate 38 % and lifted trials 27 % in week one.
// • Built a multi-tenant dashboard that now serves 12 k daily users on the same Tailwind/Next stack.

// Timeline & budget
// I can deliver the first production-ready version in 7 days for a flat $1,450 (or $1,650 if we add full Firestore backend & auth). Both packages include tests, docs, and a 30-day support window.

// Ready to kick off?
// Reply with your Figma link or book a 15-min call here [Calendly] and we’ll lock in the start date tomorrow.

// Looking forward to building something fast and beautiful together,

// — [Your Name]
// React / Next.js Specialist | Vercel-verified deployments`;

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
