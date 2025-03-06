
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, User, MessageSquare, XCircle } from 'lucide-react';
import { Job } from '@/types';
import { useToast } from '@/hooks/use-toast';

interface AppointmentListProps {
  appointments: Job[];
}

const AppointmentList = ({ appointments }: AppointmentListProps) => {
  const { toast } = useToast();

  const handleCancelAppointment = (id: string) => {
    // In a real app, you would call your API to cancel the appointment
    toast({
      title: "Appointment Cancelled",
      description: "Your appointment has been cancelled successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Upcoming Appointments</h2>
        <Button variant="outline" asChild>
          <a href="/book">Book New Service</a>
        </Button>
      </div>

      {appointments.length > 0 ? (
        <div className="space-y-4">
          {appointments.map(appointment => (
            <Card key={appointment.id}>
              <CardHeader className="pb-2">
                <CardTitle>{appointment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{appointment.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{appointment.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{appointment.address}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-gray-500" />
                    <span>Handyman: Alex Johnson</span>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="text-lg font-semibold text-brand-blue">{appointment.payment}</div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-red-500 hover:text-red-700"
                        onClick={() => handleCancelAppointment(appointment.id)}
                      >
                        <XCircle className="w-4 h-4 mr-2" />
                        Cancel
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-gray-500 mb-4">You have no upcoming appointments</p>
            <Button asChild>
              <a href="/book">Book a Service</a>
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AppointmentList;
