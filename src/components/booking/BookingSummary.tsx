
import { format } from 'date-fns';
import { Calendar, MapPin, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface BookingSummaryProps {
  bookingData: any;
  handyman: any;
  date?: Date;
  timeSlot?: string;
  address: string;
}

const BookingSummary = ({ 
  bookingData, 
  handyman, 
  date, 
  timeSlot, 
  address 
}: BookingSummaryProps) => {
  return (
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
  );
};

export default BookingSummary;
