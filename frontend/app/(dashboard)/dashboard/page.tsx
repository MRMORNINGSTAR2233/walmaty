'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import WasteCard from '@/components/WasteCard';
import ESGScoreCard from '@/components/ESGScoreCard';
import AlertsCard from '@/components/AlertsCard';
import { 
  Plus,
  FileText,
  Scan,
  BarChart3,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const Dashboard = () => {
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

  const recentActivities = [
    {
      type: 'success',
      message: 'New supplier onboarded',
      time: '2h ago',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      type: 'info',
      message: 'ESG report generated',
      time: '4h ago',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      type: 'warning',
      message: 'Waste threshold exceeded',
      time: '1d ago',
      icon: AlertTriangle,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="content-between">
          <div>
            <h1 className="text-4xl font-bold sustainalink-text-gradient mb-2">
              Dashboard
            </h1>
            <p className="text-lg text-muted-foreground font-medium">
              Monitor your sustainability metrics and supply chain performance
            </p>
          </div>
          <div className="content-start gap-3">
            <Badge className="success-gradient text-white px-3 py-1">
              <CheckCircle className="h-4 w-4 mr-2" />
              System Healthy
            </Badge>
            <Badge variant="outline" className="border-primary text-primary px-3 py-1">
              <Clock className="h-4 w-4 mr-2" />
              Real-time
            </Badge>
          </div>
        </motion.div>

        {/* Key Metrics Grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <WasteCard />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <ESGScoreCard />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <AlertsCard />
          </motion.div>
        </motion.div>

        {/* Additional Analytics Section */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <motion.div whileHover={{ scale: 1.01 }}>
            <Card className="eco-card shadow-lg border-0 h-full">
              <CardHeader className="pb-4">
                <h3 className="text-xl font-bold text-foreground content-start gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Recent Activity
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="content-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className={`h-10 w-10 rounded-lg bg-gradient-to-br from-primary/10 to-primary/20 content-center`}>
                      <activity.icon className={`h-5 w-5 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{activity.message}</p>
                      <p className="text-sm text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div whileHover={{ scale: 1.01 }}>
            <Card className="eco-card shadow-lg border-0 h-full">
              <CardHeader className="pb-4">
                <h3 className="text-xl font-bold text-foreground content-start gap-2">
                  <BarChart3 className="h-5 w-5 text-secondary" />
                  Quick Actions
                </h3>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <Button className="h-16 sustainalink-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300 flex-col gap-2">
                    <Plus className="h-5 w-5" />
                    <span className="text-sm font-semibold">Add Waste Log</span>
                  </Button>
                  <Button variant="outline" className="h-16 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white flex-col gap-2 transition-all duration-300">
                    <FileText className="h-5 w-5" />
                    <span className="text-sm font-semibold">Generate Report</span>
                  </Button>
                  <Button variant="outline" className="h-16 border-2 border-primary text-primary hover:bg-primary hover:text-white flex-col gap-2 transition-all duration-300">
                    <Scan className="h-5 w-5" />
                    <span className="text-sm font-semibold">Scan Product</span>
                  </Button>
                  <Button variant="outline" className="h-16 border-2 border-muted-foreground text-muted-foreground hover:bg-muted-foreground hover:text-white flex-col gap-2 transition-all duration-300">
                    <BarChart3 className="h-5 w-5" />
                    <span className="text-sm font-semibold">View Analytics</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
