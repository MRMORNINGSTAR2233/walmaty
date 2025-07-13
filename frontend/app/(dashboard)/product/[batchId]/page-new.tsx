'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import TraceTimeline from '@/components/TraceTimeline';
import { ArrowLeft, Package, Scan, CheckCircle } from 'lucide-react';

const ProductTracePage = () => {
  const params = useParams();
  const batchId = params.batchId as string;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="content-start gap-4 mb-6">
            <Button variant="ghost" className="content-start gap-2 text-muted-foreground hover:text-foreground p-0">
              <ArrowLeft className="h-4 w-4" />
              Back to Products
            </Button>
          </div>
          
          <div className="content-between">
            <div>
              <h1 className="text-4xl font-bold sustainalink-text-gradient mb-2">
                Product Traceability
              </h1>
              <p className="text-lg text-muted-foreground font-medium">
                Complete supply chain journey for batch: {batchId}
              </p>
            </div>
            <div className="content-start gap-3">
              <Badge className="success-gradient text-white px-3 py-1">
                <CheckCircle className="h-4 w-4 mr-2" />
                Verified
              </Badge>
              <Badge variant="outline" className="border-primary text-primary px-3 py-1">
                <Package className="h-4 w-4 mr-2" />
                Batch: {batchId}
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Product Info Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="eco-card shadow-lg border-0">
            <CardHeader className="pb-4">
              <div className="content-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground content-start gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Product Information
                  </h3>
                  <p className="text-muted-foreground">Detailed product specifications and metrics</p>
                </div>
                <Badge className="info-gradient text-white px-3 py-1">
                  <Scan className="h-4 w-4 mr-2" />
                  Tracked
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-success-soft border border-green-200">
                  <h4 className="font-bold text-green-800 mb-1">Product Name</h4>
                  <p className="text-green-700">Organic Cotton T-Shirt</p>
                </div>
                <div className="p-4 rounded-xl bg-info-soft border border-blue-200">
                  <h4 className="font-bold text-blue-800 mb-1">Manufacturing Date</h4>
                  <p className="text-blue-700">2025-07-10</p>
                </div>
                <div className="p-4 rounded-xl bg-warning-soft border border-yellow-200">
                  <h4 className="font-bold text-yellow-800 mb-1">Sustainability Score</h4>
                  <p className="text-yellow-700">85/100</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Timeline Component */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TraceTimeline batchId={batchId} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductTracePage;
