
import { CalendarCheck, Search, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: Search,
    title: '1. Choose Your Service',
    description: 'Browse our services with transparent, upfront pricing. Know exactly what you\'ll pay before booking.'
  },
  {
    icon: Users,
    title: '2. Get Matched',
    description: 'We connect you with background-checked, qualified professionals in your area who are ready to help.'
  },
  {
    icon: CalendarCheck,
    title: '3. Job Done',
    description: 'Schedule the work, track progress, and pay securely once the job is completed to your satisfaction.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Getting help with Handymen Network is quick and easy. Here's how:
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-sm">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-brand-blue-light/10">
                  <Icon className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild>
            <Link to="/how-it-works">Learn More About How It Works</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
