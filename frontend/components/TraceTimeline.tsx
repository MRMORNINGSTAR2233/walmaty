'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { fetchProductTrace, type ProductTrace, type TraceStep } from '@/lib/api';

interface TraceTimelineProps {
  batchId: string;
}

const TraceTimeline = ({ batchId }: TraceTimelineProps) => {
  const [productTrace, setProductTrace] = useState<ProductTrace | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProductTrace = async () => {
      try {
        const trace = await fetchProductTrace(batchId);
        setProductTrace(trace);
      } catch (error) {
        console.error('Failed to fetch product trace:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProductTrace();
  }, [batchId]);

  // Mock trace data
  const mockTrace: ProductTrace = {
    batchId,
    productName: 'Organic Cotton T-Shirt',
    steps: [
      {
        id: '1',
        title: 'Raw Material Sourcing',
        description: 'Organic cotton harvested from certified farms in Gujarat, India',
        timestamp: '2024-01-15T08:00:00Z',
        location: 'Gujarat, India',
        status: 'completed',
      },
      {
        id: '2',
        title: 'Processing & Manufacturing',
        description: 'Cotton processed and spun into yarn at sustainable facility',
        timestamp: '2024-01-22T10:30:00Z',
        location: 'Mumbai, India',
        status: 'completed',
      },
      {
        id: '3',
        title: 'Textile Production',
        description: 'Fabric woven and dyed using eco-friendly processes',
        timestamp: '2024-02-05T14:15:00Z',
        location: 'Bangalore, India',
        status: 'completed',
      },
      {
        id: '4',
        title: 'Garment Assembly',
        description: 'T-shirts cut and sewn in fair-trade certified facility',
        timestamp: '2024-02-12T09:45:00Z',
        location: 'Ho Chi Minh City, Vietnam',
        status: 'completed',
      },
      {
        id: '5',
        title: 'Quality Control',
        description: 'Comprehensive quality and sustainability checks performed',
        timestamp: '2024-02-18T16:20:00Z',
        location: 'Ho Chi Minh City, Vietnam',
        status: 'completed',
      },
      {
        id: '6',
        title: 'Packaging & Labeling',
        description: 'Products packaged using recyclable materials',
        timestamp: '2024-02-20T11:00:00Z',
        location: 'Ho Chi Minh City, Vietnam',
        status: 'in-progress',
      },
      {
        id: '7',
        title: 'Distribution',
        description: 'Products shipped to regional distribution centers',
        timestamp: '2024-02-25T08:00:00Z',
        location: 'Los Angeles, CA, USA',
        status: 'pending',
      },
    ],
  };

  const traceData = productTrace || mockTrace;

  const getStatusIcon = (status: TraceStep['status']) => {
    switch (status) {
      case 'completed':
        return (
          <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case 'in-progress':
        return (
          <div className="w-6 h-6 bg-warning rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </div>
        );
      case 'pending':
      default:
        return (
          <div className="w-6 h-6 bg-base-300 rounded-full border-2 border-base-content/30"></div>
        );
    }
  };

  const getStatusColor = (status: TraceStep['status']) => {
    switch (status) {
      case 'completed':
        return 'border-l-success bg-success/5';
      case 'in-progress':
        return 'border-l-warning bg-warning/5';
      case 'pending':
      default:
        return 'border-l-base-300 bg-base-100';
    }
  };

  if (loading) {
    return (
      <Card className="shadow-lg border border-base-300">
        <CardContent className="p-6">
          <div className="animate-pulse space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-6 h-6 bg-base-300 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-base-300 rounded w-3/4"></div>
                  <div className="h-3 bg-base-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg border border-base-300">
      <CardContent className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Supply Chain Journey</h3>
          <p className="text-base-content/70">
            Product: {traceData.productName}
          </p>
        </div>

        <div className="relative">
          {traceData.steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-4 pb-8 last:pb-0"
            >
              {/* Timeline Line */}
              {index < traceData.steps.length - 1 && (
                <div className="absolute left-3 top-6 w-0.5 h-full bg-base-300"></div>
              )}

              {/* Status Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                className="relative z-10"
              >
                {getStatusIcon(step.status)}
              </motion.div>

              {/* Step Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                className={`flex-1 p-4 rounded-lg border-l-4 ${getStatusColor(step.status)} hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-base-content">{step.title}</h4>
                  <span className="text-xs text-base-content/60">
                    {new Date(step.timestamp).toLocaleDateString()}
                  </span>
                </div>
                
                <p className="text-sm text-base-content/80 mb-2">
                  {step.description}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-base-content/60">
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {step.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {new Date(step.timestamp).toLocaleTimeString()}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 pt-6 border-t border-base-300"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-lg font-semibold text-success">
                {traceData.steps.filter(s => s.status === 'completed').length}
              </div>
              <div className="text-xs text-base-content/60">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-warning">
                {traceData.steps.filter(s => s.status === 'in-progress').length}
              </div>
              <div className="text-xs text-base-content/60">In Progress</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-base-content/60">
                {traceData.steps.filter(s => s.status === 'pending').length}
              </div>
              <div className="text-xs text-base-content/60">Pending</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-primary">
                {Math.round((traceData.steps.filter(s => s.status === 'completed').length / traceData.steps.length) * 100)}%
              </div>
              <div className="text-xs text-base-content/60">Progress</div>
            </div>
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default TraceTimeline;
