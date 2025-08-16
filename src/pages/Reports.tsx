import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, TrendingUp, BarChart3, PieChart } from "lucide-react";

const Reports = () => {
  const reports = [
    {
      id: 1,
      name: "Monthly Sales Report",
      description: "Comprehensive sales analysis and customer metrics",
      category: "Sales",
      lastGenerated: "2024-01-20",
      frequency: "Monthly",
      status: "Ready",
      size: "2.4 MB"
    },
    {
      id: 2,
      name: "Payment Collection Summary",
      description: "Payment collections and outstanding dues analysis",
      category: "Finance",
      lastGenerated: "2024-01-19",
      frequency: "Weekly",
      status: "Ready",
      size: "1.8 MB"
    },
    {
      id: 3,
      name: "Project Progress Report",
      description: "Construction milestones and timeline analysis",
      category: "Projects",
      lastGenerated: "2024-01-18",
      frequency: "Bi-weekly",
      status: "Generating",
      size: "5.2 MB"
    },
    {
      id: 4,
      name: "Customer Satisfaction Survey",
      description: "Customer feedback and satisfaction metrics",
      category: "Customer Service",
      lastGenerated: "2024-01-15",
      frequency: "Quarterly",
      status: "Ready",
      size: "980 KB"
    }
  ];

  const reportCategories = [
    { name: "Sales", count: 8, icon: TrendingUp },
    { name: "Finance", count: 12, icon: BarChart3 },
    { name: "Projects", count: 6, icon: FileText },
    { name: "Customer Service", count: 4, icon: PieChart },
  ];

  const quickReports = [
    { name: "Today's Collections", value: "₹12,45,000", change: "+15%" },
    { name: "Units Sold This Month", value: "23", change: "+8%" },
    { name: "Active Projects", value: "3", change: "0%" },
    { name: "Customer Inquiries", value: "45", change: "+22%" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">Generate and manage business reports and analytics</p>
        </div>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Create Custom Report
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {quickReports.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>
                {' '}from last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Categories */}
      <div className="grid gap-4 md:grid-cols-4">
        {reportCategories.map((category) => (
          <Card key={category.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{category.name}</CardTitle>
              <category.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{category.count}</div>
              <p className="text-xs text-muted-foreground">Available reports</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Available Reports</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-1 h-3 w-3" />
              Schedule Report
            </Button>
            <Button variant="outline" size="sm">Filter</Button>
          </div>
        </div>

        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <CardTitle className="text-lg">{report.name}</CardTitle>
                    <CardDescription>{report.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={report.status === "Ready" ? "default" : "secondary"}>
                    {report.status}
                  </Badge>
                  <Badge variant="outline">{report.category}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Last Generated</p>
                    <p className="font-medium">{new Date(report.lastGenerated).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Frequency</p>
                    <p className="font-medium">{report.frequency}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">File Size</p>
                    <p className="font-medium">{report.size}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Category</p>
                    <p className="font-medium">{report.category}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled={report.status !== "Ready"}>
                    <Download className="mr-1 h-3 w-3" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    View Preview
                  </Button>
                  <Button variant="outline" size="sm">
                    Generate Now
                  </Button>
                  <Button variant="outline" size="sm">
                    Schedule
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Builder */}
      <Card>
        <CardHeader>
          <CardTitle>Custom Report Builder</CardTitle>
          <CardDescription>Create custom reports with specific data and filters</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Sales Performance</div>
                <div className="text-xs text-muted-foreground">Units sold, revenue, trends</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Financial Summary</div>
                <div className="text-xs text-muted-foreground">Collections, dues, payments</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Project Status</div>
                <div className="text-xs text-muted-foreground">Construction progress</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Customer Analytics</div>
                <div className="text-xs text-muted-foreground">Demographics, satisfaction</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Inventory Report</div>
                <div className="text-xs text-muted-foreground">Available units, bookings</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Compliance Report</div>
                <div className="text-xs text-muted-foreground">Legal, regulatory status</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;