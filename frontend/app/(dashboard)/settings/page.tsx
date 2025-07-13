'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  Settings, 
  Bell, 
  Shield, 
  Palette, 
  Globe,
  Download,
  Trash2,
  Monitor,
  Moon,
  Sun,
  Mail,
  Smartphone,
  Volume2,
  Eye,
  Lock,
  Key,
  Database,
  HardDrive
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/10 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="content-between">
          <div>
            <h1 className="text-3xl font-bold sustainalink-text-gradient">Settings</h1>
            <p className="text-muted-foreground font-medium mt-1">Customize your SustainaLink experience</p>
          </div>
          <Button className="sustainalink-gradient shadow-lg hover:shadow-xl transition-all duration-300">
            <Download className="h-4 w-4 mr-2" />
            Export Settings
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Settings Navigation */}
          <Card className="lg:col-span-1 eco-card">
            <CardHeader>
              <CardTitle className="content-start gap-2 text-lg">
                <Settings className="h-5 w-5 text-primary" />
                Categories
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-accent/60 rounded-xl">
                  <Bell className="h-4 w-4 text-primary" />
                  <span className="font-medium">Notifications</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-accent/60 rounded-xl">
                  <Palette className="h-4 w-4 text-secondary" />
                  <span className="font-medium">Appearance</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-accent/60 rounded-xl">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span className="font-medium">Privacy</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-accent/60 rounded-xl">
                  <Globe className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">Language</span>
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-accent/60 rounded-xl">
                  <Database className="h-4 w-4 text-purple-600" />
                  <span className="font-medium">Data</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Main Settings Content */}
          <Card className="lg:col-span-3 eco-card">
            <Tabs defaultValue="notifications" className="h-full">
              <CardHeader>
                <TabsList className="grid w-full grid-cols-5 bg-muted/50">
                  <TabsTrigger value="notifications" className="font-semibold">Notifications</TabsTrigger>
                  <TabsTrigger value="appearance" className="font-semibold">Appearance</TabsTrigger>
                  <TabsTrigger value="privacy" className="font-semibold">Privacy</TabsTrigger>
                  <TabsTrigger value="language" className="font-semibold">Language</TabsTrigger>
                  <TabsTrigger value="data" className="font-semibold">Data</TabsTrigger>
                </TabsList>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Notifications Tab */}
                <TabsContent value="notifications" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 content-start gap-2">
                      <Bell className="h-5 w-5 text-primary" />
                      Notification Preferences
                    </h3>
                    
                    {/* Email Notifications */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-info-soft border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-3 content-start gap-2">
                          <Mail className="h-4 w-4" />
                          Email Notifications
                        </h4>
                        <div className="space-y-3">
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-blue-900">Sustainability Reports</p>
                              <p className="text-xs text-blue-700">Weekly environmental impact summaries</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-blue-900">Goal Achievements</p>
                              <p className="text-xs text-blue-700">When you reach sustainability milestones</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-blue-900">System Alerts</p>
                              <p className="text-xs text-blue-700">Critical environmental threshold warnings</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>

                      {/* Push Notifications */}
                      <div className="p-4 rounded-xl bg-success-soft border border-green-200">
                        <h4 className="font-bold text-green-800 mb-3 content-start gap-2">
                          <Smartphone className="h-4 w-4" />
                          Push Notifications
                        </h4>
                        <div className="space-y-3">
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-green-900">Real-time Updates</p>
                              <p className="text-xs text-green-700">Instant notifications for important events</p>
                            </div>
                            <Switch />
                          </div>
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-green-900">Daily Reminders</p>
                              <p className="text-xs text-green-700">Eco-friendly tips and task reminders</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                        </div>
                      </div>

                      {/* Sound Settings */}
                      <div className="p-4 rounded-xl bg-warning-soft border border-yellow-200">
                        <h4 className="font-bold text-yellow-800 mb-3 content-start gap-2">
                          <Volume2 className="h-4 w-4" />
                          Sound & Vibration
                        </h4>
                        <div className="space-y-3">
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-yellow-900">Notification Sounds</p>
                              <p className="text-xs text-yellow-700">Play sound for notifications</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-yellow-900">Vibration</p>
                              <p className="text-xs text-yellow-700">Vibrate on mobile notifications</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Appearance Tab */}
                <TabsContent value="appearance" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 content-start gap-2">
                      <Palette className="h-5 w-5 text-secondary" />
                      Appearance & Theme
                    </h3>
                    
                    {/* Theme Selection */}
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                        <h4 className="font-bold text-foreground mb-4">Theme Selection</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-4 rounded-xl border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 cursor-pointer hover:from-primary/10 hover:to-primary/20 transition-all">
                            <div className="content-center mb-3">
                              <Sun className="h-8 w-8 text-primary" />
                            </div>
                            <h5 className="font-bold text-center text-foreground">Light Mode</h5>
                            <p className="text-xs text-center text-muted-foreground mt-1">Clean and bright interface</p>
                          </div>
                          
                          <div className="p-4 rounded-xl border-2 border-border bg-muted/30 cursor-pointer hover:bg-muted/50 transition-all">
                            <div className="content-center mb-3">
                              <Moon className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h5 className="font-bold text-center text-foreground">Dark Mode</h5>
                            <p className="text-xs text-center text-muted-foreground mt-1">Easy on the eyes</p>
                          </div>
                          
                          <div className="p-4 rounded-xl border-2 border-border bg-muted/30 cursor-pointer hover:bg-muted/50 transition-all">
                            <div className="content-center mb-3">
                              <Monitor className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h5 className="font-bold text-center text-foreground">Auto</h5>
                            <p className="text-xs text-center text-muted-foreground mt-1">Match system preference</p>
                          </div>
                        </div>
                      </div>

                      {/* Display Settings */}
                      <div className="p-4 rounded-xl bg-accent/50 border border-green-200">
                        <h4 className="font-bold text-foreground mb-4">Display Settings</h4>
                        <div className="space-y-3">
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-foreground">Compact Mode</p>
                              <p className="text-xs text-muted-foreground">Show more content in less space</p>
                            </div>
                            <Switch />
                          </div>
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-foreground">Animations</p>
                              <p className="text-xs text-muted-foreground">Enable smooth transitions and effects</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-foreground">High Contrast</p>
                              <p className="text-xs text-muted-foreground">Improve text readability</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Privacy Tab */}
                <TabsContent value="privacy" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 content-start gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      Privacy & Security
                    </h3>
                    
                    <div className="space-y-4">
                      {/* Data Privacy */}
                      <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                        <h4 className="font-bold text-green-800 mb-3 content-start gap-2">
                          <Eye className="h-4 w-4" />
                          Data Privacy
                        </h4>
                        <div className="space-y-3">
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-green-900">Data Collection</p>
                              <p className="text-xs text-green-700">Allow collection of usage analytics</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-green-900">Performance Metrics</p>
                              <p className="text-xs text-green-700">Share performance data to improve service</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </div>

                      {/* Account Security */}
                      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-3 content-start gap-2">
                          <Lock className="h-4 w-4" />
                          Account Security
                        </h4>
                        <div className="space-y-3">
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-blue-900">Two-Factor Authentication</p>
                              <p className="text-xs text-blue-700">Extra security for your account</p>
                            </div>
                            <Badge className="success-gradient text-white">Enabled</Badge>
                          </div>
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-blue-900">Session Timeout</p>
                              <p className="text-xs text-blue-700">Auto logout after inactivity</p>
                            </div>
                            <Input defaultValue="30 minutes" className="w-32 text-right" />
                          </div>
                        </div>
                      </div>

                      {/* API Access */}
                      <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
                        <h4 className="font-bold text-purple-800 mb-3 content-start gap-2">
                          <Key className="h-4 w-4" />
                          API Access
                        </h4>
                        <div className="space-y-3">
                          <div className="content-between">
                            <div>
                              <p className="font-semibold text-purple-900">Third-party Integrations</p>
                              <p className="text-xs text-purple-700">Allow external apps to access your data</p>
                            </div>
                            <Switch />
                          </div>
                          <Button variant="outline" className="w-full border-purple-300 text-purple-700 hover:bg-purple-100">
                            <Key className="h-4 w-4 mr-2" />
                            Manage API Keys
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Language Tab */}
                <TabsContent value="language" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 content-start gap-2">
                      <Globe className="h-5 w-5 text-blue-600" />
                      Language & Region
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                        <h4 className="font-bold text-foreground mb-4">Interface Language</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="p-3 rounded-lg border-2 border-primary bg-primary/5 cursor-pointer">
                            <div className="font-semibold text-foreground">English (US)</div>
                            <div className="text-xs text-muted-foreground">Default language</div>
                          </div>
                          <div className="p-3 rounded-lg border border-border hover:border-primary cursor-pointer transition-colors">
                            <div className="font-semibold text-foreground">Español</div>
                            <div className="text-xs text-muted-foreground">Spanish</div>
                          </div>
                          <div className="p-3 rounded-lg border border-border hover:border-primary cursor-pointer transition-colors">
                            <div className="font-semibold text-foreground">Français</div>
                            <div className="text-xs text-muted-foreground">French</div>
                          </div>
                          <div className="p-3 rounded-lg border border-border hover:border-primary cursor-pointer transition-colors">
                            <div className="font-semibold text-foreground">Deutsch</div>
                            <div className="text-xs text-muted-foreground">German</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-accent/50 border border-green-200">
                        <h4 className="font-bold text-foreground mb-4">Regional Settings</h4>
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-foreground">Date Format</label>
                              <Input defaultValue="MM/DD/YYYY" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-semibold text-foreground">Time Format</label>
                              <Input defaultValue="12-hour" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-semibold text-foreground">Timezone</label>
                            <Input defaultValue="Pacific Standard Time (PST)" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Data Tab */}
                <TabsContent value="data" className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-4 content-start gap-2">
                      <Database className="h-5 w-5 text-purple-600" />
                      Data Management
                    </h3>
                    
                    <div className="space-y-4">
                      {/* Storage Usage */}
                      <div className="p-4 rounded-xl bg-info-soft border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-3 content-start gap-2">
                          <HardDrive className="h-4 w-4" />
                          Storage Usage
                        </h4>
                        <div className="space-y-3">
                          <div className="content-between">
                            <span className="text-sm font-semibold text-blue-900">Used Storage</span>
                            <span className="text-sm font-bold text-blue-900">2.4 GB of 10 GB</span>
                          </div>
                          <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                            <div className="h-full w-1/4 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                          </div>
                        </div>
                      </div>

                      {/* Data Export */}
                      <div className="p-4 rounded-xl bg-success-soft border border-green-200">
                        <h4 className="font-bold text-green-800 mb-3 content-start gap-2">
                          <Download className="h-4 w-4" />
                          Data Export
                        </h4>
                        <p className="text-sm text-green-700 mb-4">Download all your sustainability data and reports</p>
                        <Button className="success-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300">
                          <Download className="h-4 w-4 mr-2" />
                          Export All Data
                        </Button>
                      </div>

                      {/* Data Deletion */}
                      <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                        <h4 className="font-bold text-red-800 mb-3 content-start gap-2">
                          <Trash2 className="h-4 w-4" />
                          Data Deletion
                        </h4>
                        <p className="text-sm text-red-700 mb-4">Permanently delete your account and all associated data</p>
                        <Button variant="destructive" className="shadow-lg">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete Account
                        </Button>
                      </div>
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
