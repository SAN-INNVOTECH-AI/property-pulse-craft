import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface UnitFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  unit?: any;
}

const UnitForm = ({ open, onOpenChange, mode, unit }: UnitFormProps) => {
  const [formData, setFormData] = useState({
    projectId: unit?.projectId || "",
    propertyType: unit?.propertyType || "",
    unitNumber: unit?.unitNumber || "",
    plotNumber: unit?.plotNumber || "",
    tower: unit?.tower || "",
    floor: unit?.floor || "",
    carpetArea: unit?.carpetArea || "",
    builtUpArea: unit?.builtUpArea || "",
    plotArea: unit?.plotArea || "",
    bedrooms: unit?.bedrooms || "",
    bathrooms: unit?.bathrooms || "",
    parkingSlots: unit?.parkingSlots || "",
    facing: unit?.facing || "",
    isCornerPlot: unit?.isCornerPlot || false,
    basePrice: unit?.basePrice || "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const projects = [
    { id: "1", code: "VMO-01", name: "VM Orchid" },
    { id: "2", code: "SH-02", name: "Sunrise Heights" },
    { id: "3", code: "GV-03", name: "Green Valley" },
  ];

  const propertyTypes = ["Apartment", "Villa", "Land", "Commercial"];
  const facingOptions = ["North", "South", "East", "West", "North-East", "North-West", "South-East", "South-West"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: mode === "create" ? "Unit Created" : "Unit Updated",
        description: `${formData.unitNumber || formData.plotNumber} has been ${mode === "create" ? "created" : "updated"} successfully.`,
      });
      setIsLoading(false);
      onOpenChange(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Create New Unit" : "Edit Unit"}
          </DialogTitle>
          <DialogDescription>
            {mode === "create" 
              ? "Add a new unit to your project inventory."
              : "Update the unit information below."
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="projectId">Project *</Label>
              <Select value={formData.projectId} onValueChange={(value) => handleInputChange("projectId", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                  {projects.map(project => (
                    <SelectItem key={project.id} value={project.id}>
                      {project.code} - {project.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="propertyType">Property Type *</Label>
              <Select value={formData.propertyType} onValueChange={(value) => handleInputChange("propertyType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {formData.propertyType === "Apartment" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="unitNumber">Unit Number *</Label>
                <Input
                  id="unitNumber"
                  placeholder="e.g., A-706"
                  value={formData.unitNumber}
                  onChange={(e) => handleInputChange("unitNumber", e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tower">Tower</Label>
                <Input
                  id="tower"
                  placeholder="e.g., Tower A"
                  value={formData.tower}
                  onChange={(e) => handleInputChange("tower", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="floor">Floor</Label>
                <Input
                  id="floor"
                  type="number"
                  placeholder="e.g., 7"
                  value={formData.floor}
                  onChange={(e) => handleInputChange("floor", e.target.value)}
                />
              </div>
            </div>
          )}

          {(formData.propertyType === "Villa" || formData.propertyType === "Land") && (
            <div className="space-y-2">
              <Label htmlFor="plotNumber">Plot Number *</Label>
              <Input
                id="plotNumber"
                placeholder="e.g., V-12 or L-45"
                value={formData.plotNumber}
                onChange={(e) => handleInputChange("plotNumber", e.target.value)}
                required
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {formData.propertyType === "Apartment" && (
              <div className="space-y-2">
                <Label htmlFor="carpetArea">Carpet Area (sqft)</Label>
                <Input
                  id="carpetArea"
                  type="number"
                  placeholder="e.g., 812"
                  value={formData.carpetArea}
                  onChange={(e) => handleInputChange("carpetArea", e.target.value)}
                />
              </div>
            )}
            
            {(formData.propertyType === "Apartment" || formData.propertyType === "Villa") && (
              <div className="space-y-2">
                <Label htmlFor="builtUpArea">Built-up Area (sqft)</Label>
                <Input
                  id="builtUpArea"
                  type="number"
                  placeholder="e.g., 975"
                  value={formData.builtUpArea}
                  onChange={(e) => handleInputChange("builtUpArea", e.target.value)}
                />
              </div>
            )}
            
            {(formData.propertyType === "Villa" || formData.propertyType === "Land") && (
              <div className="space-y-2">
                <Label htmlFor="plotArea">Plot Area (sqft)</Label>
                <Input
                  id="plotArea"
                  type="number"
                  placeholder="e.g., 2900"
                  value={formData.plotArea}
                  onChange={(e) => handleInputChange("plotArea", e.target.value)}
                />
              </div>
            )}
          </div>

          {formData.propertyType !== "Land" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Input
                  id="bedrooms"
                  type="number"
                  placeholder="e.g., 2"
                  value={formData.bedrooms}
                  onChange={(e) => handleInputChange("bedrooms", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Input
                  id="bathrooms"
                  type="number"
                  placeholder="e.g., 2"
                  value={formData.bathrooms}
                  onChange={(e) => handleInputChange("bathrooms", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="parkingSlots">Parking Slots</Label>
                <Input
                  id="parkingSlots"
                  type="number"
                  placeholder="e.g., 1"
                  value={formData.parkingSlots}
                  onChange={(e) => handleInputChange("parkingSlots", e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="facing">Facing</Label>
              <Select value={formData.facing} onValueChange={(value) => handleInputChange("facing", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select facing" />
                </SelectTrigger>
                <SelectContent>
                  {facingOptions.map(facing => (
                    <SelectItem key={facing} value={facing}>{facing}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="basePrice">Base Price (₹) *</Label>
              <Input
                id="basePrice"
                type="number"
                placeholder="e.g., 8200000"
                value={formData.basePrice}
                onChange={(e) => handleInputChange("basePrice", e.target.value)}
                required
              />
            </div>
          </div>

          {(formData.propertyType === "Villa" || formData.propertyType === "Land") && (
            <div className="flex items-center space-x-2">
              <Checkbox
                id="isCornerPlot"
                checked={formData.isCornerPlot}
                onCheckedChange={(checked) => handleInputChange("isCornerPlot", checked)}
              />
              <Label htmlFor="isCornerPlot">Corner Plot</Label>
            </div>
          )}

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Saving..." : mode === "create" ? "Create Unit" : "Update Unit"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UnitForm;