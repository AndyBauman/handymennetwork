
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 text-white hero-gradient">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Get Started?</h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-white/90">
          Book a handyman today and get your home projects completed with ease.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100" asChild>
            <Link to="/services">Explore Services</Link>
          </Button>
          <Button size="lg" className="bg-brand-orange hover:bg-brand-orange-dark" asChild>
            <Link to="/book">Book Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
