'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { 
  ArrowDownTrayIcon,
  CodeBracketIcon,
  CpuChipIcon,
  SparklesIcon,
  ClockIcon,
  TagIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function Downloads() {
  const downloads = [
    {
      id: 1,
      name: "AI Journal",
      description: "A modern journaling app with AI-powered writing assistance, markdown support, photo uploads with location tagging, and export capabilities.",
      version: "v1.0.0",
      category: "Desktop Application",
      icon: SparklesIcon,
      size: "45.2 MB",
      downloads: 0, // Will be updated with actual download count
      lastUpdated: "2024-09-17",
      platforms: ["macOS (Intel)", "macOS (Apple Silicon)"],
      tags: ["AI", "Journaling", "Markdown", "macOS", "Desktop"],
      downloadUrl: "https://github.com/zach1020/ai-journal/releases/tag/v1.0.0",
      githubUrl: "https://github.com/zach1020/ai-journal"
    }
  ];

  const categories = ["All", "Desktop Application", "AI/Machine Learning", "Embedded Systems", "Creative Coding"];

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
              <span className="text-purple-400">Downloads</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Download my open-source software and tools. From quantum computing simulators 
              to embedded systems frameworks, explore the code that powers my projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Available Software</h2>
            <p className="text-gray-300">Open-source tools and frameworks for developers and researchers</p>
          </motion.div>

          {downloads.length > 0 ? (
            <div className="grid lg:grid-cols-2 gap-8">
              {downloads.map((download, index) => (
                <motion.div
                  key={download.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-purple-600/20 rounded-lg">
                      <download.icon className="h-8 w-8 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-white">{download.name}</h3>
                        <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                          {download.version}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{download.category}</p>
                      <p className="text-gray-300 text-sm mb-4">{download.description}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {download.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-600/20 text-gray-300 text-xs rounded-full flex items-center gap-1"
                      >
                        <TagIcon className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <ArrowDownTrayIcon className="h-4 w-4" />
                      {download.downloads.toLocaleString()} downloads
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {download.lastUpdated}
                    </div>
                    <div className="flex items-center gap-1">
                      <span>{download.size}</span>
                    </div>
                  </div>

                  {/* Platforms */}
                  <div className="mb-4">
                    <p className="text-gray-400 text-sm mb-2">Supported Platforms:</p>
                    <div className="flex flex-wrap gap-2">
                      {download.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="px-2 py-1 bg-gray-700/20 text-gray-300 text-xs rounded"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Download Buttons */}
                  <div className="flex gap-3">
                    <motion.a
                      href={download.downloadUrl}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <ArrowDownTrayIcon className="h-4 w-4" />
                      Download
                    </motion.a>
                    <motion.a
                      href={download.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-transparent border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <CodeBracketIcon className="h-4 w-4" />
                      View Source
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center py-16"
            >
              <div className="mb-6">
                <CodeBracketIcon className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">No Downloads Available Yet</h3>
                <p className="text-gray-300 max-w-md mx-auto">
                  Software downloads will be available here soon. Check back later for open-source tools and frameworks.
                </p>
              </div>
              <motion.a
                href="https://github.com/zach1020"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <CodeBracketIcon className="h-5 w-5" />
                View GitHub Projects
              </motion.a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10 text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Open Source Philosophy</h2>
            <p className="text-gray-300 mb-6">
              All my software is released under open-source licenses. I believe in sharing knowledge 
              and building tools that benefit the programming community. Feel free to use, modify, 
              and contribute to any of these projects.
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://github.com/zach1020"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <CodeBracketIcon className="h-5 w-5" />
                View All Projects
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
