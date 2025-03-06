
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Star, MessageSquare } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogFooter,
  DialogTrigger
} from '@/components/ui/dialog';
import { Job } from '@/types';
import { useToast } from '@/hooks/use-toast';

interface JobHistoryListProps {
  jobs: Job[];
}

const JobHistoryList = ({ jobs }: JobHistoryListProps) => {
  const { toast } = useToast();
  const [showRatingDialog, setShowRatingDialog] = useState(false);
  const [currentJobId, setCurrentJobId] = useState<string | null>(null);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleOpenRatingDialog = (jobId: string) => {
    setCurrentJobId(jobId);
    setShowRatingDialog(true);
  };

  const handleCloseRatingDialog = () => {
    setShowRatingDialog(false);
    setCurrentJobId(null);
    setRating(0);
    setReview('');
  };

  const handleSubmitReview = () => {
    // In a real app, you would call your API to submit the review
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback!",
    });
    handleCloseRatingDialog();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Service History</h2>
      </div>

      {jobs.length > 0 ? (
        <div className="space-y-4">
          {jobs.map(job => (
            <Card key={job.id}>
              <CardHeader className="pb-2">
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{job.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{job.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                    <span>{job.address}</span>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="text-lg font-semibold text-brand-blue">{job.payment}</div>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleOpenRatingDialog(job.id)}
                      >
                        <Star className="w-4 h-4 mr-2" />
                        Rate & Review
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact
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
            <p className="text-gray-500 mb-4">You have no completed jobs yet</p>
            <Button asChild>
              <a href="/book">Book a Service</a>
            </Button>
          </CardContent>
        </Card>
      )}

      <Dialog open={showRatingDialog} onOpenChange={setShowRatingDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Rate Your Handyman</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 mx-1 cursor-pointer ${
                    star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                  }`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <textarea
              className="w-full p-2 border rounded-md"
              rows={4}
              placeholder="Share your experience..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={handleCloseRatingDialog}>Cancel</Button>
            <Button onClick={handleSubmitReview} disabled={rating === 0}>Submit Review</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobHistoryList;
