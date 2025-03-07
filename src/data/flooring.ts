
import { Service, Task } from '@/types';
import { Box } from 'lucide-react';

export const flooringService: Service = {
  id: 'flooring',
  title: 'Flooring',
  description: 'Installation, repair, and refinishing of all flooring types.',
  icon: Box,
  priceRange: '$150 - $3,000',
  longDescription: 'Our professional flooring services cover all your flooring needs, from installation of new floors to repair and refinishing of existing ones. We work with all flooring types including hardwood, laminate, vinyl, tile, and specialty materials.',
  tasks: [
    {
      id: 'hardwood-flooring-installation',
      title: 'Hardwood Flooring Installation',
      price: 1800,
      description: 'Professional installation of hardwood flooring with proper subfloor preparation. Price per 200 sq ft.',
      duration: '2-3 days'
    },
    {
      id: 'hardwood-flooring-refinishing',
      title: 'Hardwood Flooring Refinishing',
      price: 1200,
      description: 'Sanding, staining, and refinishing of existing hardwood floors. Price per 200 sq ft.',
      duration: '2-3 days'
    },
    {
      id: 'hardwood-flooring-repair',
      title: 'Hardwood Flooring Repair',
      price: 450,
      description: 'Repair of damaged hardwood flooring sections including board replacement and refinishing.',
      duration: '1-2 days'
    },
    {
      id: 'laminate-flooring-installation',
      title: 'Laminate Flooring Installation',
      price: 950,
      description: 'Installation of laminate flooring with underlayment and proper transitions. Price per 200 sq ft.',
      duration: '1-2 days'
    },
    {
      id: 'laminate-flooring-repair',
      title: 'Laminate Flooring Repair',
      price: 350,
      description: 'Repair of damaged laminate flooring including board replacement and edge treatment.',
      duration: '4-8 hours'
    },
    {
      id: 'vinyl-flooring-installation',
      title: 'Vinyl Flooring Installation',
      price: 875,
      description: 'Professional installation of vinyl flooring including sheet vinyl, LVP, or LVT. Price per 200 sq ft.',
      duration: '1-2 days'
    },
    {
      id: 'vinyl-flooring-repair',
      title: 'Vinyl Flooring Repair',
      price: 325,
      description: 'Repair of damaged vinyl flooring including seam repair and patch installation.',
      duration: '3-6 hours'
    },
    {
      id: 'lvp-flooring-installation',
      title: 'LVP Flooring Installation',
      price: 950,
      description: 'Installation of luxury vinyl plank flooring with proper subfloor preparation. Price per 200 sq ft.',
      duration: '1-2 days'
    },
    {
      id: 'lvp-flooring-replacement',
      title: 'LVP Flooring Replacement',
      price: 1050,
      description: 'Removal of old flooring and installation of new luxury vinyl plank flooring. Price per 200 sq ft.',
      duration: '1-2 days'
    },
    {
      id: 'lvt-flooring-installation',
      title: 'LVT Flooring Installation',
      price: 975,
      description: 'Installation of luxury vinyl tile flooring with precision cutting and pattern alignment. Price per 200 sq ft.',
      duration: '1-2 days'
    },
    {
      id: 'lvt-flooring-replacement',
      title: 'LVT Flooring Replacement',
      price: 1075,
      description: 'Removal of old flooring and installation of new luxury vinyl tile flooring. Price per 200 sq ft.',
      duration: '1-2 days'
    },
    {
      id: 'tile-flooring-installation',
      title: 'Tile Flooring Installation',
      price: 1400,
      description: 'Professional installation of ceramic or porcelain tile flooring including mortar bed and grouting. Price per 100 sq ft.',
      duration: '2-3 days'
    },
    {
      id: 'tile-flooring-repair',
      title: 'Tile Flooring Repair',
      price: 375,
      description: 'Repair of damaged tile flooring including replacement of cracked tiles and regrouting.',
      duration: '4-8 hours'
    },
    {
      id: 'tile-regrouting',
      title: 'Tile Regrouting',
      price: 425,
      description: 'Removal of old grout and application of new grout to refresh tile appearance. Price per 100 sq ft.',
      duration: '1 day'
    },
    {
      id: 'concrete-flooring-installation',
      title: 'Concrete Flooring Installation',
      price: 1850,
      description: 'Installation of new concrete flooring with proper reinforcement and finishing. Price per 200 sq ft.',
      duration: '2-4 days'
    },
    {
      id: 'concrete-flooring-refinishing',
      title: 'Concrete Flooring Refinishing',
      price: 1200,
      description: 'Grinding, polishing, and sealing of concrete floors for a renewed appearance. Price per 200 sq ft.',
      duration: '1-2 days'
    },
    {
      id: 'concrete-flooring-repair',
      title: 'Concrete Flooring Repair',
      price: 550,
      description: 'Repair of cracked or damaged concrete flooring with proper patching and matching.',
      duration: '1 day'
    },
    {
      id: 'stone-flooring-installation',
      title: 'Stone Flooring Installation',
      price: 2200,
      description: 'Installation of natural stone flooring including proper substrate preparation. Price per 100 sq ft.',
      duration: '2-4 days'
    },
    {
      id: 'stone-flooring-repair',
      title: 'Stone Flooring Repair',
      price: 550,
      description: 'Repair of damaged stone flooring including stone replacement and refinishing affected areas.',
      duration: '1 day'
    },
    {
      id: 'stone-flooring-restoration',
      title: 'Stone Flooring Restoration',
      price: 1500,
      description: 'Professional restoration of stone flooring including cleaning, polishing, and sealing. Price per 200 sq ft.',
      duration: '1-2 days'
    },
    {
      id: 'bamboo-flooring-installation',
      title: 'Bamboo Flooring Installation',
      price: 1600,
      description: 'Installation of eco-friendly bamboo flooring with proper acclimation and subfloor preparation. Price per 200 sq ft.',
      duration: '1-3 days'
    },
    {
      id: 'bamboo-flooring-repair',
      title: 'Bamboo Flooring Repair',
      price: 425,
      description: 'Repair of damaged bamboo flooring including board replacement and refinishing affected areas.',
      duration: '1 day'
    },
    {
      id: 'cork-flooring-installation',
      title: 'Cork Flooring Installation',
      price: 1500,
      description: 'Installation of sustainable cork flooring with proper underlayment and sealing. Price per 200 sq ft.',
      duration: '1-2 days'
    },
    {
      id: 'cork-flooring-repair',
      title: 'Cork Flooring Repair',
      price: 400,
      description: 'Repair of damaged cork flooring tiles or planks with matching material and proper sealing.',
      duration: '4-8 hours'
    },
    {
      id: 'engineered-wood-installation',
      title: 'Engineered Wood Flooring Installation',
      price: 1750,
      description: 'Installation of engineered wood flooring with appropriate underlayment and transitions. Price per 200 sq ft.',
      duration: '1-2 days'
    },
    {
      id: 'engineered-wood-refinishing',
      title: 'Engineered Wood Flooring Refinishing',
      price: 1100,
      description: 'Light sanding and refinishing of engineered wood floors to refresh appearance. Price per 200 sq ft.',
      duration: '1-2 days'
    },
    {
      id: 'engineered-wood-repair',
      title: 'Engineered Wood Flooring Repair',
      price: 425,
      description: 'Repair of damaged engineered wood flooring including board replacement and finish matching.',
      duration: '4-8 hours'
    },
    {
      id: 'linoleum-flooring-installation',
      title: 'Linoleum Flooring Installation',
      price: 950,
      description: 'Professional installation of linoleum sheet flooring with proper seaming and adhesive. Price per 200 sq ft.',
      duration: '1-2 days'
    },
    {
      id: 'linoleum-flooring-repair',
      title: 'Linoleum Flooring Repair',
      price: 325,
      description: 'Repair of damaged linoleum flooring including patching, seam repair, and color matching.',
      duration: '3-6 hours'
    },
    {
      id: 'terrazzo-flooring-installation',
      title: 'Terrazzo Flooring Installation',
      price: 3000,
      description: 'Installation of premium terrazzo flooring with custom aggregate mix and polishing. Price per 100 sq ft.',
      duration: '3-5 days'
    },
    {
      id: 'terrazzo-flooring-refinishing',
      title: 'Terrazzo Flooring Refinishing',
      price: 1400,
      description: 'Grinding, polishing, and sealing of existing terrazzo floors to restore shine. Price per 200 sq ft.',
      duration: '1-3 days'
    },
    {
      id: 'terrazzo-flooring-repair',
      title: 'Terrazzo Flooring Repair',
      price: 650,
      description: 'Repair of cracked or damaged terrazzo flooring with matching aggregate and proper finishing.',
      duration: '1-2 days'
    },
    {
      id: 'epoxy-flooring-coating',
      title: 'Epoxy Flooring Coating',
      price: 1350,
      description: 'Application of durable epoxy coating to concrete floors for enhanced appearance and protection. Price per 200 sq ft.',
      duration: '2-3 days'
    },
    {
      id: 'grout-repair',
      title: 'Grout Repair',
      price: 275,
      description: 'Repair of damaged or deteriorating grout lines in tile flooring with color matching.',
      duration: '3-6 hours'
    },
    {
      id: 'grout-color-sealing',
      title: 'Grout Color Sealing',
      price: 350,
      description: 'Application of colored sealant to grout lines to restore appearance and provide protection. Price per 100 sq ft.',
      duration: '4-6 hours'
    }
  ]
};

export const getFlooringService = (): Service => {
  return flooringService;
};
