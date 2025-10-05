'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  CalendarIcon
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

export default function RecentPortfolioProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/github/recent-portfolio')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch recent repos');
        return res.json();
      })
      .then((data: Repo[]) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => {
        // Fallback to placeholder data when API fails
        const placeholderRepos: Repo[] = [
          {
            id: "1",
            name: "AI Data Processor",
            html_url: "https://github.com/zach1020",
            description: "Machine learning pipeline for preprocessing and analyzing large datasets",
            language: "Python",
            stargazers_count: 9,
            updated_at: "2024-01-12T00:00:00Z",
            created_at: "2023-10-20T00:00:00Z"
          },
          {
            id: "2",
            name: "Microcontroller Framework",
            html_url: "https://github.com/zach1020",
            description: "Lightweight framework for rapid embedded system development",
            language: "C",
            stargazers_count: 14,
            updated_at: "2024-01-08T00:00:00Z",
            created_at: "2023-09-15T00:00:00Z"
          },
          {
            id: "3",
            name: "Web API Gateway",
            html_url: "https://github.com/zach1020",
            description: "RESTful API gateway with authentication and rate limiting",
            language: "TypeScript",
            stargazers_count: 7,
            updated_at: "2024-01-03T00:00:00Z",
            created_at: "2023-08-10T00:00:00Z"
          }
        ];
        setRepos(placeholderRepos);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-gray-400 py-8">Loading recent projects...</div>;
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
          transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10 hover:border-purple-400/50 transition-all duration-300"
        >
          <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 flex items-center justify-center">
            <CodeBracketIcon className="h-12 w-12 text-purple-400" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                {repo.language}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{repo.name}</h3>
            <p className="text-gray-300 mb-4 text-sm">{repo.description || 'No description available'}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full">
                {repo.language}
              </span>
              <span className="px-2 py-1 bg-yellow-600/20 text-yellow-300 text-xs rounded-full">
                ⭐ {repo.stargazers_count}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <CalendarIcon className="h-3 w-3" />
                {new Date(repo.updated_at).toLocaleDateString()}
              </div>
              <div className="flex gap-3">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 text-xs font-medium"
                >
                  GitHub
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 text-xs font-medium"
                  >
                    Demo
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