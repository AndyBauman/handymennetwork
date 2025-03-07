
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Home, Calendar, CheckCircle, Clock3, User as UserIcon, MapPin } from 'lucide-react';
import { Job, PaymentMethod, User as UserType } from '@/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UserProfile from '@/components/homeowner/UserProfile';
import PropertyList from '@/components/homeowner/PropertyList';
import AppointmentList from '@/components/homeowner/AppointmentList';
import JobHistoryList from '@/components/homeowner/JobHistoryList';

// Define valid payment types
const validPaymentTypes = ["credit", "debit", "paypal", "applepay", "googlepay"] as const;

// Mock data - in a real app this would come from an API
const mockUserData = {
  id: '1',
  firstName: 'John',
  lastName: 'Smith',
  email: 'john.smith@example.com',
  phone: '(555) 123-4567',
  profileImage: 'https://i.pravatar.cc/300',
  addresses: [
    {
      id: '1',
      street: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      isDefault: true,
      label: 'Home'
    },
    {
      id: '2',
      street: '456 Market St',
      unit: 'Apt 3B',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94102',
      isDefault: false,
      label: 'Rental Property'
    }
  ],
  paymentMethods: [
    {
      id: '1',
      type: 'credit',
      lastFour: '4242',
      expiryDate: '04/25',
      isDefault: true,
      cardholderName: 'John Smith'
    }
  ]
};

// Properly format the user with valid payment method types
const mockUser: UserType = {
  ...mockUserData,
  paymentMethods: mockUserData.paymentMethods.map(pm => ({
    ...pm,
    type: validPaymentTypes.includes(pm.type as any) ? pm.type as PaymentMethod['type'] : "credit"
  }))
};

const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Faucet Installation',
    status: 'upcoming',
    date: 'May 15, 2023',
    time: '10:00 AM',
    client: 'John Smith',
    address: '123 Main St, San Francisco, CA 94105',
    payment: '$175'
  },
  {
    id: '2',
    title: 'TV Mounting',
    status: 'completed',
    date: 'May 10, 2023',
    time: '2:00 PM',
    client: 'John Smith',
    address: '123 Main St, San Francisco, CA 94105',
    payment: '$150'
  },
  {
    id: '3',
    title: 'Electrical Outlet Repair',
    status: 'completed',
    date: 'May 5, 2023',
    time: '11:30 AM',
    client: 'John Smith',
    address: '456 Market St, Apt 3B, San Francisco, CA 94102',
    payment: '$120'
  }
];

const HomeownerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Welcome, {mockUser.firstName}</h1>
              <p className="text-gray-600">Manage your properties and service appointments</p>
            </div>
            <Button className="mt-4 md:mt-0 bg-brand-orange hover:bg-brand-orange-dark" asChild>
              <a href="/book">Book a Service</a>
            </Button>
          </div>

          <Tabs defaultValue="overview" onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="w-full bg-white border shadow-sm">
              <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
              <TabsTrigger value="properties" className="flex-1">Properties</TabsTrigger>
              <TabsTrigger value="appointments" className="flex-1">Appointments</TabsTrigger>
              <TabsTrigger value="history" className="flex-1">Job History</TabsTrigger>
              <TabsTrigger value="profile" className="flex-1">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Upcoming Appointments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {mockJobs.filter(job => job.status === 'upcoming').length}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Properties</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {mockUser.addresses.length}
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Completed Jobs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">
                      {mockJobs.filter(job => job.status === 'completed').length}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Next Appointment</CardTitle>
                </CardHeader>
                <CardContent>
                  {mockJobs.filter(job => job.status === 'upcoming').length > 0 ? (
                    <div className="space-y-4">
                      {mockJobs.filter(job => job.status === 'upcoming')[0] && (
                        <div className="p-4 border rounded-lg">
                          <div className="flex flex-wrap items-start justify-between gap-2">
                            <div>
                              <h3 className="font-semibold">{mockJobs.filter(job => job.status === 'upcoming')[0].title}</h3>
                              <div className="flex items-center mt-1 text-sm text-gray-500">
                                <Calendar className="w-4 h-4 mr-1" />
                                {mockJobs.filter(job => job.status === 'upcoming')[0].date} • {mockJobs.filter(job => job.status === 'upcoming')[0].time}
                              </div>
                              <div className="flex items-center mt-1 text-sm text-gray-500">
                                <MapPin className="w-4 h-4 mr-1" />
                                {mockJobs.filter(job => job.status === 'upcoming')[0].address}
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-brand-blue">{mockJobs.filter(job => job.status === 'upcoming')[0].payment}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      <Button asChild variant="outline" className="w-full">
                        <a href="/appointments">View All Appointments</a>
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-gray-500 mb-4">No upcoming appointments</p>
                      <Button asChild className="bg-brand-blue">
                        <a href="/book">Book a Service</a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                  {mockJobs.filter(job => job.status === 'completed').length > 0 ? (
                    <div className="space-y-4">
                      {mockJobs
                        .filter(job => job.status === 'completed')
                        .slice(0, 2)
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
                                <div className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  Completed
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      <Button asChild variant="outline" className="w-full">
                        <a href="/history">View Job History</a>
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-gray-500">No completed jobs yet</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="properties">
              <PropertyList properties={mockUser.addresses} />
            </TabsContent>

            <TabsContent value="appointments">
              <AppointmentList appointments={mockJobs.filter(job => job.status === 'upcoming')} />
            </TabsContent>

            <TabsContent value="history">
              <JobHistoryList jobs={mockJobs.filter(job => job.status === 'completed')} />
            </TabsContent>

            <TabsContent value="profile">
              <UserProfile user={mockUser} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomeownerDashboard;
