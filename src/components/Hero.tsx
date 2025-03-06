
import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      navigate('/services', { state: { location } });
    }
  };

  return (
    <div className="relative overflow-hidden hero-gradient">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="container relative flex flex-col items-center px-4 py-16 text-center md:py-24 lg:py-32">
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Expert Handymen, <span className="text-brand-orange">On Demand</span>
        </h1>
        <p className="max-w-2xl mt-6 text-lg text-white/90">
          Book skilled professionals for same-day home repairs and improvements, all at transparent and upfront prices.
        </p>
        
        <form onSubmit={handleSearch} className="flex w-full max-w-md mt-8 overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="relative flex items-center flex-1 w-full">
            <MapPin className="absolute left-3 w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Enter your location"
              className="pl-10 border-0 focus-visible:ring-0 focus-visible:ring-transparent"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <Button type="submit" className="rounded-l-none bg-brand-orange hover:bg-brand-orange-dark">
            <Search className="w-5 h-5 mr-2" />
            Find Services
          </Button>
        </form>
        
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 text-sm text-white/80">
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 rounded-full bg-brand-orange"></div>
            <span>Instant Booking</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 rounded-full bg-brand-orange"></div>
            <span>Verified Professionals</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 rounded-full bg-brand-orange"></div>
            <span>Upfront Pricing</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 mr-2 rounded-full bg-brand-orange"></div>
            <span>Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
