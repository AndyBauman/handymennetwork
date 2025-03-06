
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getHandymanById } from '@/data/services';
import BookingForm from '@/components/booking/BookingForm';
import BookingSummary from '@/components/booking/BookingSummary';
import BookingConfirmation from '@/components/booking/BookingConfirmation';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const bookingData = location.state || {};
  const handyman = getHandymanById(bookingData.handymanId);
  
  const [isBookingComplete, setIsBookingComplete] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    date: new Date(),
    timeSlot: undefined as string | undefined,
    address: '',
    paymentMethod: 'creditCard'
  });
  
  const handleBookingComplete = (details: typeof bookingDetails) => {
    setBookingDetails(details);
    setIsBookingComplete(true);
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
          <BookingConfirmation 
            bookingData={bookingData}
            bookingDetails={bookingDetails}
            onReturnHome={handleReturnHome}
          />
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
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <BookingForm 
                bookingData={bookingData}
                onComplete={handleBookingComplete}
              />
            </div>
            
            <div>
              <BookingSummary 
                bookingData={bookingData}
                handyman={handyman}
                date={bookingDetails.date}
                timeSlot={bookingDetails.timeSlot}
                address={bookingDetails.address}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Booking;
