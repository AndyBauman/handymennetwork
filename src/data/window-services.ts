
import { Home } from 'lucide-react';
import { Service } from '@/types';

export const windowServices: Service[] = [
  {
    id: 'window-services',
    title: 'Window Services',
    description: 'Installation, repair, and replacement of windows',
    icon: Home,
    priceRange: '$125 - $3500',
    longDescription: 'Our professional window services include installation of new windows, replacement of old or damaged windows, and repairs to improve energy efficiency. We work with all types of windows and ensure proper insulation and sealing.',
    tasks: [
      {
        id: 'window-installation',
        title: 'Window Installation',
        price: 550,
        description: 'Professional installation of new window including proper framing, insulation, and sealing.',
        duration: '3-5 hours'
      },
      {
        id: 'window-replacement-one',
        title: 'Window Replacement - 1 Window',
        price: 450,
        description: 'Removal of old window and installation of new replacement window with proper sealing.',
        duration: '2-4 hours'
      },
      {
        id: 'window-replacement-two',
        title: 'Window Replacement - 2 Windows',
        price: 850,
        description: 'Replacement of two windows with new units including proper insulation and trim.',
        duration: '4-6 hours'
      },
      {
        id: 'window-replacement-multiple',
        title: 'Window Replacement - 3 to 5 Windows',
        price: 1950,
        description: 'Comprehensive replacement of multiple windows with coordinated installation.',
        duration: '1-2 days'
      },
      {
        id: 'window-replacement-many',
        title: 'Window Replacement - 6 or more Windows',
        price: 3500,
        description: 'Large-scale window replacement project for substantial home upgrade.',
        duration: '2-3 days'
      },
      {
        id: 'window-tinting',
        title: 'Window Tinting and Coating Installation',
        price: 275,
        description: 'Application of window film for privacy, UV protection, or security purposes.',
        duration: '3-5 hours'
      },
      {
        id: 'window-sealing',
        title: 'Seal Windows',
        price: 225,
        description: 'Sealing of window frames and glass to improve energy efficiency and prevent drafts.',
        duration: '2-4 hours'
      }
    ]
  }
];
