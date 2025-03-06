
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

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: Service[];
}

export interface Job {
  id: string;
  title: string;
  status: 'pending' | 'accepted' | 'arrived' | 'started' | 'completed' | 'upcoming';
  date: string;
  time: string;
  client: string;
  address: string;
  payment: string;
}

export interface JobNotification {
  id: string;
  title: string;
  location: string;
  distance: string;
  payment: string;
  duration: string;
  urgency: 'low' | 'medium' | 'high';
  timeLeft: number;
}
