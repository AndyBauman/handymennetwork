import { useState } from 'react';
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
    status: 'upcoming',
    date: '2023-06-25',
    time: '9:00 AM - 12:00 PM',
    client: 'Robert Johnson',
    address: '789 Pine Ave, Elsewhere, CA',
    payment: '$90.00'
  }
];

const HandymanDashboard = () => {
  const { toast } = useToast();
  const [isAvailable, setIsAvailable] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const handleAvailabilityChange = (checked: boolean) => {
    setIsAvailable(checked);
    
    toast({
      title: checked ? "You're Now Available" : "You're Now Unavailable",
      description: checked 
        ? "You'll receive new job notifications." 
        : "You won't receive any new job requests."
    });
  };
  
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
                    <div className="space-y-4">
                      {mockJobs
                        .filter(job => job.status === 'upcoming')
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
                        ))}
                    </div>
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
            
            {activeTab !== 'dashboard' && (
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
