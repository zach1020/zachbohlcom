'use client';

import { motion, useDragControls } from 'framer-motion';
import { useState } from 'react';
import { PlayIcon, PauseIcon, ForwardIcon, BackwardIcon } from '@heroicons/react/24/outline';
import { useMusic } from '@/contexts/MusicContext';

export default function GlobalMusicPlayer() {
  const { isPlaying, togglePlayPause, currentTrack, playlist, nextTrack, previousTrack } = useMusic();
  const dragControls = useDragControls();
  const [isDragging, setIsDragging] = useState(false);

  const getTrackName = (filename: string) => {
    const baseName = filename.replace('.mp3', '').replace(/_/g, ' ');
    
    // Special handling for specific track names with emojis
    if (baseName.includes('Rocking the Boat')) {
      return 'Rocking the Boat 🚢';
    } else if (baseName.includes('Baplicity Pitched Up Paired Back')) {
      return 'Baplicity 🥁';
    } else if (baseName.includes('Comeback or Nah')) {
      return 'Comeback or Nah 🎹';
    } else if (baseName.includes('Hoping to Be Found')) {
      return 'Hoping to Be Found 🔍';
    } else if (baseName.includes('Vaguely Discontented')) {
      return 'Vaguely Discontented 😐';
    } else if (baseName.includes('Twilight Chops')) {
      return 'Twilight Chops 💜';
    }
    
    return baseName;
  };

  const getTrackEmoji = (filename: string) => {
    const baseName = filename.replace('.mp3', '').replace(/_/g, ' ');
    
    // Return just the emoji for mobile
    if (baseName.includes('Rocking the Boat')) {
      return '🚢';
    } else if (baseName.includes('Baplicity Pitched Up Paired Back')) {
      return '🥁';
    } else if (baseName.includes('Comeback or Nah')) {
      return '🎹';
    } else if (baseName.includes('Hoping to Be Found')) {
      return '🔍';
    } else if (baseName.includes('Vaguely Discontented')) {
      return '😐';
    } else if (baseName.includes('Twilight Chops')) {
      return '💜';
    }
    
    return '🎵';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
      drag
      dragControls={dragControls}
      dragMomentum={false}
      dragElastic={0}
      whileDrag={{ scale: 1.05 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
    >
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 backdrop-blur-sm hover:scale-105 group relative overflow-hidden">
        {/* Drag Handle - Hidden by default, shown on hover */}
        <div 
          className="cursor-grab active:cursor-grabbing text-white/60 hover:text-white/80 transition-all duration-200 opacity-0 group-hover:opacity-100 absolute -top-1 left-1/2 transform -translate-x-1/2"
          onPointerDown={(e) => dragControls.start(e)}
        >
          <motion.span 
            className="text-2xl block"
            animate={{ rotate: isDragging ? 0 : -90 }}
            transition={{ duration: 0.2 }}
          >
            🤏
          </motion.span>
        </div>
        
        {/* Control Buttons with conditional padding */}
        <div className="p-2 group-hover:pt-6 transition-all duration-200">
          {/* Control Buttons Row */}
          <div className="flex items-center gap-2">
          {/* Previous Track Button */}
          <motion.button
            onClick={previousTrack}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <BackwardIcon className="h-6 w-6" />
          </motion.button>

          {/* Play/Pause Button */}
          <motion.button
            onClick={togglePlayPause}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white p-3 rounded-full hover:bg-white/20 transition-colors flex items-center gap-2"
          >
            {isPlaying ? (
              <PauseIcon className="h-8 w-8" />
            ) : (
              <PlayIcon className="h-8 w-8 ml-1" />
            )}
            {/* Desktop: Show full track name */}
            <span className="text-lg font-bold hidden sm:block">
              {getTrackName(playlist[currentTrack])}
            </span>
            {/* Mobile: Show only emoji */}
            <span className="text-2xl sm:hidden">
              {getTrackEmoji(playlist[currentTrack])}
            </span>
          </motion.button>

          {/* Next Track Button */}
          <motion.button
            onClick={nextTrack}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <ForwardIcon className="h-6 w-6" />
          </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
