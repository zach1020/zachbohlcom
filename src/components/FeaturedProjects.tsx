'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { StarIcon, CodeBracketIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  homepage?: string;
  updated_at: string;
}

export default function FeaturedProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/github/pinned')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch pinned repos');
        return res.json();
      })
      .then((data: Repo[]) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(err => {
        // Fallback to placeholder data when API fails
        const placeholderRepos: Repo[] = [
          {
            id: 1,
            name: "AI Model Trainer",
            html_url: "https://github.com/zach1020",
            description: "PyTorch-based neural network training framework for computer vision tasks",
            language: "Python",
            stargazers_count: 15,
            updated_at: "2024-01-15T00:00:00Z"
          },
          {
            id: 2,
            name: "Embedded IoT System",
            html_url: "https://github.com/zach1020",
            description: "Real-time sensor monitoring system built with ESP32 and C++",
            language: "C++",
            stargazers_count: 8,
            updated_at: "2024-01-10T00:00:00Z"
          },
          {
            id: 3,
            name: "Web Audio Visualizer",
            html_url: "https://github.com/zach1020",
            description: "Interactive music visualizer using Web Audio API and Canvas",
            language: "TypeScript",
            stargazers_count: 12,
            updated_at: "2024-01-05T00:00:00Z"
          }
        ];
        setRepos(placeholderRepos);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-gray-400 py-8">Loading featured projects...</div>;
  }
  if (error) {
    return <div className="text-center text-red-400 py-8">Error: {error}</div>;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {repos.map((repo, index) => (
        <motion.div
          key={repo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 overflow-hidden"
        >
          {/* Project Image */}
          <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
            <Image
              src={
                index === 0 
                  ? "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" // AI development
                  : index === 1
                  ? "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" // Embedded systems
                  : "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" // Web development
              }
              alt={repo.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <CodeBracketIcon className="h-6 w-6 text-purple-400" />
            <span className="text-gray-400 text-xs">{repo.language}</span>
            <span className="flex items-center gap-1 text-yellow-400 text-xs ml-auto">
              <StarIcon className="h-4 w-4" />
              {repo.stargazers_count}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{repo.name}</h3>
          <p className="text-gray-300 mb-4 text-sm min-h-[48px]">{repo.description}</p>
          <div className="flex gap-3">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1"
            >
              GitHub
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1"
              >
                Live Demo
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
} 