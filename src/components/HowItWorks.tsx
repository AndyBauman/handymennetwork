
import { CalendarCheck, Search, Users } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: '1. Choose Your Service',
    description: 'Browse through our wide range of services, all with upfront pricing. No surprises, no hidden fees.'
  },
  {
    icon: Users,
    title: '2. Get Matched',
    description: 'We instantly match you with available, qualified handymen in your area who are ready to help.'
  },
  {
    icon: CalendarCheck,
    title: '3. Job Done',
    description: 'Track your handyman in real-time. Pay securely through our app once the job is completed to your satisfaction.'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Getting help with Handycierge is quick and easy. Here's how:
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
      </div>
    </section>
  );
};

export default HowItWorks;
