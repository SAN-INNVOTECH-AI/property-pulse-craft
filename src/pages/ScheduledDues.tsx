import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus, Calendar, DollarSign, User, AlertTriangle } from "lucide-react";

const ScheduledDues = () => {
  const scheduledDues = [
    {
      id: 1,
      customerName: "Rajesh Kumar",
      unitNumber: "A-101",
      dueDate: "2024-01-25",
      amount: 2500000,
      type: "Milestone Payment",
      status: "Pending",
      daysOverdue: 0,
      description: "Foundation completion payment"
    },
    {
      id: 2,
      customerName: "Priya Sharma",
      unitNumber: "B-205",
      dueDate: "2024-01-20",
      amount: 1500000,
      type: "EMI",
      status: "Overdue",
      daysOverdue: 5,
      description: "Monthly EMI payment"
    },
    {
      id: 3,
      customerName: "Amit Singh",
      unitNumber: "A-304",
      dueDate: "2024-01-30",
      amount: 5000000,
      type: "Final Payment",
      status: "Upcoming",
      daysOverdue: 0,
      description: "Final possession payment"
    },
    {
      id: 4,
      customerName: "Meera Patel",
      unitNumber: "C-102",
      dueDate: "2024-01-22",
      amount: 750000,
      type: "Maintenance",
      status: "Overdue",
      daysOverdue: 3,
      description: "Annual maintenance charges"
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Pending":
        return "secondary" as const;
      case "Overdue":
        return "destructive" as const;
      case "Upcoming":
        return "default" as const;
      default:
        return "outline" as const;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const totalOverdue = scheduledDues
    .filter(due => due.status === "Overdue")
    .reduce((sum, due) => sum + due.amount, 0);

  const totalPending = scheduledDues
    .filter(due => due.status === "Pending")
    .reduce((sum, due) => sum + due.amount, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Scheduled Dues</h1>
          <p className="text-muted-foreground">Track and manage payment schedules</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Schedule Payment
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Dues</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{scheduledDues.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue Amount</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {formatCurrency(totalOverdue)}
            </div>
            <p className="text-xs text-muted-foreground">
              {scheduledDues.filter(d => d.status === "Overdue").length} payments overdue
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Amount</CardTitle>
            <DollarSign className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(totalPending)}
            </div>
            <p className="text-xs text-muted-foreground">
              {scheduledDues.filter(d => d.status === "Pending").length} payments pending
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{scheduledDues.length}</div>
            <p className="text-xs text-muted-foreground">Due this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Dues List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Payment Schedule</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Filter</Button>
            <Button variant="outline" size="sm">Export</Button>
          </div>
        </div>
        
        {scheduledDues.map((due) => (
          <Card key={due.id} className={due.status === "Overdue" ? "border-destructive/50" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {due.customerName}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-1">
                    <span>Unit: {due.unitNumber}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Due: {new Date(due.dueDate).toLocaleDateString()}
                    </span>
                    {due.daysOverdue > 0 && (
                      <span className="text-destructive flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        {due.daysOverdue} days overdue
                      </span>
                    )}
                  </CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{formatCurrency(due.amount)}</div>
                  <Badge variant={getStatusVariant(due.status)}>
                    {due.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Payment Type</p>
                    <p className="font-medium">{due.type}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Description</p>
                    <p className="font-medium">{due.description}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Send Reminder</Button>
                  <Button variant="outline" size="sm">Record Payment</Button>
                  <Button variant="outline" size="sm">View Details</Button>
                  {due.status === "Overdue" && (
                    <Button variant="destructive" size="sm">Follow Up</Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common payment management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Send Bulk Reminders</div>
                <div className="text-xs text-muted-foreground">Notify all overdue customers</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Generate Report</div>
                <div className="text-xs text-muted-foreground">Monthly dues summary</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Payment Plans</div>
                <div className="text-xs text-muted-foreground">Create payment schedules</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Auto Reminders</div>
                <div className="text-xs text-muted-foreground">Setup automatic notifications</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduledDues;