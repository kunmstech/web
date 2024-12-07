"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useSpring, useTransform } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
}

export function AnimatedCounter({ value, suffix = "" }: CounterProps) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  const springConfig = {
    damping: 30,
    stiffness: 200,
  };

  const count = useSpring(0, springConfig);

  useEffect(() => {
    if (inView && !hasAnimated) {
      count.set(value);
      setHasAnimated(true);
    }
  }, [inView, value, count, hasAnimated]);

  const rounded = useTransform(count, (latest: any) => Math.round(latest));

  return (
    <motion.span ref={ref} className="tabular-nums">
      {rounded.get()}
      {suffix}
    </motion.span>
  );
}
