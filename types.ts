import { LucideIcon } from "lucide-react";

export interface PricingPlan {
  title: string;
  price: string;
  features: string[];
  tag?: string;
  recommended?: boolean;
}

export interface Amenity {
  title: string;
  description: string;
  icon: LucideIcon;
  size: "large" | "medium" | "small";
  image?: string;
}

export interface NavLink {
  name: string;
  href: string;
}