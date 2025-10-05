'use client';

import { motion } from 'framer-motion';
import { useMusic } from '@/contexts/MusicContext';

export default function DiscoParty() {
  const { isPlaying } = useMusic();

  if (!isPlaying) return null;

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

  return (
    <div className="fixed inset-0 pointer-events-none z-30">
      {/* Tracking disco lights */}
      {Array.from({ length: 6 }, (_, i) => {
        // Use percentage-based positioning for better screen coverage
        const positions = [
          { x: [10, 80, 20, 70, 10], y: [10, 30, 80, 50, 10] }, // Top-left to center
          { x: [90, 20, 80, 30, 90], y: [20, 70, 10, 80, 20] }, // Top-right to center  
          { x: [50, 10, 90, 60, 50], y: [30, 80, 20, 70, 30] }, // Center to edges
          { x: [20, 70, 10, 80, 20], y: [70, 20, 90, 40, 70] }, // Bottom-left to center
          { x: [80, 30, 70, 10, 80], y: [80, 40, 20, 90, 80] }, // Bottom-right to center
          { x: [60, 40, 20, 90, 60], y: [50, 10, 70, 30, 50] }, // Center to all corners
        ];
        
        return (
          <motion.div
            key={i}
            className="absolute w-80 h-80 rounded-full opacity-25"
            style={{
              background: `radial-gradient(circle, ${colors[i]} 0%, transparent 70%)`,
              willChange: "transform",
            }}
            animate={{
              x: positions[i].x.map(percent => `${percent}%`),
              y: positions[i].y.map(percent => `${percent}%`),
            }}
            transition={{
              duration: 20 + i * 4,
              repeat: Infinity,
              ease: "linear",
              type: "tween"
            }}
          />
        );
      })}
    </div>
  );
}
