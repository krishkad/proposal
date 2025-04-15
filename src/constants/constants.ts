
import { IconType } from "react-icons";
import { FaRegClock } from "react-icons/fa";

interface FeatureType {
    Icon: IconType;
    title: string;
    description: string;
}

export const features: FeatureType[] = [
    {
        Icon: FaRegClock,
        title: "Save Hours of Work",
        description: "Generate professional proposals in minutes instead of hours. Focus on your actual work, not paperwork."
    },
    {
        Icon: FaRegClock,
        title: "Ready-to-Send Templates",
        description: "Access dozens of industry-specific templates crafted by experts. Just add your personal touch."
    },
    {
        Icon: FaRegClock,
        title: "AI-Powered Customization",
        description: "Our AI tailors content to your specific client, industry, and project requirements."
    },
    {
        Icon: FaRegClock,
        title: "Stand Out From Competition",
        description: "Professionally designed proposals that make your business look established and trustworthy."
    },
    {
        Icon: FaRegClock,
        title: "Easy Editing",
        description: "Intuitive editor lets you customize every aspect of your proposal without design skills."
    },
    {
        Icon: FaRegClock,
        title: "Professional Language",
        description: "Perfect tone and vocabulary for your industry, eliminating grammar and spelling errors."
    },
]

interface MadeForType {
    Icon: IconType;
    title: string;
    description: string;
}


export const madeFor: MadeForType[] = [
    {
        Icon: FaRegClock,
        title: "Freelance Developer",
        description: "Win client projects with detailed technical proposals that explain your process and value."
    },
    {
        Icon: FaRegClock,
        title: "Copywriter or Designer",
        description: "Showcase your creative process and deliverables with visually appealing proposals."
    },
    {
        Icon: FaRegClock,
        title: "Photographer or Creative",
        description: "Create beautiful proposals that match your aesthetic and highlight your unique style."
    },
    {
        Icon: FaRegClock,
        title: "Agency or Consultant",
        description: "Deliver professional, branded proposals that reflect your expertise and methodology."
    },
    {
        Icon: FaRegClock,
        title: "Small E-commerce Owner",
        description: "Create proposals for vendors, partners, and service providers to grow your business."
    },
   
]