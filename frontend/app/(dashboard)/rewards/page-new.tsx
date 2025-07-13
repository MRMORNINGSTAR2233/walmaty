'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Leaderboard from '@/components/Leaderboard';
import PointsSummary from '@/components/PointsSummary';
import { Trophy, Star } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants}>
          <div className="content-between">
            <div>
              <h1 className="text-4xl font-bold sustainalink-text-gradient mb-2">
                Sustainability Rewards
              </h1>
              <p className="text-lg text-muted-foreground font-medium">
                Track your sustainability achievements and compete with other organizations
              </p>
            </div>
            <div className="content-start gap-3">
              <Badge className="warning-gradient text-white px-3 py-1">
                <Trophy className="h-4 w-4 mr-2" />
                Champion
              </Badge>
              <Badge variant="outline" className="border-primary text-primary px-3 py-1">
                <Star className="h-4 w-4 mr-2" />
                Level 5
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Points Summary Section */}
        <motion.div variants={itemVariants}>
          <PointsSummary />
        </motion.div>

        {/* Leaderboard Section */}
        <motion.div variants={itemVariants}>
          <Leaderboard />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RewardsPage;
