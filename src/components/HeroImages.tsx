'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroImages() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background Images */}
      <div className="relative w-full h-full">
        {/* AI/Technology Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute top-0 right-0 w-1/3 h-1/2"
        >
          <Image
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
            alt="AI and technology"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>

        {/* Books Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-0 left-0 w-1/4 h-1/3"
        >
          <Image
            src="https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg"
            alt="Books and literature"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>

        {/* Circuit Board Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/5 h-1/4"
        >
          <Image
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
            alt="Circuit board and electronics"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>

        {/* Code/Programming Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-1/4 right-1/4 w-1/6 h-1/5"
        >
          <Image
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
            alt="Programming and code"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
} 