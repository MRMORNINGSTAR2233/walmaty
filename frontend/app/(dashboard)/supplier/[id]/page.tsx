'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SupplierProfile from '@/components/SupplierProfile';
import { ArrowLeft, Building, CheckCircle } from 'lucide-react';

const SupplierPage = () => {
  const params = useParams();
  const supplierId = params.id as string;

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
              Back to Suppliers
            </Button>
          </div>
          
          <div className="content-between">
            <div>
              <h1 className="text-4xl font-bold sustainalink-text-gradient mb-2">
                Supplier Profile
              </h1>
              <p className="text-lg text-muted-foreground font-medium">
                Detailed sustainability metrics and compliance information for supplier: {supplierId}
              </p>
            </div>
            <div className="content-start gap-3">
              <Badge className="success-gradient text-white px-3 py-1">
                <CheckCircle className="h-4 w-4 mr-2" />
                Verified
              </Badge>
              <Badge variant="outline" className="border-primary text-primary px-3 py-1">
                <Building className="h-4 w-4 mr-2" />
                Supplier ID: {supplierId}
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Supplier Profile Component */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <SupplierProfile supplierId={supplierId} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SupplierPage;
