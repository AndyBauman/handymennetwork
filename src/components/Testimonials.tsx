
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Homeowner',
    quote: 'The handyman arrived within 2 hours of booking and fixed my leaky faucet perfectly. The upfront pricing was refreshing - no surprises!',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Reeves',
    role: 'Property Manager',
    quote: 'I use Handycierge for all my rental properties now. Fast response times and quality work every time. Highly recommend their electrical services.',
    rating: 5
  },
  {
    id: 3,
    name: 'Jennifer Chen',
    role: 'Homeowner',
    quote: 'Had my TV mounted and furniture assembled in one visit. The handyman was professional, fast and cleaned up afterward. Will use again!',
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it — hear from homeowners like you
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-4 italic text-gray-700">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 mr-4 text-white rounded-full bg-brand-blue">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
