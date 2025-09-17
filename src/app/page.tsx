'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { 
  CodeBracketIcon, 
  MusicalNoteIcon, 
  ArrowRightIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import FeaturedProjects from '@/components/FeaturedProjects';
import HeroImages from '@/components/HeroImages';

export default function Home() {

  const recentPosts = [
    {
      title: "Revisiting The Brothers Karamazov at 30",
      excerpt: "Ten years after first reading Dostoevsky's masterpiece at age 20, I'm diving back into the dark corners of the human spirit. What did I understand then? What will I understand now?",
      date: "2025-07-23",
      slug: "revisiting-brothers-karamazov"
    },
    {
      title: "Building AI Models with PyTorch",
      excerpt: "Developing neural networks and understanding deep learning architectures...",
      date: "2024-01-15",
      slug: "ai-models-pytorch"
    },
    {
      title: "Embedded Systems: From Microcontrollers to IoT",
      excerpt: "Developing for resource-constrained environments and real-time systems...",
      date: "2024-01-10",
      slug: "embedded-systems-iot"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
        <HeroImages />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I&apos;m <span className="text-purple-400">Zach</span>
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
                  href="/music"
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
                href="https://twitter.com/Elroy_Muscato"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-white transition-colors font-semibold"
              >
                X
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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

      {/* Recent Blog Posts Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 overflow-hidden"
              >
                {/* Blog Post Image */}
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={
                      index === 0 
                        ? "https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg" // Books for Dostoevsky
                        : index === 1
                        ? "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" // AI development
                        : "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" // Embedded systems
                    }
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1"
                  >
                    Read More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
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
