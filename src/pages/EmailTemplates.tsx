import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Plus, Edit, Send, Eye, Copy } from "lucide-react";

const EmailTemplates = () => {
  const templates = [
    {
      id: 1,
      name: "Welcome Email",
      subject: "Welcome to Navantis - Your Dream Home Awaits",
      category: "Onboarding",
      status: "Active",
      lastUsed: "2024-01-20",
      usageCount: 45,
      description: "Welcome message for new customers"
    },
    {
      id: 2,
      name: "Payment Reminder",
      subject: "Payment Due Reminder - Unit {{unitNumber}}",
      category: "Payments",
      status: "Active",
      lastUsed: "2024-01-19",
      usageCount: 123,
      description: "Automated payment reminder"
    },
    {
      id: 3,
      name: "Milestone Update",
      subject: "Construction Update - {{projectName}}",
      category: "Updates",
      status: "Active",
      lastUsed: "2024-01-18",
      usageCount: 67,
      description: "Progress updates for customers"
    },
    {
      id: 4,
      name: "Document Request",
      subject: "Documents Required - Action Needed",
      category: "Documents",
      status: "Draft",
      lastUsed: null,
      usageCount: 0,
      description: "Request for pending documents"
    }
  ];

  const categories = [
    { name: "Onboarding", count: 3, color: "bg-blue-100 text-blue-800" },
    { name: "Payments", count: 5, color: "bg-green-100 text-green-800" },
    { name: "Updates", count: 4, color: "bg-purple-100 text-purple-800" },
    { name: "Documents", count: 2, color: "bg-orange-100 text-orange-800" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Email Templates</h1>
          <p className="text-muted-foreground">Create and manage email templates for customer communication</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Template
        </Button>
      </div>

      {/* Categories Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        {categories.map((category) => (
          <Card key={category.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{category.name}</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{category.count}</div>
              <p className="text-xs text-muted-foreground">Templates</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Templates List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">All Templates</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">Filter</Button>
            <Button variant="outline" size="sm">Import</Button>
          </div>
        </div>

        {templates.map((template) => (
          <Card key={template.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <CardDescription className="mt-1">
                    <span className="font-medium">Subject:</span> {template.subject}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={template.status === "Active" ? "default" : "secondary"}>
                    {template.status}
                  </Badge>
                  <Badge variant="outline">{template.category}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">{template.description}</p>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Last Used</p>
                    <p className="font-medium">
                      {template.lastUsed ? new Date(template.lastUsed).toLocaleDateString() : "Never"}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Usage Count</p>
                    <p className="font-medium">{template.usageCount}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Category</p>
                    <p className="font-medium">{template.category}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-1 h-3 w-3" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="mr-1 h-3 w-3" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Copy className="mr-1 h-3 w-3" />
                    Duplicate
                  </Button>
                  <Button variant="outline" size="sm">
                    <Send className="mr-1 h-3 w-3" />
                    Send Test
                  </Button>
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
          <CardDescription>Common template management tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Bulk Send</div>
                <div className="text-xs text-muted-foreground">Send to multiple customers</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Template Library</div>
                <div className="text-xs text-muted-foreground">Browse pre-built templates</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Automation Rules</div>
                <div className="text-xs text-muted-foreground">Setup auto-send triggers</div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Analytics</div>
                <div className="text-xs text-muted-foreground">Email performance metrics</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailTemplates;