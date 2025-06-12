import React from "react";
import { motion } from "framer-motion";

interface Challenge {
  icon: string;
  problem: string;
  solution: string;
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const ChallengeCard: React.FC<{ item: Challenge; index: number }> = ({
  item,
  index,
}) => (
  <motion.article
    custom={index}
    variants={cardVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 1 }}
    whileHover={{ y: -8 }}
    className="group relative w-full max-w-md rounded-[32px] bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
  >
    {/* Decorative gradient border */}
    <div className="absolute inset-0 rounded-[32px] p-[1px] " />

    {/* Icon with gradient background */}
    <div className="relative mb-8">
      <div className="absolute -top-2 -left-2 h-16 w-16 rounded-2xl bg-gradient-to-br from-primary-500/10 to-primary-500/5" />
      <div className="relative z-10 text-5xl">{item.icon}</div>
    </div>

    {/* Problem Section */}
    <div className="mb-6">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-red-500">
          The Problem
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-red-100 to-transparent" />
      </div>
      <h3 className="text-lg text-gray-900 leading-snug">
        {item.problem}
      </h3>
    </div>

    {/* Solution Section */}
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-green-600">
          Our Solution
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-green-100 to-transparent" />
      </div>
      <h3 className="text-lg text-gray-900 leading-snug">
        {item.solution}
      </h3>
    </div>

    {/* Hover effect highlight */}
    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-primary-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </motion.article>
);

export default ChallengeCard;