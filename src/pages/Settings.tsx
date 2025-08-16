import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Save, Bell, Shield, Database, Mail, Palette, Globe, Lock, Users } from "lucide-react";

const SettingsPage = () => {
  const settingsCategories = [
    {
      name: "General",
      icon: Settings,
      description: "Basic application settings and preferences",
      settings: [
        { name: "Company Name", value: "VM Real Construction", type: "text" },
        { name: "Time Zone", value: "Asia/Kolkata (GMT +5:30)", type: "select" },
        { name: "Date Format", value: "DD/MM/YYYY", type: "select" },
        { name: "Currency", value: "INR (₹)", type: "select" }
      ]
    },
    {
      name: "Notifications",
      icon: Bell,
      description: "Configure email and system notifications",
      settings: [
        { name: "Payment Reminders", value: "Enabled", type: "toggle" },
        { name: "Milestone Updates", value: "Enabled", type: "toggle" },
        { name: "System Alerts", value: "Enabled", type: "toggle" },
        { name: "Email Frequency", value: "Daily", type: "select" }
      ]
    },
    {
      name: "Security",
      icon: Shield,
      description: "Security and access control settings",
      settings: [
        { name: "Two-Factor Authentication", value: "Disabled", type: "toggle" },
        { name: "Session Timeout", value: "30 minutes", type: "select" },
        { name: "Password Policy", value: "Strong", type: "select" },
        { name: "Login Attempts", value: "5", type: "number" }
      ]
    },
    {
      name: "Database",
      icon: Database,
      description: "Database and backup configurations",
      settings: [
        { name: "Auto Backup", value: "Enabled", type: "toggle" },
        { name: "Backup Frequency", value: "Daily", type: "select" },
        { name: "Data Retention", value: "5 years", type: "select" },
        { name: "Archive Old Records", value: "Enabled", type: "toggle" }
      ]
    }
  ];

  const systemStatus = [
    { name: "Database", status: "Healthy", lastCheck: "2024-01-20 10:30 AM" },
    { name: "Email Service", status: "Healthy", lastCheck: "2024-01-20 10:25 AM" },
    { name: "Backup Service", status: "Healthy", lastCheck: "2024-01-20 09:00 AM" },
    { name: "Authentication", status: "Healthy", lastCheck: "2024-01-20 10:35 AM" }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage application settings and configurations</p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save All Changes
        </Button>
      </div>

      {/* System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            System Status
          </CardTitle>
          <CardDescription>Current status of system components</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {systemStatus.map((service) => (
              <div key={service.name} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{service.name}</p>
                  <p className="text-xs text-muted-foreground">{service.lastCheck}</p>
                </div>
                <Badge variant="default" className="bg-success text-success-foreground">
                  {service.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Settings Categories */}
      <div className="grid gap-6 md:grid-cols-2">
        {settingsCategories.map((category) => (
          <Card key={category.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <category.icon className="h-5 w-5" />
                {category.name}
              </CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {category.settings.map((setting) => (
                  <div key={setting.name} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{setting.name}</p>
                    </div>
                    <div className="text-right">
                      {setting.type === "toggle" ? (
                        <Badge variant={setting.value === "Enabled" ? "default" : "secondary"}>
                          {setting.value}
                        </Badge>
                      ) : (
                        <span className="text-sm text-muted-foreground">{setting.value}</span>
                      )}
                    </div>
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Configure {category.name}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Advanced Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Advanced Settings
          </CardTitle>
          <CardDescription>Advanced configuration options for system administrators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Database Management
                </div>
                <div className="text-xs text-muted-foreground">Backup, restore, optimization</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Configuration
                </div>
                <div className="text-xs text-muted-foreground">SMTP settings, templates</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  User Management
                </div>
                <div className="text-xs text-muted-foreground">Roles, permissions, access</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Theme Customization
                </div>
                <div className="text-xs text-muted-foreground">Colors, branding, logos</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Security Policies
                </div>
                <div className="text-xs text-muted-foreground">Password, session, audit</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Integration Settings
                </div>
                <div className="text-xs text-muted-foreground">APIs, webhooks, third-party</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Configuration Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Configuration Changes</CardTitle>
          <CardDescription>Latest modifications to system settings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Payment reminder frequency updated</p>
                <p className="text-xs text-muted-foreground">Changed from Weekly to Daily</p>
              </div>
              <div className="text-xs text-muted-foreground">2024-01-19</div>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Two-factor authentication disabled</p>
                <p className="text-xs text-muted-foreground">Security setting modified</p>
              </div>
              <div className="text-xs text-muted-foreground">2024-01-18</div>
            </div>
            
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <p className="font-medium">Backup frequency increased</p>
                <p className="text-xs text-muted-foreground">Now running daily backups</p>
              </div>
              <div className="text-xs text-muted-foreground">2024-01-17</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;