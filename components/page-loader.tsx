"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import logo from '@/public/images/logo.png';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(1); // 1: grow, 2: shrink, 3: fade out

  useEffect(() => {
    // Phase 1: Logo grows (default at start)
    const growTimer = setTimeout(() => {
      setAnimationPhase(2); // Move to shrink phase
    }, 1000);

    // Phase 2: Logo shrinks
    const shrinkTimer = setTimeout(() => {
      setAnimationPhase(3); // Move to fade out phase
    }, 2000);

    // Phase 3: Background fades out
    const fadeOutTimer = setTimeout(() => {
      setIsLoading(false); // Component unmounts
    }, 3000);

    return () => {
      clearTimeout(growTimer);
      clearTimeout(shrinkTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  // Logo variants for different animation phases
  const logoVariants = {
    // Start small and transparent
    initial: { opacity: 0, scale: 0.8 },

    // Phase 1: Grow to full size with full opacity
    grow: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    },

    // Phase 2: Shrink back down with decreasing opacity
    shrink: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 1, ease: "easeIn" }
    }
  };

  // Background variants
  const backgroundVariants = {
    visible: { opacity: 1 },
    fadeOut: {
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 }
    }
  };

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="pageLoader"
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{ backgroundColor: '#121210' }}
        initial="visible"
        animate={animationPhase === 3 ? "fadeOut" : "visible"}
        variants={backgroundVariants}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-52 h-52"
          variants={logoVariants}
          initial="initial"
          animate={animationPhase === 1 ? "grow" : "shrink"}
        >
          <Image src={logo} alt="Logo" fill style={{ objectFit: 'contain' }} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageLoader;