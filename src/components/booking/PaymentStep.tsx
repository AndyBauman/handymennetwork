
import { format } from 'date-fns';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CreditCard, CheckCircle } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface PaymentStepProps {
  bookingData: any;
  bookingDetails: {
    date: Date | undefined;
    timeSlot: string | undefined;
    address: string;
  };
  paymentMethod: string;
  onPaymentMethodChange: (method: string) => void;
}

const PaymentStep = ({ 
  bookingData, 
  bookingDetails, 
  paymentMethod, 
  onPaymentMethodChange 
}: PaymentStepProps) => {
  const { date, timeSlot, address } = bookingDetails;

  return (
    <div className="space-y-6">
      <div className="p-4 rounded-lg bg-gray-50">
        <h3 className="font-semibold mb-2">Booking Summary</h3>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Service:</span>
            <span className="font-medium">{bookingData.serviceName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Task:</span>
            <span className="font-medium">{bookingData.taskName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date & Time:</span>
            <span className="font-medium">{format(date!, 'PPP')} at {timeSlot}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Price:</span>
            <span className="font-medium">${bookingData.price}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Handyman:</span>
            <span className="font-medium">{bookingData.handymanName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Address:</span>
            <span className="font-medium">{address}</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-semibold mb-2">Payment Method</h3>
        <RadioGroup value={paymentMethod} onValueChange={onPaymentMethodChange}>
          <div className="flex items-center space-x-2 p-3 rounded-lg border mb-2">
            <RadioGroupItem value="creditCard" id="creditCard" />
            <Label htmlFor="creditCard" className="flex items-center cursor-pointer">
              <CreditCard className="w-5 h-5 mr-2" />
              Credit Card
            </Label>
          </div>
          <div className="flex items-center space-x-2 p-3 rounded-lg border">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal" className="cursor-pointer">PayPal</Label>
          </div>
        </RadioGroup>
      </div>
      
      {paymentMethod === 'creditCard' && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" className="mt-1" />
            </div>
          </div>
          <div>
            <Label htmlFor="nameOnCard">Name on Card</Label>
            <Input id="nameOnCard" placeholder="Full name as shown on card" className="mt-1" />
          </div>
        </div>
      )}
      
      <div className="flex items-start p-4 rounded-lg bg-brand-blue-light/10 border border-brand-blue-light/30">
        <CheckCircle className="w-5 h-5 text-brand-blue mt-0.5 mr-2" />
        <div className="text-sm">
          <p className="font-semibold text-brand-blue">Satisfaction Guarantee</p>
          <p>If you're not completely satisfied with the service, we'll make it right or give you a full refund.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
