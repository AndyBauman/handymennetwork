
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Clock } from 'lucide-react';

const timeSlots = [
  '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', 
  '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', 
  '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
];

interface DateTimeStepProps {
  date: Date | undefined;
  timeSlot: string | undefined;
  onDateSelect: (date: Date | undefined) => void;
  onTimeSelect: (time: string) => void;
}

const DateTimeStep = ({ 
  date, 
  timeSlot, 
  onDateSelect, 
  onTimeSelect 
}: DateTimeStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <Label>Select a Date</Label>
        <div className="mt-2 p-2 border rounded-md">
          <CalendarComponent
            mode="single"
            selected={date}
            onSelect={onDateSelect}
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
              onClick={() => onTimeSelect(time)}
            >
              <Clock className="w-4 h-4 mr-2" />
              {time}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DateTimeStep;
