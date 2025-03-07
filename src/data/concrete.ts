
import { Service, Task } from '@/types';
import { LucideIcon, Construction } from 'lucide-react';

export const concreteService: Service = {
  id: 'concrete-work',
  title: 'Concrete Work',
  description: 'Installation and repair of concrete surfaces and structures.',
  icon: Construction as LucideIcon,
  priceRange: '$250 - $5,000',
  longDescription: 'Our professional concrete services cover installation, repair, and finishing of all concrete surfaces. From patios and driveways to steps and specialized concrete structures, our skilled technicians ensure proper foundation preparation, reinforcement, and finishing for durable, attractive results.',
  tasks: [
    {
      id: 'concrete-patio',
      title: 'Concrete Patio',
      price: 2500,
      description: 'Installation of new concrete patio with proper grading, reinforcement, and finishing. Price per 200 sq ft.',
      duration: '2-3 days'
    },
    {
      id: 'concrete-porch',
      title: 'Concrete Porch',
      price: 2800,
      description: 'Construction of concrete porch with proper foundation, steps, and finishing. Price varies by size and complexity.',
      duration: '2-4 days'
    },
    {
      id: 'concrete-stairs',
      title: 'Concrete Stairs',
      price: 1800,
      description: 'Construction of durable concrete stairs with proper reinforcement and non-slip finish. Price for standard staircase.',
      duration: '1-3 days'
    },
    {
      id: 'concrete-steps',
      title: 'Concrete Steps',
      price: 1600,
      description: 'Installation of concrete steps with proper foundation and finishing. Price for standard 3-4 step application.',
      duration: '1-2 days'
    },
    {
      id: 'patio-installation',
      title: 'Patio Installation',
      price: 3000,
      description: 'Professional installation of decorative concrete or paver patio with proper base preparation. Price per 200 sq ft.',
      duration: '2-4 days'
    },
    {
      id: 'patio-repair',
      title: 'Patio Repair',
      price: 950,
      description: 'Repair of cracked or damaged patio surfaces including proper matching of existing materials.',
      duration: '1-2 days'
    },
    {
      id: 'patio-cleaning',
      title: 'Patio Cleaning',
      price: 375,
      description: 'Professional deep cleaning of concrete or paver patio surfaces to remove stains and buildup. Price per 200 sq ft.',
      duration: '4-6 hours'
    },
    {
      id: 'patio-pressure-washing',
      title: 'Patio Pressure Washing',
      price: 325,
      description: 'High-pressure cleaning of patio surfaces to remove dirt, mildew, and stains. Price per 200 sq ft.',
      duration: '3-5 hours'
    },
    {
      id: 'driveway-sealing',
      title: 'Sealing Driveways',
      price: 650,
      description: 'Professional cleaning and application of protective sealant to concrete or asphalt driveways. Price per 500 sq ft.',
      duration: '1 day'
    }
  ]
};

export const getConcreteService = (): Service => {
  return concreteService;
};
