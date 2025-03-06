
import { useState } from 'react';
import { format } from 'date-fns';
import { Calendar, Clock, MapPin, CreditCard, CheckCircle } from 'lucide-react';
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
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useToast } from '@/components/ui/use-toast';

// Import step components
import DateTimeStep from './DateTimeStep';
import LocationStep from './LocationStep';
import PaymentStep from './PaymentStep';

interface BookingFormProps {
  bookingData: any;
  onComplete: (bookingDetails: {
    date: Date | undefined;
    timeSlot: string | undefined;
    address: string;
    paymentMethod: string;
  }) => void;
}

const BookingForm = ({ bookingData, onComplete }: BookingFormProps) => {
  const { toast } = useToast();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = useState<string | undefined>();
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleNextStep = () => {
    if (currentStep === 1 && (!date || !timeSlot)) {
      toast({
        title: "Please select a date and time",
        description: "Both date and time are required to continue",
        variant: "destructive",
      });
      return;
    }
    
    if (currentStep === 2 && !address) {
      toast({
        title: "Address is required",
        description: "Please enter your service address to continue",
        variant: "destructive",
      });
      return;
    }
    
    setCurrentStep(currentStep + 1);
  };
  
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };
  
  const handleBookingSubmit = () => {
    setIsProcessing(true);
    
    setTimeout(() => {
      setIsProcessing(false);
      onComplete({
        date,
        timeSlot,
        address,
        paymentMethod
      });
      
      toast({
        title: "Booking Confirmed!",
        description: `Your service has been booked for ${format(date!, 'PPP')} at ${timeSlot}`,
      });
    }, 2000);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {currentStep === 1 && 'Select Date & Time'}
          {currentStep === 2 && 'Your Location'}
          {currentStep === 3 && 'Review & Payment'}
        </CardTitle>
        <CardDescription>
          {currentStep === 1 && 'Choose when you would like your service'}
          {currentStep === 2 && 'Tell us where to send our handyman'}
          {currentStep === 3 && 'Confirm your booking details'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {currentStep === 1 && (
          <DateTimeStep 
            date={date}
            timeSlot={timeSlot}
            onDateSelect={setDate}
            onTimeSelect={setTimeSlot}
          />
        )}
        
        {currentStep === 2 && (
          <LocationStep
            address={address}
            onAddressChange={setAddress}
          />
        )}
        
        {currentStep === 3 && (
          <PaymentStep
            bookingData={bookingData}
            bookingDetails={{
              date,
              timeSlot,
              address
            }}
            paymentMethod={paymentMethod}
            onPaymentMethodChange={setPaymentMethod}
          />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {currentStep > 1 && (
          <Button variant="outline" onClick={handlePreviousStep}>
            Back
          </Button>
        )}
        
        {currentStep < 3 ? (
          <Button className={`${currentStep > 1 ? '' : 'w-full'}`} onClick={handleNextStep}>
            Continue
          </Button>
        ) : (
          <Button 
            className="bg-brand-orange hover:bg-brand-orange-dark"
            onClick={handleBookingSubmit}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Confirm & Pay'}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default BookingForm;
