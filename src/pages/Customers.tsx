import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  Plus,
  Search,
  Filter,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Eye,
  Edit,
  AlertCircle,
  CheckCircle
} from "lucide-react";

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const customers = [
    {
      id: "1",
      firstName: "Rahul",
      lastName: "Kulkarni", 
      email: "rahul.k@example.com",
      phone: "+91-98989-00011",
      govIdType: "PAN",
      govIdNumber: "ABCDE1234F",
      dateOfBirth: "1991-03-02",
      address: "Flat 10, Kothrud, Pune, MH, 411038",
      gstin: null,
      photoPath: "/uploads/customers/rahul_photo.jpg",
      addressProofPath: "/uploads/customers/rahul_proof.pdf",
      kycComplete: true,
      allocatedUnits: [
        { project: "VM Orchid", unitNumber: "A-706", status: "ALLOCATED" }
      ],
      createdAt: "2024-09-15",
      totalInvestment: 8200000
    },
    {
      id: "2",
      firstName: "Priya",
      lastName: "Sharma",
      email: "priya.sharma@email.com", 
      phone: "+91-98765-43210",
      govIdType: "AADHAAR",
      govIdNumber: "1234-5678-9012",
      dateOfBirth: "1985-07-18",
      address: "House 45, Sector 22, Chandigarh, 160022",
      gstin: "29ABCDE1234F1Z5",
      photoPath: "/uploads/customers/priya_photo.jpg",
      addressProofPath: "/uploads/customers/priya_proof.pdf",
      kycComplete: true,
      allocatedUnits: [
        { project: "Sunrise Heights", unitNumber: "B-201", status: "SOLD" }
      ],
      createdAt: "2023-11-22",
      totalInvestment: 11200000
    },
    {
      id: "3",
      firstName: "Amit",
      lastName: "Patel",
      email: "amit.patel91@gmail.com",
      phone: "+91-97654-32109",
      govIdType: "PAN",
      govIdNumber: "FGHIJ5678K",
      dateOfBirth: "1988-12-05",
      address: "B-302, Maple Heights, Mohali, PB, 140301",
      gstin: null,
      photoPath: null,
      addressProofPath: "/uploads/customers/amit_proof.pdf",
      kycComplete: false,
      allocatedUnits: [],
      createdAt: "2024-12-10",
      totalInvestment: 0
    },
    {
      id: "4", 
      firstName: "Sneha",
      lastName: "Reddy",
      email: "sneha.reddy@corporate.com",
      phone: "+91-99887-76543",
      govIdType: "PAN",
      govIdNumber: "KLMNO9012P",
      dateOfBirth: "1992-04-28",
      address: "Villa 12, Greenwood Society, Ambala, HR, 134003",
      gstin: "06KLMNO9012P2Z8",
      photoPath: "/uploads/customers/sneha_photo.jpg",
      addressProofPath: "/uploads/customers/sneha_proof.pdf",
      kycComplete: true,
      allocatedUnits: [
        { project: "VM Orchid", unitNumber: "V-12", status: "ALLOCATED" }
      ],
      createdAt: "2024-08-03",
      totalInvestment: 22500000
    },
    {
      id: "5",
      firstName: "Rajesh",
      lastName: "Kumar",
      email: "rajesh.kumar.biz@yahoo.com", 
      phone: "+91-96543-21098",
      govIdType: "AADHAAR",
      govIdNumber: "9876-5432-1098",
      dateOfBirth: "1979-01-15",
      address: "SCO 45, Sector 17, Panchkula, HR, 134109",
      gstin: null,
      photoPath: "/uploads/customers/rajesh_photo.jpg",
      addressProofPath: null,
      kycComplete: false,
      allocatedUnits: [],
      createdAt: "2024-11-28",
      totalInvestment: 0
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

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  const filteredCustomers = customers.filter(customer => {
    const searchLower = searchTerm.toLowerCase();
    return (
      customer.firstName.toLowerCase().includes(searchLower) ||
      customer.lastName.toLowerCase().includes(searchLower) ||
      customer.email.toLowerCase().includes(searchLower) ||
      customer.phone.includes(searchTerm) ||
      customer.govIdNumber.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="p-6 space-y-6 bg-gradient-surface min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Customers</h1>
          <p className="text-muted-foreground">Manage customer information and KYC verification.</p>
        </div>
        <Button variant="hero" size="lg" className="gap-2">
          <Plus className="h-4 w-4" />
          Add Customer
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Customers</p>
                <p className="text-2xl font-bold text-foreground">{customers.length}</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">KYC Complete</p>
                <p className="text-2xl font-bold text-success">
                  {customers.filter(c => c.kycComplete).length}
                </p>
              </div>
              <div className="h-8 w-8 rounded-full bg-success/10 flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">KYC Pending</p>
                <p className="text-2xl font-bold text-warning">
                  {customers.filter(c => !c.kycComplete).length}
                </p>
              </div>
              <div className="h-8 w-8 rounded-full bg-warning/10 flex items-center justify-center">
                <AlertCircle className="h-4 w-4 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Investors</p>
                <p className="text-2xl font-bold text-accent">
                  {customers.filter(c => c.allocatedUnits.length > 0).length}
                </p>
              </div>
              <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-accent" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <CardTitle>Customer Directory</CardTitle>
              <CardDescription>View and manage all customer records</CardDescription>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead className="font-semibold">Customer</TableHead>
                  <TableHead className="font-semibold">Contact</TableHead>
                  <TableHead className="font-semibold">Gov ID</TableHead>
                  <TableHead className="font-semibold">KYC Status</TableHead>
                  <TableHead className="font-semibold">Units</TableHead>
                  <TableHead className="font-semibold">Investment</TableHead>
                  <TableHead className="font-semibold">Joined</TableHead>
                  <TableHead className="font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredCustomers.map((customer) => (
                  <TableRow key={customer.id} className="hover:bg-muted/20">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={customer.photoPath || undefined} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {getInitials(customer.firstName, customer.lastName)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-foreground">
                            {customer.firstName} {customer.lastName}
                          </div>
                          <div className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {customer.address.split(',').slice(-2).join(',').trim()}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm">
                          <Mail className="h-3 w-3 text-muted-foreground" />
                          <span className="text-foreground">{customer.email}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Phone className="h-3 w-3 text-muted-foreground" />
                          <span className="text-muted-foreground font-mono">{customer.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <Badge variant="secondary" className="text-xs">
                          {customer.govIdType}
                        </Badge>
                        <div className="text-sm font-mono text-muted-foreground">
                          {customer.govIdNumber}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {customer.kycComplete ? (
                          <>
                            <CheckCircle className="h-4 w-4 text-success" />
                            <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                              Complete
                            </Badge>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="h-4 w-4 text-warning" />
                            <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
                              Pending
                            </Badge>
                          </>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        {customer.allocatedUnits.length > 0 ? (
                          customer.allocatedUnits.map((unit, index) => (
                            <div key={index} className="text-sm">
                              <span className="font-medium">{unit.unitNumber}</span>
                              <div className="text-muted-foreground text-xs">
                                {unit.project} • {unit.status}
                              </div>
                            </div>
                          ))
                        ) : (
                          <span className="text-muted-foreground text-sm">No units</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {customer.totalInvestment > 0 ? (
                          <span className="font-medium text-foreground">
                            {formatCurrency(customer.totalInvestment)}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {formatDate(customer.createdAt)}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {!customer.kycComplete && (
                          <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
                            Complete KYC
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

export default Customers;