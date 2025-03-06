
import { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  priceRange: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const ServiceCard = ({ id, title, description, icon: Icon, priceRange, onClick }: ServiceCardProps) => {
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 border hover:shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="p-3 mb-4 text-white rounded-full bg-brand-blue">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="mb-2 text-xl font-bold">{title}</h3>
          <p className="mb-4 text-sm text-gray-500">{description}</p>
          <p className="font-medium text-brand-blue">{priceRange}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 text-center">
        <Button className="w-full" variant="outline" asChild>
          <Link to={`/services/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
