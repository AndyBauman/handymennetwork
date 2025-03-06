
import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  priceRange: string;
  longDescription?: string;
  tasks?: Task[];
}

export interface Task {
  id: string;
  title: string;
  price: number;
  description: string;
  duration: string;
}

export interface Handyman {
  id: string;
  name: string;
  photo: string;
  rating: number;
  reviewCount: number;
  skills: string[];
  experience: string;
  bio: string;
}
