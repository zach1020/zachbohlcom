'use client';

import { motion } from 'framer-motion';
import { PlayIcon, PauseIcon, ForwardIcon, BackwardIcon } from '@heroicons/react/24/outline';
import { useMusic } from '@/contexts/MusicContext';

export default function GlobalMusicPlayer() {
  const { isPlaying, togglePlayPause, currentTrack, playlist, nextTrack, previousTrack } = useMusic();

  const getTrackName = (filename: string) => {
    let name = filename.replace('.mp3', '').replace(/_/g, ' ');
    
    // Special handling for specific track names
    if (name.includes('Baplicity Pitched Up Paired Back')) {
      name = 'Baplicity';
    }
    
    return name;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 backdrop-blur-sm p-2 flex items-center gap-2">
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
          <span className="text-lg font-bold">
            {getTrackName(playlist[currentTrack])}
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
    </motion.div>
  );
}
