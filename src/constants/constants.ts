import { IconType } from "react-icons";
import { FaRegClock } from "react-icons/fa";
import {
  Home,
  Edit,
  FileText,
  Settings,
  LucideIcon,
  FolderOpen,
} from "lucide-react";
import { Mail, Twitter, Briefcase, User } from "lucide-react";

interface FeatureType {
  Icon: IconType;
  title: string;
  description: string;
}

export const features: FeatureType[] = [
  {
    Icon: FaRegClock,
    title: "Save Hours of Work",
    description:
      "Generate professional proposals in minutes instead of hours. Focus on your actual work, not paperwork.",
  },
  {
    Icon: FaRegClock,
    title: "Ready-to-Send Templates",
    description:
      "Access dozens of industry-specific templates crafted by experts. Just add your personal touch.",
  },
  {
    Icon: FaRegClock,
    title: "AI-Powered Customization",
    description:
      "Our AI tailors content to your specific client, industry, and project requirements.",
  },
  {
    Icon: FaRegClock,
    title: "Stand Out From Competition",
    description:
      "Professionally designed proposals that make your business look established and trustworthy.",
  },
  {
    Icon: FaRegClock,
    title: "Easy Editing",
    description:
      "Intuitive editor lets you customize every aspect of your proposal without design skills.",
  },
  {
    Icon: FaRegClock,
    title: "Professional Language",
    description:
      "Perfect tone and vocabulary for your industry, eliminating grammar and spelling errors.",
  },
];

interface MadeForType {
  Icon: IconType;
  title: string;
  description: string;
}

export const madeFor: MadeForType[] = [
  {
    Icon: FaRegClock,
    title: "Freelance Developer",
    description:
      "Win client projects with detailed technical proposals that explain your process and value.",
  },
  {
    Icon: FaRegClock,
    title: "Copywriter or Designer",
    description:
      "Showcase your creative process and deliverables with visually appealing proposals.",
  },
  {
    Icon: FaRegClock,
    title: "Photographer or Creative",
    description:
      "Create beautiful proposals that match your aesthetic and highlight your unique style.",
  },
  {
    Icon: FaRegClock,
    title: "Agency or Consultant",
    description:
      "Deliver professional, branded proposals that reflect your expertise and methodology.",
  },
  {
    Icon: FaRegClock,
    title: "Small E-commerce Owner",
    description:
      "Create proposals for vendors, partners, and service providers to grow your business.",
  },
];

export const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export type SidebarLink = {
  label: string;
  icon: LucideIcon; // use icon name or component
  path: string;
};

export const sidebarLinks: SidebarLink[] = [
  { label: "Dashboard", icon: Home, path: "/dashboard/overview" },
  { label: "Generate", icon: Edit, path: "/dashboard/generate" },
  {
    label: "All Proposals",
    icon: FolderOpen,
    path: "/dashboard/all-proposals",
  },
  { label: "Templates", icon: FileText, path: "/dashboard/templates" },
  { label: "Settings", icon: Settings, path: "/dashboard/settings" },
];

export const outreachTypes = [
  {
    id: "upwork",
    label: "Upwork Proposal",
    icon: Briefcase,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "email",
    label: "Email Pitch",
    icon: Mail,
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: "linkedin",
    label: "LinkedIn DM",
    icon: User,
    color: "from-blue-600 to-indigo-700",
  },
  {
    id: "twitter",
    label: "Twitter DM",
    icon: Twitter,
    color: "from-sky-400 to-blue-500",
  },
];
