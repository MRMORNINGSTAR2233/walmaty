'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  Leaf,
  Factory,
  BarChart3,
  Globe,
  Zap,
  Recycle,
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  Shield,
  Sparkles,
  Package,
  Bot
} from 'lucide-react';

export default function LandingPage() {
  const features = [
    {
      icon: Factory,
      title: 'Supply Chain Tracking',
      description: 'Track sustainability across your entire supply chain with real-time monitoring and comprehensive analytics.',
      color: 'text-green-600'
    },
    {
      icon: BarChart3,
      title: 'Impact Analytics',
      description: 'Powerful analytics and reporting tools to measure, analyze, and optimize your environmental impact.',
      color: 'text-blue-600'
    },
    {
      icon: Bot,
      title: 'AI-Powered Insights',
      description: 'Smart AI assistant provides personalized recommendations for improving sustainability metrics.',
      color: 'text-purple-600'
    },
    {
      icon: Award,
      title: 'Certification Management',
      description: 'Manage certifications, compliance requirements, and sustainability standards in one platform.',
      color: 'text-orange-600'
    },
    {
      icon: Globe,
      title: 'Global Collaboration',
      description: 'Connect with suppliers, partners, and stakeholders worldwide for sustainable business practices.',
      color: 'text-teal-600'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Continuous improvement tools to optimize operations and reduce environmental footprint.',
      color: 'text-indigo-600'
    }
  ];

  const stats = [
    { value: '95%', label: 'Carbon Reduction', icon: Leaf },
    { value: '500+', label: 'Global Partners', icon: Users },
    { value: '2.3M', label: 'Products Tracked', icon: Package },
    { value: '99.9%', label: 'System Uptime', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/10">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="content-between">
            <div className="content-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl sustainalink-gradient shadow-lg">
                <Package className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold sustainalink-text-gradient">
                SustainaLink
              </span>
            </div>
            <div className="content-start gap-4">
              <Link href="/login">
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="sustainalink-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <Badge className="success-gradient text-white mb-6 px-4 py-2 text-sm font-semibold shadow-lg">
              <Sparkles className="h-4 w-4 mr-2" />
              Next-Generation Sustainability Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="sustainalink-text-gradient">Transform</span> Your
              <br />
              <span className="text-foreground">Supply Chain Into</span>
              <br />
              <span className="sustainalink-text-gradient">Sustainable Future</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              SustainaLink empowers businesses to track, measure, and optimize their environmental impact across the entire supply chain with cutting-edge AI technology and real-time analytics.
            </p>
          </div>
          
          <div className="content-center gap-6 mb-12">
            <Link href="/signup">
              <Button size="lg" className="sustainalink-gradient text-white px-8 py-4 text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-xl">
                <Zap className="h-5 w-5 mr-3" />
                Start Free Trial
                <ArrowRight className="h-5 w-5 ml-3" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-primary/50 text-primary hover:bg-primary hover:text-white transition-all duration-300 rounded-xl">
              <Globe className="h-5 w-5 mr-3" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="content-center mb-3">
                  <div className="h-12 w-12 rounded-xl sustainalink-gradient content-center shadow-lg">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold sustainalink-text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-accent/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="info-gradient text-white mb-6 px-4 py-2 text-sm font-semibold shadow-lg">
              <CheckCircle className="h-4 w-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-foreground">Everything You Need for</span>
              <br />
              <span className="sustainalink-text-gradient">Sustainable Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive tools and insights to drive sustainability across your organization and supply chain partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="eco-card card-hover border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <CardHeader className="pb-4">
                  <div className="content-start gap-4">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br from-${feature.color.split('-')[1]}-100 to-${feature.color.split('-')[1]}-200 content-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className={`h-7 w-7 ${feature.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:sustainalink-text-gradient transition-all duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  <div className="content-start gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold text-primary">Learn more</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-3xl sustainalink-gradient shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your
              <br />
              Sustainability Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join thousands of organizations already using SustainaLink to build a more sustainable future.
            </p>
            <div className="content-center gap-6">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg bg-white text-primary hover:bg-white/90 shadow-xl rounded-xl font-semibold">
                  <Recycle className="h-5 w-5 mr-3" />
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 ml-3" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-2 border-white/50 text-white hover:bg-white/10 rounded-xl">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="content-between">
            <div className="content-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg sustainalink-gradient">
                <Package className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold sustainalink-text-gradient">
                SustainaLink
              </span>
            </div>
            <div className="content-start gap-8 text-sm text-muted-foreground">
              <span>© 2025 SustainaLink. All rights reserved.</span>
              <span>Built for a sustainable future.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
