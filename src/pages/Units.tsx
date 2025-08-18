import { useState } from "react";
import { Button } from "@/components/ui/button";
import UnitForm from "@/components/forms/UnitForm";
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
  Home,
  Plus,
  Search,
  Filter,
  Lock,
  Unlock,
  Eye,
  Edit,
  Building,
  MapPin
} from "lucide-react";

const Units = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [projectFilter, setProjectFilter] = useState("all");
  const [showUnitForm, setShowUnitForm] = useState(false);
  const [editingUnit, setEditingUnit] = useState(null);

  const units = [
    {
      id: "1",
      unitNumber: "A-706",
      project: "VM Orchid",
      projectCode: "VMO-01",
      propertyType: "Apartment",
      tower: "Tower A",
      floor: 7,
      carpetArea: 812,
      builtUpArea: 975,
      bedrooms: 2,
      bathrooms: 2,
      parkingSlots: 1,
      facing: "East",
      basePrice: 8200000,
      status: "ALLOCATED",
      customerName: "Rahul Kulkarni",
      lockUntil: null
    },
    {
      id: "2",
      unitNumber: "A-707",
      project: "VM Orchid", 
      projectCode: "VMO-01",
      propertyType: "Apartment",
      tower: "Tower A",
      floor: 7,
      carpetArea: 798,
      builtUpArea: 960,
      bedrooms: 2,
      bathrooms: 2,
      parkingSlots: 1,
      facing: "West",
      basePrice: 7966000,
      status: "AVAILABLE",
      customerName: null,
      lockUntil: null
    },
    {
      id: "3",
      unitNumber: "V-12",
      project: "VM Orchid",
      projectCode: "VMO-01", 
      propertyType: "Villa",
      tower: null,
      floor: null,
      carpetArea: null,
      builtUpArea: 2350,
      plotArea: 2900,
      bedrooms: 4,
      bathrooms: 4,
      parkingSlots: 2,
      facing: "North",
      basePrice: 22500000,
      status: "HOLD",
      customerName: null,
      lockUntil: "2025-01-15T14:30:00Z"
    },
    {
      id: "4",
      unitNumber: "L-45",
      project: "VM Orchid",
      projectCode: "VMO-01",
      propertyType: "Land",
      tower: null,
      floor: null,
      carpetArea: null,
      builtUpArea: null,
      plotArea: 2000,
      bedrooms: null,
      bathrooms: null,
      parkingSlots: null,
      facing: "West",
      basePrice: 5600000,
      status: "AVAILABLE",
      customerName: null,
      lockUntil: null
    },
    {
      id: "5",
      unitNumber: "B-201",
      project: "Sunrise Heights",
      projectCode: "SH-02",
      propertyType: "Apartment",
      tower: "Tower B",
      floor: 2,
      carpetArea: 1120,
      builtUpArea: 1340,
      bedrooms: 3,
      bathrooms: 3,
      parkingSlots: 1,
      facing: "South",
      basePrice: 11200000,
      status: "SOLD",
      customerName: "Priya Sharma",
      lockUntil: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "AVAILABLE":
        return "bg-success/10 text-success border-success/30";
      case "ALLOCATED":
        return "bg-warning/10 text-warning border-warning/30";
      case "SOLD":
        return "bg-primary/10 text-primary border-primary/30";
      case "HOLD":
        return "bg-destructive/10 text-destructive border-destructive/30";
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

  const filteredUnits = units.filter(unit => {
    const matchesSearch = 
      unit.unitNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      unit.propertyType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (unit.customerName && unit.customerName.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === "all" || unit.status === statusFilter;
    const matchesProject = projectFilter === "all" || unit.projectCode === projectFilter;
    
    return matchesSearch && matchesStatus && matchesProject;
  });

  const projects = [...new Set(units.map(unit => unit.projectCode))];

  return (
    <div className="p-6 space-y-6 bg-gradient-surface min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Units</h1>
          <p className="text-muted-foreground">Manage property units across all your projects.</p>
        </div>
        <Button variant="hero" size="lg" className="gap-2" onClick={() => setShowUnitForm(true)}>
          <Plus className="h-4 w-4" />
          Add Unit
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Units</p>
                <p className="text-2xl font-bold text-foreground">{units.length}</p>
              </div>
              <Home className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Available</p>
                <p className="text-2xl font-bold text-success">
                  {units.filter(u => u.status === "AVAILABLE").length}
                </p>
              </div>
              <div className="h-8 w-8 rounded-full bg-success/10 flex items-center justify-center">
                <Unlock className="h-4 w-4 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Allocated</p>
                <p className="text-2xl font-bold text-warning">
                  {units.filter(u => u.status === "ALLOCATED").length}
                </p>
              </div>
              <div className="h-8 w-8 rounded-full bg-warning/10 flex items-center justify-center">
                <Lock className="h-4 w-4 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Sold</p>
                <p className="text-2xl font-bold text-primary">
                  {units.filter(u => u.status === "SOLD").length}
                </p>
              </div>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Building className="h-4 w-4 text-primary" />
              </div>
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
                <CardTitle>Unit Inventory</CardTitle>
                <CardDescription>View and manage all property units</CardDescription>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <div className="relative flex-1 sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search units, projects, customers..."
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
                  <SelectItem value="AVAILABLE">Available</SelectItem>
                  <SelectItem value="ALLOCATED">Allocated</SelectItem>
                  <SelectItem value="SOLD">Sold</SelectItem>
                  <SelectItem value="HOLD">Hold</SelectItem>
                </SelectContent>
              </Select>

              <Select value={projectFilter} onValueChange={setProjectFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Projects</SelectItem>
                  {projects.map(project => (
                    <SelectItem key={project} value={project}>{project}</SelectItem>
                  ))}
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
                  <TableHead className="font-semibold">Unit</TableHead>
                  <TableHead className="font-semibold">Project</TableHead>
                  <TableHead className="font-semibold">Type</TableHead>
                  <TableHead className="font-semibold">Area (sqft)</TableHead>
                  <TableHead className="font-semibold">Configuration</TableHead>
                  <TableHead className="font-semibold">Price</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Customer</TableHead>
                  <TableHead className="font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUnits.map((unit) => (
                  <TableRow key={unit.id} className="hover:bg-muted/20">
                    <TableCell>
                      <div>
                        <div className="font-semibold text-foreground">{unit.unitNumber}</div>
                        {unit.tower && (
                          <div className="text-xs text-muted-foreground">
                            {unit.tower}, Floor {unit.floor}
                          </div>
                        )}
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {unit.facing} facing
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium text-foreground">{unit.project}</div>
                        <div className="text-sm text-muted-foreground">{unit.projectCode}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="text-xs">
                        {unit.propertyType}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm space-y-1">
                        {unit.carpetArea && (
                          <div>Carpet: <span className="font-medium">{unit.carpetArea}</span></div>
                        )}
                        {unit.builtUpArea && (
                          <div>Built-up: <span className="font-medium">{unit.builtUpArea}</span></div>
                        )}
                        {unit.plotArea && (
                          <div>Plot: <span className="font-medium">{unit.plotArea}</span></div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm space-y-1">
                        {unit.bedrooms && (
                          <div>{unit.bedrooms}BHK</div>
                        )}
                        {unit.parkingSlots && (
                          <div className="text-muted-foreground">{unit.parkingSlots} Parking</div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-foreground">
                        {formatCurrency(unit.basePrice)}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <Badge variant="outline" className={getStatusColor(unit.status)}>
                          {unit.status}
                        </Badge>
                        {unit.lockUntil && (
                          <div className="text-xs text-destructive flex items-center gap-1">
                            <Lock className="h-3 w-3" />
                            Locked
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {unit.customerName ? (
                        <div className="text-sm font-medium text-foreground">
                          {unit.customerName}
                        </div>
                      ) : (
                        <span className="text-muted-foreground text-sm">-</span>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => {
                          setEditingUnit(unit);
                          setShowUnitForm(true);
                        }}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        {unit.status === "AVAILABLE" && (
                          <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
                            Allocate
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
      
      <UnitForm
        open={showUnitForm}
        onOpenChange={(open) => {
          setShowUnitForm(open);
          if (!open) setEditingUnit(null);
        }}
        mode={editingUnit ? "edit" : "create"}
        unit={editingUnit}
      />
    </div>
  );
};

export default Units;