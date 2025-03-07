
import { Service, Task } from '@/types';
import { Image } from 'lucide-react';

export const decorativeService: Service = {
  id: 'decorative-services',
  title: 'Decorative Services',
  description: 'Art hanging, decorative hardware, and aesthetic improvements.',
  icon: Image,
  priceRange: '$75 - $500',
  longDescription: 'Our decorative services help enhance the aesthetic appeal of your home. From professional art hanging to mirror mounting and decorative hardware installation, our skilled technicians ensure proper placement, secure mounting, and perfect alignment for a polished, professional look.',
  tasks: [
    {
      id: 'art-hanging',
      title: 'Art Hanging',
      price: 125,
      description: 'Professional hanging of artwork with proper anchoring and precise alignment. Price for up to 3 pieces.',
      duration: '1-2 hours'
    },
    {
      id: 'mirror-hanging',
      title: 'Mirror Hanging',
      price: 150,
      description: 'Secure mounting of mirrors with appropriate hardware based on size and weight. Price per mirror.',
      duration: '1-2 hours'
    },
    {
      id: 'decorative-hardware',
      title: 'Decorative Hardware Installation',
      price: 175,
      description: 'Installation of decorative hardware including cabinet pulls, door handles, and hooks with precise alignment.',
      duration: '2-3 hours'
    },
    {
      id: 'caulking',
      title: 'Caulking',
      price: 225,
      description: 'Professional application of caulk to seal gaps around bathtubs, sinks, windows, and other areas. Price per room.',
      duration: '2-3 hours'
    }
  ]
};

export const getDecorativeService = (): Service => {
  return decorativeService;
};
