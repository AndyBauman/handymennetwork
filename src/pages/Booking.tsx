import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, CreditCard, CheckCircle, Star } from 'lucide-react';
import { format } from 'date-fns';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useToast } from '@/components/ui/use-toast';
import { getHandymanById } from '@/data/services';

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', 
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', 
  '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
];

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const bookingData = location.state || {};
  const handyman = getHandymanById(bookingData.handymanId);
  
  const [currentStep, setCurrentStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [timeSlot, setTimeSlot] = useState<string | undefined>();
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [isBookingComplete, setIsBookingComplete] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
  };
  
  const handleTimeSelect = (time: string) => {
    setTimeSlot(time);
  };
  
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  
  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
  };
  
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
      setIsBookingComplete(true);
      
      toast({
        title: "Booking Confirmed!",
        description: `Your service has been booked for ${format(date!, 'PPP')} at ${timeSlot}`,
      });
    }, 2000);
  };
  
  const handleReturnHome = () => {
    navigate('/');
  };
  
  if (!bookingData.serviceId || !bookingData.taskId) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container px-4 py-12 mx-auto text-center">
          <h1 className="mb-4 text-3xl font-bold">Invalid Booking Request</h1>
          <p className="mb-6">Please select a service and task before booking.</p>
          <Button onClick={() => navigate('/services')}>View Services</Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (isBookingComplete) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container px-4 py-12 mx-auto">
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
              <Button onClick={handleReturnHome} className="w-full">
                Return to Home
              </Button>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Schedule Your Service</h1>
            <div className="hidden md:flex items-center space-x-2">
              <div className={`h-2 w-2 rounded-full ${currentStep >= 1 ? 'bg-brand-blue' : 'bg-gray-300'}`}></div>
              <div className={`h-2 w-2 rounded-full ${currentStep >= 2 ? 'bg-brand-blue' : 'bg-gray-300'}`}></div>
              <div className={`h-2 w-2 rounded-full ${currentStep >= 3 ? 'bg-brand-blue' : 'bg-gray-300'}`}></div>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
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
                    <div className="space-y-6">
                      <div>
                        <Label>Select a Date</Label>
                        <div className="mt-2 p-2 border rounded-md">
                          <CalendarComponent
                            mode="single"
                            selected={date}
                            onSelect={handleDateSelect}
                            className="mx-auto"
                            disabled={(date) => 
                              date < new Date() || 
                              date > new Date(new Date().setDate(new Date().getDate() + 30))
                            }
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label>Select a Time</Label>
                        <div className="mt-2 grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              type="button"
                              variant={timeSlot === time ? "default" : "outline"}
                              className="justify-start"
                              onClick={() => handleTimeSelect(time)}
                            >
                              <Clock className="w-4 h-4 mr-2" />
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {currentStep === 2 && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="address">Service Address</Label>
                        <Input
                          id="address"
                          placeholder="Enter your full address"
                          className="mt-1"
                          value={address}
                          onChange={handleAddressChange}
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
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipcode">ZIP Code</Label>
                          <Input
                            id="zipcode"
                            placeholder="ZIP Code"
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="instructions">Special Instructions (Optional)</Label>
                        <Input
                          id="instructions"
                          placeholder="Parking information, gate code, etc."
                          className="mt-1"
                        />
                      </div>
                    </div>
                  )}
                  
                  {currentStep === 3 && (
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
                        <RadioGroup value={paymentMethod} onValueChange={handlePaymentMethodChange}>
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
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Booking Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg flex items-center space-x-3">
                    <div className="p-2 bg-brand-blue-light/10 rounded-full">
                      <bookingData.icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-medium">{bookingData.serviceName}</h3>
                      <p className="text-sm text-gray-600">{bookingData.taskName}</p>
                    </div>
                  </div>
                  
                  {handyman && (
                    <div className="p-4 border rounded-lg flex items-center space-x-3">
                      <img 
                        src={handyman.photo} 
                        alt={handyman.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-medium">{handyman.name}</h3>
                        <div className="flex items-center">
                          <div className="flex mr-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(handyman.rating)
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">
                            {handyman.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="p-4 border rounded-lg space-y-3">
                    {date && timeSlot && (
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{format(date, 'PPP')} at {timeSlot}</span>
                      </div>
                    )}
                    
                    {address && (
                      <div className="flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                        <span>{address}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Service Price</span>
                      <span>${bookingData.price}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Platform Fee</span>
                      <span>${(bookingData.price * 0.10).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${(bookingData.price * 1.10).toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
