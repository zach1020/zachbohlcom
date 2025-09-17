'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  StarIcon
} from '@heroicons/react/24/outline';

interface Repo {
  id: string;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  homepage?: string;
  updated_at: string;
  created_at: string;
}

export default function FeaturedPortfolioProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/github/pinned-portfolio')
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
            id: "1",
            name: "Neural Network Classifier",
            html_url: "https://github.com/zach1020",
            description: "Deep learning model for image classification using convolutional neural networks",
            language: "Python",
            stargazers_count: 23,
            updated_at: "2024-01-20T00:00:00Z",
            created_at: "2023-12-01T00:00:00Z",
            homepage: "https://example.com"
          },
          {
            id: "2",
            name: "Real-Time Embedded Monitor",
            html_url: "https://github.com/zach1020",
            description: "IoT monitoring system with real-time data collection and wireless transmission",
            language: "C++",
            stargazers_count: 16,
            updated_at: "2024-01-18T00:00:00Z",
            created_at: "2023-11-15T00:00:00Z"
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
    <div className="grid lg:grid-cols-2 gap-8">
      {repos.map((repo, index) => (
        <motion.div
          key={repo.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300"
        >
          <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
            <CodeBracketIcon className="h-16 w-16 text-purple-400" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                {repo.language}
              </span>
              <StarIcon className="h-4 w-4 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">{repo.name}</h3>
            <p className="text-gray-300 mb-4">{repo.description || 'No description available'}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-sm rounded-full">
                {repo.language}
              </span>
              <span className="px-3 py-1 bg-yellow-600/20 text-yellow-300 text-sm rounded-full">
                ⭐ {repo.stargazers_count}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <CalendarIcon className="h-4 w-4" />
                {new Date(repo.updated_at).toLocaleDateString()}
              </div>
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
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 