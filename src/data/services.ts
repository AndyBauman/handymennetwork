
import { Wrench, Zap, Tv, Hammer, Paintbrush, Sofa } from 'lucide-react';
import { Service, Task, Handyman } from '@/types';

export const services: Service[] = [
  {
    id: 'plumbing',
    title: 'Plumbing',
    description: 'Fix leaks, install fixtures, repair pipes, and more.',
    icon: Wrench,
    priceRange: '$75 - $250',
    longDescription: 'Our experienced plumbers can handle all your home plumbing needs, from fixing leaking faucets to installing new fixtures and repairing damaged pipes. We provide fast, reliable service with upfront pricing.',
    tasks: [
      {
        id: 'faucet-installation',
        title: 'Faucet Installation',
        price: 175,
        description: 'Professional installation of a new kitchen or bathroom faucet. Price includes removal of old faucet and installation of customer-provided new faucet.',
        duration: '1-2 hours'
      },
      {
        id: 'toilet-repair',
        title: 'Toilet Repair',
        price: 125,
        description: 'Fix running toilets, leaks, or replace internal components. Does not include replacement of entire toilet.',
        duration: '1 hour'
      },
      {
        id: 'drain-unclogging',
        title: 'Drain Unclogging',
        price: 95,
        description: 'Clear blockages from sinks, tubs, or shower drains using professional tools. Price is per drain.',
        duration: '30-60 minutes'
      },
      {
        id: 'pipe-repair',
        title: 'Pipe Repair',
        price: 185,
        description: 'Fix leaking or damaged pipes. Price includes standard repairs; extensive damage may require additional costs.',
        duration: '1-3 hours'
      }
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical',
    description: 'Install fixtures, troubleshoot problems, upgrade panels.',
    icon: Zap,
    priceRange: '$85 - $275',
    longDescription: 'Our licensed electricians can handle all your electrical needs safely and efficiently. From installing new fixtures to troubleshooting electrical problems and upgrading panels, we ensure your home's electrical system is safe and functioning properly.',
    tasks: [
      {
        id: 'light-fixture',
        title: 'Light Fixture Installation',
        price: 95,
        description: 'Professional installation of ceiling or wall mounted light fixtures. Price is per fixture and includes removal of old fixture if needed.',
        duration: '30-60 minutes'
      },
      {
        id: 'outlet-installation',
        title: 'Outlet Installation/Replacement',
        price: 85,
        description: 'Install new electrical outlets or replace existing ones. Price is per outlet.',
        duration: '30-45 minutes'
      },
      {
        id: 'ceiling-fan',
        title: 'Ceiling Fan Installation',
        price: 150,
        description: 'Remove old fixture and install a new ceiling fan with proper mounting and wiring. Price does not include fan.',
        duration: '1-2 hours'
      },
      {
        id: 'electrical-troubleshooting',
        title: 'Electrical Troubleshooting',
        price: 125,
        description: 'Diagnose and resolve common electrical issues like circuit breaker problems, faulty switches, or electrical failures.',
        duration: '1+ hours'
      }
    ]
  },
  {
    id: 'tv-mounting',
    title: 'TV Mounting',
    description: 'Secure installation for all TV sizes on any wall type.',
    icon: Tv,
    priceRange: '$100 - $200',
    longDescription: 'Our technicians specialize in professionally mounting TVs of all sizes on various wall types. We ensure secure installation, proper leveling, and can also conceal cables for a clean look. All mounts are tested for safety and stability.',
    tasks: [
      {
        id: 'standard-tv-mount',
        title: 'Standard TV Mounting (up to 55")',
        price: 100,
        description: 'Professional mounting of TV up to 55" on drywall with standard bracket. Includes bracket installation, TV mounting, and basic cable management.',
        duration: '1 hour'
      },
      {
        id: 'large-tv-mount',
        title: 'Large TV Mounting (56" and above)',
        price: 150,
        description: 'Professional mounting of TV 56" or larger on drywall with heavy-duty bracket. Includes bracket installation, TV mounting, and basic cable management.',
        duration: '1-2 hours'
      },
      {
        id: 'complex-tv-mount',
        title: 'Complex TV Mounting (brick/concrete)',
        price: 200,
        description: 'TV mounting on brick, stone, or concrete walls. Includes special anchoring hardware and professional installation.',
        duration: '2-3 hours'
      },
      {
        id: 'tv-mount-with-concealment',
        title: 'TV Mounting with Cable Concealment',
        price: 180,
        description: 'Standard TV mounting plus professional in-wall cable concealment for a clean, wire-free look. Limited to drywall installations.',
        duration: '2-3 hours'
      }
    ]
  },
  {
    id: 'furniture-assembly',
    title: 'Furniture Assembly',
    description: 'Quick assembly for all types of furniture and fixtures.',
    icon: Sofa,
    priceRange: '$60 - $450',
    longDescription: 'Our skilled assemblers can put together virtually any type of furniture quickly and correctly. From simple bookcases to complex wardrobes and outdoor furniture, we handle the assembly while you save time and avoid frustration.',
    tasks: [
      {
        id: 'bookcase-assembly',
        title: 'Bookcase/Shelf Assembly',
        price: 60,
        description: 'Professional assembly of standard bookcases or shelving units. Price is per unit for basic complexity items.',
        duration: '30-60 minutes'
      },
      {
        id: 'bed-frame-assembly',
        title: 'Bed Frame Assembly',
        price: 120,
        description: 'Assembly of bed frames including headboard and footboard if included. Price does not include mattress setup.',
        duration: '1-2 hours'
      },
      {
        id: 'wardrobe-assembly',
        title: 'Wardrobe/Cabinet Assembly',
        price: 200,
        description: 'Assembly of large wardrobes, armoires, or complex storage cabinets with multiple components and doors.',
        duration: '2-4 hours'
      },
      {
        id: 'outdoor-furniture',
        title: 'Outdoor Furniture Assembly',
        price: 150,
        description: 'Assembly of outdoor furniture like patio sets, grills, or garden structures. Price varies by complexity.',
        duration: '1-3 hours'
      },
      {
        id: 'gazebo-assembly',
        title: 'Gazebo Assembly',
        price: 450,
        description: 'Complete assembly of outdoor gazebo. Price includes foundation preparation, structure assembly, and roof installation.',
        duration: '4-8 hours'
      }
    ]
  },
  {
    id: 'home-improvement',
    title: 'Home Improvement',
    description: 'Upgrades and fixes to make your home better than ever.',
    icon: Hammer,
    priceRange: '$100 - $500',
    longDescription: 'Our home improvement services cover a wide range of projects to enhance your living space. From installing shelving and hanging artwork to door repairs and drywall patching, our skilled handymen can handle it all with precision and care.',
    tasks: [
      {
        id: 'shelving-installation',
        title: 'Shelving Installation',
        price: 100,
        description: 'Professional installation of wall-mounted shelving units. Price includes mounting hardware and installation for standard shelving.',
        duration: '1-2 hours'
      },
      {
        id: 'door-repair',
        title: 'Door Repair/Adjustment',
        price: 125,
        description: 'Fix sticking doors, replace hardware, adjust alignment, or repair minor damage to interior doors.',
        duration: '1-2 hours'
      },
      {
        id: 'drywall-repair',
        title: 'Drywall Repair',
        price: 150,
        description: 'Patch holes, repair damage, and finish drywall to match existing wall texture. Price is for repairs up to 2 sq ft.',
        duration: '2-3 hours'
      },
      {
        id: 'trim-installation',
        title: 'Trim/Molding Installation',
        price: 200,
        description: 'Install baseboards, crown molding, or decorative trim. Price is per room for standard ceiling height.',
        duration: '3-4 hours'
      },
      {
        id: 'backsplash-installation',
        title: 'Backsplash Installation',
        price: 450,
        description: 'Install tile backsplash in kitchen or bathroom. Price includes basic tile installation for up to 20 sq ft.',
        duration: '4-6 hours'
      }
    ]
  },
  {
    id: 'painting',
    title: 'Painting',
    description: 'Professional painting for rooms, walls, or touch-ups.',
    icon: Paintbrush,
    priceRange: '$150 - $500',
    longDescription: 'Our painting services deliver flawless results that transform your space. Whether you need a single room painted, an accent wall, or touch-ups to existing paint, our professionals ensure clean lines, even coverage, and a perfect finish every time.',
    tasks: [
      {
        id: 'room-painting',
        title: 'Single Room Painting',
        price: 350,
        description: 'Professional painting of one room (up to 12x12 ft) including walls and ceiling. Price includes basic prep, paint, and cleanup.',
        duration: '4-6 hours'
      },
      {
        id: 'accent-wall',
        title: 'Accent Wall Painting',
        price: 150,
        description: 'Paint a single accent wall with premium paint in the color of your choice. Includes prep work and cleanup.',
        duration: '2-3 hours'
      },
      {
        id: 'ceiling-painting',
        title: 'Ceiling Painting',
        price: 200,
        description: 'Professional painting of ceiling only for one room (up to 250 sq ft). Includes preparation, painting, and cleanup.',
        duration: '3-4 hours'
      },
      {
        id: 'trim-painting',
        title: 'Trim/Baseboard Painting',
        price: 250,
        description: 'Painting of all trim, baseboards, and moldings in one room. Includes preparation, painting, and cleanup.',
        duration: '3-5 hours'
      },
      {
        id: 'exterior-door-painting',
        title: 'Exterior Door Painting',
        price: 175,
        description: 'Professional painting of exterior door including preparation, priming if needed, and finishing with weather-resistant paint.',
        duration: '3-4 hours'
      }
    ]
  }
];

export const handymen: Handyman[] = [
  {
    id: 'handyman-1',
    name: 'Robert Johnson',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4.9,
    reviewCount: 284,
    skills: ['Plumbing', 'Electrical', 'Home Improvement'],
    experience: '15 years',
    bio: 'Licensed master plumber with extensive experience in residential repairs and installations. Specializes in fixing complex plumbing issues and electrical work.'
  },
  {
    id: 'handyman-2',
    name: 'David Martinez',
    photo: 'https://randomuser.me/api/portraits/men/44.jpg',
    rating: 4.8,
    reviewCount: 176,
    skills: ['TV Mounting', 'Furniture Assembly', 'Electrical'],
    experience: '8 years',
    bio: 'Former electronics store installation specialist with perfect attention to detail. Expert in TV mounting, home theater setup, and furniture assembly.'
  },
  {
    id: 'handyman-3',
    name: 'James Wilson',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4.7,
    reviewCount: 132,
    skills: ['Painting', 'Home Improvement', 'Furniture Assembly'],
    experience: '12 years',
    bio: 'Professional painter and carpenter with background in home renovations. Delivers high-quality finishes and expert furniture assembly.'
  },
  {
    id: 'handyman-4',
    name: 'Lisa Thompson',
    photo: 'https://randomuser.me/api/portraits/women/28.jpg',
    rating: 4.9,
    reviewCount: 207,
    skills: ['Electrical', 'TV Mounting', 'Home Improvement'],
    experience: '10 years',
    bio: 'Licensed electrician with specialty in home media installation and smart home setup. Expert in all electrical work and home improvements.'
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getRandomHandyman = (): Handyman => {
  const randomIndex = Math.floor(Math.random() * handymen.length);
  return handymen[randomIndex];
};

export const getHandymanById = (id: string): Handyman | undefined => {
  return handymen.find(handyman => handyman.id === id);
};
