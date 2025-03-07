
import { format } from 'date-fns';
import { Calendar, Clock, MapPin, User, DollarSign } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

interface BookingSummaryProps {
  bookingData: any;
  handyman?: {
    name: string;
    photo: string;
    rating: number;
    reviewCount: number;
  };
  date?: Date;
  timeSlot?: string;
  address?: string;
}

const BookingSummary = ({ bookingData, handyman, date, timeSlot, address }: BookingSummaryProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
        <CardDescription>Review your service details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Service</h3>
          <div className="flex items-start">
            <div className="w-5 h-5 mr-2 text-brand-blue">
              {bookingData.serviceIcon}
            </div>
            <div>
              <p>{bookingData.serviceName}</p>
              <p className="text-sm text-gray-500">{bookingData.taskName}</p>
            </div>
          </div>
        </div>

        {date && (
          <div>
            <h3 className="font-semibold mb-2">Date & Time</h3>
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{date ? format(date, 'PPP') : 'Not selected'}</span>
            </div>
            {timeSlot && (
              <div className="flex items-center mt-1 text-sm text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span>{timeSlot}</span>
              </div>
            )}
          </div>
        )}

        {address && (
          <div>
            <h3 className="font-semibold mb-2">Location</h3>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span>{address}</span>
            </div>
          </div>
        )}

        {handyman && (
          <div>
            <h3 className="font-semibold mb-2">Handyman</h3>
            <div className="flex items-center">
              {handyman.photo && (
                <img 
                  src={handyman.photo} 
                  alt={handyman.name}
                  className="w-10 h-10 mr-3 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-medium">{handyman.name}</p>
                <p className="text-sm text-gray-500">
                  {handyman.rating} stars ({handyman.reviewCount} reviews)
                </p>
              </div>
            </div>
          </div>
        )}

        {bookingData.price && (
          <div className="pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold text-brand-blue">${bookingData.price}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              * Price may vary based on the scope of work
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingSummary;
