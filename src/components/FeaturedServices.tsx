
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ServiceCard from './ServiceCard';
import { services } from '@/data/services';

const FeaturedServices = () => {
  const navigate = useNavigate();
  
  // Select just the first 8 services to display
  const featuredServices = services.slice(0, 8);
  
  const handleServiceClick = (id: string) => {
    navigate(`/services/${id}`);
  };
  
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
          <Button className="bg-brand-blue hover:bg-brand-blue-dark" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
