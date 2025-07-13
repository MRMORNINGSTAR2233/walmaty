'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchAlerts, type Alert } from '@/lib/api';

const AlertsCard = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAlerts = async () => {
      try {
        const alertsData = await fetchAlerts();
        setAlerts(alertsData);
      } catch (error) {
        console.error('Failed to fetch alerts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAlerts();
  }, []);

  // Mock alerts when no data is available
  const mockAlerts: Alert[] = [
    {
      id: '1',
      type: 'warning',
      message: 'Waste threshold exceeded for Site A',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      resolved: false,
    },
    {
      id: '2',
      type: 'info',
      message: 'New ESG report available',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      resolved: false,
    },
    {
      id: '3',
      type: 'error',
      message: 'Supplier compliance issue detected',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      resolved: false,
    },
  ];

  const alertsData = alerts.length > 0 ? alerts : mockAlerts;
  const unreadCount = alertsData.filter(alert => !alert.resolved).length;

  const getAlertIcon = (type: Alert['type']) => {
    switch (type) {
      case 'error':
        return (
          <svg className="w-4 h-4 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'warning':
        return (
          <svg className="w-4 h-4 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        );
      case 'info':
      default:
        return (
          <svg className="w-4 h-4 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  const getAlertColor = (type: Alert['type']) => {
    switch (type) {
      case 'error':
        return 'border-l-error bg-error/5';
      case 'warning':
        return 'border-l-warning bg-warning/5';
      case 'info':
      default:
        return 'border-l-info bg-info/5';
    }
  };

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date();
    const alertTime = new Date(timestamp);
    const diffInMinutes = Math.floor((now.getTime() - alertTime.getTime()) / (1000 * 60));

    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="h-full border border-base-300 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="w-8 h-8 bg-warning/20 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zm-5-6h10M5 7l5-5 5 5M5 13h5m0 0l5-5m-5 5l5 5" />
              </svg>
            </div>
            Alerts
            {unreadCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="bg-error text-error-content text-xs px-2 py-1 rounded-full font-medium"
              >
                {unreadCount}
              </motion.span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="animate-pulse space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-base-300 rounded-lg"></div>
              ))}
            </div>
          ) : (
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {alertsData.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm text-base-content/60">No alerts at this time</p>
                  <p className="text-xs text-base-content/40">All systems are running smoothly</p>
                </div>
              ) : (
                alertsData.map((alert, index) => (
                  <motion.div
                    key={alert.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`p-3 rounded-lg border-l-4 ${getAlertColor(alert.type)} hover:shadow-sm transition-shadow cursor-pointer`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {getAlertIcon(alert.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-base-content line-clamp-2">
                          {alert.message}
                        </p>
                        <p className="text-xs text-base-content/60 mt-1">
                          {formatTimeAgo(alert.timestamp)}
                        </p>
                      </div>
                      {!alert.resolved && (
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      )}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          )}
          
          {alertsData.length > 0 && (
            <div className="mt-4 pt-3 border-t border-base-300">
              <button className="btn btn-outline btn-sm w-full">
                View All Alerts
              </button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AlertsCard;
