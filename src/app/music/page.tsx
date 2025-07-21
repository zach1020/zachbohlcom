'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AudioPlayer from '@/components/AudioPlayer';
import { 
  MusicalNoteIcon,
  CalendarIcon,
  TagIcon
} from '@heroicons/react/24/outline';

export default function Music() {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);

  const musicProjects = [
    {
      title: "Neon Dreams",
      description: "An electronic track blending ambient textures with driving beats. Features custom synthesizer patches and intricate drum programming.",
      genre: "Electronic",
      duration: "4:32",
      date: "2024-01",
      tags: ["Ambient", "Electronic", "Synthwave"],
      audioUrl: "/audio/neon-dreams.mp3", // Replace with actual audio file path
      featured: true
    },
    {
      title: "Midnight Groove",
      description: "A jazz-fusion piece exploring complex harmonies and rhythmic patterns. Recorded with live instruments and electronic elements.",
      genre: "Jazz Fusion",
      duration: "6:15",
      date: "2023-12",
      tags: ["Jazz", "Fusion", "Live Instruments"],
      audioUrl: "#",
      featured: true
    },
    {
      title: "Digital Rain",
      description: "A cinematic composition created entirely with digital synthesis. Features evolving soundscapes and atmospheric textures.",
      genre: "Cinematic",
      duration: "5:48",
      date: "2023-11",
      tags: ["Cinematic", "Ambient", "Soundscape"],
      audioUrl: "#",
      featured: false
    },
    {
      title: "Code Symphony",
      description: "Algorithmically generated music using custom software. Explores the intersection of programming and composition.",
      genre: "Algorithmic",
      duration: "3:52",
      date: "2023-10",
      tags: ["Algorithmic", "Experimental", "Code"],
      audioUrl: "#",
      featured: false
    },
    {
      title: "Urban Pulse",
      description: "A hip-hop influenced track with heavy bass and urban rhythms. Features sampled elements and electronic production.",
      genre: "Hip-Hop",
      duration: "4:18",
      date: "2023-09",
      tags: ["Hip-Hop", "Bass", "Urban"],
      audioUrl: "#",
      featured: false
    },
    {
      title: "Ethereal Echoes",
      description: "A minimalist ambient piece focusing on space and texture. Created using granular synthesis and reverb processing.",
      genre: "Ambient",
      duration: "7:24",
      date: "2023-08",
      tags: ["Ambient", "Minimal", "Granular"],
      audioUrl: "#",
      featured: false
    }
  ];

  const handlePlayPause = (trackTitle: string) => {
    if (playingTrack === trackTitle) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackTitle);
    }
  };

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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tracks */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Featured Tracks
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {musicProjects.filter(p => p.featured).map((track, index) => (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center relative">
                    <MusicalNoteIcon className="h-16 w-16 text-purple-400" />
                  </div>
                  <div className="p-4 bg-white/5">
                    <AudioPlayer
                      audioUrl={track.audioUrl}
                      trackTitle={track.title}
                      isPlaying={playingTrack === track.title}
                      onPlayPause={handlePlayPause}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                        {track.genre}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-3">{track.title}</h3>
                    <p className="text-gray-300 mb-4">{track.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {track.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          {track.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <span>{track.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Tracks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              All Tracks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {musicProjects.map((track, index) => (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center relative">
                    <MusicalNoteIcon className="h-12 w-12 text-purple-400" />
                  </div>
                  <div className="p-4 bg-white/5">
                    <AudioPlayer
                      audioUrl={track.audioUrl}
                      trackTitle={track.title}
                      isPlaying={playingTrack === track.title}
                      onPlayPause={handlePlayPause}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                        {track.genre}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{track.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{track.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {track.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full flex items-center gap-1"
                        >
                          <TagIcon className="h-3 w-3" />
                          {tag}
                        </span>
                      ))}
                      {track.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-600/20 text-gray-300 text-xs rounded-full">
                          +{track.tags.length - 2} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between text-gray-400 text-xs">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-3 w-3" />
                          {track.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <span>{track.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 