"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import logo from '@/public/images/logo.png';

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [animationPhase, setAnimationPhase] = useState(1);

  useEffect(() => {
    const growTimer = setTimeout(() => {
      setAnimationPhase(2);
    }, 1000);

    const shrinkTimer = setTimeout(() => {
      setAnimationPhase(3);
    }, 2000);

    const fadeOutTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(growTimer);
      clearTimeout(shrinkTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  const logoVariants = {
    initial: { opacity: 0, scale: 0.8 },

    grow: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" }
    },

    shrink: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 1, ease: "easeIn" }
    }
  };

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