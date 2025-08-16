import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Plus, Users, UserCheck, Settings, Eye } from "lucide-react";

const UsersAndRoles = () => {
  const users = [
    {
      id: 1,
      name: "Admin User",
      email: "admin@vmrealcon.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-01-20",
      permissions: ["All Access"]
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      email: "rajesh@vmrealcon.com",
      role: "Project Manager",
      status: "Active",
      lastLogin: "2024-01-19",
      permissions: ["Projects", "Units", "Reports"]
    },
    {
      id: 3,
      name: "Priya Sharma",
      email: "priya@vmrealcon.com",
      role: "Sales Manager",
      status: "Active",
      lastLogin: "2024-01-20",
      permissions: ["Customers", "Payments", "Units"]
    },
    {
      id: 4,
      name: "Amit Singh",
      email: "amit@vmrealcon.com",
      role: "Finance Manager",
      status: "Inactive",
      lastLogin: "2024-01-15",
      permissions: ["Payments", "Reports", "Customers"]
    }
  ];

  const roles = [
    {
      name: "Admin",
      description: "Full system access and management",
      userCount: 1,
      permissions: ["All Access", "User Management", "System Settings"]
    },
    {
      name: "Project Manager",
      description: "Manage projects and construction progress",
      userCount: 3,
      permissions: ["Projects", "Progress Logging", "Milestones", "Reports"]
    },
    {
      name: "Sales Manager",
      description: "Customer management and sales operations",
      userCount: 2,
      permissions: ["Customers", "Units", "Payments", "Email Templates"]
    },
    {
      name: "Finance Manager",
      description: "Financial operations and payment tracking",
      userCount: 1,
      permissions: ["Payments", "Scheduled Dues", "Reports", "Analytics"]
    }
  ];

  const getRoleColor = (role: string) => {
    const colors = {
      "Admin": "bg-red-100 text-red-800",
      "Project Manager": "bg-blue-100 text-blue-800",
      "Sales Manager": "bg-green-100 text-green-800",
      "Finance Manager": "bg-purple-100 text-purple-800",
    };
    return colors[role] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users & Roles</h1>
          <p className="text-muted-foreground">Manage user accounts and access permissions</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Manage Roles
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-xs text-muted-foreground">
              {users.filter(u => u.status === "Active").length} active
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Roles</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{roles.length}</div>
            <p className="text-xs text-muted-foreground">Role templates</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Admin Users</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {users.filter(u => u.role === "Admin").length}
            </div>
            <p className="text-xs text-muted-foreground">Super admin access</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Login</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Today</div>
            <p className="text-xs text-muted-foreground">Most recent activity</p>
          </CardContent>
        </Card>
      </div>

      {/* Users List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">All Users</h2>
        
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-primary p-2 rounded-full">
                    <Users className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{user.name}</CardTitle>
                    <CardDescription>{user.email}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={user.status === "Active" ? "default" : "secondary"}>
                    {user.status}
                  </Badge>
                  <Badge variant="outline" className={getRoleColor(user.role)}>
                    {user.role}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Last Login</p>
                    <p className="font-medium">{new Date(user.lastLogin).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Permissions</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {user.permissions.map((permission, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {permission}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Edit User</Button>
                  <Button variant="outline" size="sm">Reset Password</Button>
                  <Button variant="outline" size="sm">View Activity</Button>
                  {user.status === "Active" ? (
                    <Button variant="outline" size="sm">Deactivate</Button>
                  ) : (
                    <Button variant="outline" size="sm">Activate</Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Roles Management */}
      <Card>
        <CardHeader>
          <CardTitle>Role Templates</CardTitle>
          <CardDescription>Manage role permissions and access levels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {roles.map((role) => (
              <Card key={role.name} className="border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{role.name}</CardTitle>
                    <Badge variant="outline">{role.userCount} users</Badge>
                  </div>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-2">Permissions:</p>
                      <div className="flex flex-wrap gap-1">
                        {role.permissions.map((permission, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit Role</Button>
                      <Button variant="outline" size="sm">Duplicate</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersAndRoles;