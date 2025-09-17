'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { 
  MagnifyingGlassIcon,
  CalendarIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/react/24/outline';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      title: "Revisiting The Brothers Karamazov at 30",
      excerpt: "Ten years after first reading Dostoevsky's masterpiece at age 20, I'm diving back into the dark corners of the human spirit. What did I understand then? What will I understand now?",
      slug: "revisiting-brothers-karamazov",
      date: "2025-07-23",
      readTime: "8 min read",
      category: "Literature",
      tags: ["Dostoevsky", "Literature", "Philosophy", "Personal Growth"]
    },
    {
      title: "Building AI Models with PyTorch",
      excerpt: "Developing neural networks and understanding deep learning architectures. This post covers the fundamentals of AI development and how to implement models using PyTorch.",
      slug: "ai-models-pytorch",
      date: "2024-01-15",
      readTime: "12 min read",
      category: "AI",
      tags: ["AI", "PyTorch", "Python", "Deep Learning"]
    },
    {
      title: "Embedded Systems: From Microcontrollers to IoT",
      excerpt: "Developing for resource-constrained environments and real-time systems. Exploring the challenges and solutions in embedded programming.",
      slug: "embedded-systems-iot",
      date: "2024-01-10",
      readTime: "15 min read",
      category: "Embedded",
      tags: ["Embedded Systems", "C++", "ESP32", "IoT", "Real-time"]
    },
    {
      title: "Low-Level Programming: Memory Management in C",
      excerpt: "Understanding memory allocation, pointers, and system-level programming. Deep dive into how memory works at the lowest level.",
      slug: "low-level-programming-c",
      date: "2024-01-05",
      readTime: "18 min read",
      category: "Systems",
      tags: ["C Programming", "Memory Management", "Assembly", "Systems Programming"]
    },
    {
      title: "Building a Real-Time Operating System",
      excerpt: "Implementing a lightweight RTOS with task scheduling, inter-process communication, and memory management for embedded systems.",
      slug: "building-rtos",
      date: "2023-12-28",
      readTime: "20 min read",
      category: "Embedded",
      tags: ["RTOS", "Embedded Systems", "C", "Task Scheduling", "Real-time"]
    },
    {
      title: "Computer Vision with CNNs",
      excerpt: "Implementing convolutional neural networks for image classification and object detection. Exploring modern architectures and training techniques.",
      slug: "computer-vision-cnns",
      date: "2023-12-20",
      readTime: "16 min read",
      category: "AI",
      tags: ["Computer Vision", "CNNs", "PyTorch", "Deep Learning"]
    },
    {
      title: "Creating Music with Code",
      excerpt: "Using programming to generate and manipulate music. Exploring algorithmic composition, MIDI programming, and how code can be a creative tool for music production.",
      slug: "creating-music-with-code",
      date: "2023-12-15",
      readTime: "10 min read",
      category: "Music",
      tags: ["Algorithmic Music", "MIDI", "Python", "Creative Coding"]
    }
  ];

  const categories = ["All", "Embedded", "AI", "Systems", "Web", "Music", "Literature"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              My <span className="text-purple-400">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Thoughts on diverse programming domains, from embedded systems to AI programming,
              low-level programming to web development. Sharing insights across the programming spectrum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between"
          >
            {/* Search */}
            <div className="relative w-full md:w-96">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">No posts found matching your criteria.</p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{post.excerpt}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-600/20 text-gray-300 text-xs rounded-full flex items-center gap-1"
                      >
                        <TagIcon className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-600/20 text-gray-300 text-xs rounded-full">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-gray-400 text-xs">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-purple-400 hover:text-purple-300 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 