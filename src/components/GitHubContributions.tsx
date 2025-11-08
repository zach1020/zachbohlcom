'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionResponse {
  totalContributions: number;
  weeks: ContributionWeek[];
}

export default function GitHubContributions() {
  const [contributions, setContributions] = useState<ContributionResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/github/contributions')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch contribution data');
        }
        return res.json();
      })
      .then((data: ContributionResponse) => {
        setContributions(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Unable to load contributions right now. Try again later.');
        setLoading(false);
      });
  }, []);

  const allDays = useMemo(() => {
    if (!contributions) return [];
    return contributions.weeks.flatMap((week) => week.contributionDays);
  }, [contributions]);

  const legendColors = useMemo(() => {
    if (!allDays.length) return [];

    const sorted = [...allDays].sort(
      (a, b) => a.contributionCount - b.contributionCount
    );

    const deduped: ContributionDay[] = [];
    for (const day of sorted) {
      if (!deduped.find((item) => item.color === day.color)) {
        deduped.push(day);
      }
    }
    return deduped;
  }, [allDays]);

  const lastContributionDate = useMemo(() => {
    if (!allDays.length) return null;
    const lastDay = allDays[allDays.length - 1];
    return new Date(lastDay.date);
  }, [allDays]);

  if (loading) {
    return (
      <div className="text-center text-gray-400 py-8">
        Loading GitHub contributions...
      </div>
    );
  }

  if (error || !contributions) {
    return (
      <div className="text-center text-gray-400 py-8">
        {error ?? 'Contribution data unavailable.'}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-sm"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              GitHub Contributions
            </h3>
            <p className="text-gray-300">
              {contributions.totalContributions.toLocaleString()} contributions in
              the last 12 months
            </p>
          </div>
          {lastContributionDate && (
            <div className="text-sm text-gray-400">
              Updated through{' '}
              <span className="text-gray-200 font-medium">
                {lastContributionDate.toLocaleDateString(undefined, {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          )}
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-max">
            <div className="flex gap-1">
              {contributions.weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {week.contributionDays.map((day) => (
                    <div
                      key={day.date}
                      className="w-3 h-3 rounded-sm"
                      style={{ backgroundColor: day.color }}
                      title={`${day.contributionCount} contributions on ${new Date(
                        day.date
                      ).toLocaleDateString()}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {!!legendColors.length && (
          <div className="flex items-center gap-3 text-xs text-gray-400 flex-wrap">
            <span>Less</span>
            {legendColors.map((legend) => (
              <span
                key={legend.color}
                className="w-3.5 h-3.5 rounded-sm border border-white/10"
                style={{ backgroundColor: legend.color }}
              />
            ))}
            <span>More</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

