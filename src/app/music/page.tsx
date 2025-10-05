'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { 
  MusicalNoteIcon
} from '@heroicons/react/24/outline';

export default function Music() {

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              My <span className="text-purple-400">Music</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Exploring the intersection of technology and creativity through 
              electronic music production and algorithmic composition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://soundcloud.com/capybara-watanabe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                >
                  <MusicalNoteIcon className="h-5 w-5" />
                  Listen on SoundCloud
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://www.mixcloud.com/Capybara_Watanabe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                >
                  <MusicalNoteIcon className="h-5 w-5" />
                  DJ Mixes
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://soundcloud.com/shodaminh-daylight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                >
                  <MusicalNoteIcon className="h-5 w-5" />
                  Unmitigated AI Slop
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
} 