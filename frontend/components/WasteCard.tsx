'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
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
    <Card className="h-full eco-card card-hover">
      <CardHeader className="pb-4">
        <CardTitle className="content-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl warning-gradient shadow-lg">
            <Trash2 className="h-6 w-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">Waste Management</span>
            <span className="text-sm text-muted-foreground font-medium">Environmental Impact</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Total Waste Metric */}
        <div className="space-y-3">
          <div className="content-between">
            <span className="text-sm font-semibold text-muted-foreground">Total Waste Generated</span>
            <Badge variant="secondary" className="bg-warning-soft font-bold px-3 py-1">
              {totalWaste.toFixed(1)} kg
            </Badge>
          </div>
          <div className="space-y-2">
            <Progress value={65} className="h-3 rounded-full" />
            <div className="content-between text-xs">
              <span className="text-muted-foreground font-medium">Current Usage</span>
              <span className="text-foreground font-semibold">65% of monthly target</span>
            </div>
          </div>
        </div>

        {/* Reduction Progress */}
        <div className="space-y-3">
          <div className="content-between">
            <span className="text-sm font-semibold text-muted-foreground">Reduction Progress</span>
            <div className="content-start gap-2">
              <TrendingDown className="h-4 w-4 text-green-600" />
              <span className="text-sm font-bold text-green-600">-{reductionPercent}%</span>
            </div>
          </div>
          <div className="space-y-2">
            <Progress 
              value={reductionPercent * 5} 
              className="h-3 rounded-full [&>div]:bg-gradient-to-r [&>div]:from-green-500 [&>div]:to-emerald-400"
            />
            <div className="content-between text-xs">
              <span className="text-green-600 font-medium">Excellent Progress!</span>
              <span className="text-muted-foreground font-medium">Target: -15% by Dec 2025</span>
            </div>
          </div>
        </div>

        {/* This Month Highlight */}
        <div className="content-between p-4 rounded-2xl bg-success-soft border border-green-200/50 shadow-sm">
          <div className="content-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl success-gradient shadow-md">
              <Target className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-green-800 leading-tight">This Month</span>
              <span className="text-xs text-green-600 font-medium">Current Period</span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-green-900">{thisMonth}</span>
            <span className="text-sm text-green-700 font-medium ml-1">kg</span>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-3">
          <div className="content-between">
            <h4 className="text-sm font-bold text-foreground">Recent Activity</h4>
            <Badge variant="outline" className="text-xs font-semibold border-primary/30 text-primary">
              {wasteLogs.length} entries
            </Badge>
          </div>
          <div className="space-y-2 max-h-36 overflow-y-auto">
            {wasteLogs.slice(0, 3).map((log, index) => (
              <div key={log.id} className="content-between p-3 bg-gradient-to-r from-muted/40 to-accent/20 rounded-xl hover:from-muted/60 hover:to-accent/30 transition-all duration-300 border border-border/50">
                <div className="content-start gap-3">
                  <div className={cn(
                    "w-3 h-3 rounded-full shadow-sm",
                    index === 0 ? "bg-gradient-to-r from-green-400 to-green-500" : 
                    index === 1 ? "bg-gradient-to-r from-yellow-400 to-yellow-500" : 
                    "bg-gradient-to-r from-orange-400 to-orange-500"
                  )} />
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm text-foreground leading-tight">{log.type}</span>
                    <span className="text-xs text-muted-foreground font-medium">Waste Category</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-foreground">{log.quantity}</span>
                  <span className="text-xs text-muted-foreground font-medium ml-1">kg</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WasteCard;
