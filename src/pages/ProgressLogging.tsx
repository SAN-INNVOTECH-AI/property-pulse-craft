import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Plus, Clock, User, Camera } from "lucide-react";

const ProgressLogging = () => {
  const progressLogs = [
    {
      id: 1,
      date: "2024-01-20",
      time: "10:30 AM",
      milestone: "Foundation Work",
      project: "Tower A",
      loggedBy: "Site Engineer",
      status: "On Track",
      description: "Foundation work completed for basement level 1. Moving to level 2 tomorrow.",
      images: 3
    },
    {
      id: 2,
      date: "2024-01-19",
      time: "2:15 PM",
      milestone: "Structure Framework",
      project: "Tower B",
      loggedBy: "Project Manager",
      status: "Delayed",
      description: "Weather conditions affecting concrete pouring. Rescheduled for next week.",
      images: 2
    },
    {
      id: 3,
      date: "2024-01-18",
      time: "9:00 AM",
      milestone: "Electrical Work",
      project: "Tower A",
      loggedBy: "Electrical Supervisor",
      status: "Ahead",
      description: "Electrical conduit installation completed 2 days ahead of schedule.",
      images: 5
    }
  ];

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "On Track":
        return "default" as const;
      case "Ahead":
        return "secondary" as const;
      case "Delayed":
        return "destructive" as const;
      default:
        return "outline" as const;
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Progress Logging</h1>
          <p className="text-muted-foreground">Track daily progress and milestone updates</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Log Entry
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Logs</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 from yesterday</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">On Track</CardTitle>
            <Clock className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">67% of activities</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Delayed</CardTitle>
            <Clock className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">25% of activities</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Ahead</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">8% of activities</p>
          </CardContent>
        </Card>
      </div>

      {/* Progress Logs */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Recent Progress Logs</h2>
        
        {progressLogs.map((log) => (
          <Card key={log.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{log.milestone}</CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-1">
                    <span>{log.project}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(log.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {log.time}
                    </span>
                  </CardDescription>
                </div>
                <Badge variant={getStatusVariant(log.status)}>
                  {log.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">{log.description}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {log.loggedBy}
                    </span>
                    <span className="flex items-center gap-1">
                      <Camera className="h-3 w-3" />
                      {log.images} photos
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">View Photos</Button>
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Log Form */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Log Entry</CardTitle>
          <CardDescription>Add a quick progress update</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Project</label>
                <select className="w-full mt-1 p-2 border rounded-md bg-background">
                  <option>Tower A</option>
                  <option>Tower B</option>
                  <option>Tower C</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Milestone</label>
                <select className="w-full mt-1 p-2 border rounded-md bg-background">
                  <option>Foundation Work</option>
                  <option>Structure Framework</option>
                  <option>Electrical Work</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium">Progress Note</label>
              <textarea 
                className="w-full mt-1 p-2 border rounded-md bg-background" 
                rows={3}
                placeholder="Describe today's progress..."
              ></textarea>
            </div>
            
            <div className="flex gap-2">
              <Button>Save Log</Button>
              <Button variant="outline">Add Photos</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressLogging;