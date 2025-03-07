<lov-code>
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
        description: 'Removal of old sink and installation of new sink. Does not include cost of the sink or any required plumbing modifications.',
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
      },
      {
        id: 'shower-installation',
        title: 'Shower Installation',
        price: 600,
        description: 'Professional installation of a new shower system including plumbing connections. Does not include cost of shower unit or tile work.',
        duration: '4-6 hours'
      },
      {
        id: 'shower-repair',
        title: 'Shower Repair',
        price: 275,
        description: 'Fix leaks, replace damaged components, or repair shower mechanisms. Price varies based on complexity.',
        duration: '1-3 hours'
      },
      {
        id: 'bathtub-installation',
        title: 'Bathtub Installation',
        price: 750,
        description: 'Professional removal of old tub and installation of new bathtub with all required plumbing connections.',
        duration: '4-8 hours'
      },
      {
        id: 'bathtub-liner',
        title: 'Bathtub Liner Installation',
        price: 450,
        description: 'Installation of custom-fit bathtub liner over existing tub for a fresh appearance without full replacement.',
        duration: '2-4 hours'
      },
      {
        id: 'toilet-unclogging',
        title: 'Toilet Unclogging',
        price: 125,
        description: 'Professional unclogging of toilet using specialized tools. Price includes basic snaking and plunging.',
        duration: '30-60 minutes'
      },
      {
        id: 'drain-installation',
        title: 'Drain Installation',
        price: 350,
        description: 'Installation of new drain systems including proper slope and connections to existing plumbing.',
        duration: '2-4 hours'
      },
      {
        id: 'hydro-jetting',
        title: 'Hydro Jetting',
        price: 350,
        description: 'Powerful water pressure cleaning of drains and pipes to remove stubborn clogs and buildup.',
        duration: '1-3 hours'
      },
      {
        id: 'sump-pump-installation',
        title: 'Sump Pump Installation',
        price: 475,
        description: 'Professional installation of sump pump system including basin, pump, and discharge line.',
        duration: '3-5 hours'
      },
      {
        id: 'sump-pump-repair',
        title: 'Sump Pump Repair',
        price: 225,
        description: 'Diagnosis and repair of malfunctioning sump pump systems to restore proper operation.',
        duration: '1-3 hours'
      },
      {
        id: 'water-line-installation',
        title: 'Water Line Installation',
        price: 600,
        description: 'Installation of new water supply lines with proper connections and pressure testing.',
        duration: '4-8 hours'
      },
      {
        id: 'gas-pipe-installation',
        title: 'Gas Pipe Installation',
        price: 550,
        description: 'Professional installation of gas piping with proper fittings and safety testing.',
        duration: '3-6 hours'
      },
      {
        id: 'gas-pipe-repair',
        title: 'Gas Pipe Repair',
        price: 350,
        description: 'Repair of damaged or leaking gas pipes with safety testing and certification.',
        duration: '2-4 hours'
      },
      {
        id: 'gas-leak-detection',
        title: 'Gas Leak Detection and Repair',
        price: 275,
        description: 'Professional detection of gas leaks using specialized equipment and subsequent repairs.',
        duration: '1-3 hours'
      },
      {
        id: 'frozen-pipe-repair',
        title: 'Frozen Pipe Repair',
        price: 225,
        description: 'Thawing of frozen pipes and repair of any damage caused by freezing.',
        duration: '1-4 hours'
      },
      {
        id: 'lead-pipe-replacement',
        title: 'Lead Pipe Replacement',
        price: 900,
        description: 'Removal and replacement of hazardous lead pipes with modern, safe plumbing materials.',
        duration: '6-10 hours'
      },
      {
        id: 'plumbing-repiping',
        title: 'Plumbing Re-Piping',
        price: 1200,
        description: 'Comprehensive replacement of old or damaged plumbing pipes throughout part or all of home.',
        duration: '1-3 days'
      },
      {
        id: 'water-heater-inspection',
        title: 'Water Heater Inspection',
        price: 125,
        description: 'Professional inspection of water heater for safety, efficiency, and performance issues.',
        duration: '30-60 minutes'
      },
      {
        id: 'water-heater-repair',
        title: 'Water Heater Repair',
        price: 275,
        description: 'Diagnosis and repair of water heater problems including element replacement or thermostat issues.',
        duration: '1-3 hours'
      },
      {
        id: 'tankless-water-heater-install',
        title: 'Tankless Water Heater Installation',
        price: 850,
        description: 'Professional installation of energy-efficient tankless water heater system with proper venting.',
        duration: '4-8 hours'
      },
      {
        id: 'solar-water-heater',
        title: 'Solar Water Heater Installation',
        price: 2200,
        description: 'Installation of solar water heating system including roof panels and storage tank.',
        duration: '1-2 days'
      },
      {
        id: 'water-softener-installation',
        title: 'Water Softener Installation',
        price: 650,
        description: 'Professional installation of water softening system with proper connections and initial setup.',
        duration: '3-5 hours'
      },
      {
        id: 'water-softener-repair',
        title: 'Water Softener Repair',
        price: 250,
        description: 'Diagnosis and repair of malfunctioning water softener systems to restore proper operation.',
        duration: '1-3 hours'
      },
      {
        id: 'water-purification-under-sink',
        title: 'Under Sink Water Purification System Installation',
        price: 350,
        description: 'Installation of point-of-use water filtration system under sink with dedicated faucet.',
        duration: '1-3 hours'
      },
      {
        id: 'water-purification-whole-house',
        title: 'Whole House Water Purification System Installation',
        price: 1200,
        description: 'Installation of comprehensive water filtration system for entire home water supply.',
        duration: '4-8 hours'
      },
      {
        id: 'water-purification-repair',
        title: 'Water Purification System Repair',
        price: 200,
        description: 'Diagnosis and repair of water filtration systems including filter replacement and leak repair.',
        duration: '1-2 hours'
      },
      {
        id: 'backflow-preventer',
        title: 'Backflow Preventer Installation',
        price: 425,
        description: 'Installation of backflow prevention device to protect water supply from contamination.',
        duration: '2-4 hours'
      },
      {
        id: 'steam-fitting',
        title: 'Steam Fitting',
        price: 575,
        description: 'Professional installation or repair of steam systems including radiators and steam pipes.',
        duration: '3-6 hours'
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
      },
      {
        id: 'ceiling-fan-replacement',
        title: 'Ceiling Fan Replacement',
        price: 175,
        description: 'Removal of existing ceiling fan and installation of new fan with proper wiring and balance.',
        duration: '1-2 hours'
      },
      {
        id: 'light-switch-installation',
        title: 'Light Switch Installation',
        price: 110,
        description: 'Installation of new light switch including cutting into drywall and running new wiring.',
        duration: '1-2 hours'
      },
      {
        id: 'light-switch-replacement',
        title: 'Light Switch Replacement',
        price: 75,
        description: 'Replacement of existing light switch with new standard or smart switch.',
        duration: '30-60 minutes'
      },
      {
        id: 'accent-lighting',
        title: 'Accent Lighting Installation',
        price: 225,
        description: 'Installation of decorative lighting to highlight architectural features or artwork.',
        duration: '2-3 hours'
      },
      {
        id: 'interior-lighting',
        title: 'Interior Lighting Installation',
        price: 175,
        description: 'Installation of various interior lighting fixtures with proper wiring and mounting.',
        duration: '1-3 hours'
      },
      {
        id: 'security-lighting',
        title: 'Security Lighting Installation',
        price: 275,
        description: 'Installation of motion-sensor or timed security lights around home exterior.',
        duration: '2-4 hours'
      },
      {
        id: 'landscape-lighting',
        title: 'Landscape Lighting',
        price: 450,
        description: 'Installation of outdoor lighting systems to illuminate walkways, gardens, and landscape features.',
        duration: '3-6 hours'
      },
      {
        id: 'outdoor-lighting',
        title: 'Outdoor Lighting Installation',
        price: 350,
        description: 'Installation of various outdoor lighting fixtures including path lights, spotlights, and ambient lighting.',
        duration: '2-5 hours'
      },
      {
        id: 'holiday-lighting',
        title: 'Holiday Lighting',
        price: 375,
        description: 'Professional installation of seasonal holiday lighting with secure mounting and electrical connections.',
        duration: '2-5 hours'
      },
      {
        id: 'smart-thermostat-install',
        title: 'Smart Thermostat Installation and Replacement',
        price: 150,
        description: 'Installation of smart thermostat system with WiFi setup and smartphone app configuration.',
        duration: '1-2 hours'
      },
      {
        id: 'thermostat-repair',
        title: 'Thermostat Replacement & Repair',
        price: 125,
        description: 'Diagnosis and repair of thermostat issues or complete replacement with new unit.',
        duration: '1-2 hours'
      },
      {
        id: 'camera-setup',
        title: 'Camera Setup',
        price: 175,
        description: 'Configuration and setup of security camera systems including software and mobile app integration.',
        duration: '1-3 hours'
      },
      {
        id: 'camera-replacement',
        title: 'Camera Replacement',
        price: 125,
        description: 'Removal of old security camera and installation of new unit with proper wiring and setup.',
        duration: '1-2 hours'
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
      },
      {
        id: 'exercise-equipment-assembly',
        title: 'Exercise Equipment Assembly',
        price: 275,
        description: 'Assembly of exercise machines like treadmills, ellipticals, and weight machines.',
        duration: '2-4 hours'
      },
      {
        id: 'storage-shed-assembly',
        title: 'Storage Shed Assembly',
        price: 550,
        description: 'Complete assembly of pre-fabricated storage shed with proper leveling and anchoring.',
        duration: '4-8 hours'
      },
      {
        id: 'closet-organizer',
        title: 'Closet Organizer Installation',
        price: 250,
        description: 'Assembly and installation of closet organization systems with proper wall mounting.',
        duration: '2-4 hours'
      },
      {
        id: 'closet-storage',
        title: 'Closet Storage Installation',
        price: 225,
        description: 'Installation of closet storage solutions including shelving, hanging rods, and drawers.',
        duration: '2-3 hours'
      },
      {
        id: 'doghouse-installation',
        title: 'Doghouse Installation',
        price: 150,
        description: 'Assembly and secure installation of doghouse with proper leveling and anchoring.',
        duration: '1-3 hours'
      }
    ]
  },
  {
    id: 'home-improvement',
    title: 'Home Improvement',
    description: 'Upgrades and fixes to make your home better than ever.',
    icon: Hammer,
    priceRange: '$100 - $3000',
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
      },
      {
        id: 'shelf-installation',
        title: 'Shelf Installation',
        price: 125,
        description: 'Installation of floating shelves or bracket-supported shelving with secure wall mounting.',
        duration: '1-2 hours'
      },
      {
        id: 'kitchen-remodel-full',
        title: 'Kitchen Remodeling - Full',
        price: 20000,
        description: 'Complete kitchen renovation including cabinets, countertops, fixtures, and appliances.',
        duration: '2-3 weeks'
      },
      {
        id: 'kitchen-remodel-partial',
        title: 'Kitchen Remodeling - Partial',
        price: 7500,
        description: 'Partial kitchen update focusing on specific elements like countertops, backsplash, or cabinet refacing.',
        duration: '3-7 days'
      },
      {
        id: 'bathroom-remodel-full',
        title: 'Bathroom Remodeling - Full',
        price: 12000,
        description: 'Complete bathroom renovation including fixtures, tile, vanity, and lighting.',
        duration: '1-2 weeks'
      },
      {
        id: 'bathroom-remodel-partial',
        title: 'Bathroom Remodeling - Partial',
        price: 4500,
        description: 'Partial bathroom update focusing on specific elements like vanity, shower, or tile.',
        duration: '2-5 days'
      },
      {
        id: 'deck-construction',
        title: 'Deck Construction',
        price: 6500,
        description: 'Design and construction of new wooden deck with proper footings, framing, and railings.',
        duration: '3-7 days'
      },
      {
        id: 'deck-repair',
        title: 'Deck Repair',
        price: 750,
        description: 'Repair of damaged deck boards, railings, stairs, or structural elements.',
        duration: '1-3 days'
      },
      {
        id: 'deck-rot-repair',
        title: 'Deck Rotting Repair',
        price: 850,
        description: 'Specialized repair of rot-damaged deck components with proper treatment to prevent future issues.',
        duration: '1-3 days'
      },
      {
        id: 'wood-rot-repair',
        title: 'Wood Rot Repair',
        price: 650,
        description: 'Removal of rot-damaged wood and replacement with properly treated lumber.',
        duration: '1-2 days'
      },
      {
        id: 'door-installation',
        title: 'Door Installation',
        price: 350,
        description: 'Professional installation of interior or exterior door including frame adjustments and hardware.',
        duration: '2-4 hours'
      },
      {
        id: 'door-lock-installation',
        title: 'Door Lock Installation',
        price: 125,
        description: 'Installation of new door lock or handle set with proper alignment and testing.',
        duration: '1-2 hours'
      },
      {
        id: 'door-lock-replacement',
        title: 'Door Lock Replacement',
        price: 100,
        description: 'Replacement of existing door lock or handle set with new hardware.',
        duration: '30-90 minutes'
      },
      {
        id: 'lock-installation',
        title: 'Lock Installation',
        price: 150,
        description: 'Installation of deadbolts, keyless entry systems, or other security locks.',
        duration: '1-2 hours'
      },
      {
        id: 'lockset-replacement',
        title: 'Lockset Replacement',
        price: 125,
        description: 'Complete replacement of lock mechanism including knob, latch, and strike plate.',
        duration: '1 hour'
      },
      {
        id: 'pet-door-installation',
        title: 'Pet Door Installation',
        price: 275,
        description: 'Installation of pet access door in exterior door or wall with proper weathersealing.',
        duration: '2-4 hours'
      },
      {
        id: 'dog-door-installation',
        title: 'Dog Door Installation',
        price: 225,
        description: 'Installation of dog-specific access door with secure framing and weather protection.',
        duration: '2-3 hours'
      },
      {
        id: 'drywall-installation',
        title: 'Drywall Installation',
        price: 400,
        description: 'Professional installation of new drywall including taping, mudding, and finishing.',
        duration: '1-3 days'
      },
      {
        id: 'drywall-texturing',
        title: 'Drywall Texturing',
        price: 250,
        description: 'Application of texture to match existing walls or create new textured finish.',
        duration: '4-8 hours'
      },
      {
        id: 'ceiling-repair',
        title: 'Ceiling Repair',
        price: 325,
        description: 'Repair of damaged ceiling drywall including patching, texturing, and painting.',
        duration: '4-6 hours'
      },
      {
        id: 'handrail-installation',
        title: 'Handrail Installation',
        price: 275,
        description: 'Installation of stairway handrails with proper anchoring to wall studs or posts.',
        duration: '2-4 hours'
      },
      {
        id: 'handrail-repair',
        title: 'Handrail Repair',
        price: 175,
        description: 'Repair of loose or damaged handrails with secure reattachment and reinforcement.',
        duration: '1-3 hours'
      },
      {
        id: 'baseboard-molding',
        title: 'Baseboard Molding Installation',
        price: 275,
        description: 'Professional installation of baseboards with proper cuts, joins, and finishing.',
        duration: '4-8 hours'
      },
      {
        id: 'crown-molding',
        title: 'Crown Molding Installation',
        price: 400,
        description: 'Installation of decorative crown molding at wall-ceiling junction with proper mitering.',
        duration: '1-2 days'
      },
      {
        id: 'trim-work',
        title: 'Trim Work',
        price: 300,
        description: 'Installation of various trim elements including window casing, door trim, and decorative moldings.',
        duration: '4-8 hours'
      },
      {
        id: 'mailbox-installation',
        title: 'Mailbox Installation',
        price: 150,
        description: 'Installation of new mailbox including post mounting or wall attachment.',
        duration: '1-2 hours'
      },
      {
        id: 'mailbox-replacement',
        title: 'Mailbox Replacement',
        price: 125,
        description: 'Removal of old mailbox and installation of new unit using existing mount.',
        duration: '1 hour'
      },
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
        price: 2
