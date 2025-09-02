import {
  Briefcase,
  Edit,
  FolderOpen,
  Home,
  LucideIcon,
  Mail,
  PaperclipIcon,
  Settings
} from "lucide-react";
import { IconType } from "react-icons";
import {
  FaRegClock,
  FaMagic,
  FaRobot,
  FaStar,
  FaEdit,
  FaSpellCheck,
  FaCode,
  FaPenNib,
  FaCameraRetro,
  FaBriefcase,
  FaStore,
} from "react-icons/fa";


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
    Icon: FaMagic,
    title: "No More Blank Pages",
    description:
      "AI helps you get started instantly with smart suggestions and structure — no writer’s block.",
  },
  {
    Icon: FaRobot,
    title: "AI-Powered Proposals",
    description:
      "Our AI generates personalized proposals tailored to your client's needs, industry, and project scope.",
  },
  {
    Icon: FaStar,
    title: "Stand Out From Competition",
    description:
      "Professionally designed proposals that make your business look established and trustworthy.",
  },
  {
    Icon: FaEdit,
    title: "Easy Editing",
    description:
      "Intuitive editor lets you customize every aspect of your proposal without design skills.",
  },
  {
    Icon: FaSpellCheck,
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
    Icon: FaCode,
    title: "Freelance Developer",
    description:
      "Win client projects with detailed technical proposals that explain your process and value.",
  },
  {
    Icon: FaPenNib,
    title: "Copywriter or Designer",
    description:
      "Showcase your creative process and deliverables with visually appealing proposals.",
  },
  {
    Icon: FaCameraRetro,
    title: "Photographer or Creative",
    description:
      "Create beautiful proposals that match your aesthetic and highlight your unique style.",
  },
  {
    Icon: FaBriefcase,
    title: "Agency or Consultant",
    description:
      "Deliver professional, branded proposals that reflect your expertise and methodology.",
  },
  {
    Icon: FaStore,
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
  // { label: "Templates", icon: FileText, path: "/dashboard/templates" },
  { label: "Settings", icon: Settings, path: "/dashboard/settings" },
];

export const outreachTypes = [
  {
    id: "freelance-proposal",
    label: "Freelance Proposal",
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
    id: "cover-letter",
    label: "Cover Letter",
    icon: PaperclipIcon,
    color: "from-[#FF9B00] to-[#F97A00]",
  },
];
