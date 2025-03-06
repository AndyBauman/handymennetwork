
import { format } from 'date-fns';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

interface BookingConfirmationProps {
  bookingData: any;
  bookingDetails: {
    date: Date | undefined;
    timeSlot: string | undefined;
    address: string;
  };
  onReturnHome: () => void;
}

const BookingConfirmation = ({ 
  bookingData, 
  bookingDetails, 
  onReturnHome 
}: BookingConfirmationProps) => {
  const { date, timeSlot, address } = bookingDetails;
  
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
        <CardDescription>Your service has been successfully scheduled</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-4 rounded-lg bg-gray-50">
          <h3 className="font-semibold mb-2">Booking Details</h3>
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
        
        <div className="bg-brand-blue-light/10 p-4 rounded-lg border border-brand-blue-light/30">
          <h3 className="font-semibold mb-2 text-brand-blue">What's Next?</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-brand-blue mr-2 mt-0.5" />
              <span>You'll receive a confirmation email with your booking details.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-brand-blue mr-2 mt-0.5" />
              <span>Your handyman will contact you before the appointment.</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-4 h-4 text-brand-blue mr-2 mt-0.5" />
              <span>You can track your booking status in your account dashboard.</span>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onReturnHome} className="w-full">
          Return to Home
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookingConfirmation;
