
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
        id: 'water-heater',
        title: 'Water Heater Installation',
        price: 500,
        description: 'Removal of old water heater and installation of new unit. Does not include cost of the water heater.',
        duration: '3-5 hours'
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
        price: 200,
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
        id: 'water-heater-standard',
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
        id: 'smart-thermostat',
        title: 'Smart Thermostat Installation',
        price: 150,
        description: 'Installation and programming of smart thermostat systems with WiFi setup and app configuration.',
        duration: '1-2 hours'
      }
    ]
  },
  {
    id: 'exterior-services',
    title: 'Exterior & Outdoor Services',
    description: 'Maintenance and improvements for your home\'s exterior and outdoor areas.',
    icon: Home,
    priceRange: '$150 - $3,500',
    longDescription: 'Our exterior specialists can clean, repair, and enhance your home\'s outdoor areas. From pressure washing and gutter cleaning to driveway sealing and sprinkler systems, we help maintain your property\'s appearance and functionality.',
    tasks: [
      {
        id: 'pressure-washing',
        title: 'Pressure Washing',
        price: 300,
        description: 'Professional cleaning of driveways, patios, walkways, and exterior surfaces using high-pressure water.',
        duration: '2-5 hours'
      },
      {
        id: 'gutter-cleaning',
        title: 'Gutter Cleaning & Repair',
        price: 175,
        description: 'Removal of debris from gutters and downspouts with minor repairs to ensure proper drainage.',
        duration: '1-3 hours'
      },
      {
        id: 'driveway-sealing',
        title: 'Driveway Sealing',
        price: 400,
        description: 'Application of protective sealant to asphalt or concrete driveways to prevent damage.',
        duration: '3-5 hours'
      },
      {
        id: 'holiday-lighting',
        title: 'Holiday Lighting',
        price: 375,
        description: 'Professional installation of seasonal holiday lighting with secure mounting and electrical connections.',
        duration: '2-5 hours'
      },
      {
        id: 'sprinkler-services',
        title: 'Sprinkler Installation & Repair',
        price: 650,
        description: 'Installation, repair, programming, or winterizing of lawn sprinkler systems.',
        duration: '2-8 hours'
      },
      {
        id: 'siding-repair',
        title: 'Siding Installation & Repair',
        price: 850,
        description: 'Repair or replacement of damaged siding sections of various materials including vinyl, wood, and fiber cement.',
        duration: '1-3 days'
      }
    ]
  },
  {
    id: 'specialty-services',
    title: 'Specialty & Green Services',
    description: 'Specialized installations and eco-friendly home improvements.',
    icon: Sun,
    priceRange: '$175 - $12,000',
    longDescription: 'Our specialty team offers advanced services like solar panel installation, soundproofing, and water quality testing. These specialized solutions help improve your home\'s efficiency, comfort, and environmental impact.',
    tasks: [
      {
        id: 'solar-panel',
        title: 'Solar Panel Installation & Repair',
        price: 8500,
        description: 'Professional installation or repair of solar panel systems including mounting, wiring, and connection to home electrical system.',
        duration: '1-3 days'
      },
      {
        id: 'solar-panel-cleaning',
        title: 'Solar Panel Cleaning',
        price: 250,
        description: 'Thorough cleaning of solar panels to maintain maximum efficiency and power generation.',
        duration: '2-4 hours'
      },
      {
        id: 'solar-water-heater',
        title: 'Solar Water Heater Installation',
        price: 2200,
        description: 'Installation of solar water heating system including roof panels and storage tank.',
        duration: '1-2 days'
      },
      {
        id: 'soundproofing',
        title: 'Soundproofing',
        price: 1200,
        description: 'Installation of soundproofing materials in walls, ceilings, or floors to reduce noise transmission.',
        duration: '1-3 days'
      },
      {
        id: 'water-quality',
        title: 'Water Quality Testing & Maintenance',
        price: 175,
        description: 'Professional testing of water quality and implementation of solutions for improved water safety.',
        duration: '1-3 hours'
      }
    ]
  },
  {
    id: 'general-handyman',
    title: 'General Handyman Services',
    description: 'Reliable help for various home maintenance tasks and repairs.',
    icon: Wrench,
    priceRange: '$50 - $300',
    longDescription: 'Our general handyman services cover a wide range of home maintenance tasks and small repairs. From fixing leaky faucets to hanging pictures and assembling furniture, our skilled professionals can handle your to-do list efficiently and professionally.',
    tasks: [
      {
        id: 'general-repairs',
        title: 'General Repairs & Odd Jobs',
        price: 75,
        description: 'Professional handling of various small home repairs and maintenance tasks. Price is per hour.',
        duration: 'Varies'
      },
      {
        id: 'light-caulking',
        title: 'Light Caulking & Sealant Work',
        price: 100,
        description: 'Application of caulk or sealant around tubs, sinks, windows, or other areas to prevent water damage.',
        duration: '1-3 hours'
      },
      {
        id: 'demolition',
        title: 'Demolition Projects',
        price: 300,
        description: 'Controlled demolition of small structures, walls, or fixtures with proper debris removal.',
        duration: '2-8 hours'
      },
      {
        id: 'firewood-chopping',
        title: 'Firewood Chopping',
        price: 150,
        description: 'Splitting and stacking of firewood for your home heating needs.',
        duration: '2-4 hours'
      },
      {
        id: 'cleaning',
        title: 'Specialized Cleaning',
        price: 200,
        description: 'Deep cleaning of specific areas or items requiring special attention or techniques.',
        duration: '2-6 hours'
      }
    ]
  }
];

export const additionalServices: Service[] = [
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
        title: 'Animal Damage Repair',
        price: 425,
        description: 'Repair of damage caused by animals to home exterior, insulation, or ductwork.',
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
