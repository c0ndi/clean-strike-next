'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const imagesCount = 8;

export function BeforeAfterHeroAnimation() {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev >= imagesCount ? 1 : prev + 1));
    }, 3000); // increased to give each image time to breathe
    return () => clearInterval(interval);
  }, []);

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const transition = { duration: 1.2, ease: 'easeInOut' };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={imageIndex}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="absolute inset-0 w-full h-full flex"
        >
          <motion.div className="w-1/2 h-full relative">
            <Image
              src={`/images/compare/before${imageIndex}.webp`}
              alt="Before"
              fill
              className="object-cover"
              priority={imageIndex === 1}
            />
          </motion.div>
          <motion.div className="w-1/2 h-full relative">
            <Image
              src={`/images/compare/after${imageIndex}.webp`}
              alt="After"
              fill
              className="object-cover"
              priority={imageIndex === 1}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
