import { Wrench, Zap, Tv, Hammer, Paintbrush, Sofa, Shield, Leaf, Brush, Wifi, Bell, Box, Home, Bug, Heater } from 'lucide-react';
import { Service, Task, Handyman } from '@/types';

export const services: Service[] = [
  {
    id: 'plumbing',
    title: 'Plumbing',
    description: 'Fix leaks, install fixtures, repair pipes, and more.',
    icon: Wrench,
    priceRange: '$75 - $500',
    longDescription: 'Our experienced plumbers can handle all your home plumbing needs, from fixing leaking faucets to installing new fixtures and repairing damaged pipes. We provide fast, reliable service with upfront pricing.',
    tasks: [
      {
        id: 'faucet-installation',
        title: 'Faucet Installation',
        price: 150,
        description: 'Professional installation of a new kitchen or bathroom faucet. Price includes removal of old faucet and installation of customer-provided new faucet.',
        duration: '1-2 hours'
      },
      {
        id: 'toilet-repair',
        title: 'Toilet Repair',
        price: 150,
        description: 'Fix running toilets, leaks, or replace internal components. Does not include replacement of entire toilet.',
        duration: '1 hour'
      },
      {
        id: 'toilet-installation',
        title: 'Toilet Installation',
        price: 225,
        description: 'Complete removal of old toilet and installation of new toilet. Does not include cost of the toilet.',
        duration: '2-3 hours'
      },
      {
        id: 'drain-cleaning',
        title: 'Drain Cleaning',
        price: 200,
        description: 'Professional cleaning of clogged or slow drains using specialized equipment. Price is per drain.',
        duration: '1-2 hours'
      },
      {
        id: 'sink-installation',
        title: 'Sink Installation',
        price: 200,
6 description: 'Removal of old sink and installation of new sink. Does not include cost of the sink or any required plumbing modifications.',
        duration: '2-3 hours'
      },
      {
        id: 'garbage-disposal',
        title: 'Garbage Disposal Installation',
        price: 175,
        description: 'Installation of new garbage disposal or replacement of existing unit. Price does not include the disposal unit.',
        duration: '1-2 hours'
      },
      {
        id: 'water-heater',
        title: 'Water Heater Installation',
        price: 500,
        description: 'Removal of old water heater and installation of new unit. Does not include cost of the water heater.',
        duration: '3-5 hours'
      },
      {
        id: 'leak-repair',
        title: 'Water Leak Detection/Repair',
        price: 250,
        description: 'Professional detection and repair of water leaks. Price may vary based on complexity and accessibility.',
        duration: '1-3 hours'
      },
      {
        id: 'showerhead',
        title: 'Showerhead Installation',
        price: 100,
        description: 'Removal of old showerhead and installation of new showerhead. Price does not include cost of the showerhead.',
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
    priceRange: '$75 - $850',
    longDescription: 'Our licensed electricians can handle all your electrical needs safely and efficiently. From installing new fixtures to troubleshooting electrical problems and upgrading panels, we ensure your home\'s electrical system is safe and functioning properly.',
    tasks: [
      {
        id: 'light-fixture',
        title: 'Light Fixture Installation',
        price: 150,
        description: 'Professional installation of ceiling or wall mounted light fixtures. Price is per fixture and includes removal of old fixture if needed.',
        duration: '1-2 hours'
      },
      {
        id: 'outlet-replacement',
        title: 'Outlet/Switch Replacement',
        price: 100,
        description: 'Replace existing electrical outlets or switches. Price is per outlet/switch.',
        duration: '30-45 minutes'
      },
      {
        id: 'ceiling-fan',
        title: 'Ceiling Fan Installation',
        price: 200,
        description: 'Remove old fixture and install a new ceiling fan with proper mounting and wiring. Price does not include fan.',
        duration: '1-2 hours'
      },
      {
        id: 'thermostat',
        title: 'Thermostat Installation',
        price: 125,
        description: 'Removal of old thermostat and installation of new programmable or smart thermostat. Does not include cost of thermostat.',
        duration: '1 hour'
      },
      {
        id: 'security-camera',
        title: 'Security Camera Installation',
        price: 200,
        description: 'Professional installation of up to 3 security cameras with basic setup and testing. Does not include cost of cameras.',
        duration: '2-3 hours'
      },
      {
        id: 'smoke-detector',
        title: 'Smoke Detector Installation',
        price: 75,
        description: 'Installation of hardwired or battery-operated smoke detectors. Price is per unit.',
        duration: '30-60 minutes'
      },
      {
        id: 'doorbell',
        title: 'Doorbell Installation',
        price: 100,
        description: 'Installation of standard or video doorbell with proper wiring and testing. Does not include cost of doorbell.',
        duration: '1 hour'
      },
      {
        id: 'tv-mount-standard',
        title: 'TV Wall Mounting (Standard)',
        price: 150,
        description: 'Professional mounting of TV on drywall with standard bracket. Includes bracket installation, TV mounting, and basic cable management.',
        duration: '1-2 hours'
      },
      {
        id: 'tv-mount-outdoor',
        title: 'TV Wall Mounting (Outdoor)',
        price: 250,
        description: 'Professional mounting of TV in outdoor setting with weather-resistant mounting hardware. Includes proper sealing and weatherproofing.',
        duration: '2-3 hours'
      },
      {
        id: 'outlet-installation',
        title: 'New Outlet Installation',
        price: 125,
        description: 'Installation of a new electrical outlet where one did not exist previously. Requires running new wiring.',
        duration: '1-2 hours'
      },
      {
        id: 'recessed-lighting',
        title: 'Recessed Lighting Installation',
        price: 200,
        description: 'Installation of recessed lighting fixtures in ceiling. Price is per light and includes cutting holes and wiring.',
        duration: '1-2 hours per light'
      },
      {
        id: 'chandelier',
        title: 'Chandelier Installation',
        price: 300,
        description: 'Removal of existing light fixture and installation of decorative chandelier with proper support and wiring. Does not include chandelier.',
        duration: '2-3 hours'
      },
      {
        id: 'ev-charger',
        title: 'EV Charger Installation',
        price: 600,
        description: 'Installation of standard residential electric vehicle charging station with proper wiring and circuit. Does not include charger unit.',
        duration: '3-5 hours'
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
    priceRange: '$50 - $3,500',
    longDescription: 'Our painting services deliver flawless results that transform your space. Whether you need a single room painted, an accent wall, or touch-ups to existing paint, our professionals ensure clean lines, even coverage, and a perfect finish every time.',
    tasks: [
      {
        id: 'room-painting',
        title: 'Interior Room Painting',
        price: 750,
        description: 'Professional painting of one room (up to 12x12 ft) including walls and ceiling. Price includes basic prep, paint, and cleanup.',
        duration: '4-6 hours'
      },
      {
        id: 'exterior-painting',
        title: 'Exterior House Painting',
        price: 2500,
        description: 'Professional painting of home exterior. Price varies based on size of home and number of stories.',
        duration: '2-4 days'
      },
      {
        id: 'deck-painting',
        title: 'Deck Staining/Painting',
        price: 750,
        description: 'Preparation and painting or staining of wooden deck. Price varies based on deck size.',
        duration: '1-2 days'
      },
      {
        id: 'cabinet-painting',
        title: 'Cabinet Painting',
        price: 1500,
        description: 'Professional painting of kitchen or bathroom cabinets including proper preparation, priming, and finishing.',
        duration: '2-3 days'
      },
      {
        id: 'accent-wall',
        title: 'Accent Wall Painting',
        price: 300,
        description: 'Paint a single accent wall with premium paint in the color of your choice. Includes prep work and cleanup.',
        duration: '2-3 hours'
      },
      {
        id: 'ceiling-painting',
        title: 'Ceiling Painting',
        price: 250,
        description: 'Professional painting of ceiling only for one room (up to 250 sq ft). Includes preparation, painting, and cleanup.',
        duration: '3-4 hours'
      },
      {
        id: 'door-painting',
        title: 'Door Painting',
        price: 100,
        description: 'Professional painting of interior or exterior door including preparation and finishing. Price is per door.',
        duration: '2-3 hours'
      },
      {
        id: 'trim-painting',
        title: 'Trim/Baseboard Painting',
        price: 250,
        description: 'Painting of all trim, baseboards, and moldings in one room. Includes preparation, painting, and cleanup.',
        duration: '3-5 hours'
      },
      {
        id: 'wallpaper-removal',
        title: 'Wallpaper Removal',
        price: 750,
        description: 'Professional removal of existing wallpaper and preparation of walls for painting. Price is per room of standard size.',
        duration: '1-2 days'
      },
      {
        id: 'garage-floor',
        title: 'Garage Floor Painting',
        price: 550,
        description: 'Thorough cleaning, preparation, and painting of concrete garage floor with durable epoxy coating. Price for standard 2-car garage.',
        duration: '1-2 days'
      }
    ]
  }
];

export const additionalServices: Service[] = [
  {
    id: 'general-home-maintenance',
    title: 'General Home Maintenance',
    description: 'Regular upkeep and safety checks for your home.',
    icon: Shield,
    priceRange: '$50 - $300',
    longDescription: 'Our comprehensive home maintenance services ensure your home stays in top condition year-round. From safety checks to seasonal maintenance, our professionals can handle regular upkeep tasks that keep your home functioning properly and safely.',
    tasks: [
      {
        id: 'smoke-detector',
        title: 'Smoke Detector Battery Replacement',
        price: 75,
        description: 'Professional replacement of batteries in smoke detectors throughout your home with testing to ensure proper operation.',
        duration: '30-60 minutes'
      },
      {
        id: 'air-filter',
        title: 'Air Filter Replacement',
        price: 75,
        description: 'Replacement of HVAC air filters to improve air quality and system efficiency. Price includes standard filters.',
        duration: '30-45 minutes'
      },
      {
        id: 'home-safety',
        title: 'Home Safety Checks',
        price: 175,
        description: 'Comprehensive inspection of doors, windows, locks, and other safety features with minor adjustments included.',
        duration: '1-2 hours'
      },
      {
        id: 'seasonal-inspection',
        title: 'Seasonal Home Inspection',
        price: 225,
        description: 'Thorough inspection of home systems and structure to identify potential seasonal issues or maintenance needs.',
        duration: '2-3 hours'
      },
      {
        id: 'weather-stripping',
        title: 'Weather-stripping Installation',
        price: 175,
        description: 'Professional installation of weather-stripping around doors and windows to improve energy efficiency.',
        duration: '1-2 hours'
      }
    ]
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Lawn Care',
    description: 'Professional care for your outdoor spaces and gardens.',
    icon: Leaf,
    priceRange: '$40 - $400',
    longDescription: 'Our landscaping and lawn care services help maintain and enhance your outdoor living spaces. From regular maintenance like mowing and trimming to more specialized services like garden bed creation and sod installation, our team ensures your yard looks its best year-round.',
    tasks: [
      {
        id: 'lawn-mowing',
        title: 'Lawn Mowing',
        price: 70,
        description: 'Professional mowing of average-sized yard including edging and cleanup. Price may vary based on lot size.',
        duration: '1-2 hours'
      },
      {
        id: 'leaf-removal',
        title: 'Leaf Removal',
        price: 200,
        description: 'Thorough removal of leaves from lawn, garden beds, and gutters with proper disposal.',
        duration: '2-4 hours'
      },
      {
        id: 'shrub-trimming',
        title: 'Shrub Trimming',
        price: 275,
        description: 'Professional trimming and shaping of shrubs and bushes to maintain health and appearance.',
        duration: '2-4 hours'
      },
      {
        id: 'mulching',
        title: 'Mulching Garden Beds',
        price: 250,
        description: 'Application of fresh mulch to garden beds to improve appearance and soil health. Price includes standard mulch.',
        duration: '2-4 hours'
      },
      {
        id: 'flower-bed',
        title: 'Flower Bed Planting',
        price: 275,
        description: 'Professional planting of seasonal flowers in existing garden beds. Price does not include plants.',
        duration: '2-4 hours'
      },
      {
        id: 'sod-installation',
        title: 'Sod Installation',
        price: 150,
        description: 'Professional installation of fresh sod. Price is per 100 sq. ft. and includes ground preparation.',
        duration: 'Varies by area'
      },
      {
        id: 'weed-treatment',
        title: 'Weed Removal & Lawn Treatment',
        price: 175,
        description: 'Comprehensive weed removal and application of lawn treatment products for a healthier lawn.',
        duration: '1-3 hours'
      }
    ]
  },
  {
    id: 'cleaning',
    title: 'Cleaning & Organization',
    description: 'Declutter and clean spaces throughout your home.',
    icon: Brush,
    priceRange: '$100 - $700',
    longDescription: 'Our cleaning and organization services help transform cluttered spaces into functional, clean areas. From garage organization to pressure washing exteriors, our professionals have the tools and expertise to tackle even the most challenging cleaning projects.',
    tasks: [
      {
        id: 'garage-organization',
        title: 'Garage Organization',
        price: 425,
        description: 'Comprehensive organization of garage space including sorting, cleaning, and implementing basic storage solutions.',
        duration: '4-8 hours'
      },
      {
        id: 'attic-cleanup',
        title: 'Attic/Basement Cleanup',
        price: 500,
        description: 'Thorough cleanup and organization of attic or basement spaces with removal of unwanted items.',
        duration: '4-8 hours'
      },
      {
        id: 'junk-removal',
        title: 'Junk Removal',
        price: 275,
        description: 'Professional removal and disposal of junk items from home or yard. Price varies based on volume.',
        duration: '2-4 hours'
      },
      {
        id: 'pressure-washing',
        title: 'Pressure Washing Home Exterior',
        price: 350,
        description: 'Professional pressure washing of home exterior surfaces including siding, driveways, and walkways.',
        duration: '3-5 hours'
      },
      {
        id: 'window-cleaning',
        title: 'Window Cleaning',
        price: 200,
        description: 'Professional cleaning of interior and exterior window surfaces. Price for average home with accessible windows.',
        duration: '2-4 hours'
      }
    ]
  },
  {
    id: 'smart-home',
    title: 'Tech & Smart Home',
    description: 'Installation and setup of home technology and smart devices.',
    icon: Wifi,
    priceRange: '$75 - $300',
    longDescription: 'Our tech and smart home services help you integrate modern technology into your living space. From smart doorbell installation to home network troubleshooting, our technicians ensure your devices are properly installed, configured, and working seamlessly together.',
    tasks: [
      {
        id: 'smart-doorbell',
        title: 'Smart Doorbell Installation',
        price: 150,
        description: 'Professional installation and setup of smart doorbell systems like Ring or Nest. Price does not include equipment.',
        duration: '1-2 hours'
      },
      {
        id: 'smart-thermostat',
        title: 'Smart Thermostat Installation',
        price: 175,
        description: 'Installation and configuration of smart thermostats like Nest or Ecobee with app setup and testing.',
        duration: '1-2 hours'
      },
      {
        id: 'wifi-extender',
        title: 'Wi-Fi Extender Setup',
        price: 100,
        description: 'Professional installation and configuration of Wi-Fi range extenders for improved coverage throughout your home.',
        duration: '1-2 hours'
      },
      {
        id: 'smart-lock',
        title: 'Smart Lock Installation',
        price: 225,
        description: 'Professional installation and setup of smart door locks with app configuration and testing.',
        duration: '1-2 hours'
      },
      {
        id: 'network-troubleshooting',
        title: 'Home Network Troubleshooting',
        price: 175,
        description: 'Professional diagnosis and resolution of home network issues affecting Wi-Fi, internet connectivity, or device connections.',
        duration: '1-3 hours'
      }
    ]
  },
  {
    id: 'safety-security',
    title: 'Safety & Security',
    description: 'Enhance your home\'s security and safety features.',
    icon: Bell,
    priceRange: '$75 - $600',
    longDescription: 'Our safety and security services help protect your home and family. From security camera installation to childproofing, our professionals can implement a variety of solutions to enhance your home\'s security features and provide peace of mind.',
    tasks: [
      {
        id: 'security-camera',
        title: 'Security Camera System Setup',
        price: 425,
        description: 'Professional installation and configuration of home security camera systems. Price varies based on number of cameras.',
        duration: '3-6 hours'
      },
      {
        id: 'motion-sensor',
        title: 'Motion Sensor Lights Installation',
        price: 225,
        description: 'Installation of motion-activated security lights around home exterior with proper wiring and configuration.',
        duration: '2-3 hours'
      },
      {
        id: 'security-bars',
        title: 'Security Bars Installation',
        price: 425,
        description: 'Professional installation of security bars on doors or windows for enhanced home security.',
        duration: '3-5 hours'
      },
      {
        id: 'childproofing',
        title: 'Childproofing Home',
        price: 275,
        description: 'Comprehensive childproofing including cabinet locks, outlet covers, furniture anchoring, and more.',
        duration: '2-4 hours'
      },
      {
        id: 'carbon-monoxide',
        title: 'Carbon Monoxide Detector Installation',
        price: 100,
        description: 'Professional installation of carbon monoxide detectors with testing and battery backup configuration.',
        duration: '1-2 hours'
      }
    ]
  },
  {
    id: 'moving-assembly',
    title: 'Moving & Assembly',
    description: 'Help with furniture moving, hanging artwork, and assembly projects.',
    icon: Box,
    priceRange: '$75 - $800',
    longDescription: 'Our moving and assembly services make rearranging your home or setting up new items easy. From moving furniture within your home to assembling complex equipment, our skilled professionals handle the heavy lifting and ensure everything is properly set up.',
    tasks: [
      {
        id: 'furniture-moving',
        title: 'Moving Furniture Within Home',
        price: 175,
        description: 'Professional moving of furniture items within your home with care to prevent damage to items or flooring.',
        duration: '1-3 hours'
      },
      {
        id: 'artwork-hanging',
        title: 'Picture and Artwork Hanging',
        price: 125,
        description: 'Professional hanging of artwork, photos, and decorative items with proper anchoring and alignment.',
        duration: '1-2 hours'
      },
      {
        id: 'mirror-hanging',
        title: 'Mirror Hanging',
        price: 175,
        description: 'Professional mounting of heavy mirrors with appropriate hardware and secure attachment to wall studs.',
        duration: '1-2 hours'
      },
      {
        id: 'exercise-equipment',
        title: 'Exercise Equipment Assembly',
        price: 275,
        description: 'Professional assembly of treadmills, ellipticals, weight machines, and other exercise equipment.',
        duration: '2-4 hours'
      },
      {
        id: 'playground-assembly',
        title: 'Playground Equipment Assembly',
        price: 575,
        description: 'Complete assembly and installation of backyard playground equipment with safety testing.',
        duration: '4-8 hours'
      }
    ]
  },
  {
    id: 'roofing-gutter',
    title: 'Roofing & Gutter Services',
    description: 'Maintain and repair roof components and gutter systems.',
    icon: Home,
    priceRange: '$150 - $1,200',
    longDescription: 'Our roofing and gutter services help maintain your home\'s first line of defense against the elements. From minor roof repairs to gutter maintenance and installation, our professionals ensure your roof and drainage systems function properly to protect your home.',
    tasks: [
      {
        id: 'roof-leak',
        title: 'Roof Leak Repairs (Minor)',
        price: 550,
        description: 'Professional repair of minor roof leaks including shingle replacement and sealing. Price for standard repairs.',
        duration: '2-4 hours'
      },
      {
        id: 'skylight',
        title: 'Skylight Installation/Repair',
        price: 850,
        description: 'Professional installation or repair of roof skylights with proper flashing and weatherproofing.',
        duration: '4-8 hours'
      },
      {
        id: 'roof-inspection',
        title: 'Roof Inspection',
        price: 225,
        description: 'Comprehensive inspection of roof condition with detailed report on needed repairs or maintenance.',
        duration: '1-2 hours'
      },
      {
        id: 'gutter-guard',
        title: 'Gutter Guard Installation',
        price: 650,
        description: 'Installation of gutter guard systems to prevent debris buildup and clogging. Price for average home.',
        duration: '3-5 hours'
      },
      {
        id: 'downspout',
        title: 'Downspout Repair or Installation',
        price: 275,
        description: 'Professional repair or installation of downspouts with proper drainage configuration.',
        duration: '1-3 hours'
      }
    ]
  },
  {
    id: 'pest-management',
    title: 'Pest & Wildlife Management',
    description: 'Prevent and address pest issues around your home.',
    icon: Bug,
    priceRange: '$150 - $700',
    longDescription: 'Our pest and wildlife management services help keep unwanted visitors out of your home. From rodent-proofing to repairing animal damage, our professionals can implement effective solutions to address and prevent pest issues while ensuring your home remains protected.',
    tasks: [
      {
        id: 'rodent-proofing',
        title: 'Rodent-proofing Home',
        price: 500,
        description: 'Comprehensive inspection and sealing of potential entry points to prevent rodent intrusion.',
        duration: '3-5 hours'
      },
      {
        id: 'bird-nest',
        title: 'Bird Nest Removal and Prevention',
        price: 275,
        description: 'Safe removal of bird nests and installation of preventative measures to discourage nesting in unwanted areas.',
        duration: '2-3 hours'
      },
      {
        id: 'animal-damage',
        title: 'Animal Damage Repair (Minor)',
        price: 425,
        description: 'Repair of minor damage caused by animals to home exterior, insulation, or ductwork.',
        duration: '2-4 hours'
      },
      {
        id: 'pest-barrier',
        title: 'Pest Barrier Installation',
        price: 350,
        description: 'Installation of physical barriers and deterrents to prevent pest entry around home foundation and structure.',
        duration: '2-4 hours'
      }
    ]
  },
  {
    id: 'insulation',
    title: 'Insulation & Energy Efficiency',
    description: 'Improve your home\'s efficiency and comfort.',
    icon: Heater,
    priceRange: '$150 - $3,000',
    longDescription: 'Our insulation and energy efficiency services help reduce energy costs while improving home comfort. From attic insulation to window treatments, our professionals can implement solutions that enhance your home\'s thermal performance and reduce utility bills year-round.',
    tasks: [
      {
        id: 'attic-insulation',
        title: 'Attic Insulation Installation',
        price: 1850,
        description: 'Professional installation of insulation in attic spaces to improve energy efficiency. Price for average-sized attic.',
        duration: '4-8 hours'
      },
      {
        id: 'insulation-replacement',
        title: 'Insulation Removal & Replacement',
        price: 2250,
        description: 'Complete removal of old or damaged insulation and installation of new insulation materials.',
        duration: '6-10 hours'
      },
      {
        id: 'window-film',
        title: 'Window Film Installation',
        price: 275,
        description: 'Application of energy-saving window film to reduce heat transfer and UV exposure. Price per room (3-5 windows).',
        duration: '2-4 hours'
      }
    ]
  },
  {
    id: 'miscellaneous',
    title: 'Miscellaneous Services',
    description: 'Specialized home projects and seasonal services.',
    icon: Hammer,
    priceRange: '$150 - $600',
    longDescription: 'Our miscellaneous services cover those unique projects that don\'t fit neatly into other categories. From mailbox installation to holiday decorating, our versatile professionals can handle a wide range of specialized tasks to enhance and maintain your home.',
    tasks: [
      {
        id: 'mailbox',
        title: 'Mailbox Installation/Replacement',
        price: 225,
        description: 'Professional installation or replacement of residential mailbox with proper mounting and alignment.',
        duration: '1-2 hours'
      },
      {
        id: 'flagpole',
        title: 'Flagpole Installation',
        price: 425,
        description: 'Complete installation of residential flagpole including proper foundation and mounting hardware.',
        duration: '2-4 hours'
      },
      {
        id: 'holiday-decoration',
        title: 'Holiday Decoration Installation/Removal',
        price: 325,
        description: 'Professional installation or removal of holiday decorations with careful handling and secure mounting.',
        duration: '2-4 hours'
      },
      {
        id: 'pet-door',
        title: 'Pet Door Installation',
        price: 250,
        description: 'Professional installation of pet access door in standard interior or exterior door.',
        duration: '2-3 hours'
      },
      {
        id: 'basketball-hoop',
        title: 'Basketball Hoop Installation',
        price: 350,
        description: 'Assembly and installation of basketball hoop system with proper anchoring and stability testing.',
        duration: '2-4 hours'
      }
    ]
  }
];

export const allServices = [...services, ...additionalServices];

export const handymen: Handyman[] = [
  {
    id: 'handyman-1',
    name: 'Robert Johnson',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4.9,
    reviewCount: 284,
    skills: ['Plumbing', 'Electrical', 'Home Improvement'],
    experience: '15 years',
    bio: 'Licensed master plumber with extensive experience in residential repairs and installations. Specializes in fixing complex plumbing issues and electrical work.',
    distance: '1.2 miles',
    availability: true
  },
  {
    id: 'handyman-2',
    name: 'David Martinez',
    photo: 'https://randomuser.me/api/portraits/men/44.jpg',
    rating: 4.8,
    reviewCount: 176,
    skills: ['TV Mounting', 'Furniture Assembly', 'Electrical'],
    experience: '8 years',
    bio: 'Former electronics store installation specialist with perfect attention to detail. Expert in TV mounting, home theater setup, and furniture assembly.',
    distance: '2.5 miles',
    availability: true
  },
  {
    id: 'handyman-3',
    name: 'James Wilson',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4.7,
    reviewCount: 132,
    skills: ['Painting', 'Home Improvement', 'Furniture Assembly'],
    experience: '12 years',
    bio: 'Professional painter and carpenter with background in home renovations. Delivers high-quality finishes and expert furniture assembly.',
    distance: '3.7 miles',
    availability: false
  },
  {
    id: 'handyman-4',
    name: 'Lisa Thompson',
    photo: 'https://randomuser.me/api/portraits/women/28.jpg',
    rating: 4.9,
    reviewCount: 207,
    skills: ['Electrical', 'TV Mounting', 'Home Improvement'],
    experience: '10 years',
    bio: 'Licensed electrician with specialty in home media installation and smart home setup. Expert in all electrical work and home improvements.',
    distance: '0.8 miles',
    availability: true
  },
  {
    id: 'handyman-5',
    name: 'Michael Chen',
    photo: 'https://randomuser.me/api/portraits/men/57.jpg',
    rating: 4.6,
    reviewCount: 95,
    skills: ['Plumbing', 'Home Improvement', 'Smart Home'],
    experience: '6 years',
    bio: 'Specializes in home automation and plumbing repairs. Known for efficient work and clean installations.',
    distance: '4.2 miles',
    availability: true
  },
  {
    id: 'handyman-6',
    name: 'Sarah Rodriguez',
    photo: 'https://randomuser.me/api/portraits/women/63.jpg',
    rating: 5.0,
    reviewCount: 42,
    skills: ['Electrical', 'Furniture Assembly', 'TV Mounting'],
    experience: '4 years',
    bio: 'Former electrical engineer with precise attention to detail. Perfect 5-star rating on all jobs.',
    distance: '5.5 miles',
    availability: false
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return allServices.find(service => service.id === id);
};

export const getNearbyAvailableHandymen = (serviceTitle: string, limit = 3): Handyman[] => {
  // Filter available handymen by service skill match and sort by distance
  return handymen
    .filter(handyman => 
      handyman.availability && 
      handyman.skills.some(skill => 
        skill.toLowerCase() === serviceTitle.toLowerCase() || 
        serviceTitle.toLowerCase().includes(skill.toLowerCase()) ||
        skill.toLowerCase().includes(serviceTitle.toLowerCase())
      )
    )
    .sort((a, b) => {
      // Extract the numeric distance value for sorting
      const distanceA = parseFloat(a.distance?.split(' ')[0] || '0');
      const distanceB = parseFloat(b.distance?.split(' ')[0] || '0');
      return distanceA - distanceB;
    })
    .slice(0, limit);
};

export const getRandomHandyman = (): Handyman => {
  const randomIndex = Math.floor(Math.random() * handymen.length);
  return handymen[randomIndex];
};

export const getHandymanById = (id: string): Handyman | undefined => {
  return handymen.find(handyman => handyman.id === id);
};
