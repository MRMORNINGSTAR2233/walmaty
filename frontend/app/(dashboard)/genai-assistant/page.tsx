'use client';

import { motion } from 'framer-motion';
import GenAIPanel from '@/components/GenAIPanel';

const GenAIAssistantPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="h-full flex flex-col"
    >
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h1 className="text-3xl font-bold text-base-content mb-2">
          AI Assistant
        </h1>
        <p className="text-base-content/70">
          Get AI-powered insights and recommendations for your sustainability initiatives
        </p>
      </motion.div>

      {/* GenAI Panel - Takes remaining space */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 min-h-0"
      >
        <GenAIPanel />
      </motion.div>
    </motion.div>
  );
};

export default GenAIAssistantPage;
