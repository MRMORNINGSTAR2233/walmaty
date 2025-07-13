'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { fetchSupplier, type Supplier } from '@/lib/api';

interface SupplierProfileProps {
  supplierId: string;
}

const SupplierProfile = ({ supplierId }: SupplierProfileProps) => {
  const [supplier, setSupplier] = useState<Supplier | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSupplier = async () => {
      try {
        const supplierData = await fetchSupplier(supplierId);
        setSupplier(supplierData);
      } catch (error) {
        console.error('Failed to fetch supplier:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSupplier();
  }, [supplierId]);

  // Mock supplier data for demonstration
  const mockSupplier: Supplier = {
    id: supplierId,
    name: 'GreenTech Solutions Ltd.',
    rating: 4.2,
    location: 'Portland, Oregon, USA',
    certifications: ['ISO 14001', 'B-Corp Certified', 'Fair Trade'],
    emissions: {
      carbonFootprint: 245,
      renewableEnergy: 78,
      wasteReduction: 65,
    },
    labor: {
      fairWages: true,
      safeWorkingConditions: true,
      childLaborFree: true,
    },
    water: {
      usage: 1250,
      efficiency: 82,
      pollution: 15,
    },
    ethics: {
      transparency: 88,
      corruption: 95,
      communityImpact: 76,
    },
  };

  const supplierData = supplier || mockSupplier;

  if (loading) {
    return (
      <div className="animate-pulse space-y-6">
        <div className="h-48 bg-base-300 rounded-lg"></div>
        <div className="h-96 bg-base-300 rounded-lg"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Supplier Overview Card */}
      <Card className="shadow-lg border border-base-300">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-2xl">{supplierData.name}</CardTitle>
              <p className="text-base-content/70 mt-1">{supplierData.location}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <div className="rating rating-sm">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <input
                      key={star}
                      type="radio"
                      className="mask mask-star-2 bg-warning"
                      checked={star <= Math.floor(supplierData.rating)}
                      readOnly
                      aria-label={`${star} star rating`}
                    />
                  ))}
                </div>
                <span className="font-semibold">{supplierData.rating}/5</span>
              </div>
              <p className="text-xs text-base-content/60 mt-1">Sustainability Rating</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {supplierData.certifications.map((cert) => (
              <motion.span
                key={cert}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="badge badge-primary badge-outline"
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Metrics Tabs */}
      <Card className="shadow-lg border border-base-300">
        <CardContent className="p-0">
          <Tabs defaultValue="emissions" className="w-full">
            <TabsList className="grid w-full grid-cols-4 rounded-none border-b border-base-300">
              <TabsTrigger value="emissions" className="rounded-none">Emissions</TabsTrigger>
              <TabsTrigger value="labor" className="rounded-none">Labor</TabsTrigger>
              <TabsTrigger value="water" className="rounded-none">Water</TabsTrigger>
              <TabsTrigger value="ethics" className="rounded-none">Ethics</TabsTrigger>
            </TabsList>

            <TabsContent value="emissions" className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold">Environmental Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title">Carbon Footprint</div>
                    <div className="stat-value text-2xl">{supplierData.emissions.carbonFootprint}</div>
                    <div className="stat-desc">tons CO2/year</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title">Renewable Energy</div>
                    <div className="stat-value text-2xl text-success">{supplierData.emissions.renewableEnergy}%</div>
                    <div className="stat-desc">of total energy use</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title">Waste Reduction</div>
                    <div className="stat-value text-2xl text-info">{supplierData.emissions.wasteReduction}%</div>
                    <div className="stat-desc">vs last year</div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="labor" className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold">Labor Practices</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Fair Wages', value: supplierData.labor.fairWages },
                    { label: 'Safe Working Conditions', value: supplierData.labor.safeWorkingConditions },
                    { label: 'Child Labor Free', value: supplierData.labor.childLaborFree },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-4 bg-base-200 rounded-lg">
                      <span className="font-medium">{item.label}</span>
                      <div className={`badge ${item.value ? 'badge-success' : 'badge-error'}`}>
                        {item.value ? 'Compliant' : 'Non-Compliant'}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="water" className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold">Water Management</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title">Water Usage</div>
                    <div className="stat-value text-2xl">{supplierData.water.usage.toLocaleString()}</div>
                    <div className="stat-desc">liters/month</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title">Efficiency Score</div>
                    <div className="stat-value text-2xl text-success">{supplierData.water.efficiency}%</div>
                    <div className="stat-desc">industry benchmark</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg">
                    <div className="stat-title">Pollution Index</div>
                    <div className="stat-value text-2xl text-warning">{supplierData.water.pollution}</div>
                    <div className="stat-desc">lower is better</div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="ethics" className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-semibold">Ethics & Governance</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Transparency', score: supplierData.ethics.transparency },
                    { label: 'Anti-Corruption', score: supplierData.ethics.corruption },
                    { label: 'Community Impact', score: supplierData.ethics.communityImpact },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-4 bg-base-200 rounded-lg">
                      <span className="font-medium">{item.label}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-base-300 rounded-full h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.score}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="bg-primary h-3 rounded-full"
                          />
                        </div>
                        <span className="font-semibold w-8">{item.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SupplierProfile;
