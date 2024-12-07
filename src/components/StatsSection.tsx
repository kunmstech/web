"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "YEARS IN SERVICE",
  },
  {
    value: 30,
    suffix: "+",
    label: "SATISFIED CLIENT",
  },
  {
    value: 2,
    label: "OFFICE BRANCH",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function StatsSection() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="w-full bg-[#F1F5FF] py-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="text-[#002B5B] text-6xl font-bold mb-4">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="text-[#002B5B] text-sm font-medium tracking-wider">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
