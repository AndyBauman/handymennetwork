
import React from 'react';
import { MapPin, Clock, DollarSign, CheckCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

export interface JobNotificationProps {
  id: string;
  title: string;
  location: string;
  distance: string;
  payment: string;
  duration: string;
  urgency: 'low' | 'medium' | 'high';
  onAccept: (id: string) => void;
  onDecline: (id: string) => void;
  timeLeft: number; // Time left in seconds
}

const JobNotification = ({
  id,
  title,
  location,
  distance,
  payment,
  duration,
  urgency,
  onAccept,
  onDecline,
  timeLeft
}: JobNotificationProps) => {
  const { toast } = useToast();
  
  const urgencyColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  const handleAccept = () => {
    toast({
      title: "Job Accepted!",
      description: "Navigate to the job location to begin."
    });
    onAccept(id);
  };

  const handleDecline = () => {
    onDecline(id);
  };

  return (
    <Card className="w-full mb-4 overflow-hidden border-2 border-brand-blue animate-pulse">
      <CardContent className="p-0">
        <div className="p-4 bg-brand-blue/10">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className={`px-2 py-1 text-xs font-semibold rounded ${urgencyColors[urgency]}`}>
              {urgency === 'high' ? 'Urgent' : urgency === 'medium' ? 'Soon' : 'Standard'}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{location} ({distance})</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-1" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center font-semibold text-brand-blue">
              <DollarSign className="w-4 h-4 mr-1" />
              <span>{payment}</span>
            </div>
          </div>
          
          <div className="w-full h-2 mb-2 overflow-hidden bg-gray-200 rounded-full">
            <div 
              className="h-full bg-brand-orange" 
              style={{ width: `${(timeLeft / 180) * 100}%` }}
            ></div>
          </div>
          <div className="text-xs text-center text-gray-500">
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')} remaining to respond
          </div>
        </div>
        
        <div className="flex">
          <Button 
            variant="ghost" 
            className="flex-1 p-3 rounded-none h-14 hover:bg-red-50 hover:text-red-600" 
            onClick={handleDecline}
          >
            <X className="w-5 h-5 mr-1" />
            Pass
          </Button>
          <Button 
            className="flex-1 p-3 rounded-none h-14 bg-brand-blue hover:bg-brand-blue/90" 
            onClick={handleAccept}
          >
            <CheckCircle className="w-5 h-5 mr-1" />
            Accept
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobNotification;
