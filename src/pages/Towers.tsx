import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Plus, MapPin, Home } from "lucide-react";

const Towers = () => {
  const towers = [
    {
      id: 1,
      name: "Tower A",
      floors: 15,
      totalUnits: 45,
      occupiedUnits: 32,
      status: "Active",
      location: "North Block"
    },
    {
      id: 2,
      name: "Tower B",
      floors: 18,
      totalUnits: 54,
      occupiedUnits: 41,
      status: "Active",
      location: "South Block"
    },
    {
      id: 3,
      name: "Tower C",
      floors: 12,
      totalUnits: 36,
      occupiedUnits: 28,
      status: "Under Construction",
      location: "East Block"
    }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Towers & Floors</h1>
          <p className="text-muted-foreground">Manage building structures and floor layouts</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Tower
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {towers.map((tower) => (
          <Card key={tower.id} className="relative">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  {tower.name}
                </CardTitle>
                <Badge variant={tower.status === "Active" ? "default" : "secondary"}>
                  {tower.status}
                </Badge>
              </div>
              <CardDescription className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {tower.location}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Floors</p>
                    <p className="font-semibold">{tower.floors}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total Units</p>
                    <p className="font-semibold">{tower.totalUnits}</p>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Occupancy</span>
                    <span className="font-medium">
                      {tower.occupiedUnits}/{tower.totalUnits}
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full" 
                      style={{ width: `${(tower.occupiedUnits / tower.totalUnits) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {Math.round((tower.occupiedUnits / tower.totalUnits) * 100)}% occupied
                  </p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Home className="mr-1 h-3 w-3" />
                    View Units
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Floor Plans Section */}
      <Card>
        <CardHeader>
          <CardTitle>Floor Plans Overview</CardTitle>
          <CardDescription>Quick access to floor layouts and unit distributions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {towers.map((tower) => (
              <div key={`floor-${tower.id}`} className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">{tower.name} Floors</h4>
                <div className="text-sm text-muted-foreground">
                  <p>{tower.floors} floors</p>
                  <p>{Math.round(tower.totalUnits / tower.floors)} units per floor (avg)</p>
                </div>
                <Button variant="outline" size="sm" className="mt-2 w-full">
                  View Floor Plans
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Towers;