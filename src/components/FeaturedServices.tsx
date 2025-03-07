
import { Wrench, Zap, Tv, Hammer, Paintbrush, Sofa, Shield, Leaf, Box } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 'plumbing',
    title: 'Plumbing',
    description: 'Fix leaks, install fixtures, repair pipes, and more.',
    icon: Wrench,
    priceRange: '$75 - $250'
  },
  {
    id: 'electrical',
    title: 'Electrical',
    description: 'Install fixtures, troubleshoot problems, upgrade panels.',
    icon: Zap,
    priceRange: '$85 - $275'
  },
  {
    id: 'tv-mounting',
    title: 'TV Mounting',
    description: 'Secure installation for all TV sizes on any wall type.',
    icon: Tv,
    priceRange: '$100 - $200'
  },
  {
    id: 'furniture-assembly',
    title: 'Furniture Assembly',
    description: 'Quick assembly for all types of furniture and fixtures.',
    icon: Sofa,
    priceRange: '$60 - $450'
  },
  {
    id: 'general-home-maintenance',
    title: 'Home Maintenance',
    description: 'Regular upkeep and safety checks for your home.',
    icon: Shield,
    priceRange: '$50 - $300'
  },
  {
    id: 'landscaping',
    title: 'Landscaping',
    description: 'Professional care for your outdoor spaces and gardens.',
    icon: Leaf,
    priceRange: '$40 - $400'
  },
  {
    id: 'moving-assembly',
    title: 'Moving & Assembly',
    description: 'Help with furniture moving, hanging artwork, and assembly.',
    icon: Box,
    priceRange: '$75 - $800'
  },
  {
    id: 'painting',
    title: 'Painting',
    description: 'Professional painting for rooms, walls, or touch-ups.',
    icon: Paintbrush,
    priceRange: '$150 - $500'
  }
];

const FeaturedServices = () => {
  const navigate = useNavigate();
  
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
          {services.map((service) => (
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
      </div>
    </section>
  );
};

export default FeaturedServices;
