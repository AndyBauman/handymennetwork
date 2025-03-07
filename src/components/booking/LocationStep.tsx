
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface LocationStepProps {
  address: string;
  onAddressChange: (address: string) => void;
}

const LocationStep = ({ address, onAddressChange }: LocationStepProps) => {
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAddressChange(e.target.value);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="address">Service Address</Label>
        <Input
          id="address"
          placeholder="Enter your full address"
          className="mt-1"
          value={address}
          onChange={handleAddressChange}
          required
        />
      </div>
      
      <div>
        <Label htmlFor="apartment">Apartment/Suite (Optional)</Label>
        <Input
          id="apartment"
          placeholder="Apt, Suite, Unit, etc."
          className="mt-1"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            placeholder="City"
            className="mt-1"
            required
          />
        </div>
        <div>
          <Label htmlFor="zipcode">ZIP Code</Label>
          <Input
            id="zipcode"
            placeholder="ZIP Code"
            className="mt-1"
            required
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="instructions">Special Instructions (Optional)</Label>
        <Textarea
          id="instructions"
          placeholder="Parking information, gate code, etc."
          className="mt-1 h-24"
        />
      </div>
    </div>
  );
};

export default LocationStep;
