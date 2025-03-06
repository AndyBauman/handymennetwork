
import React from 'react';
import { Navigation, MessageSquare, CheckCircle, Clock, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Job } from '@/types';
import { useToast } from '@/hooks/use-toast';

interface JobInProgressProps {
  job: Job;
  onStatusUpdate: (jobId: string, status: string) => void;
}

const JobInProgress = ({ job, onStatusUpdate }: JobInProgressProps) => {
  const { toast } = useToast();
  
  const handleStatusUpdate = (status: string) => {
    toast({
      title: `Job ${status}`,
      description: status === 'completed' 
        ? "Great job! The homeowner will be asked to approve the completion." 
        : `You've marked this job as ${status.toLowerCase()}.`
    });
    onStatusUpdate(job.id, status);
  };
  
  return (
    <Card className="mb-6">
      <CardHeader className="pb-2">
        <CardTitle>Job In Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="p-4 border rounded-lg">
          <h3 className="mb-2 text-xl font-semibold">{job.title}</h3>
          
          <div className="grid gap-3 mb-4 md:grid-cols-2">
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-brand-blue" />
              <div>
                <p className="text-sm font-medium">Scheduled Time</p>
                <p className="text-gray-500">{job.date} • {job.time}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-brand-blue" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-gray-500">{job.address}</p>
              </div>
            </div>
          </div>
          
          <div className="p-3 mb-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="font-medium">Client:</p>
              <p>{job.client}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="font-medium">Payment:</p>
              <p className="font-semibold text-brand-blue">{job.payment}</p>
            </div>
          </div>
          
          <div className="grid gap-2 sm:grid-cols-2">
            <Button onClick={() => window.open(`https://maps.google.com/?q=${job.address}`, '_blank')} className="gap-2">
              <Navigation className="w-4 h-4" />
              Navigate
            </Button>
            <Button variant="outline" className="gap-2">
              <MessageSquare className="w-4 h-4" />
              Contact Client
            </Button>
          </div>
          
          <div className="flex flex-col gap-2 mt-4">
            <p className="mb-2 font-medium">Update Job Status:</p>
            <div className="grid gap-2 sm:grid-cols-3">
              {job.status !== 'arrived' && (
                <Button 
                  variant="outline" 
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue/10" 
                  onClick={() => handleStatusUpdate('arrived')}
                >
                  I've Arrived
                </Button>
              )}
              
              {(job.status === 'arrived' && job.status !== 'started') && (
                <Button 
                  variant="outline" 
                  className="border-yellow-500 text-yellow-500 hover:bg-yellow-50" 
                  onClick={() => handleStatusUpdate('started')}
                >
                  Start Job
                </Button>
              )}
              
              {job.status === 'started' && (
                <Button 
                  variant="outline" 
                  className="border-green-500 text-green-500 hover:bg-green-50" 
                  onClick={() => handleStatusUpdate('completed')}
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Mark Completed
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobInProgress;
