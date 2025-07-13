'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { fetchWasteLogs, type WasteLog } from '@/lib/api';
import { Trash2, TrendingDown, Target } from 'lucide-react';

const WasteCard = () => {
  const [wasteLogs, setWasteLogs] = useState<WasteLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWasteLogs = async () => {
      try {
        const logs = await fetchWasteLogs();
        setWasteLogs(logs);
      } catch (error) {
        console.error('Failed to fetch waste logs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadWasteLogs();
  }, []);

  // Calculate metrics from waste logs
  const totalWaste = wasteLogs.reduce((sum, log) => sum + log.quantity, 0);
  const reductionPercent = 12;
  const thisMonth = Math.floor(totalWaste * 0.3);

  if (loading) {
    return (
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trash2 className="h-5 w-5 text-muted-foreground" />
            Waste Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-4 bg-muted animate-pulse rounded" />
            <div className="h-4 bg-muted animate-pulse rounded w-3/4" />
            <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trash2 className="h-5 w-5 text-primary" />
          Waste Management
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Total Waste Metric */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground">Total Waste</span>
            <Badge variant="secondary">{totalWaste.toFixed(1)} kg</Badge>
          </div>
          <Progress value={65} className="h-2" />
        </div>

        {/* Reduction Progress */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-muted-foreground">Reduction Goal</span>
            <div className="flex items-center gap-1 text-green-600">
              <TrendingDown className="h-4 w-4" />
              <span className="text-sm font-semibold">{reductionPercent}%</span>
            </div>
          </div>
          <Progress value={reductionPercent * 5} className="h-2" />
          <p className="text-xs text-muted-foreground">Target: 15% reduction by Dec 2025</p>
        </div>

        {/* This Month */}
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">This Month</span>
          </div>
          <span className="text-lg font-bold text-foreground">{thisMonth} kg</span>
        </div>

        {/* Recent Logs */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-muted-foreground">Recent Logs</h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {wasteLogs.slice(0, 3).map((log) => (
              <div key={log.id} className="flex justify-between items-center p-2 bg-muted/30 rounded text-sm">
                <span className="font-medium">{log.type}</span>
                <span className="text-muted-foreground">{log.quantity} kg</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WasteCard;
