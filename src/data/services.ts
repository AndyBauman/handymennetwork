import { Wrench, Zap, Tv, Hammer, Paintbrush, Sofa, Shield, Leaf, Brush, Wifi, Bell, Box, Home, Bug, Heater, Droplets, Fence, HardHat, Warehouse, Sun } from 'lucide-react';
import { Service, Task, Handyman } from '@/types';

export const services: Service[] = [
  {
    id: 'plumbing',
    title: 'Plumbing',
    description: 'Fix leaks, install fixtures, repair pipes, and more.',
    icon: Droplets,
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
        title: 'Drain Services',
        price: 200,
        description: 'Professional cleaning of clogged or slow drains, installation of new drains, and unclogging services.',
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
        id: 'leak-repair',
        title: 'Leak Detection & Repair',
        price: 250,
        description: 'Professional detection and repair of water or gas leaks. Price may vary based on complexity and accessibility.',
        duration: '1-3 hours'
      },
      {
        id: 'showerhead',
        title: 'Shower Installation & Repair',
        price: 275,
        description: 'Installation of new shower systems or repair of existing showers including leaks and component replacement.',
        duration: '1-4 hours'
      },
      {
        id: 'pipe-repair',
        title: 'Plumbing Re-Piping & Pipe Repair',
        price: 600,
        description: 'Comprehensive replacement of old pipes or repair of damaged pipes throughout your home.',
        duration: '4-10 hours'
      },
      {
        id: 'frozen-pipe-repair',
        title: 'Frozen Pipe Repair',
        price: 225,
        description: 'Thawing of frozen pipes and repair of any damage caused by freezing.',
        duration: '1-4 hours'
      },
      {
        id: 'water-line-installation',
        title: 'Water Line Installation',
        price: 600,
        description: 'Installation of new water supply lines with proper connections and pressure testing.',
        duration: '4-8 hours'
      },
      {
        id: 'gas-pipe',
        title: 'Gas Pipe Installation & Repair',
        price: 450,
        description: 'Professional installation of gas piping with proper fittings and safety testing, or repairs of existing gas lines.',
        duration: '3-6 hours'
      },
      {
        id: 'sump-pump',
        title: 'Sump Pump Installation & Repair',
        price: 350,
        description: 'Installation of new sump pump systems or diagnosis and repair of existing pumps.',
        duration: '2-4 hours'
      },
      {
        id: 'water-purification',
        title: 'Water Purification Systems',
        price: 500,
        description: 'Installation of under-sink or whole-house water filtration systems for cleaner, healthier water.',
        duration: '2-6 hours'
      },
      {
        id: 'water-softener',
        title: 'Water Softener Installation & Repair',
        price: 450,
        description: 'Professional installation or repair of water softening systems to reduce mineral buildup.',
        duration: '2-4 hours'
      },
      {
        id: 'backflow-preventer',
        title: 'Backflow Preventer Installation',
        price: 425,
        description: 'Installation of backflow prevention device to protect water supply from contamination.',
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
        id: 'grout-repair',
        title: 'Grout Repair & Sealing',
        price: 225,
        description: 'Professional repair of damaged grout and application of sealant to prevent water damage.',
        duration: '2-4 hours'
      }
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical & Lighting',
    description: 'Install fixtures, troubleshoot problems, upgrade panels.',
    icon: Zap,
    priceRange: '$75 - $850',
    longDescription: 'Our licensed electricians can handle all your electrical needs safely and efficiently. From installing new fixtures to troubleshooting electrical problems and upgrading panels, we ensure your home\'s electrical system is safe and functioning properly.',
    tasks: [
      {
        id: 'light-fixture',
        title: 'Interior Lighting Installation',
        price: 150,
        description: 'Professional installation of ceiling or wall mounted light fixtures. Price is per fixture and includes removal of old fixture if needed.',
        duration: '1-2 hours'
      },
      {
        id: 'outlet-replacement',
        title: 'Outlet Installation & Replacement',
        price: 100,
        description: 'Replace existing electrical outlets or install new ones. Price is per outlet.',
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
        id: 'smart-thermostat',
        title: 'Smart Thermostat Installation',
        price: 125,
        description: 'Removal of old thermostat and installation of new programmable or smart thermostat. Does not include cost of thermostat.',
        duration: '1 hour'
      },
      {
        id: 'security-camera',
        title: 'Camera Installation & Setup',
        price: 200,
        description: 'Professional installation of security cameras with basic setup and testing. Does not include cost of cameras.',
        duration: '2-3 hours'
      },
      {
        id: 'accent-lighting',
        title: 'Accent Lighting Installation',
        price: 225,
        description: 'Installation of decorative lighting to highlight architectural features or artwork.',
        duration: '2-3 hours'
      },
      {
        id: 'light-switch',
        title: 'Light Switch Installation & Replacement',
        price: 90,
        description: 'Installation of new light switches or replacement of existing switches with standard or smart options.',
        duration: '30-90 minutes'
      },
      {
        id: 'security-lighting',
        title: 'Security Lighting Installation',
        price: 275,
        description: 'Installation of motion-sensor or timed security lights around home exterior.',
        duration: '2-4 hours'
      },
      {
        id: 'outdoor-lighting',
        title: 'Landscape & Outdoor Lighting',
        price: 400,
        description: 'Installation of various outdoor lighting fixtures including path lights, spotlights, and ambient lighting.',
        duration: '3-6 hours'
      },
      {
        id: 'electrical-repairs',
        title: 'Electrical Repairs (General)',
        price: 175,
        description: 'Professional diagnosis and repair of various electrical issues from circuit problems to wiring repairs.',
        duration: '1-3 hours'
      }
    ]
  },
  {
    id: 'tv-mounting',
    title: 'TV Mounting',
    description: 'Secure installation for all TV sizes on any wall type.',
    icon: Tv,
    priceRange: '$100 - $250',
    longDescription: 'Our technicians specialize in professionally mounting TVs of all sizes on various wall types. We ensure secure installation, proper leveling, and can also conceal cables for a clean look. All mounts are tested for safety and stability.',
    tasks: [
      {
        id: 'standard-tv-mount',
        title: 'Standard TV Mounting (up to 55")',
        price: 175,
        description: 'Professional mounting of TV up to 55" on drywall with standard bracket. Includes bracket installation, TV mounting, and basic cable management.',
        duration: '1 hour'
      },
      {
        id: 'large-tv-mount',
        title: 'Large TV Mounting (56" and above)',
        price: 250,
        description: 'Professional mounting of TV 56" or larger on drywall with heavy-duty bracket. Includes bracket installation, TV mounting, and basic cable management.',
        duration: '1-2 hours'
      },
      {
        id: 'complex-tv-mount',
        title: 'Complex TV Mounting (brick/concrete)',
        price: 300,
        description: 'TV mounting on brick, stone, or concrete walls. Includes special anchoring hardware and professional installation.',
        duration: '2-3 hours'
      },
      {
        id: 'tv-mount-with-concealment',
        title: 'Cable and Outlet Wiring Concealment',
        price: 200,
        description: 'Professional in-wall cable and outlet wiring concealment for a clean, wire-free appearance. Service is limited to drywall installations.',
        duration: '2-3 hours'
      }
    ]
  },
  {
    id: 'furniture-assembly',
    title: 'Furniture Assembly',
    description: 'Quick assembly for all types of furniture and fixtures.',
    icon: Sofa,
    priceRange: '$60 - $550',
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
        id: 'storage-shed-assembly',
        title: 'Storage Shed Assembly',
        price: 550,
        description: 'Complete assembly of pre-fabricated storage shed with proper leveling and anchoring.',
        duration: '4-8 hours'
      },
      {
        id: 'exercise-equipment',
        title: 'Exercise Equipment Assembly',
        price: 275,
        description: 'Assembly of exercise machines like treadmills, ellipticals, and weight machines.',
        duration: '2-4 hours'
      },
      {
        id: 'closet-organizer',
        title: 'Closet Organizer Installation',
        price: 250,
        description: 'Assembly and installation of closet organization systems with proper wall mounting.',
        duration: '2-4 hours'
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
        title: 'Shelf Installation',
        price: 100,
        description: 'Professional installation of wall-mounted shelving units. Price includes mounting hardware and installation for standard shelving.',
        duration: '1-2 hours'
      },
      {
        id: 'door-repair',
        title: 'Door Installation & Repair',
        price: 150,
        description: 'Installation of new doors or repair of existing doors including sticking doors, hardware replacement, and alignment issues.',
        duration: '1-3 hours'
      },
      {
        id: 'drywall-repair',
        title: 'Drywall Installation & Repair',
        price: 200,
        description: 'Patch holes, install new drywall, apply texturing, and finish to match existing walls.',
        duration: '2-6 hours'
      },
      {
        id: 'trim-installation',
        title: 'Trim Work & Molding Installation',
        price: 275,
        description: 'Install baseboards, crown molding, or decorative trim. Professional installation with proper cuts and finishing.',
        duration: '3-8 hours'
      },
      {
        id: 'backsplash-installation',
        title: 'Backsplash Installation',
        price: 450,
        description: 'Install tile backsplash in kitchen or bathroom. Price includes basic tile installation for up to 20 sq ft.',
        duration: '4-6 hours'
      },
      {
        id: 'wood-rot-repair',
        title: 'Rot Repair / Wood Rot Repair',
        price: 350,
        description: 'Removal and replacement of rotted wood with proper treatments to prevent future damage.',
        duration: '2-6 hours'
      },
      {
        id: 'handrail-installation',
        title: 'Handrail Installation & Repair',
        price: 225,
        description: 'Installation of new handrails or repair of existing rails with proper mounting and support.',
        duration: '2-4 hours'
      },
      {
        id: 'art-hanging',
        title: 'Art/Photo/Mirror Hanging',
        price: 125,
        description: 'Professional hanging of artwork, photos, and mirrors with proper anchoring and positioning.',
        duration: '1-2 hours'
      },
      {
        id: 'childproofing',
        title: 'Childproofing',
        price: 200,
        description: 'Comprehensive childproofing including cabinet locks, outlet covers, furniture anchoring, and more.',
        duration: '2-4 hours'
      },
      {
        id: 'junk-removal',
        title: 'Junk/Trash Removal',
        price: 200,
        description: 'Removal and proper disposal of unwanted items, debris, and trash from your property.',
        duration: '1-4 hours'
      }
    ]
  },
  {
    id: 'painting',
    title: 'Painting & Finishing',
    description: 'Professional painting for interior and exterior surfaces.',
    icon: Paintbrush,
    priceRange: '$150 - $3,500',
    longDescription: 'Our painting services deliver flawless results that transform your space. Whether you need interior rooms painted, exterior surfaces refreshed, or specialized finishes, our professionals ensure clean lines, even coverage, and a perfect finish every time.',
    tasks: [
      {
        id: 'interior-painting',
        title: 'Interior Painting',
        price: 750,
        description: 'Professional painting of interior rooms including walls and ceilings with prep work, priming, and cleanup.',
        duration: '4-10 hours per room'
      },
      {
        id: 'exterior-painting',
        title: 'Exterior Painting',
        price: 2500,
        description: 'Professional painting of home exterior surfaces with proper preparation and weatherproof finishes.',
        duration: '2-5 days'
      },
      {
        id: 'deck-painting',
        title: 'Deck & Fence Staining/Painting',
        price: 750,
        description: 'Preparation and painting or staining of wooden decks and fences for protection and beauty.',
        duration: '1-3 days'
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
        title: 'Decorative & Faux Painting',
        price: 400,
        description: 'Specialty painting techniques including accent walls, faux finishes, and decorative effects.',
        duration: '1-2 days'
      },
      {
        id: 'wallpapering',
        title: 'Wallpapering',
        price: 550,
        description: 'Professional installation of wallpaper or removal of existing wallpaper and wall preparation.',
        duration: '1-3 days'
      },
      {
        id: 'texture-painting',
        title: 'Texture Painting',
        price: 350,
        description: 'Application of textured finishes to walls and ceilings for added dimension and interest.',
        duration: '1-2 days'
      }
    ]
  },
  {
    id: 'flooring',
    title: 'Flooring',
    description: 'Installation and repair of various flooring types.',
    icon: Home,
    priceRange: '$250 - $5,000',
    longDescription: 'Our flooring specialists can install, repair, or refinish virtually any type of flooring. From hardwood and tile to laminate and vinyl, we ensure proper installation with attention to detail for a beautiful, long-lasting result.',
    tasks: [
      {
        id: 'hardwood-flooring',
        title: 'Hardwood Flooring',
        price: 3500,
        description: 'Installation, refinishing, or repair of solid hardwood flooring with proper subfloor preparation.',
        duration: '2-5 days'
      },
      {
        id: 'laminate-flooring',
        title: 'Laminate Flooring',
        price: 1800,
        description: 'Installation or repair of durable laminate flooring with underlayment and proper transitions.',
        duration: '1-3 days'
      },
      {
        id: 'tile-flooring',
        title: 'Tile Flooring',
        price: 2500,
        description: 'Installation, refinishing, or repair of ceramic, porcelain, or stone tile flooring with proper substrate preparation.',
        duration: '2-4 days'
      },
      {
        id: 'vinyl-flooring',
        title: 'Vinyl Flooring',
        price: 1500,
        description: 'Installation or repair of sheet vinyl or luxury vinyl tile/plank (LVT/LVP) flooring for a durable, water-resistant surface.',
        duration: '1-3 days'
      },
      {
        id: 'engineered-wood',
        title: 'Engineered Wood Flooring',
        price: 2800,
        description: 'Installation, refinishing, or repair of engineered wood flooring with proper moisture barriers.',
        duration: '2-4 days'
      },
      {
        id: 'concrete-flooring',
        title: 'Concrete Flooring',
        price: 2200,
        description: 'Installation, refinishing, or repair of concrete floors including polishing and epoxy coating.',
        duration: '2-5 days'
      },
      {
        id: 'epoxy-flooring',
        title: 'Epoxy Floor Coating',
        price: 1200,
        description: 'Application of durable epoxy coating to concrete floors for garages, basements, or other areas.',
        duration: '2-3 days'
      }
    ]
  },
  {
    id: 'doors-windows',
    title: 'Doors, Windows & Hardware',
    description: 'Installation and repair of doors, windows, and related hardware.',
    icon: Home,
    priceRange: '$100 - $3,500',
    longDescription: 'Our specialists can install or repair all types of doors and windows, from entry doors and interior doors to windows of all sizes. We also install and repair hardware like locks, handles, and curtain rods for a complete solution.',
    tasks: [
      {
        id: 'door-installation',
        title: 'Door Installation',
        price: 350,
        description: 'Professional installation of interior or exterior doors including frame adjustments and hardware.',
        duration: '2-4 hours'
      },
      {
        id: 'window-installation',
        title: 'Window Installation & Replacement',
        price: 550,
        description: 'Installation of new windows or replacement of existing windows with proper sealing and insulation.',
        duration: '2-6 hours per window'
      },
      {
        id: 'window-sealing',
        title: 'Window Sealing & Weatherproofing',
        price: 175,
        description: 'Application of weatherstripping, caulking, and seals to improve energy efficiency and prevent drafts.',
        duration: '1-3 hours'
      },
      {
        id: 'window-tinting',
        title: 'Window Tinting & Coating',
        price: 275,
        description: 'Application of window film for privacy, UV protection, or security purposes.',
        duration: '3-5 hours'
      },
      {
        id: 'lock-installation',
        title: 'Door Lock Installation & Replacement',
        price: 125,
        description: 'Installation or replacement of door locks, deadbolts, and handle sets with proper alignment.',
        duration: '1-2 hours'
      },
      {
        id: 'pet-door',
        title: 'Pet Door Installation',
        price: 250,
        description: 'Installation of pet access door in exterior door or wall with proper weathersealing.',
        duration: '2-4 hours'
      },
      {
        id: 'skylight',
        title: 'Skylight Installation & Repair',
        price: 850,
        description: 'Installation or repair of skylights with proper flashing and weatherproofing.',
        duration: '4-8 hours'
      },
      {
        id: 'curtain-installation',
        title: 'Curtain/Blinds Installation',
        price: 125,
        description: 'Professional installation of curtain rods, drapery hardware, and window blinds.',
        duration: '1-3 hours'
      },
      {
        id: 'shutter-installation',
        title: 'Shutter Installation',
        price: 200,
        description: 'Installation of interior or exterior window shutters with proper mounting and alignment.',
        duration: '1-3 hours per window'
      },
      {
        id: 'mailbox-installation',
        title: 'Mailbox Installation & Replacement',
        price: 150,
        description: 'Installation of new mailbox or replacement of existing unit with secure mounting.',
        duration: '1-2 hours'
      }
    ]
  },
  {
    id: 'outdoor-structures',
    title: 'Fencing & Outdoor Structures',
    description: 'Installation and repair of fences, decks, and outdoor features.',
    icon: Fence,
    priceRange: '$150 - $6,500',
    longDescription: 'Our outdoor structure specialists can build, repair, or upgrade fences, decks, patios, and more. We use quality materials and proper construction techniques to ensure your outdoor spaces are beautiful, functional, and built to last.',
    tasks: [
      {
        id: 'fence-installation',
        title: 'Fence Installation & Repair',
        price: 2500,
        description: 'Installation of new fencing or repair of existing fence sections of various materials including wood, vinyl, and chain link.',
        duration: '1-3 days'
      },
      {
        id: 'deck-construction',
        title: 'Deck Construction & Repair',
        price: 5500,
        description: 'Building new decks or repairing existing ones including rot repair and structural improvements.',
        duration: '2-7 days'
      },
      {
        id: 'patio-installation',
        title: 'Patio Installation & Repair',
        price: 3500,
        description: 'Installation of stone, concrete, or paver patios with proper drainage and leveling.',
        duration: '2-5 days'
      },
      {
        id: 'outdoor-kitchen',
        title: 'Outdoor Kitchen Installation',
        price: 4500,
        description: 'Construction of outdoor cooking areas including counters, appliance installation, and utility connections.',
        duration: '3-7 days'
      },
      {
        id: 'doghouse-installation',
        title: 'Doghouse Installation',
        price: 150,
        description: 'Assembly and secure installation of doghouse with proper leveling and anchoring.',
        duration: '1-3 hours'
      },
      {
        id: 'fence-staining',
        title: 'Fence Staining',
        price: 750,
        description: 'Preparation and application of stain or sealant to wooden fences for protection and appearance.',
        duration: '1-2 days'
      },
      {
        id: 'fence-post-repair',
        title: 'Fence Post Repair',
        price: 175,
        description: 'Repair or replacement of damaged fence posts with proper anchoring and alignment.',
        duration: '1-4 hours'
      },
      {
        id: 'pool-security-fencing',
        title: 'Pool Security Fencing',
        price: 1800,
        description: 'Installation of safety fencing around pools to meet local codes and prevent accidents.',
        duration: '1-3 days'
      }
    ]
  },
  {
    id: 'roofing',
    title: 'Roofing & Chimney',
    description: 'Repair and installation of roofing components and chimney features.',
    icon: Home,
    priceRange: '$225 - $15,000',
    longDescription: 'Our roofing specialists can repair leaks, replace damaged shingles, and handle other roofing issues to maintain your home\'s protection. We also provide chimney maintenance services to ensure safe and efficient operation.',
    tasks: [
      {
        id: 'roof-leak',
        title: 'Roof Leak Repairs',
        price: 550,
        description: 'Professional repair of roof leaks including shingle replacement and sealing. Price for standard repairs.',
        duration: '2-4 hours'
      },
      {
        id: 'shingle-repair',
        title: 'Shingle Roof Repair',
        price: 450,
        description: 'Replacement of damaged or missing shingles with matching materials and proper installation.',
        duration: '2-5 hours'
      },
      {
        id: 'shingle-replacement',
        title: 'Shingle Roof Replacement',
        price: 8500,
        description: 'Complete removal of old shingles and installation of new roofing with proper underlayment and flashing.',
        duration: '1-3 days'
      },
      {
        id: 'chimney-cap',
        title: 'Chimney Cap Installation',
        price: 250,
        description: 'Installation of protective cap on chimney to prevent water intrusion and animal entry.',
        duration: '1-2 hours'
      },
      {
        id: 'roof-inspection',
        title: 'Roof Inspection',
        price: 225,
        description: 'Comprehensive inspection of roof condition with detailed report on needed repairs or maintenance.',
        duration: '1-2 hours'
      }
    ]
  },
  {
    id: 'remodeling',
    title: 'Remodeling & Renovation',
    description: 'Comprehensive updates and transformations for your living spaces.',
    icon: HardHat,
    priceRange: '$450 - $25,000',
    longDescription: 'Our remodeling team can transform your living spaces from concept to completion. Whether you\'re updating a kitchen or bathroom, finishing a basement, or renovating your entire home, we provide quality craftsmanship with attention to detail.',
    tasks: [
      {
        id: 'kitchen-remodel',
        title: 'Kitchen Remodeling',
        price: 15000,
        description: 'Comprehensive kitchen renovation including cabinets, countertops, fixtures, and appliances, tailored to your specifications.',
        duration: '1-3 weeks'
      },
      {
        id: 'bathroom-remodel',
        title: 'Bathroom Remodeling',
        price: 9500,
        description: 'Complete bathroom renovation including fixtures, tile, vanity, and lighting to create your ideal bathroom.',
        duration: '1-2 weeks'
      },
      {
        id: 'basement-renovation',
        title: 'Basement Renovation',
        price: 18000,
        description: 'Transformation of unfinished basement into functional living space with proper insulation, wiring, and finishes.',
        duration: '2-4 weeks'
      },
      {
        id: 'interior-remodeling',
        title: 'Interior Spaces Remodeling',
        price: 12000,
        description: 'Renovation of living rooms, bedrooms, or other interior spaces with updated features and finishes.',
        duration: '1-3 weeks'
      },
      {
        id: 'structural-modifications',
        title: 'Drywall & Structural Modifications',
        price: 3500,
        description: 'Modification of interior walls and structures to create new layouts or open-concept designs.',
        duration: '3-10 days'
      }
    ]
  },
  {
    id: 'appliance-services',
    title: 'Appliance Services',
    description: 'Installation and repair of home appliances.',
    icon: Home,
    priceRange: '$100 - $500',
    longDescription: 'Our appliance specialists can install new appliances or repair existing ones to keep your home running smoothly. We handle everything from refrigerators and dishwashers to ovens and garbage disposals with professional expertise.',
    tasks: [
      {
        id: 'appliance-installation',
        title: 'Appliance Installation',
        price: 150,
        description: 'Professional installation of major home appliances with proper connections and testing.',
        duration: '1-3 hours'
      },
      {
        id: 'appliance-repair',
        title: 'Appliance Repair',
        price: 200,
        description: 'Diagnosis and repair of malfunctioning appliances to restore proper operation.',
        duration: '1-3 hours'
      },
      {
        id: 'dishwasher-installation',
        title: 'Dishwasher Installation',
        price: 175,
        description: 'Removal of old dishwasher and installation of new unit with proper plumbing and electrical connections.',
        duration: '1-2 hours'
      },
      {
        id: 'gas-appliance',
        title: 'Gas Appliance Connection',
        price: 225,
        description: 'Professional connection of gas appliances with proper fittings and safety testing.',
        duration: '1-2 hours'
      },
      {
        id: 'oven-installation',
        title: 'Oven Installation',
        price: 350,
        description: 'Installation of wall ovens or range units with proper electrical or gas connections.',
        duration: '2-3 hours'
      }
    ]
  },
  {
    id: 'hvac',
    title: 'HVAC & Water Heaters',
    description: 'Installation and service for heating, cooling, and water heating systems.',
    icon: Heater,
    priceRange: '$125 - $2,200',
    longDescription: 'Our HVAC specialists can install, repair, and maintain your heating and cooling systems for optimal comfort and efficiency. We also provide water heater services to ensure reliable hot water in your home.',
    tasks: [
      {
        id: 'water-heater-installation',
        title: 'Conventional Water Heater Installation',
        price: 750,
        description: 'Installation of standard tank-type water heater with proper connections and safety features.',
        duration: '3-5 hours'
      },
      {
        id: 'tankless-installation',
        title: 'Tankless Water Heater Installation',
        price: 1200,
        description: 'Installation of energy-efficient tankless water heater with appropriate venting and connections.',
        duration: '4-8 hours'
      },
      {
        id: 'water-heater-repair',
        title: 'Water Heater Repair',
        price: 250,
        description: 'Diagnosis and repair of water heater issues including element replacement and thermostat problems.',
        duration: '1-3 hours'
      },
      {
        id: 'smart-thermostat-hvac',
        title: 'Smart Thermostat Installation',
        price: 125,
        description: 'Installation of programmable or smart thermostat for HVAC system with proper wiring and setup.',
        duration: '1-2 hours'
      }
    ]
  }
];

// Sample handymen data
export const handymen: Handyman[] = [
  {
    id: "hm-001",
    name: "John Smith",
    photo: "/placeholder.svg", 
    rating: 4.9,
    reviewCount: 142,
    skills: ["Plumbing", "Electrical", "Appliance Installation"],
    experience: "15 years",
    bio: "Certified plumber and electrician with extensive experience in both residential and commercial projects.",
    distance: "2.3 miles",
    availability: true
  },
  {
    id: "hm-002",
    name: "Maria Rodriguez",
    photo: "/placeholder.svg",
    rating: 4.7,
    reviewCount: 89,
    skills: ["Painting", "Drywall Repair", "Flooring"],
    experience: "8 years",
    bio: "Specializing in interior finishing with an eye for detail and quality craftsmanship.",
    distance: "4.1 miles",
    availability: true
  },
  {
    id: "hm-003",
    name: "David Chen",
    photo: "/placeholder.svg",
    rating: 4.8,
    reviewCount: 115,
    skills: ["HVAC", "Water Heater Installation", "Appliance Repair"],
    experience: "12 years",
    bio: "HVAC certified technician with expertise in all heating and cooling systems and appliance repair.",
    distance: "3.5 miles",
    availability: true
  },
  {
    id: "hm-004",
    name: "Sarah Johnson",
    photo: "/placeholder.svg",
    rating: 4.6,
    reviewCount: 78,
    skills: ["Furniture Assembly", "TV Mounting", "Home Improvement"],
    experience: "6 years",
    bio: "Skilled in a variety of home improvement tasks with attention to customer satisfaction.",
    distance: "1.8 miles",
    availability: true
  },
  {
    id: "hm-005",
    name: "Michael Williams",
    photo: "/placeholder.svg",
    rating: 4.9,
    reviewCount: 203,
    skills: ["Electrical", "TV Mounting", "Smart Home Installation"],
    experience: "10 years",
    bio: "Licensed electrician specializing in home automation and entertainment system installation.",
    distance: "5.2 miles",
    availability: true
  }
];

// Function to get a service by its ID
export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

// Function to get a handyman by their ID
export const getHandymanById = (id: string): Handyman | undefined => {
  return handymen.find(handyman => handyman.id === id);
};

// Function to get nearby available handymen for a specific service
export const getNearbyAvailableHandymen = (serviceType: string, limit = 3): Handyman[] => {
  // Filter handymen by service type and availability
  const matchingHandymen = handymen.filter(handyman => {
    return handyman.availability && 
      handyman.skills.some(skill => 
        skill.toLowerCase() === serviceType.toLowerCase() || 
        serviceType.toLowerCase().includes(skill.toLowerCase()) || 
        skill.toLowerCase().includes(serviceType.toLowerCase())
      );
  });
  
  // Sort by distance and limit the results
  return matchingHandymen
    .sort((a, b) => {
      const distanceA = parseFloat(a.distance?.replace(" miles", "") || "0");
      const distanceB = parseFloat(b.distance?.replace(" miles", "") || "0");
      return distanceA - distanceB;
    })
    .slice(0, limit);
};
