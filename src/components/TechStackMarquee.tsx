"use client";

import React, { Fragment, useState, useRef } from "react";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

export default function TechStackMarquee({
  items,
  className,
  reverse = false,
}: {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  reverse?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const velocityFactor = useRef(1);
  const innerRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);

  const baseSpeed = 50; // pixels per second
  const direction = reverse ? 1 : -1;

  useAnimationFrame((_, delta) => {
    // Initialize position for reverse direction
    if (innerRef.current && !initializedRef.current) {
      if (reverse) {
        x.set(-innerRef.current.scrollWidth / 2);
      }
      initializedRef.current = true;
    }

    // Smooth deceleration / acceleration (ice-sliding effect)
    const targetFactor = isHovered ? 0 : 1.5;
    velocityFactor.current += (targetFactor - velocityFactor.current) * 0.01;

    const moveBy = direction * baseSpeed * (delta / 1000) * velocityFactor.current;
    let newX = x.get() + moveBy;

    // Seamless loop wrapping
    if (innerRef.current) {
      const halfWidth = innerRef.current.scrollWidth / 2;
      if (newX <= -halfWidth) newX += halfWidth;
      else if (newX > 0) newX -= halfWidth;
    }

    x.set(newX);
  });

  return (
    <div
      className={twMerge(
        "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        ref={innerRef}
        className="flex flex-none py-2 gap-6 pr-6"
        style={{ x }}
      >
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {items.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg cursor-default group hover:-translate-y-1.5 hover:bg-white/5 hover:shadow-lg hover:shadow-emerald-300/10 transition-all duration-300"
              >
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  <TechIcon component={item.iconType} />
                </div>
                <span className="font-semibold text-white/80 group-hover:text-white transition-colors">
                  {item.title}
                </span>
              </div>
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
}
