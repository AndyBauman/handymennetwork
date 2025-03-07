
import { Service, Task } from '@/types';
import { Workflow } from 'lucide-react';

export const fencingService: Service = {
  id: 'fencing',
  title: 'Fencing',
  description: 'Installation, repair, and maintenance of all fence types.',
  icon: Workflow,
  priceRange: '$150 - $5,000',
  longDescription: 'Our professional fencing services cover installation, repair, and maintenance of all fence types including wood, vinyl, chain link, and decorative metal. We ensure proper installation with sturdy posts and precise alignment for durability and appearance.',
  tasks: [
    {
      id: 'fence-installation',
      title: 'Fence Installation',
      price: 2500,
      description: 'Professional installation of new fence with proper post setting and alignment. Price varies by material and length.',
      duration: '1-3 days'
    },
    {
      id: 'fence-repair',
      title: 'Fence Repair',
      price: 350,
      description: 'Repair of damaged fence sections including post replacement and panel repair.',
      duration: '4-8 hours'
    },
    {
      id: 'fence-post-repair',
      title: 'Fence Post Repair',
      price: 225,
      description: 'Reinforcement or replacement of loose or rotting fence posts with proper concrete footing.',
      duration: '2-4 hours'
    },
    {
      id: 'fence-staining',
      title: 'Fence Staining',
      price: 750,
      description: 'Preparation and application of protective stain to wooden fences. Price based on 100 linear feet.',
      duration: '1 day'
    },
    {
      id: 'wood-fence-installation',
      title: 'Wood Fence Installation',
      price: 2800,
      description: 'Installation of custom wood fencing with treated lumber and proper post setting. Price per 100 linear feet.',
      duration: '1-3 days'
    },
    {
      id: 'wood-fence-repair',
      title: 'Wood Fence Repair',
      price: 375,
      description: 'Repair of damaged wooden fence components including boards, rails, and posts.',
      duration: '4-8 hours'
    },
    {
      id: 'vinyl-fence-installation',
      title: 'Vinyl Fence Installation',
      price: 3200,
      description: 'Installation of durable, low-maintenance vinyl fencing with precise alignment. Price per 100 linear feet.',
      duration: '1-2 days'
    },
    {
      id: 'vinyl-fence-repair',
      title: 'Vinyl Fence Repair',
      price: 325,
      description: 'Repair of damaged vinyl fence sections including panel replacement and post stabilization.',
      duration: '3-6 hours'
    },
    {
      id: 'chain-link-fence-installation',
      title: 'Chain Link Fence Installation',
      price: 1800,
      description: 'Professional installation of chain link fencing with secure terminal posts and proper tension. Price per 100 linear feet.',
      duration: '1-2 days'
    },
    {
      id: 'chain-link-fence-repair',
      title: 'Chain Link Fence Repair',
      price: 300,
      description: 'Repair of damaged chain link fencing including fabric replacement and tension adjustment.',
      duration: '3-6 hours'
    },
    {
      id: 'iron-fence-installation',
      title: 'Iron Fence Installation',
      price: 4500,
      description: 'Installation of decorative iron fencing with secure mounting and rust-resistant finishing. Price per 100 linear feet.',
      duration: '2-3 days'
    },
    {
      id: 'iron-fence-repair',
      title: 'Iron Fence Repair',
      price: 450,
      description: 'Repair of damaged decorative iron fencing including welding repairs and rust treatment.',
      duration: '4-8 hours'
    },
    {
      id: 'pool-security-fence',
      title: 'Pool Security Fencing Installation',
      price: 2200,
      description: 'Installation of code-compliant security fencing around pools with self-closing gates. Price per 100 linear feet.',
      duration: '1-2 days'
    },
    {
      id: 'fence-construction',
      title: 'Fence Construction',
      price: 3000,
      description: 'Custom fence construction with professional design and premium materials. Price varies by complexity and materials.',
      duration: '2-4 days'
    }
  ]
};

export const getFencingService = (): Service => {
  return fencingService;
};
