'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchUserPoints, type UserPoints } from '@/lib/api';

const PointsSummary = () => {
  const [userPoints, setUserPoints] = useState<UserPoints | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserPoints = async () => {
      try {
        const points = await fetchUserPoints();
        setUserPoints(points);
      } catch (error) {
        console.error('Failed to fetch user points:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserPoints();
  }, []);

  // Mock points data
  const mockPoints: UserPoints = {
    total: 2180,
    thisMonth: 340,
    categories: {
      wasteReduction: 850,
      sustainablePurchasing: 720,
      reporting: 610,
    },
  };

  const pointsData = userPoints || mockPoints;

  const categoryInfo = [
    {
      key: 'wasteReduction' as keyof typeof pointsData.categories,
      label: 'Waste Reduction',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      color: 'text-success',
      bgColor: 'bg-success/20',
    },
    {
      key: 'sustainablePurchasing' as keyof typeof pointsData.categories,
      label: 'Sustainable Purchasing',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      ),
      color: 'text-primary',
      bgColor: 'bg-primary/20',
    },
    {
      key: 'reporting' as keyof typeof pointsData.categories,
      label: 'ESG Reporting',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'text-info',
      bgColor: 'bg-info/20',
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Total Points Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:col-span-1"
      >
        <Card className="h-full shadow-lg border border-base-300 sustainalink-gradient text-white">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              Total Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="animate-pulse">
                <div className="h-8 bg-white/20 rounded mb-2"></div>
                <div className="h-4 bg-white/20 rounded w-3/4"></div>
              </div>
            ) : (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl font-bold mb-2"
                >
                  {pointsData.total.toLocaleString()}
                </motion.div>
                <div className="flex items-center gap-2">
                  <span className="text-white/80 text-sm">+{pointsData.thisMonth} this month</span>
                  <div className="badge badge-success badge-sm">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                    +18%
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Category Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="lg:col-span-2"
      >
        <Card className="h-full shadow-lg border border-base-300">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Points Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="animate-pulse space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-base-300 rounded-lg"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-base-300 rounded w-3/4"></div>
                      <div className="h-3 bg-base-300 rounded w-1/2"></div>
                    </div>
                    <div className="h-6 w-16 bg-base-300 rounded"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {categoryInfo.map((category, index) => (
                  <motion.div
                    key={category.key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className="flex items-center gap-4 p-3 bg-base-200 rounded-lg hover:bg-base-300 transition-colors"
                  >
                    <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                      <div className={category.color}>
                        {category.icon}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-medium text-base-content">{category.label}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 bg-base-300 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ 
                              width: `${(pointsData.categories[category.key] / Math.max(...Object.values(pointsData.categories))) * 100}%` 
                            }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.6 }}
                            className={`h-2 rounded-full ${category.color.replace('text-', 'bg-')}`}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                        className="font-bold text-lg"
                      >
                        {pointsData.categories[category.key].toLocaleString()}
                      </motion.div>
                      <p className="text-xs text-base-content/60">points</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Next Milestone */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6 pt-4 border-t border-base-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-base-content">Next Milestone</p>
                  <p className="text-sm text-base-content/70">Sustainability Champion (2,500 points)</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{(2500 - pointsData.total).toLocaleString()}</p>
                  <p className="text-xs text-base-content/60">points to go</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="bg-base-300 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(pointsData.total / 2500) * 100}%` }}
                    transition={{ duration: 1.2, delay: 1 }}
                    className="bg-primary h-3 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PointsSummary;
