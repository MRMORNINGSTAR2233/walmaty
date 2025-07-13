'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award,
  Target,
  TrendingUp,
  Leaf,
  Building,
  Edit3,
  Camera,
  Save
} from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/10 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="content-between">
          <div>
            <h1 className="text-3xl font-bold sustainalink-text-gradient">Profile Settings</h1>
            <p className="text-muted-foreground font-medium mt-1">Manage your account and sustainability preferences</p>
          </div>
          <Button className="sustainalink-gradient shadow-lg hover:shadow-xl transition-all duration-300">
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Overview Card */}
          <Card className="lg:col-span-1 eco-card card-hover">
            <CardHeader className="text-center pb-4">
              <div className="relative mx-auto">
                <Avatar className="h-24 w-24 ring-4 ring-primary/20 shadow-xl">
                  <AvatarFallback className="sustainalink-gradient text-white text-2xl font-bold">
                    JD
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white text-primary hover:bg-primary hover:text-white shadow-lg"
                >
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4">
                <h2 className="text-xl font-bold text-foreground">John Doe</h2>
                <p className="text-muted-foreground font-medium">Sustainability Manager</p>
                <Badge className="mt-2 success-gradient text-white">
                  <Award className="h-3 w-3 mr-1" />
                  Eco Champion
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="content-start gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">john.doe@company.com</span>
                </div>
                <div className="content-start gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">+1 (555) 123-4567</span>
                </div>
                <div className="content-start gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">San Francisco, CA</span>
                </div>
                <div className="content-start gap-3 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium text-foreground">Joined March 2023</span>
                </div>
              </div>

              {/* Sustainability Score */}
              <div className="p-4 rounded-xl bg-success-soft border border-green-200">
                <div className="content-between mb-2">
                  <span className="text-sm font-bold text-green-800">Sustainability Score</span>
                  <span className="text-lg font-bold text-green-900">87/100</span>
                </div>
                <Progress value={87} className="h-2 [&>div]:bg-gradient-to-r [&>div]:from-green-500 [&>div]:to-emerald-400" />
                <p className="text-xs text-green-700 mt-1 font-medium">Excellent performance this month!</p>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <Card className="lg:col-span-2 eco-card">
            <Tabs defaultValue="personal" className="h-full">
              <CardHeader>
                <TabsList className="grid w-full grid-cols-4 bg-muted/50">
                  <TabsTrigger value="personal" className="font-semibold">Personal Info</TabsTrigger>
                  <TabsTrigger value="sustainability" className="font-semibold">Sustainability</TabsTrigger>
                  <TabsTrigger value="achievements" className="font-semibold">Achievements</TabsTrigger>
                  <TabsTrigger value="security" className="font-semibold">Security</TabsTrigger>
                </TabsList>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Personal Information Tab */}
                <TabsContent value="personal" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 content-start gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">First Name</label>
                        <Input defaultValue="John" className="border-border/50 focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Last Name</label>
                        <Input defaultValue="Doe" className="border-border/50 focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Email</label>
                        <Input defaultValue="john.doe@company.com" className="border-border/50 focus:border-primary" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Phone</label>
                        <Input defaultValue="+1 (555) 123-4567" className="border-border/50 focus:border-primary" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-semibold text-foreground">Job Title</label>
                        <Input defaultValue="Sustainability Manager" className="border-border/50 focus:border-primary" />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-semibold text-foreground">Department</label>
                        <Input defaultValue="Environmental Sustainability" className="border-border/50 focus:border-primary" />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Sustainability Tab */}
                <TabsContent value="sustainability" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 content-start gap-2">
                      <Leaf className="h-5 w-5 text-primary" />
                      Sustainability Goals & Metrics
                    </h3>
                    
                    {/* Goals Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-info-soft border border-blue-200">
                        <div className="content-between mb-2">
                          <span className="text-sm font-bold text-blue-800">Carbon Footprint</span>
                          <TrendingUp className="h-4 w-4 text-blue-600" />
                        </div>
                        <div className="text-2xl font-bold text-blue-900 mb-1">-23%</div>
                        <p className="text-xs text-blue-700 font-medium">Reduction this quarter</p>
                      </div>
                      
                      <div className="p-4 rounded-xl bg-warning-soft border border-yellow-200">
                        <div className="content-between mb-2">
                          <span className="text-sm font-bold text-yellow-800">Energy Savings</span>
                          <Target className="h-4 w-4 text-yellow-600" />
                        </div>
                        <div className="text-2xl font-bold text-yellow-900 mb-1">156 kWh</div>
                        <p className="text-xs text-yellow-700 font-medium">Saved this month</p>
                      </div>
                    </div>

                    {/* Progress Tracking */}
                    <div className="space-y-4">
                      <div>
                        <div className="content-between mb-2">
                          <span className="text-sm font-semibold text-foreground">Waste Reduction Goal</span>
                          <span className="text-sm font-bold text-primary">75% Complete</span>
                        </div>
                        <Progress value={75} className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-secondary" />
                      </div>
                      
                      <div>
                        <div className="content-between mb-2">
                          <span className="text-sm font-semibold text-foreground">Renewable Energy Usage</span>
                          <span className="text-sm font-bold text-green-600">92% Complete</span>
                        </div>
                        <Progress value={92} className="h-3 [&>div]:bg-gradient-to-r [&>div]:from-green-500 [&>div]:to-emerald-400" />
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Achievements Tab */}
                <TabsContent value="achievements" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 content-start gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Achievements & Certifications
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                        <div className="content-start gap-3 mb-3">
                          <div className="h-10 w-10 rounded-xl success-gradient content-center shadow-md">
                            <Award className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-green-800">Eco Champion</h4>
                            <p className="text-xs text-green-600 font-medium">Level 5 Sustainability Leader</p>
                          </div>
                        </div>
                        <p className="text-sm text-green-700">Achieved 90%+ sustainability goals for 6 months</p>
                      </div>

                      <div className="p-4 rounded-xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
                        <div className="content-start gap-3 mb-3">
                          <div className="h-10 w-10 rounded-xl info-gradient content-center shadow-md">
                            <Leaf className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-blue-800">Carbon Neutral</h4>
                            <p className="text-xs text-blue-600 font-medium">Zero Carbon Footprint</p>
                          </div>
                        </div>
                        <p className="text-sm text-blue-700">Maintained carbon-neutral status for 1 year</p>
                      </div>

                      <div className="p-4 rounded-xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-violet-50">
                        <div className="content-start gap-3 mb-3">
                          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-purple-500 to-violet-500 content-center shadow-md">
                            <Building className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-purple-800">Green Building</h4>
                            <p className="text-xs text-purple-600 font-medium">LEED Certified Workspace</p>
                          </div>
                        </div>
                        <p className="text-sm text-purple-700">Led team to achieve LEED Platinum certification</p>
                      </div>

                      <div className="p-4 rounded-xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
                        <div className="content-start gap-3 mb-3">
                          <div className="h-10 w-10 rounded-xl warning-gradient content-center shadow-md">
                            <Target className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-orange-800">Innovation Leader</h4>
                            <p className="text-xs text-orange-600 font-medium">Sustainability Innovation</p>
                          </div>
                        </div>
                        <p className="text-sm text-orange-700">Implemented 5+ green technology solutions</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Security Tab */}
                <TabsContent value="security" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 content-start gap-2">
                      <Edit3 className="h-5 w-5 text-primary" />
                      Security Settings
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Current Password</label>
                        <Input type="password" placeholder="Enter current password" className="border-border/50 focus:border-primary" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">New Password</label>
                        <Input type="password" placeholder="Enter new password" className="border-border/50 focus:border-primary" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-foreground">Confirm New Password</label>
                        <Input type="password" placeholder="Confirm new password" className="border-border/50 focus:border-primary" />
                      </div>

                      <Button className="w-full md:w-auto sustainalink-gradient shadow-lg hover:shadow-xl transition-all duration-300">
                        Update Password
                      </Button>
                    </div>

                    <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border/50">
                      <h4 className="font-bold text-foreground mb-2">Two-Factor Authentication</h4>
                      <p className="text-sm text-muted-foreground mb-3">Add an extra layer of security to your account</p>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        Enable 2FA
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}
