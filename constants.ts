import { Utensils, Briefcase, ShieldCheck, Sparkles, Wifi, Zap, WashingMachine, Home } from "lucide-react";
import { PricingPlan, Amenity, NavLink } from "./types";

export const CONTACT_PHONE = "+919494662748";
export const WHATSAPP_LINK = "https://wa.me/919494662748";
export const LOCATION_LINK = "https://www.google.com/maps/search/?api=1&query=BSV+EXECUTIVE+BOYS+HOSTEL+CCQX+F58+Ameerpet+Hyderabad";

export const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "Location", href: "#location" },
  { name: "Rooms", href: "#pricing" },
  { name: "Food & Amenities", href: "#amenities" },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    title: "Budget",
    price: "₹6,300",
    features: ["5 Sharing", "High-Speed WiFi", "3-Time Homestyle Food", "Common TV Area"],
    tag: "Student Choice",
  },
  {
    title: "Standard",
    price: "₹6,600",
    features: ["4 Sharing", "Attached Washroom", "Individual Cupboards", "Daily Housekeeping"],
    tag: "Most Popular",
    recommended: true,
  },
  {
    title: "Executive",
    price: "₹7,000",
    features: ["3 Sharing", "Spacious Layout", "Priority Maintenance", "Quiet Study Zone"],
    tag: "IT Professional",
  },
];

export const AMENITIES: Amenity[] = [
  {
    title: "Authentic Telangana Feasts",
    description: "Experience home away from home with our authentic Telangana menu. Sundays are special with Bagara Rice & Non-Veg feasts.",
    icon: Utensils,
    size: "large",
    image: "https://picsum.photos/800/600?grayscale&blur=1", // Placeholder for food
  },
  {
    title: "Morning Carrier Service",
    description: "Hot, fresh lunch packed for office goers & students every morning.",
    icon: Briefcase,
    size: "medium",
  },
  {
    title: "Biometric Security",
    description: "24/7 CCTV surveillance and biometric entry for complete peace of mind.",
    icon: ShieldCheck,
    size: "small",
  },
  {
    title: "Daily Hygiene",
    description: "Professional cleaning staff ensures your room sparkles every single day.",
    icon: Sparkles,
    size: "small",
  },
];

export const ROOM_FEATURES = [
  { icon: Wifi, label: "5G WiFi" },
  { icon: WashingMachine, label: "Washing Machine" },
  { icon: Utensils, label: "3-Time Food" },
  { icon: Zap, label: "Geyser" },
];