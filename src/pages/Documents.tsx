import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Archive, Plus, FileText, Download, Upload, Eye, Share } from "lucide-react";

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: "Project A - Legal Documents",
      type: "Legal",
      size: "2.4 MB",
      uploadDate: "2024-01-20",
      uploadedBy: "Legal Team",
      status: "Active",
      downloads: 15,
      description: "Approval documents and NOCs"
    },
    {
      id: 2,
      name: "Customer Agreement Template",
      type: "Contract",
      size: "856 KB",
      uploadDate: "2024-01-19",
      uploadedBy: "Admin",
      status: "Active",
      downloads: 67,
      description: "Standard customer agreement format"
    },
    {
      id: 3,
      name: "Tower A - Construction Plans",
      type: "Blueprint",
      size: "12.3 MB",
      uploadDate: "2024-01-18",
      uploadedBy: "Architect",
      status: "Active",
      downloads: 23,
      description: "Detailed construction blueprints"
    },
    {
      id: 4,
      name: "Payment Schedule Template",
      type: "Financial",
      size: "145 KB",
      uploadDate: "2024-01-17",
      uploadedBy: "Finance Team",
      status: "Draft",
      downloads: 8,
      description: "Payment milestone template"
    }
  ];

  const documentTypes = [
    { name: "Legal", count: 12, icon: FileText },
    { name: "Contracts", count: 8, icon: Archive },
    { name: "Blueprints", count: 15, icon: FileText },
    { name: "Financial", count: 6, icon: FileText },
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      "Legal": "bg-red-100 text-red-800",
      "Contract": "bg-blue-100 text-blue-800",
      "Blueprint": "bg-green-100 text-green-800",
      "Financial": "bg-purple-100 text-purple-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
          <p className="text-muted-foreground">Manage project documents and file repository</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Upload Document
        </Button>
      </div>

      {/* Document Types Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        {documentTypes.map((type) => (
          <Card key={type.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{type.name}</CardTitle>
              <type.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{type.count}</div>
              <p className="text-xs text-muted-foreground">Documents</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Documents List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">All Documents</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Upload className="mr-1 h-3 w-3" />
              Bulk Upload
            </Button>
            <Button variant="outline" size="sm">Filter</Button>
            <Button variant="outline" size="sm">Sort</Button>
          </div>
        </div>

        {documents.map((doc) => (
          <Card key={doc.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Archive className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <CardTitle className="text-lg">{doc.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {doc.description}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={doc.status === "Active" ? "default" : "secondary"}>
                    {doc.status}
                  </Badge>
                  <Badge variant="outline" className={getTypeColor(doc.type)}>
                    {doc.type}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">File Size</p>
                    <p className="font-medium">{doc.size}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Upload Date</p>
                    <p className="font-medium">{new Date(doc.uploadDate).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Uploaded By</p>
                    <p className="font-medium">{doc.uploadedBy}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Downloads</p>
                    <p className="font-medium">{doc.downloads}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="mr-1 h-3 w-3" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-1 h-3 w-3" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share className="mr-1 h-3 w-3" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">Edit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Storage Info */}
      <Card>
        <CardHeader>
          <CardTitle>Storage Information</CardTitle>
          <CardDescription>Document storage usage and limits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span>Storage Used</span>
                <span className="font-medium">2.3 GB / 10 GB</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: "23%" }}></div>
              </div>
            </div>
            
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="font-medium">Cleanup Tools</div>
                  <div className="text-xs text-muted-foreground">Remove old versions</div>
                </div>
              </Button>
              
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="font-medium">Archive Old Files</div>
                  <div className="text-xs text-muted-foreground">Move to long-term storage</div>
                </div>
              </Button>
              
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="font-medium">Access Logs</div>
                  <div className="text-xs text-muted-foreground">View download history</div>
                </div>
              </Button>
              
              <Button variant="outline" className="justify-start h-auto p-4">
                <div className="text-left">
                  <div className="font-medium">Backup Status</div>
                  <div className="text-xs text-muted-foreground">Check backup health</div>
                </div>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Documents;