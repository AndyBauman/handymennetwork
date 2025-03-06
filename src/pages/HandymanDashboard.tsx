
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bell, 
  Calendar, 
  CreditCard, 
  Home, 
  MessageSquare, 
  Settings, 
  User, 
  Clock,
  Wrench, 
  CheckCircle2,
  MapPin,
  Star,
  LogOut
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import JobNotification from '@/components/handyman/JobNotification';
import JobsList from '@/components/handyman/JobsList';
import JobInProgress from '@/components/handyman/JobInProgress';
import { Job, JobNotification as JobNotificationType } from '@/types';

const mockJobs = [
  {
    id: '1',
    title: 'Fix leaking kitchen faucet',
    status: 'completed',
    date: '2023-06-15',
    time: '10:00 AM - 11:30 AM',
    client: 'John Doe',
    address: '123 Main St, Anytown, CA',
    payment: '$120.00'
  },
  {
    id: '2',
    title: 'TV mounting in living room',
    status: 'upcoming',
    date: '2023-06-22',
    time: '2:00 PM - 4:00 PM',
    client: 'Jane Smith',
    address: '456 Oak Dr, Somewhere, CA',
    payment: '$175.00'
  },
  {
    id: '3',
    title: 'Assemble office desk',
    status: 'started',
    date: '2023-06-20',
    time: '9:00 AM - 12:00 PM',
    client: 'Robert Johnson',
    address: '789 Pine Ave, Elsewhere, CA',
    payment: '$90.00'
  }
];

const mockJobNotifications: JobNotificationType[] = [
  {
    id: '101',
    title: 'Install bathroom sink',
    location: 'Oak Street, Downtown',
    distance: '2.3 miles',
    payment: '$150.00',
    duration: '1-2 hours',
    urgency: 'medium',
    timeLeft: 165 // seconds
  },
  {
    id: '102',
    title: 'Fix electrical outlet',
    location: 'Pine Avenue, Westside',
    distance: '1.5 miles',
    payment: '$85.00',
    duration: '30-45 min',
    urgency: 'high',
    timeLeft: 105 // seconds
  }
];

const HandymanDashboard = () => {
  const { toast } = useToast();
  const [isAvailable, setIsAvailable] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [jobs, setJobs] = useState<Job[]>(mockJobs);
  const [jobNotifications, setJobNotifications] = useState<JobNotificationType[]>(mockJobNotifications);
  const [timers, setTimers] = useState<{[key: string]: number}>({});
  
  // Set up countdown timers for job notifications
  useEffect(() => {
    const intervals: {[key: string]: NodeJS.Timeout} = {};
    
    jobNotifications.forEach(notification => {
      setTimers(prev => ({...prev, [notification.id]: notification.timeLeft}));
      
      intervals[notification.id] = setInterval(() => {
        setTimers(prev => {
          const newTime = prev[notification.id] - 1;
          
          // Remove notification when timer reaches 0
          if (newTime <= 0) {
            clearInterval(intervals[notification.id]);
            setJobNotifications(currentNotifications => 
              currentNotifications.filter(n => n.id !== notification.id)
            );
            
            toast({
              title: "Job Opportunity Expired",
              description: `The ${notification.title} job is no longer available.`
            });
            
            return {...prev, [notification.id]: 0};
          }
          
          return {...prev, [notification.id]: newTime};
        });
      }, 1000);
    });
    
    // Cleanup timers
    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [jobNotifications, toast]);
  
  const handleAvailabilityChange = (checked: boolean) => {
    setIsAvailable(checked);
    
    toast({
      title: checked ? "You're Now Available" : "You're Now Unavailable",
      description: checked 
        ? "You'll receive new job notifications." 
        : "You won't receive any new job requests."
    });
  };
  
  const handleAcceptJob = (jobId: string) => {
    // Find the notification
    const notification = jobNotifications.find(n => n.id === jobId);
    
    if (notification) {
      // Add to jobs
      const newJob: Job = {
        id: jobId,
        title: notification.title,
        status: 'accepted',
        date: new Date().toLocaleDateString(),
        time: `${new Date().getHours()}:${new Date().getMinutes()} - Est. ${notification.duration}`,
        client: 'New Client',
        address: notification.location,
        payment: notification.payment
      };
      
      setJobs(prev => [...prev, newJob]);
      
      // Remove from notifications
      setJobNotifications(prev => prev.filter(n => n.id !== jobId));
    }
  };
  
  const handleDeclineJob = (jobId: string) => {
    setJobNotifications(prev => prev.filter(n => n.id !== jobId));
    
    toast({
      title: "Job Declined",
      description: "You've passed on this job opportunity."
    });
  };
  
  const handleJobStatusUpdate = (jobId: string, status: string) => {
    setJobs(prev => 
      prev.map(job => 
        job.id === jobId 
          ? {...job, status: status as 'pending' | 'accepted' | 'arrived' | 'started' | 'completed'} 
          : job
      )
    );
  };
  
  const currentJob = jobs.find(job => ['accepted', 'arrived', 'started'].includes(job.status));
  
  return (
    <>
      <Navbar />
      <div className="container p-4 mx-auto">
        <div className="flex flex-col gap-6 md:flex-row">
          <aside className="w-full p-4 bg-white rounded-lg shadow-sm md:w-64">
            <div className="flex flex-col items-center mb-6">
              <div className="w-20 h-20 mb-3 overflow-hidden rounded-full bg-gray-100">
                <img src="https://via.placeholder.com/80" alt="Profile" className="object-cover w-full h-full" />
              </div>
              <h2 className="text-lg font-semibold">Mike Rivera</h2>
              <p className="text-sm text-gray-600">Handyman</p>
              <div className="flex items-center mt-2 space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="ml-1 text-sm">(24)</span>
              </div>
            </div>
            
            <div className="flex items-center p-3 mb-6 border rounded-lg">
              <div className="flex-1">
                <Label htmlFor="availability" className="font-medium">
                  Available for Jobs
                </Label>
                <p className="text-xs text-gray-500">
                  {isAvailable ? 'Receiving job requests' : 'Not receiving requests'}
                </p>
              </div>
              <Switch 
                id="availability" 
                checked={isAvailable} 
                onCheckedChange={handleAvailabilityChange} 
              />
            </div>
            
            <nav>
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => setActiveTab('dashboard')}
                    className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                      activeTab === 'dashboard' 
                        ? 'bg-brand-blue text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Home className="w-5 h-5 mr-3" />
                    Dashboard
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('jobs')}
                    className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                      activeTab === 'jobs' 
                        ? 'bg-brand-blue text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Wrench className="w-5 h-5 mr-3" />
                    Jobs
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('schedule')}
                    className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                      activeTab === 'schedule' 
                        ? 'bg-brand-blue text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Calendar className="w-5 h-5 mr-3" />
                    Schedule
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('messages')}
                    className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                      activeTab === 'messages' 
                        ? 'bg-brand-blue text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <MessageSquare className="w-5 h-5 mr-3" />
                    Messages
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('earnings')}
                    className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                      activeTab === 'earnings' 
                        ? 'bg-brand-blue text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mr-3" />
                    Earnings
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                      activeTab === 'profile' 
                        ? 'bg-brand-blue text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <User className="w-5 h-5 mr-3" />
                    Profile
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className={`flex items-center w-full px-4 py-2 text-left rounded-md ${
                      activeTab === 'settings' 
                        ? 'bg-brand-blue text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <Settings className="w-5 h-5 mr-3" />
                    Settings
                  </button>
                </li>
                <li className="pt-4 mt-4 border-t">
                  <Link to="/" className="flex items-center px-4 py-2 text-red-600 rounded-md hover:bg-red-50">
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          
          <main className="flex-1">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                
                {isAvailable && jobNotifications.length > 0 && (
                  <div className="mb-6">
                    <h2 className="mb-3 text-xl font-semibold">New Job Opportunities</h2>
                    {jobNotifications.map(notification => (
                      <JobNotification
                        key={notification.id}
                        {...notification}
                        timeLeft={timers[notification.id] || notification.timeLeft}
                        onAccept={handleAcceptJob}
                        onDecline={handleDeclineJob}
                      />
                    ))}
                  </div>
                )}
                
                {currentJob && (
                  <JobInProgress 
                    job={currentJob} 
                    onStatusUpdate={handleJobStatusUpdate} 
                  />
                )}
                
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="p-2 mb-4 text-white bg-blue-500 rounded-full">
                        <Wrench className="w-6 h-6" />
                      </div>
                      <p className="text-sm text-gray-500">Completed Jobs</p>
                      <h3 className="text-3xl font-bold">23</h3>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="p-2 mb-4 text-white bg-green-500 rounded-full">
                        <CreditCard className="w-6 h-6" />
                      </div>
                      <p className="text-sm text-gray-500">Earnings</p>
                      <h3 className="text-3xl font-bold">$2,450</h3>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="p-2 mb-4 text-white bg-yellow-500 rounded-full">
                        <Star className="w-6 h-6" />
                      </div>
                      <p className="text-sm text-gray-500">Rating</p>
                      <h3 className="text-3xl font-bold">4.9</h3>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="p-2 mb-4 text-white rounded-full bg-brand-orange">
                        <Clock className="w-6 h-6" />
                      </div>
                      <p className="text-sm text-gray-500">Upcoming Jobs</p>
                      <h3 className="text-3xl font-bold">2</h3>
                    </CardContent>
                  </Card>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Jobs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <JobsList 
                      jobs={jobs.filter(job => job.status === 'upcoming')} 
                      type="upcoming" 
                    />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Notifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex p-3 border rounded-md">
                        <Bell className="w-5 h-5 mr-3 text-brand-orange" />
                        <div>
                          <p className="font-medium">New job request in your area</p>
                          <p className="text-sm text-gray-500">Furniture assembly - 3.2 miles away</p>
                          <p className="text-xs text-gray-400">1 hour ago</p>
                        </div>
                      </div>
                      
                      <div className="flex p-3 border rounded-md">
                        <Bell className="w-5 h-5 mr-3 text-brand-orange" />
                        <div>
                          <p className="font-medium">Payment received</p>
                          <p className="text-sm text-gray-500">$120 from John D. for faucet repair</p>
                          <p className="text-xs text-gray-400">Yesterday</p>
                        </div>
                      </div>
                      
                      <div className="flex p-3 border rounded-md">
                        <Star className="w-5 h-5 mr-3 text-yellow-400" />
                        <div>
                          <p className="font-medium">New 5-star review</p>
                          <p className="text-sm text-gray-500">Jane S. rated your TV mounting service</p>
                          <p className="text-xs text-gray-400">2 days ago</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeTab === 'jobs' && (
              <div className="space-y-6">
                <h1 className="text-2xl font-bold">Jobs</h1>
                
                {currentJob && (
                  <JobInProgress 
                    job={currentJob} 
                    onStatusUpdate={handleJobStatusUpdate} 
                  />
                )}
                
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Jobs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <JobsList 
                      jobs={jobs.filter(job => job.status === 'upcoming')} 
                      type="upcoming" 
                    />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Completed Jobs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <JobsList 
                      jobs={jobs.filter(job => job.status === 'completed')} 
                      type="completed" 
                    />
                  </CardContent>
                </Card>
              </div>
            )}
            
            {!['dashboard', 'jobs'].includes(activeTab) && (
              <div className="flex flex-col items-center justify-center h-96">
                <h2 className="mb-2 text-xl font-semibold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                <p className="text-gray-500">This section is under development</p>
              </div>
            )}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HandymanDashboard;
