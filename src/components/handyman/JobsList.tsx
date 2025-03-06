
import React from 'react';
import { Calendar, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Job } from '@/types';

interface JobsListProps {
  jobs: Job[];
  type: 'upcoming' | 'completed';
}

const JobsList = ({ jobs, type }: JobsListProps) => {
  return (
    <div className="space-y-4">
      {jobs.length > 0 ? (
        jobs
          .filter(job => job.status === type)
          .map(job => (
            <div key={job.id} className="p-4 border rounded-lg">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-semibold">{job.title}</h3>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {job.date} • {job.time}
                  </div>
                  <div className="flex items-center mt-1 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {job.address}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-blue">{job.payment}</p>
                  <p className="text-sm text-gray-500">{job.client}</p>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-3">
                <Button variant="outline" size="sm">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  Contact
                </Button>
                <Button size="sm">
                  <CheckCircle2 className="w-4 h-4 mr-1" />
                  View Details
                </Button>
              </div>
            </div>
          ))
      ) : (
        <div className="p-8 text-center border rounded-lg">
          <p className="text-gray-500">No {type} jobs found</p>
        </div>
      )}
    </div>
  );
};

export default JobsList;
