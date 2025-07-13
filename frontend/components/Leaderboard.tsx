'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchLeaderboard, type LeaderboardEntry } from '@/lib/api';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const data = await fetchLeaderboard();
        setLeaderboard(data);
      } catch (error) {
        console.error('Failed to fetch leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboard();
  }, []);

  // Mock leaderboard data
  const mockLeaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'EcoTech Innovations', points: 2450, avatar: '' },
    { rank: 2, name: 'GreenLeaf Manufacturing', points: 2380, avatar: '' },
    { rank: 3, name: 'Sustainable Solutions Inc.', points: 2320, avatar: '' },
    { rank: 4, name: 'Your Organization', points: 2180, avatar: '' },
    { rank: 5, name: 'CleanEnergy Corp', points: 2150, avatar: '' },
    { rank: 6, name: 'Zero Waste Industries', points: 2100, avatar: '' },
    { rank: 7, name: 'Circular Systems Ltd', points: 2050, avatar: '' },
    { rank: 8, name: 'Renewable Resources Co', points: 1980, avatar: '' },
    { rank: 9, name: 'Carbon Neutral Partners', points: 1920, avatar: '' },
    { rank: 10, name: 'Sustainable Future Group', points: 1850, avatar: '' },
  ];

  const leaderboardData = leaderboard.length > 0 ? leaderboard : mockLeaderboard;

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return (
          <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        );
      case 2:
        return (
          <div className="w-8 h-8 bg-base-300 rounded-full flex items-center justify-center border-2 border-base-content/20">
            <span className="text-xs font-bold">2</span>
          </div>
        );
      case 3:
        return (
          <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">3</span>
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 bg-base-200 rounded-full flex items-center justify-center">
            <span className="text-xs font-semibold">{rank}</span>
          </div>
        );
    }
  };

  const getRowColor = (name: string, rank: number) => {
    if (name === 'Your Organization') {
      return 'bg-primary/10 border border-primary/30';
    }
    if (rank <= 3) {
      return 'bg-warning/5 border border-warning/20';
    }
    return 'bg-base-100 hover:bg-base-200';
  };

  return (
    <Card className="shadow-lg border border-base-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <div className="w-8 h-8 bg-warning/20 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          Sustainability Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="animate-pulse space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3">
                <div className="w-8 h-8 bg-base-300 rounded-full"></div>
                <div className="flex-1 h-4 bg-base-300 rounded"></div>
                <div className="w-16 h-4 bg-base-300 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {leaderboardData.map((entry, index) => (
              <motion.div
                key={entry.rank}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-200 ${getRowColor(entry.name, entry.rank)}`}
              >
                {/* Rank Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 + 0.2 }}
                >
                  {getRankBadge(entry.rank)}
                </motion.div>

                {/* Organization Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className={`font-medium truncate ${entry.name === 'Your Organization' ? 'text-primary' : 'text-base-content'}`}>
                      {entry.name}
                    </p>
                    {entry.name === 'Your Organization' && (
                      <span className="badge badge-primary badge-sm">You</span>
                    )}
                  </div>
                  {entry.rank <= 3 && (
                    <p className="text-xs text-base-content/60">
                      Top performer
                    </p>
                  )}
                </div>

                {/* Points */}
                <div className="text-right">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.05 + 0.4 }}
                    className="font-bold text-lg"
                  >
                    {entry.points.toLocaleString()}
                  </motion.div>
                  <p className="text-xs text-base-content/60">points</p>
                </div>

                {/* Trend Indicator */}
                <div className="w-6">
                  {entry.rank <= 5 && (
                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 + 0.6 }}
                    >
                      {Math.random() > 0.5 ? (
                        <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-9.2 9.2M7 7v10h10" />
                        </svg>
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-base-300">
          <div className="flex items-center justify-between text-sm text-base-content/70">
            <span>Updated 1 hour ago</span>
            <button className="btn btn-outline btn-sm">
              View Full Rankings
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
