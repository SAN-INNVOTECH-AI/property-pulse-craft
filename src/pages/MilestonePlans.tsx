import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ClipboardList, Plus, Calendar, CheckCircle, AlertCircle } from "lucide-react";

const MilestonePlans = () => {
  const milestones = [
    {
      id: 1,
      title: "Foundation Work",
      project: "Tower A",
      startDate: "2024-01-15",
      endDate: "2024-03-15",
      status: "Completed",
      progress: 100,
      description: "Complete foundation and basement work"
    },
    {
      id: 2,
      title: "Structure Framework",
      project: "Tower A",
      startDate: "2024-03-16",
      endDate: "2024-06-30",
      status: "In Progress",
      progress: 65,
      description: "Steel framework and concrete structure"
    },
    {
      id: 3,
      title: "Interior Work",
      project: "Tower B",
      startDate: "2024-04-01",
      endDate: "2024-08-15",
      status: "Pending",
      progress: 0,
      description: "Interior finishing and fixtures"
    },
    {
      id: 4,
      title: "Electrical & Plumbing",
      project: "Tower A",
      startDate: "2024-05-01",
      endDate: "2024-07-30",
      status: "In Progress",
      progress: 30,
      description: "Electrical wiring and plumbing installation"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "In Progress":
        return <AlertCircle className="h-4 w-4 text-warning" />;
      default:
        return <Calendar className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Completed":
        return "default" as const;
      case "In Progress":
        return "secondary" as const;
      default:
        return "outline" as const;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Milestone Plans</h1>
          <p className="text-muted-foreground">Track project milestones and construction phases</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Milestone
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Milestones</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{milestones.length}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {milestones.filter(m => m.status === "Completed").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <AlertCircle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {milestones.filter(m => m.status === "In Progress").length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {milestones.filter(m => m.status === "Pending").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Milestones List */}
      <div className="space-y-4">
        {milestones.map((milestone) => (
          <Card key={milestone.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getStatusIcon(milestone.status)}
                  <div>
                    <CardTitle className="text-lg">{milestone.title}</CardTitle>
                    <CardDescription>{milestone.project}</CardDescription>
                  </div>
                </div>
                <Badge variant={getStatusVariant(milestone.status)}>
                  {milestone.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">{milestone.description}</p>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Start Date</p>
                    <p className="font-medium">{new Date(milestone.startDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">End Date</p>
                    <p className="font-medium">{new Date(milestone.endDate).toLocaleDateString()}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium">{milestone.progress}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${milestone.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MilestonePlans;