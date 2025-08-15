import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CreditCard,
  Plus,
  Search,
  Filter,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
  Edit,
  DollarSign,
  Calendar,
  TrendingUp,
  RefreshCw
} from "lucide-react";

const Payments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const payments = [
    {
      id: "PMT-1023",
      customer: "Rahul Kulkarni",
      unit: "A-706",
      project: "VM Orchid",
      status: "paid",
      quoteSubtotal: 1230000,
      discountTotal: 0,
      taxTotal: 63300,
      grandTotal: 1293300,
      actualPaid: 1293300,
      dueDate: "2025-09-17",
      createdAt: "2025-09-02",
      milestoneType: "7th Slab - 15%",
      captureMethod: "NEFT",
      txnRef: "NEFT-55221"
    },
    {
      id: "PMT-1024",
      customer: "Sneha Reddy", 
      unit: "V-12",
      project: "VM Orchid",
      status: "pending",
      quoteSubtotal: 3375000,
      discountTotal: 75000,
      taxTotal: 165000,
      grandTotal: 3465000,
      actualPaid: 0,
      dueDate: "2025-01-20",
      createdAt: "2025-01-05",
      milestoneType: "Booking - 15%",
      captureMethod: null,
      txnRef: null
    },
    {
      id: "PMT-1025",
      customer: "Priya Sharma",
      unit: "B-201", 
      project: "Sunrise Heights",
      status: "partially_refunded",
      quoteSubtotal: 1680000,
      discountTotal: 0,
      taxTotal: 84000,
      grandTotal: 1764000,
      actualPaid: 1764000,
      refunded: 50000,
      dueDate: "2024-11-15",
      createdAt: "2024-10-28",
      milestoneType: "Possession",
      captureMethod: "UPI",
      txnRef: "UPI-REF-789123"
    },
    {
      id: "PMT-1026",
      customer: "Amit Patel",
      unit: "A-302",
      project: "Green Valley", 
      status: "draft",
      quoteSubtotal: 950000,
      discountTotal: 50000,
      taxTotal: 45000,
      grandTotal: 945000,
      actualPaid: 0,
      dueDate: "2025-02-01",
      createdAt: "2025-01-12",
      milestoneType: "2nd Milestone - 10%",
      captureMethod: null,
      txnRef: null
    },
    {
      id: "PMT-1027",
      customer: "Rahul Kulkarni",
      unit: "A-706",
      project: "VM Orchid",
      status: "pending",
      quoteSubtotal: 820000,
      discountTotal: 20000,
      taxTotal: 40000,
      grandTotal: 840000,
      actualPaid: 0,
      dueDate: "2025-01-18",
      createdAt: "2025-01-03",
      milestoneType: "Booking - 10%",
      captureMethod: null,
      txnRef: null
    },
    {
      id: "PMT-1028",
      customer: "Rajesh Kumar",
      unit: "L-45",
      project: "VM Orchid",
      status: "pending",
      quoteSubtotal: 560000,
      discountTotal: 0,
      taxTotal: 100800,
      grandTotal: 660800,
      actualPaid: 0,
      dueDate: "2025-01-14",
      createdAt: "2024-12-30",
      milestoneType: "Land Payment - 10%",
      captureMethod: null,
      txnRef: null,
      overdue: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-success/10 text-success border-success/30";
      case "pending":
        return "bg-warning/10 text-warning border-warning/30";
      case "draft":
        return "bg-muted/10 text-muted-foreground border-muted/30";
      case "partially_refunded":
        return "bg-primary/10 text-primary border-primary/30";
      case "refunded":
        return "bg-destructive/10 text-destructive border-destructive/30";
      case "void":
        return "bg-muted/10 text-muted-foreground border-muted/30";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/30";
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const isOverdue = (dueDate: string, status: string) => {
    return status === 'pending' && new Date(dueDate) < new Date();
  };

  const filteredPayments = payments.filter(payment => {
    const matchesSearch = 
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.project.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || payment.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const totalPending = payments
    .filter(p => p.status === 'pending')
    .reduce((sum, p) => sum + p.grandTotal, 0);

  const totalCollected = payments
    .filter(p => p.status === 'paid' || p.status === 'partially_refunded')
    .reduce((sum, p) => sum + p.actualPaid, 0);

  const overdueCount = payments.filter(p => isOverdue(p.dueDate, p.status)).length;

  return (
    <div className="p-6 space-y-6 bg-gradient-surface min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Payments</h1>
          <p className="text-muted-foreground">Manage payment processing, quotes, and collections.</p>
        </div>
        <Button variant="hero" size="lg" className="gap-2">
          <Plus className="h-4 w-4" />
          Create Payment
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Pending</p>
                <p className="text-2xl font-bold text-warning">
                  {formatCurrency(totalPending)}
                </p>
              </div>
              <Clock className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Collected</p>
                <p className="text-2xl font-bold text-success">
                  {formatCurrency(totalCollected)}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Overdue</p>
                <p className="text-2xl font-bold text-destructive">{overdueCount}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold text-primary">
                  {formatCurrency(8900000)}
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div>
                <CardTitle>Payment Management</CardTitle>
                <CardDescription>Track and process all payment transactions</CardDescription>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <div className="relative flex-1 sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search payments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="partially_refunded">Partial Refund</SelectItem>
                  <SelectItem value="refunded">Refunded</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead className="font-semibold">Payment ID</TableHead>
                  <TableHead className="font-semibold">Customer</TableHead>
                  <TableHead className="font-semibold">Unit</TableHead>
                  <TableHead className="font-semibold">Milestone</TableHead>
                  <TableHead className="font-semibold">Amount</TableHead>
                  <TableHead className="font-semibold">Due Date</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Payment Method</TableHead>
                  <TableHead className="font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPayments.map((payment) => (
                  <TableRow 
                    key={payment.id} 
                    className={`hover:bg-muted/20 ${
                      isOverdue(payment.dueDate, payment.status) ? 'bg-destructive/5' : ''
                    }`}
                  >
                    <TableCell>
                      <div className="font-mono text-sm font-medium text-foreground">
                        {payment.id}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{payment.customer}</div>
                        <div className="text-sm text-muted-foreground">
                          {payment.project}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-foreground">{payment.unit}</div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div className="font-medium text-foreground">{payment.milestoneType}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-semibold text-foreground">
                          {formatCurrency(payment.grandTotal)}
                        </div>
                        {payment.discountTotal > 0 && (
                          <div className="text-xs text-success">
                            -{formatCurrency(payment.discountTotal)} discount
                          </div>
                        )}
                        {payment.status === 'paid' && (
                          <div className="text-xs text-success font-medium">
                            ✓ Paid {formatCurrency(payment.actualPaid)}
                          </div>
                        )}
                        {payment.refunded && (
                          <div className="text-xs text-destructive">
                            -{formatCurrency(payment.refunded)} refunded
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {isOverdue(payment.dueDate, payment.status) && (
                          <AlertCircle className="h-4 w-4 text-destructive" />
                        )}
                        <div className={`text-sm ${
                          isOverdue(payment.dueDate, payment.status) 
                            ? 'text-destructive font-medium' 
                            : 'text-muted-foreground'
                        }`}>
                          {formatDate(payment.dueDate)}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <Badge variant="outline" className={getStatusColor(payment.status)}>
                          {payment.status.replace('_', ' ').toUpperCase()}
                        </Badge>
                        {isOverdue(payment.dueDate, payment.status) && (
                          <div className="text-xs text-destructive">Overdue</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {payment.captureMethod ? (
                          <div>
                            <div className="font-medium text-foreground">{payment.captureMethod}</div>
                            {payment.txnRef && (
                              <div className="text-xs text-muted-foreground font-mono">
                                {payment.txnRef}
                              </div>
                            )}
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        {payment.status === 'draft' && (
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Edit className="h-4 w-4" />
                          </Button>
                        )}
                        {payment.status === 'pending' && (
                          <Button variant="accent" size="sm" className="h-8 px-3 text-xs">
                            Capture
                          </Button>
                        )}
                        {payment.status === 'paid' && (
                          <Button variant="outline" size="sm" className="h-8 px-3 text-xs gap-1">
                            <RefreshCw className="h-3 w-3" />
                            Refund
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payments;