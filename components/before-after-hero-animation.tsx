'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const variants = {
  enter: () => ({ opacity: 0 }),
  center: { zIndex: 1, opacity: 1 },
  exit: () => ({ zIndex: 0, opacity: 0 }),
};

const imagesCount = 8;

export function BeforeAfterHeroAnimation() {
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prev) => (prev >= imagesCount ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false} custom={1}>
        <motion.div
          key={imageIndex}
          custom={1}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 0.7 },
          }}
          className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
          <div className="w-1/2 h-full relative">
            <Image
              src={`/images/compare/before${imageIndex}.webp`}
              alt="Before"
              fill
              className="object-cover"
              priority={imageIndex === 1}
            />
          </div>
          <div className="w-1/2 h-full relative">
            <Image
              src={`/images/compare/after${imageIndex}.webp`}
              alt="After"
              fill
              className="object-cover"
              priority={imageIndex === 1}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
