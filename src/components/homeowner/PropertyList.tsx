
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Address } from '@/types';
import { Home, Edit, Trash2, MapPin, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PropertyListProps {
  properties: Address[];
}

const PropertyList = ({ properties }: PropertyListProps) => {
  const { toast } = useToast();
  const [showAddProperty, setShowAddProperty] = useState(false);
  const [newProperty, setNewProperty] = useState({
    street: '',
    unit: '',
    city: '',
    state: '',
    zipCode: '',
    label: 'Home'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProperty(prev => ({ ...prev, [name]: value }));
  };

  const handleAddProperty = () => {
    // In a real app, you would save this data to your backend
    toast({
      title: "Property Added",
      description: "Your new property has been added successfully.",
    });
    setShowAddProperty(false);
    setNewProperty({
      street: '',
      unit: '',
      city: '',
      state: '',
      zipCode: '',
      label: 'Home'
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Your Properties</h2>
        <Button onClick={() => setShowAddProperty(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Property
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {properties.map(property => (
          <Card key={property.id} className={`${property.isDefault ? 'border-brand-blue' : ''}`}>
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div>
                  <CardTitle>{property.label || 'Property'}</CardTitle>
                  <CardDescription>{property.street}</CardDescription>
                </div>
                {property.isDefault && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-blue-light/10 text-brand-blue">
                    Default
                  </span>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-start mt-2">
                <MapPin className="w-4 h-4 mr-2 mt-1 text-gray-500" />
                <div>
                  <p>{property.street}{property.unit ? `, ${property.unit}` : ''}</p>
                  <p>{property.city}, {property.state} {property.zipCode}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Edit className="w-4 h-4 mr-2" />
                Edit
              </Button>
              {!property.isDefault && (
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Remove
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={showAddProperty} onOpenChange={setShowAddProperty}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Property</DialogTitle>
            <DialogDescription>
              Enter the details of your property below.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="label">Property Label</Label>
              <Input
                id="label"
                name="label"
                placeholder="Home, Office, Rental, etc."
                value={newProperty.label}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="street">Street Address</Label>
              <Input
                id="street"
                name="street"
                placeholder="123 Main St"
                value={newProperty.street}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="unit">Apartment/Unit (Optional)</Label>
              <Input
                id="unit"
                name="unit"
                placeholder="Apt 123"
                value={newProperty.unit}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="San Francisco"
                  value={newProperty.city}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  name="state"
                  placeholder="CA"
                  value={newProperty.state}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP Code</Label>
              <Input
                id="zipCode"
                name="zipCode"
                placeholder="94105"
                value={newProperty.zipCode}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAddProperty(false)}>Cancel</Button>
            <Button onClick={handleAddProperty}>Add Property</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PropertyList;
