
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Check, Clock, X, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getServiceById, getRandomHandyman } from '@/data/services';
import { useToast } from '@/components/ui/use-toast';

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const service = getServiceById(id || '');
  const handyman = getRandomHandyman();
  
  const [selectedTask, setSelectedTask] = useState<string | null>(null);

  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container px-4 py-12 mx-auto text-center">
          <h1 className="mb-4 text-3xl font-bold">Service Not Found</h1>
          <p className="mb-6">Sorry, the service you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/services')}>View All Services</Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleBookService = () => {
    if (!selectedTask) {
      toast({
        title: "Please select a service task",
        description: "Choose one of the available tasks to continue",
        variant: "destructive",
      });
      return;
    }
    
    const task = service.tasks?.find(task => task.id === selectedTask);
    
    navigate('/book', { 
      state: { 
        serviceId: service.id, 
        serviceName: service.title,
        taskId: selectedTask,
        taskName: task?.title,
        price: task?.price,
        handymanId: handyman.id,
        handymanName: handyman.name
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="py-8 bg-gray-50">
          <div className="container px-4 mx-auto">
            <div className="flex items-center mb-6">
              <Button variant="ghost" onClick={() => navigate('/services')} className="mr-4">
                <X className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-3xl font-bold">{service.title}</h1>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="p-3 mb-4 text-white w-12 h-12 flex items-center justify-center rounded-full bg-brand-blue">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h2 className="mb-4 text-xl font-bold">Service Description</h2>
                    <p className="mb-6 text-gray-700">{service.longDescription}</p>
                    
                    <h2 className="mb-4 text-xl font-bold">Available Tasks</h2>
                    <div className="space-y-4">
                      {service.tasks?.map((task) => (
                        <div 
                          key={task.id}
                          className={`p-4 border rounded-lg cursor-pointer transition-all ${
                            selectedTask === task.id 
                              ? 'border-brand-blue bg-brand-blue/5' 
                              : 'hover:border-gray-300'
                          }`}
                          onClick={() => setSelectedTask(task.id)}
                        >
                          <div className="flex justify-between">
                            <h3 className="font-semibold">{task.title}</h3>
                            <span className="font-semibold text-brand-blue">${task.price}</span>
                          </div>
                          <p className="mt-2 text-sm text-gray-600">{task.description}</p>
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>Estimated time: {task.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="mb-4 text-xl font-bold">Why Choose Us</h2>
                    <ul className="mb-6 space-y-3">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                        <span>Transparent, upfront pricing</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                        <span>Licensed and insured professionals</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                        <span>Satisfaction guaranteed</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                        <span>Same-day service availability</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0" />
                        <span>90-day workmanship warranty</span>
                      </li>
                    </ul>
                    
                    <Button 
                      className="w-full mb-6 bg-brand-orange hover:bg-brand-orange-dark"
                      onClick={handleBookService}
                    >
                      Book Service Now
                    </Button>
                    
                    <div className="p-4 border rounded-lg">
                      <h3 className="mb-3 text-lg font-semibold">Available Professional</h3>
                      <div className="flex items-center mb-3">
                        <img 
                          src={handyman.photo} 
                          alt={handyman.name}
                          className="w-12 h-12 mr-3 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium">{handyman.name}</p>
                          <div className="flex items-center">
                            <div className="flex mr-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < Math.floor(handyman.rating)
                                      ? 'text-yellow-400 fill-yellow-400'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">
                              {handyman.rating} ({handyman.reviewCount} reviews)
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{handyman.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
