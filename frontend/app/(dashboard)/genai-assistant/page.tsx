'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import GenAIPanel from '@/components/GenAIPanel';
import { Bot, Sparkles } from 'lucide-react';

const GenAIAssistantPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="h-full flex flex-col space-y-8"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="content-between">
            <div>
              <h1 className="text-4xl font-bold sustainalink-text-gradient mb-2">
                AI Assistant
              </h1>
              <p className="text-lg text-muted-foreground font-medium">
                Get AI-powered insights and recommendations for your sustainability initiatives
              </p>
            </div>
            <div className="content-start gap-3">
              <Badge className="success-gradient text-white px-3 py-1">
                <Sparkles className="h-4 w-4 mr-2" />
                AI Powered
              </Badge>
              <Badge variant="outline" className="border-primary text-primary px-3 py-1">
                <Bot className="h-4 w-4 mr-2" />
                Ready
              </Badge>
            </div>
          </div>
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
    </div>
  );
};

export default GenAIAssistantPage;
