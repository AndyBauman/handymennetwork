
import { Wrench, Zap, Tv, Hammer, Paintbrush, Sofa, Shield, Leaf, Box } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useNavigate } from 'react-router-dom';
import { services } from '@/data/services';
import { Button } from '@/components/ui/button';

const FeaturedServices = () => {
  const navigate = useNavigate();
  
  const handleServiceClick = (id: string) => {
    navigate(`/services/${id}`);
  };
  
  // Display only the first 8 services from our main services data
  const featuredServices = services.slice(0, 8);
  
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Quality handyman services for all your home needs with transparent pricing
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              priceRange={service.priceRange}
              onClick={() => handleServiceClick(service.id)}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={() => navigate('/services')}
            className="px-8"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
