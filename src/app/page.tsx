'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { 
  CodeBracketIcon, 
  MusicalNoteIcon, 
  ArrowRightIcon,
  EnvelopeIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import FeaturedProjects from '@/components/FeaturedProjects';
import GitHubContributions from '@/components/GitHubContributions';
import AtomModel from '@/components/AtomModel';
import RotatingShape from '@/components/RotatingShape';
import DiscoParty from '@/components/DiscoParty';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isRainingNotes, setIsRainingNotes] = useState(false);
  const [isRainingCode, setIsRainingCode] = useState(false);
  const [isRainingBlog, setIsRainingBlog] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  React.useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);


  const startNoteRain = () => {
    setIsRainingNotes(true);
  };

  const stopNoteRain = () => {
    setIsRainingNotes(false);
  };

  const startCodeRain = () => {
    setIsRainingCode(true);
  };

  const stopCodeRain = () => {
    setIsRainingCode(false);
  };

  const startBlogRain = () => {
    setIsRainingBlog(true);
  };

  const stopBlogRain = () => {
    setIsRainingBlog(false);
  };

  const recentPosts = [
    {
      title: "From Quantum Math to Synth Knobs: A Strange Journey Through Brains, Qubits, and Sound",
      excerpt: "This week I took a wandering road trip across technology: starting with large language model optimizations, detouring through quantum algorithms, and somehow arriving at reverse-engineering Serum presets.",
      date: "2025-01-20",
      slug: "quantum-math-synth-knobs"
    },
    {
      title: "Revisiting The Brothers Karamazov at 30",
      excerpt: "Ten years after first reading Dostoevsky's masterpiece at age 20, I'm diving back into the dark corners of the human spirit. What did I understand then? What will I understand now?",
      date: "2025-07-23",
      slug: "revisiting-brothers-karamazov"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <AtomModel />
      <DiscoParty />
      
      
      {/* Musical Note Rain Effect */}
      {isRainingNotes && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 50 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-80"
              initial={{
                x: Math.random() * windowSize.width,
                y: -100,
                rotate: Math.random() * 360,
                scale: 0.5 + Math.random() * 1.5,
              }}
              animate={{
                y: windowSize.height + 100,
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            >
              {['🎵', '🎶', '🎼', '🎹', '🎸', '🎺', '🎻', '🥁'][Math.floor(Math.random() * 8)]}
            </motion.div>
          ))}
        </div>
      )}

      {/* Code Rain Effect */}
      {isRainingCode && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 50 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-80"
              initial={{
                x: Math.random() * windowSize.width,
                y: -100,
                rotate: Math.random() * 360,
                scale: 0.5 + Math.random() * 1.5,
              }}
              animate={{
                y: windowSize.height + 100,
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            >
              {['💻', '⚡', '🔧', '🚀', '⚙️', '🎯', '💡', '🔥'][Math.floor(Math.random() * 8)]}
            </motion.div>
          ))}
        </div>
      )}

      {/* Blog Rain Effect */}
      {isRainingBlog && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 50 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl opacity-80"
              initial={{
                x: Math.random() * windowSize.width,
                y: -100,
                rotate: Math.random() * 360,
                scale: 0.5 + Math.random() * 1.5,
              }}
              animate={{
                y: windowSize.height + 100,
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            >
              {['📝', '📚', '✍️', '📖', '📰', '📄', '✏️', '📋'][Math.floor(Math.random() * 8)]}
            </motion.div>
          ))}
        </div>
      )}
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I&apos;m <span className="text-purple-400 hover:text-purple-300 hover:drop-shadow-[0_0_20px_rgba(139,92,246,0.8)] hover:scale-110 transition-all duration-300 cursor-default inline-block">Zach</span>
            </h1>
            
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              I&apos;m a programming generalist and music producer passionate about exploring diverse
              technologies from embedded systems to AI programming, web development to low-level programming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/portfolio"
                  onMouseEnter={startCodeRain}
                  onMouseLeave={stopCodeRain}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                >
                  <CodeBracketIcon className="h-5 w-5" />
                  View My Work
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/blog"
                  onMouseEnter={startBlogRain}
                  onMouseLeave={stopBlogRain}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                >
                  <DocumentTextIcon className="h-5 w-5" />
                  Read My Blog
                </Link>
              </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/music"
                      onMouseEnter={startNoteRain}
                      onMouseLeave={stopNoteRain}
                      className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
                    >
                      <MusicalNoteIcon className="h-5 w-5" />
                      Listen to Music
                    </Link>
                  </motion.div>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://github.com/zach1020"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors font-semibold"
              >
                GitHub
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/zachary-bohl-2092581ab/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors font-semibold"
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="mailto:bohl.zachary@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <EnvelopeIcon className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-300 text-lg">Exploring diverse programming domains from embedded to AI</p>
          </motion.div>

          <FeaturedProjects />
        </div>
      </section>

      {/* GitHub Contributions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Real GitHub Activity</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              A live snapshot of my recent GitHub contributions pulled straight from my profile.
            </p>
          </motion.div>
          <GitHubContributions />
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Recent Blog Posts</h2>
            <p className="text-gray-300 text-lg">Thoughts on programming, music, and everything in between</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  {/* 3D Rotating Shape */}
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <RotatingShape 
                      shape={
                        index === 0 ? 'star' : 
                        index === 1 ? 'cube' : 
                        'sphere'
                      }
                      shouldRotate={hoveredCard === index}
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <span className="text-purple-400 text-sm font-medium flex items-center gap-1">
                      Read More
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              href="/blog"
              className="bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              View All Posts
            </Link>
          </motion.div>
        </div>
      </section>


    </div>
  );
}
