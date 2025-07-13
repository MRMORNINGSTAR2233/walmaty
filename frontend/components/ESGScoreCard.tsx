'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchESGScore, type ESGScore } from '@/lib/api';

const ESGScoreCard = () => {
  const [esgScore, setEsgScore] = useState<ESGScore | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadESGScore = async () => {
      try {
        const score = await fetchESGScore();
        setEsgScore(score);
      } catch (error) {
        console.error('Failed to fetch ESG score:', error);
      } finally {
        setLoading(false);
      }
    };

    loadESGScore();
  }, []);

  // Placeholder data when no data is available
  const mockScore: ESGScore = {
    overall: 82,
    environmental: 85,
    social: 78,
    governance: 84,
    lastUpdated: new Date().toISOString(),
  };

  const scoreData = esgScore || mockScore;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-success';
    if (score >= 60) return 'text-warning';
    return 'text-error';
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'bg-success';
    if (score >= 60) return 'bg-warning';
    return 'bg-error';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Card className="h-full border border-base-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            ESG Score
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <div className="animate-pulse space-y-3">
              <div className="h-16 bg-base-300 rounded-lg"></div>
              <div className="space-y-2">
                <div className="h-4 bg-base-300 rounded w-3/4"></div>
                <div className="h-4 bg-base-300 rounded w-1/2"></div>
                <div className="h-4 bg-base-300 rounded w-2/3"></div>
              </div>
            </div>
          ) : (
            <>
              {/* Overall Score */}
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative inline-flex items-center justify-center w-20 h-20 mb-2"
                >
                  <div className="absolute inset-0 rounded-full bg-base-300">
                    <motion.div
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: scoreData.overall / 100 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute inset-0"
                    >
                      <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray={`${scoreData.overall}, 100`}
                          className={getScoreColor(scoreData.overall)}
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <span className={`text-xl font-bold ${getScoreColor(scoreData.overall)}`}>
                    {scoreData.overall}
                  </span>
                </motion.div>
                <p className="text-sm text-base-content/60">Overall ESG Rating</p>
              </div>

              {/* Breakdown Scores */}
              <div className="space-y-3">
                {[
                  { label: 'Environmental', score: scoreData.environmental, key: 'env' },
                  { label: 'Social', score: scoreData.social, key: 'social' },
                  { label: 'Governance', score: scoreData.governance, key: 'gov' },
                ].map((item, index) => (
                  <div key={item.key} className="flex items-center justify-between">
                    <span className="text-sm text-base-content/80">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-16 bg-base-300 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.score}%` }}
                          transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                          className={`h-2 rounded-full ${getScoreBg(item.score)}`}
                        />
                      </div>
                      <span className={`text-sm font-semibold ${getScoreColor(item.score)}`}>
                        {item.score}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Last Updated */}
              <div className="pt-2 border-t border-base-300">
                <p className="text-xs text-base-content/60">
                  Last updated: {new Date(scoreData.lastUpdated).toLocaleDateString()}
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ESGScoreCard;
