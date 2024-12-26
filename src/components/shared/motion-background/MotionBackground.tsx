'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface MotionBackgroundProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
}

const MotionBackground: React.FC<MotionBackgroundProps> = ({ src, alt, children }) => {
  return (
    <div className="relative w-full h-[calc(100vh/2)] overflow-hidden">
      {/* Motion for the Image */}
      <motion.div
        initial={{ y: '-100%' }} // Start from above
        animate={{ y: '0%' }} // End at its original position
        transition={{ duration: 1, ease: 'easeOut' }} // Animation duration and easing
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </motion.div>
      {/* Optional children content */}
      {children && <div className="absolute inset-0">{children}</div>}
    </div>
  );
};

export default MotionBackground;
