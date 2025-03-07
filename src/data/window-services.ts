
import { Service, Task } from '@/types';
import { Window } from 'lucide-react';

export const windowService: Service = {
  id: 'window-services',
  title: 'Window Services',
  description: 'Installation, treatment, and maintenance of windows.',
  icon: Window,
  priceRange: '$100 - $3,500',
  longDescription: 'Our comprehensive window services include professional installation, treatment, and maintenance. From installing new windows to applying treatments for energy efficiency and privacy, our skilled technicians ensure proper fit, sealing, and functionality for all window types.',
  tasks: [
    {
      id: 'window-treatments',
      title: 'Interior Window Treatments',
      price: 350,
      description: 'Professional installation of window treatments including blinds, shades, and drapes. Price per window.',
      duration: '1-3 hours'
    },
    {
      id: 'blinds-installation',
      title: 'Blinds Installation',
      price: 125,
      description: 'Professional mounting and installation of window blinds with proper hardware. Price per window.',
      duration: '30-60 minutes'
    },
    {
      id: 'curtain-installation',
      title: 'Curtain Installation',
      price: 150,
      description: 'Installation of curtains including secure mounting of curtain rods and hanging of curtains. Price per window.',
      duration: '30-60 minutes'
    },
    {
      id: 'curtain-rod-installation',
      title: 'Curtain Rod Installation',
      price: 85,
      description: 'Professional mounting of curtain rods with secure anchoring to wall studs. Price per window.',
      duration: '20-40 minutes'
    },
    {
      id: 'drapery-installation',
      title: 'Drapery Installation',
      price: 175,
      description: 'Installation of formal draperies including hardware mounting and proper hanging. Price per window.',
      duration: '1-2 hours'
    },
    {
      id: 'shutter-installation',
      title: 'Shutter Installation',
      price: 225,
      description: 'Professional installation of interior or exterior window shutters with proper alignment. Price per window.',
      duration: '1-2 hours'
    }
  ]
};

export const getWindowService = (): Service => {
  return windowService;
};
