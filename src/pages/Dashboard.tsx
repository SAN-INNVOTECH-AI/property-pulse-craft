import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  CreditCard,
  TrendingUp,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Home,
  MapPin,
  FileText,
  BarChart3,
  Plus
} from "lucide-react";

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30d");

  const kpiData = {
    projects: { total: 5, active: 3, planning: 1, completed: 1 },
    units: { total: 487, available: 156, allocated: 245, sold: 86 },
    customers: { total: 342, kyc_pending: 12, active: 330 },
    payments: { 
      total_value: 45600000, 
      pending: 23, 
      overdue: 7, 
      collected_this_month: 8900000 
    }
  };

  const recentActivities = [
    {
      id: 1,
      type: "unit_allocation",
      message: "Unit A-706 allocated to Rahul Kulkarni",
      time: "2 hours ago",
      icon: Home,
      status: "success"
    },
    {
      id: 2,
      type: "payment_received",
      message: "Payment of ₹13,00,000 received for Unit A-707",
      time: "4 hours ago",
      icon: CreditCard,
      status: "success"
    },
    {
      id: 3,
      type: "kyc_pending",
      message: "KYC verification pending for Priya Sharma",
      time: "6 hours ago",
      icon: AlertCircle,
      status: "warning"
    },
    {
      id: 4,
      type: "progress_update",
      message: "Floor 7 slab casting completed - VM Orchid",
      time: "1 day ago",
      icon: Building2,
      status: "info"
    }
  ];

  const topProjects = [
    {
      name: "VM Orchid",
      code: "VMO-01",
      location: "Ambala",
      units_total: 180,
      units_sold: 45,
      revenue: 28500000,
      completion: 65
    },
    {
      name: "Sunrise Heights",
      code: "SH-02",
      location: "Chandigarh", 
      units_total: 120,
      units_sold: 78,
      revenue: 52000000,
      completion: 82
    },
    {
      name: "Green Valley",
      code: "GV-03",
      location: "Mohali",
      units_total: 95,
      units_sold: 23,
      revenue: 15600000,
      completion: 35
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-surface min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's your real estate portfolio overview.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-muted rounded-lg p-1">
            {["7d", "30d", "90d"].map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? "default" : "ghost"}
                size="sm"
                onClick={() => setSelectedPeriod(period)}
                className="h-8"
              >
                {period}
              </Button>
            ))}
          </div>
          <Button variant="hero" size="lg" className="gap-2">
            <Plus className="h-4 w-4" />
            Quick Actions
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Projects KPI */}
        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Projects</CardTitle>
            <Building2 className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-bold text-foreground">{kpiData.projects.total}</div>
            <div className="flex gap-2 text-sm">
              <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                {kpiData.projects.active} Active
              </Badge>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                {kpiData.projects.planning} Planning
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Units KPI */}
        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Units</CardTitle>
            <Home className="h-5 w-5 text-accent" />
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-bold text-foreground">{kpiData.units.total}</div>
            <div className="flex gap-2 text-sm">
              <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                {kpiData.units.available} Available
              </Badge>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                {kpiData.units.allocated} Allocated
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Customers KPI */}
        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Customers</CardTitle>
            <Users className="h-5 w-5 text-success" />
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-bold text-foreground">{kpiData.customers.total}</div>
            <div className="flex gap-2 text-sm">
              <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                {kpiData.customers.active} Active
              </Badge>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                {kpiData.customers.kyc_pending} KYC Pending
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Payments KPI */}
        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Payments</CardTitle>
            <DollarSign className="h-5 w-5 text-warning" />
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-3xl font-bold text-foreground">
              {formatCurrency(kpiData.payments.collected_this_month)}
            </div>
            <div className="flex gap-2 text-sm">
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                {kpiData.payments.pending} Pending
              </Badge>
              <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/30">
                {kpiData.payments.overdue} Overdue
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Projects */}
        <Card className="shadow-medium border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Top Performing Projects
            </CardTitle>
            <CardDescription>Projects ranked by revenue and completion</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topProjects.map((project, index) => (
              <div key={project.code} className="p-4 rounded-lg bg-muted/30 border border-border/50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{project.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {project.location} • {project.code}
                    </div>
                  </div>
                  <Badge variant={index === 0 ? "default" : "secondary"}>
                    #{index + 1}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Units Sold:</span>
                    <div className="font-medium">{project.units_sold}/{project.units_total}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Revenue:</span>
                    <div className="font-medium">{formatCurrency(project.revenue)}</div>
                  </div>
                </div>

                <div className="mt-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Completion</span>
                    <span className="font-medium">{project.completion}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.completion}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="shadow-medium border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              Recent Activities
            </CardTitle>
            <CardDescription>Latest updates across your portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                  <div className={`p-2 rounded-lg ${
                    activity.status === 'success' ? 'bg-success/10 text-success' :
                    activity.status === 'warning' ? 'bg-warning/10 text-warning' :
                    'bg-primary/10 text-primary'
                  }`}>
                    <activity.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground leading-relaxed">
                      {activity.message}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All Activities
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-medium border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-large transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Plus className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Create New Project</h3>
            <p className="text-sm text-muted-foreground">Start a new real estate project</p>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-accent/5 to-accent/10 hover:shadow-large transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Add Customer</h3>
            <p className="text-sm text-muted-foreground">Onboard a new customer with KYC</p>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-success/5 to-success/10 hover:shadow-large transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="bg-success/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <FileText className="h-6 w-6 text-success" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Generate Report</h3>
            <p className="text-sm text-muted-foreground">Create detailed analytics reports</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;