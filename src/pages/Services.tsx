
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { services } from '@/data/services';

const Services = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  
  useEffect(() => {
    // If location was passed from the Hero component
    if (location.state && location.state.location) {
      setLocationQuery(location.state.location);
    }
  }, [location]);
  
  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="py-8 bg-gray-50">
          <div className="container px-4 mx-auto">
            <h1 className="mb-2 text-3xl font-bold">Our Services</h1>
            <p className="mb-6 text-gray-600">Find the perfect handyman service for your home needs</p>
            
            <div className="flex flex-col gap-4 p-4 mb-8 bg-white rounded-lg shadow-sm md:flex-row">
              <div className="flex-1">
                <Input
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="relative flex-1 md:flex-none md:w-64">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Enter your location"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                  className="pl-10 w-full"
                />
              </div>
              <Button className="bg-brand-blue hover:bg-brand-blue-dark">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  priceRange={service.priceRange}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
