'use client';

import { motion } from 'framer-motion';
import Leaderboard from '@/components/Leaderboard';
import PointsSummary from '@/components/PointsSummary';

const RewardsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-bold text-base-content mb-2">
          Sustainability Rewards
        </h1>
        <p className="text-base-content/70">
          Track your sustainability achievements and compete with other organizations
        </p>
      </motion.div>

      {/* Points Summary Section */}
      <motion.div variants={itemVariants}>
        <PointsSummary />
      </motion.div>

      {/* Leaderboard Section */}
      <motion.div variants={itemVariants}>
        <Leaderboard />
      </motion.div>

      {/* Achievement Badges */}
      <motion.div 
        variants={itemVariants}
        className="card bg-base-100 shadow-lg border border-base-300"
      >
        <div className="card-body">
          <h3 className="card-title text-xl mb-4">Recent Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/20"
            >
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-success">Waste Warrior</h4>
                <p className="text-sm text-base-content/70">Reduced waste by 15%</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg border border-primary/20"
            >
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-primary">Green Energy</h4>
                <p className="text-sm text-base-content/70">80% renewable energy</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-4 bg-warning/10 rounded-lg border border-warning/20"
            >
              <div className="w-12 h-12 bg-warning rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-warning">Community Leader</h4>
                <p className="text-sm text-base-content/70">Top supplier diversity</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RewardsPage;
