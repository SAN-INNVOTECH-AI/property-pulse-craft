import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Building2,
  MapPin,
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit,
  Users,
  Home
} from "lucide-react";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: "1",
      code: "VMO-01",
      name: "VM Orchid",
      location: "Ambala",
      reraNumber: "P521000XXXX",
      status: "ACTIVE",
      ocAvailable: false,
      totalUnits: 180,
      availableUnits: 89,
      allocatedUnits: 67,
      soldUnits: 24,
      createdAt: "2024-01-15",
      propertyTypes: ["Apartment", "Villa"]
    },
    {
      id: "2", 
      code: "SH-02",
      name: "Sunrise Heights",
      location: "Chandigarh",
      reraNumber: "P622000YYYY",
      status: "ACTIVE",
      ocAvailable: true,
      totalUnits: 120,
      availableUnits: 25,
      allocatedUnits: 17,
      soldUnits: 78,
      createdAt: "2023-08-22",
      propertyTypes: ["Apartment"]
    },
    {
      id: "3",
      code: "GV-03", 
      name: "Green Valley",
      location: "Mohali",
      reraNumber: null,
      status: "PLANNING",
      ocAvailable: false,
      totalUnits: 95,
      availableUnits: 72,
      allocatedUnits: 23,
      soldUnits: 0,
      createdAt: "2024-11-01",
      propertyTypes: ["Villa", "Land"]
    },
    {
      id: "4",
      code: "RR-04",
      name: "Royal Residency",
      location: "Panchkula",
      reraNumber: "P723000ZZZZ",
      status: "COMPLETED",
      ocAvailable: true,
      totalUnits: 75,
      availableUnits: 0,
      allocatedUnits: 0,
      soldUnits: 75,
      createdAt: "2022-03-10",
      propertyTypes: ["Apartment"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "bg-success/10 text-success border-success/30";
      case "PLANNING":
        return "bg-warning/10 text-warning border-warning/30";
      case "COMPLETED":
        return "bg-primary/10 text-primary border-primary/30";
      case "ON_HOLD":
        return "bg-muted/10 text-muted-foreground border-muted/30";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/30";
    }
  };

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 bg-gradient-surface min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Projects</h1>
          <p className="text-muted-foreground">Manage your real estate projects and their configurations.</p>
        </div>
        <Button variant="hero" size="lg" className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Projects</p>
                <p className="text-2xl font-bold text-foreground">{projects.length}</p>
              </div>
              <Building2 className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Projects</p>
                <p className="text-2xl font-bold text-foreground">
                  {projects.filter(p => p.status === "ACTIVE").length}
                </p>
              </div>
              <div className="h-8 w-8 rounded-full bg-success/10 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Units</p>
                <p className="text-2xl font-bold text-foreground">
                  {projects.reduce((sum, p) => sum + p.totalUnits, 0)}
                </p>
              </div>
              <Home className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-medium border-0 bg-gradient-to-br from-card to-card/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">OC Available</p>
                <p className="text-2xl font-bold text-foreground">
                  {projects.filter(p => p.ocAvailable).length}
                </p>
              </div>
              <div className="h-8 w-8 rounded-full bg-warning/10 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-warning" />
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
              <CardTitle>Project List</CardTitle>
              <CardDescription>View and manage all your real estate projects</CardDescription>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search projects..."
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
                  <TableHead className="font-semibold">Project</TableHead>
                  <TableHead className="font-semibold">Location</TableHead>
                  <TableHead className="font-semibold">RERA</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Units</TableHead>
                  <TableHead className="font-semibold">Property Types</TableHead>
                  <TableHead className="font-semibold">OC</TableHead>
                  <TableHead className="font-semibold text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProjects.map((project) => (
                  <TableRow key={project.id} className="hover:bg-muted/20">
                    <TableCell>
                      <div>
                        <div className="font-semibold text-foreground">{project.name}</div>
                        <div className="text-sm text-muted-foreground">{project.code}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        {project.reraNumber ? (
                          <span className="font-mono">{project.reraNumber}</span>
                        ) : (
                          <span className="text-muted-foreground italic">Not required</span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">
                          <span className="font-medium">{project.totalUnits}</span> total
                        </div>
                        <div className="flex gap-2 text-xs">
                          <span className="text-success">{project.availableUnits} available</span>
                          <span className="text-warning">{project.allocatedUnits} allocated</span>
                          <span className="text-primary">{project.soldUnits} sold</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {project.propertyTypes.map((type, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {project.ocAvailable ? (
                          <>
                            <div className="h-2 w-2 rounded-full bg-success" />
                            <span className="text-xs text-success">Available</span>
                          </>
                        ) : (
                          <>
                            <div className="h-2 w-2 rounded-full bg-warning" />
                            <span className="text-xs text-warning">Pending</span>
                          </>
                        )}
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
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
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

export default Projects;