"use client";
export const dynamic = "force-dynamic";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Briefcase,
  Copy,
  Edit,
  FileText,
  FileTextIcon,
  Mail,
  Save,
  Search,
  Trash2,
  Twitter,
  User,
  X,
  XIcon,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

interface Proposal {
  id: string;
  type: "freelance" | "email";
  title: string;
  proposal: string;
  successRate: number;
  createdAt: Date;
  updatedAt: Date;
  // priority: "low" | "medium" | "high";
}

// const sampleProposals: Proposal[] = [
//   {
//     id: "sample-1",
//     type: "freelance",
//     title: "E-commerce Website Development Proposal",
//     content: `Hi Sarah,

// I'm excited about your e-commerce project! With my expertise in React, Node.js, and payment integration, I can deliver exactly what you're looking for.

// Here's what I bring to the table:
// • 5+ years of e-commerce development experience
// • Professional, deadline-driven execution
// • 100% client satisfaction rate

// I noticed you mentioned needing custom product filtering and advanced analytics. I have specific experience with this and would love to discuss how I can help.

// I'd love to chat about your vision and show you some relevant work samples. When would be a good time for a quick call?

// Best regards!`,
//     clientName: "Sarah Johnson",
//     createdAt: new Date("2024-01-15"),
//     lastModified: new Date("2024-01-15"),
//     priority: "high",
//   },
//   {
//     id: "sample-2",
//     type: "email",
//     title: "Digital Marketing Partnership Opportunity",
//     content: `Subject: Partnership Opportunity - Digital Growth Solutions

// Hi Marketing Director,

// I hope this email finds you well! I specialize in SEO, content strategy, and conversion optimization and noticed your company could benefit from my expertise.

// Here's what I can offer:
// • Proven results in increasing organic traffic by 300%+
// • Strategic, data-driven solutions
// • Custom solutions tailored to your needs

// I saw that you're looking to expand into new markets - this aligns perfectly with my experience helping similar companies scale their digital presence.

// Would you be open to a 15-minute conversation this week to explore how we could work together?

// Best regards`,
//     clientName: "Tech Startup Inc.",
//     createdAt: new Date("2024-01-14"),
//     lastModified: new Date("2024-01-14"),
//     priority: "medium",
//   },
//   {
//     id: "sample-3",
//     type: "freelance",
//     title: "Business Consulting Connection Request",
//     content: `Hi John! 👋

// I came across your profile and was impressed by your work in fintech. I specialize in business process optimization and help companies like yours achieve breakthrough results.

// I believe there could be some interesting synergies between our work.

// I noticed your company is expanding to European markets - I've helped other fintech companies navigate similar international expansion challenges with great success.

// Would you be open to a brief chat?`,
//     clientName: "John Smith",
//     createdAt: new Date("2024-01-13"),
//     lastModified: new Date("2024-01-13"),
//     priority: "high",
//   },
//   {
//     id: "sample-4",
//     type: "email",
//     title: "Social Media Growth Partnership",
//     content: `Hey @techstartup! 👋

// Loving your content about AI innovations! I specialize in viral social media strategies and help brands like yours build amazing communities.

// Saw your post about launching your new AI product - totally relate to the challenges of product marketing!

// Would love to connect! ✨ DM me if interested!`,
//     clientName: "@techstartup",
//     createdAt: new Date("2024-01-12"),
//     lastModified: new Date("2024-01-12"),
//     priority: "low",
//   },
//   {
//     id: "sample-5",
//     type: "freelance",
//     title: "Mobile App Development for Healthcare",
//     content: `Hello Dr. Martinez,

// I'm a mobile app developer specializing in healthcare applications with HIPAA compliance expertise.

// Your project for a patient management app caught my attention because:
// • I've built 15+ healthcare apps with 99.9% uptime
// • Deep understanding of medical workflows
// • Expert in React Native and secure data handling

// I can deliver a robust, user-friendly solution that meets all regulatory requirements.

// Let's schedule a call to discuss your specific needs and timeline.

// Best regards,
// Alex`,
//     clientName: "Dr. Martinez",
//     createdAt: new Date("2024-01-11"),
//     lastModified: new Date("2024-01-11"),
//     priority: "high",
//   },
//   {
//     id: "sample-6",
//     type: "email",
//     title: "Web Design Services for Restaurant Chain",
//     content: `Subject: Modern Website Design for Your Restaurant Chain

// Dear Operations Manager,

// I'm a web designer who specializes in creating stunning, conversion-focused websites for restaurant chains.

// What I can do for you:
// • Mobile-first responsive design
// • Online ordering integration
// • SEO optimization for local search
// • Brand consistency across all locations

// I've helped similar businesses increase online orders by 150% within 6 months.

// Would you like to see some examples of my recent restaurant projects?

// Best regards,
// Maria`,
//     clientName: "Restaurant Chain Corp",
//     createdAt: new Date("2024-01-10"),
//     lastModified: new Date("2024-01-10"),
//     priority: "medium",
//   },
//   {
//     id: "sample-7",
//     type: "email",
//     title: "AI/ML Consulting for Financial Services",
//     content: `Hi Jennifer,

// Your recent post about implementing AI in financial services really resonated with me. I'm an AI/ML consultant with 8 years of experience in the fintech sector.

// I've helped companies like yours:
// • Implement fraud detection systems with 99.5% accuracy
// • Build predictive models for risk assessment
// • Automate compliance reporting processes

// I'd love to share some case studies that might be relevant to your current initiatives.

// Would you be interested in a brief conversation?

// Best,
// David`,
//     clientName: "Jennifer Lee",
//     createdAt: new Date("2024-01-09"),
//     lastModified: new Date("2024-01-09"),
//     priority: "high",
//   },
//   {
//     id: "sample-8",
//     type: "freelance",
//     title: "Content Creation Collaboration",
//     content: `Hey @contentcreator! 🎬

// Love your video editing style! I'm a motion graphics designer who specializes in creating engaging animations for content creators.

// Your recent travel vlogs would look amazing with some custom animated intro/outro sequences!

// I've worked with creators who've seen 40% increase in engagement after adding professional animations.

// DM me if you'd like to see my portfolio! ✨`,
//     clientName: "@contentcreator",
//     createdAt: new Date("2024-01-08"),
//     lastModified: new Date("2024-01-08"),
//     priority: "low",
//   },
//   {
//     id: "sample-9",
//     type: "freelance",
//     title: "Data Analysis for Retail Analytics",
//     content: `Dear Hiring Manager,

// I'm a data scientist with extensive experience in retail analytics and customer behavior analysis.

// For your retail data project, I can provide:
// • Customer segmentation and lifetime value analysis
// • Sales forecasting with 95% accuracy
// • Inventory optimization recommendations
// • Interactive dashboards and visualizations

// I've helped retailers increase revenue by 25% through data-driven insights.

// I'm available to start immediately and can deliver results within your timeline.

// Looking forward to discussing this opportunity!

// Best regards,
// Sarah`,
//     clientName: "Retail Analytics Corp",
//     createdAt: new Date("2024-01-07"),
//     lastModified: new Date("2024-01-07"),
//     priority: "medium",
//   },
//   {
//     id: "sample-10",
//     type: "email",
//     title: "Cybersecurity Audit Services",
//     content: `Subject: Comprehensive Cybersecurity Assessment

// Dear IT Director,

// With cyber threats increasing by 300% this year, I wanted to reach out about your company's security posture.

// I'm a certified cybersecurity consultant offering:
// • Comprehensive security audits and penetration testing
// • GDPR and SOC 2 compliance assistance
// • Employee security training programs
// • 24/7 incident response services

// I've helped 50+ companies prevent data breaches and achieve compliance.

// Would you be interested in a free security assessment to identify potential vulnerabilities?

// Best regards,
// Michael`,
//     clientName: "Enterprise Solutions Ltd",
//     createdAt: new Date("2024-01-06"),
//     lastModified: new Date("2024-01-06"),
//     priority: "high",
//   },
//   {
//     id: "sample-11",
//     type: "freelance",
//     title: "UX/UI Design for EdTech Platform",
//     content: `Hi Robert,

// I noticed your company is developing an educational platform. As a UX/UI designer specializing in EdTech, I'd love to help create an engaging learning experience.

// My expertise includes:
// • User research and persona development
// • Interactive learning interface design
// • Accessibility compliance (WCAG 2.1)
// • Gamification strategies that increase engagement by 60%

// I've designed interfaces for 20+ educational platforms used by over 100,000 students.

// Would you like to see some of my recent EdTech projects?

// Best,
// Lisa`,
//     clientName: "Robert Chen",
//     createdAt: new Date("2024-01-05"),
//     lastModified: new Date("2024-01-05"),
//     priority: "medium",
//   },
//   {
//     id: "sample-12",
//     type: "email",
//     title: "Podcast Production Services",
//     content: `Hey @podcasthost! 🎙️

// Your podcast about entrepreneurship is incredible! I'm an audio engineer specializing in podcast production.

// I can help you:
// • Professional audio editing and mastering
// • Intro/outro music creation
// • Show notes and transcript generation
// • Distribution to all major platforms

// My clients have seen 200% growth in downloads after professional production!

// Let's chat about taking your podcast to the next level! 🚀`,
//     clientName: "@podcasthost",
//     createdAt: new Date("2024-01-04"),
//     lastModified: new Date("2024-01-04"),
//     priority: "low",
//   },
//   {
//     id: "sample-13",
//     type: "freelance",
//     title: "DevOps and Cloud Migration Services",
//     content: `Hello,

// I'm a DevOps engineer with 10+ years of experience in cloud migrations and infrastructure automation.

// For your cloud migration project, I offer:
// • AWS/Azure/GCP migration strategies
// • CI/CD pipeline implementation
// • Infrastructure as Code (Terraform/CloudFormation)
// • 99.99% uptime guarantee
// • Cost optimization (typically 30-50% savings)

// I've successfully migrated 100+ applications to the cloud with zero downtime.

// I'm available for a consultation call to discuss your specific requirements.

// Best regards,
// Tom`,
//     clientName: "Cloud Migration Project",
//     createdAt: new Date("2024-01-03"),
//     lastModified: new Date("2024-01-03"),
//     priority: "high",
//   },
//   {
//     id: "sample-14",
//     type: "email",
//     title: "E-learning Course Development",
//     content: `Subject: Custom E-learning Course Development

// Dear Training Manager,

// I'm an instructional designer who creates engaging online courses that drive real learning outcomes.

// What I can create for your team:
// • Interactive multimedia courses
// • Microlearning modules for busy professionals
// • Assessment and certification systems
// • Mobile-responsive course design
// • SCORM compliance for LMS integration

// My courses have achieved 95% completion rates and 40% better knowledge retention.

// Would you like to discuss your training objectives and see some sample courses?

// Best regards,
// Rachel`,
//     clientName: "Corporate Training Dept",
//     createdAt: new Date("2024-01-02"),
//     lastModified: new Date("2024-01-02"),
//     priority: "medium",
//   },
//   {
//     id: "sample-15",
//     type: "freelance",
//     title: "Blockchain Development Proposal",
//     content: `Hi Amanda,

// I saw your post about exploring blockchain solutions for supply chain transparency. I'm a blockchain developer with expertise in enterprise implementations.

// I can help you build:
// • Smart contracts for supply chain tracking
// • Decentralized identity verification systems
// • NFT-based product authenticity certificates
// • Integration with existing ERP systems

// I've delivered blockchain solutions for Fortune 500 companies with 100% success rate.

// Would you be interested in discussing how blockchain can transform your supply chain?

// Best,
// Kevin`,
//     clientName: "Amanda Rodriguez",
//     createdAt: new Date("2024-01-01"),
//     lastModified: new Date("2024-01-01"),
//     priority: "high",
//   },
//   {
//     id: "sample-16",
//     type: "email",
//     title: "Influencer Marketing Campaign",
//     content: `Hey @fashionbrand! 👗

// Love your sustainable fashion line! I'm a social media strategist who helps fashion brands build authentic communities.

// I can help you:
// • Identify micro-influencers in your niche
// • Create viral campaign strategies
// • Track ROI and engagement metrics
// • Build long-term brand partnerships

// My last campaign generated 5M impressions and 25% sales increase!

// DM me to see the case study! ✨ #SustainableFashion`,
//     clientName: "@fashionbrand",
//     createdAt: new Date("2023-12-31"),
//     lastModified: new Date("2023-12-31"),
//     priority: "low",
//   },
//   {
//     id: "sample-17",
//     type: "freelance",
//     title: "WordPress Plugin Development",
//     content: `Dear WordPress Developer Needed,

// I'm a WordPress expert with 8+ years of custom plugin development experience.

// For your booking system plugin, I can deliver:
// • Custom booking calendar with availability management
// • Payment integration (Stripe, PayPal, WooCommerce)
// • Email notifications and reminders
// • Multi-language support
// • Mobile-responsive interface
// • Comprehensive documentation

// I've built 50+ WordPress plugins with 5-star ratings and 100k+ active installations.

// I guarantee clean, secure code that follows WordPress coding standards.

// Ready to start immediately!

// Best regards,
// Chris`,
//     clientName: "WordPress Plugin Project",
//     createdAt: new Date("2023-12-30"),
//     lastModified: new Date("2023-12-30"),
//     priority: "medium",
//   },
//   {
//     id: "sample-18",
//     type: "email",
//     title: "Video Marketing Strategy Consultation",
//     content: `Subject: Transform Your Brand with Video Marketing

// Dear Marketing Director,

// Video content generates 1200% more shares than text and images combined. I'm a video marketing strategist who helps brands create compelling video campaigns.

// My services include:
// • Video marketing strategy development
// • Scriptwriting and storyboarding
// • Production coordination
// • Multi-platform distribution optimization
// • Performance analytics and optimization

// I've helped brands achieve 300% increase in engagement and 150% boost in conversions.

// Would you like to schedule a strategy session to discuss your video marketing goals?

// Best regards,
// Jessica`,
//     clientName: "Brand Marketing Solutions",
//     createdAt: new Date("2023-12-29"),
//     lastModified: new Date("2023-12-29"),
//     priority: "high",
//   },
//   {
//     id: "sample-19",
//     type: "freelance",
//     title: "SEO Optimization for SaaS Company",
//     content: `Hi Mark,

// I noticed your SaaS company is looking to improve organic search rankings. I'm an SEO specialist with a focus on B2B SaaS companies.

// Here's how I can help:
// • Technical SEO audit and optimization
// • Content strategy for high-converting keywords
// • Link building from industry-relevant sources
// • Conversion rate optimization for landing pages
// • Monthly reporting and strategy adjustments

// I've helped SaaS companies increase organic traffic by 400% and reduce customer acquisition costs by 60%.

// Would you be interested in a free SEO audit of your current site?

// Best,
// Emma`,
//     clientName: "Mark Thompson",
//     createdAt: new Date("2023-12-28"),
//     lastModified: new Date("2023-12-28"),
//     priority: "high",
//   },
//   {
//     id: "sample-20",
//     type: "freelance",
//     title: "Graphic Design for Gaming Community",
//     content: `Hey @gamingguild! 🎮

// Your gaming community is awesome! I'm a graphic designer specializing in gaming assets and community branding.

// I can create:
// • Custom Discord server artwork
// • Twitch overlays and alerts
// • Tournament banners and graphics
// • Merchandise designs
// • Social media content templates

// I've designed for 100+ gaming communities and esports teams!

// Let's level up your visual game! DM me your ideas! 🚀 #GameDesign`,
//     clientName: "@gamingguild",
//     createdAt: new Date("2023-12-27"),
//     lastModified: new Date("2023-12-27"),
//     priority: "low",
//   },
// ];

const AllProposals: React.FC = () => {
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(
    null
  );
  const [editedContent, setEditedContent] = useState("");
  const [editedTitle, setEditedTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "freelance" | "email">(
    "all"
  );
  const [isFetching, setIsFetching] = useState(true);

  const filterPriority = "all";
  const [sortBy, setSortBy] = useState<
    "newest" | "oldest" | "title" | "priority"
  >("newest");
  const [showDetailPanel, setShowDetailPanel] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Load proposals from localStorage on component mount
  // useEffect(() => {
  //   const savedProposals = localStorage.getItem("saved-proposals");
  //   if (savedProposals) {
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     const parsedProposals = JSON.parse(savedProposals).map((p: any) => ({
  //       ...p,
  //       createdAt: new Date(p.createdAt),
  //       lastModified: new Date(p.lastModified),
  //       status: p.status || "draft",
  //       tags: p.tags || [],
  //       priority: p.priority || "medium",
  //     }));
  //     setProposals(parsedProposals);
  //   } else {
  //     // If no saved proposals, load sample data
  //     setProposals(sampleProposals);
  //     localStorage.setItem("saved-proposals", JSON.stringify(sampleProposals));
  //   }
  // }, []);

  useEffect(() => {
    const fetchPost = async () => {
      setIsFetching(true);
      try {
        const response = await fetch(
          "/api/proposal/all-proposals/c1f442f5-24a3-441a-ba17-50bebefb4542",
          {
            credentials: "include",
          }
        );

        const res = await response.json();

        console.log({ res });
        setProposals(res.proposals);
      } catch (error) {
        console.log("ERROR WHILE FETCHING PROPOSALS", error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchPost();
  }, []);

  // Filter and sort proposals
  const filteredAndSortedProposals = useMemo(() => {
    const filtered = proposals.filter((proposal) => {
      const matchesSearch =
        proposal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proposal.proposal.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType = filterType === "all" || proposal.type === filterType;

      return matchesSearch && matchesType;
    });

    // Sort proposals

    return filtered;
  }, [proposals, searchQuery, filterType, filterPriority, sortBy]);

  const getTypeIcon = (type: string) => {
    const icons = {
      upwork: Briefcase,
      email: Mail,
      linkedin: User,
      twitter: Twitter,
    };
    return icons[type as keyof typeof icons] || FileText;
  };

  const getTypeColor = (type: string) => {
    const colors = {
      freelance: "bg-emerald-100 text-emerald-700 border-emerald-300",
      email: "bg-blue-100 text-blue-700 border-blue-300",
      linkedin: "bg-indigo-100 text-indigo-700 border-indigo-300",
      twitter: "bg-cyan-100 text-cyan-700 border-cyan-300",
    };
    return (
      colors[type as keyof typeof colors] ||
      "bg-gray-100 text-gray-700 border-gray-300"
    );
  };


  const handleSave = () => {
    if (!selectedProposal) return;

    const updatedProposal = {
      ...selectedProposal,
      title: editedTitle,
      content: editedContent,
      lastModified: new Date(),
    };

    const updatedProposals = proposals.map((p) =>
      p.id === selectedProposal.id ? updatedProposal : p
    );

    setProposals(updatedProposals);
    localStorage.setItem("saved-proposals", JSON.stringify(updatedProposals));
    setSelectedProposal(updatedProposal);
    setIsEditing(false);
  };

  const handleDelete = (proposalId: string) => {
    const updatedProposals = proposals.filter((p) => p.id !== proposalId);
    setProposals(updatedProposals);
    localStorage.setItem("saved-proposals", JSON.stringify(updatedProposals));

    if (selectedProposal?.id === proposalId) {
      setSelectedProposal(null);
      setIsEditing(false);
      setShowDetailPanel(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    if (selectedProposal) {
      setEditedContent(selectedProposal.proposal);
      setEditedTitle(selectedProposal.title);
    }
  };

  const copyToClipboard = async (content: string) => {
    try {
      await navigator.clipboard.writeText(content);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleProposalSelect = (proposal: Proposal) => {
    setSelectedProposal(proposal);
    setEditedContent(proposal.proposal);
    setEditedTitle(proposal.title);
    setIsEditing(false);
    setShowDetailPanel(true);
  };

  const closeModal = () => {
    setShowDetailPanel(false);
    setSelectedProposal(null);
    setIsEditing(false);
  };

  return (
    <div className="w-full bg-secondary/50 p-6">
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
        <div className="flex-shrink-0 border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Proposals
              </h1>
              <p className="text-gray-600">Manage your generated proposals</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xl md:text-2xl font-bold text-blue-600">
                  {proposals.length}
                </div>
                <div className="text-xs text-gray-500">Total</div>
              </div>
            </div>
          </div>
        </div>

        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm my-10">
          <CardContent>
            {/* Filters */}
            <div className="flex-shrink-0 border-gray-200 ">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search proposals..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-10 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <Select
                    value={filterType}
                    onValueChange={(value: "all" | "freelance" | "email") =>
                      setFilterType(value)
                    }
                  >
                    <SelectTrigger className="w-32 h-10">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select
                    value={sortBy}
                    onValueChange={(
                      value: "title" | "newest" | "oldest" | "priority"
                    ) => setSortBy(value)}
                  >
                    <SelectTrigger className="w-32 h-10">
                      <SelectValue placeholder="Sort" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="oldest">Oldest</SelectItem>
                      <SelectItem value="title">Title</SelectItem>
                      <SelectItem value="priority">Priority</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent>
            <div className="flex-1 flex min-h-0">
              {/* Proposals List */}
              <div className="w-full">
                <div className="h-full flex flex-col bg-white">
                  {/* Proposals Content */}
                  <ScrollArea className="size-full mt-5 bg-white">
                    <div className="h-max">
                      {isFetching ? (
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                          <Table>
                            <TableHeader>
                              <TableRow className="bg-gray-50">
                                <TableHead className="font-semibold text-gray-900">
                                  Title
                                </TableHead>
                                <TableHead className="font-semibold text-gray-900">
                                  Type
                                </TableHead>
                                <TableHead className="font-semibold text-gray-900 hidden md:table-cell">
                                  Success Rate
                                </TableHead>
                                <TableHead className="font-semibold text-gray-900 w-16">
                                  Actions
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {Array.from({ length: 4 }).map((_, r) => (
                                <TableRow
                                  key={r}
                                  className={ "h-14"}
                                >
                                  {Array.from({ length: 3 }).map((__, c) => (
                                    <TableCell key={c} className="align-middle">
                                      <div className="flex items-center gap-2">
                                        <Skeleton
                                          className={
                                            "h-4 w-28"
                                          }
                                        />
                                        {c === 0 && (
                                          <Skeleton
                                            className={
                                              "h-4 w-16"
                                            }
                                          />
                                        )}
                                      </div>
                                    </TableCell>
                                  ))}
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                      ) : filteredAndSortedProposals.length === 0 ? (
                        <div className="text-center py-12">
                          <FileTextIcon className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                          <h3 className="text-lg font-medium text-gray-900 mb-2">
                            No proposals found
                          </h3>
                          <p className="text-gray-500">
                            {searchQuery ||
                            filterType !== "all" ||
                            filterPriority !== "all"
                              ? "Try adjusting your search or filters"
                              : "Generate some proposals to see them here"}
                          </p>
                        </div>
                      ) : (
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                          <Table>
                            <TableHeader>
                              <TableRow className="bg-gray-50">
                                <TableHead className="font-semibold text-gray-900">
                                  Title
                                </TableHead>
                                <TableHead className="font-semibold text-gray-900">
                                  Type
                                </TableHead>
                                <TableHead className="font-semibold text-gray-900 hidden md:table-cell">
                                  Success Rate
                                </TableHead>
                                <TableHead className="font-semibold text-gray-900 w-16">
                                  Actions
                                </TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {filteredAndSortedProposals.map((proposal) => {
                                const TypeIcon = getTypeIcon(proposal.type);

                                return (
                                  <TableRow
                                    key={proposal.id}
                                    className={cn(
                                      "h-12 cursor-pointer hover:bg-gray-50 transition-colors",
                                      selectedProposal?.id === proposal.id
                                        ? "bg-blue-50"
                                        : ""
                                    )}
                                    onClick={() =>
                                      handleProposalSelect(proposal)
                                    }
                                  >
                                    <TableCell>
                                      <div className="space-y-1">
                                        <div className="font-medium text-gray-900 line-clamp-1">
                                          {proposal.title}
                                        </div>
                                      </div>
                                    </TableCell>
                                    <TableCell>
                                      <Badge
                                        variant="outline"
                                        className={`${getTypeColor(
                                          proposal.type
                                        )} text-xs`}
                                      >
                                        <TypeIcon className="w-3 h-3 mr-1" />
                                        <span className="hidden sm:inline">
                                          {proposal.type}
                                        </span>
                                      </Badge>
                                    </TableCell>
                                    <TableCell className="text-gray-600 hidden md:table-cell">
                                      {proposal.successRate}
                                    </TableCell>

                                    <TableCell>
                                      <button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleDelete(proposal.id);
                                        }}
                                        className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded hover:bg-red-50"
                                      >
                                        <Trash2 className="w-4 h-4" />
                                      </button>
                                    </TableCell>
                                  </TableRow>
                                );
                              })}
                            </TableBody>
                          </Table>
                        </div>
                      )}
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mobile Dialog / Desktop Panel */}
        {isMobile ? (
          <Dialog open={showDetailPanel} onOpenChange={closeModal}>
            <DialogContent
              onOpenAutoFocus={(e) => e.preventDefault()}
              className="w-[95vw] max-w-none h-[90vh] max-h-none p-0 gap-0"
              showCloseButton={false}
              aria-describedby={undefined}
            >
              <DialogHeader className="px-4 py-3 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-lg font-semibold">
                    {isEditing ? "Edit Proposal" : "View Proposal"}
                  </DialogTitle>
                  <div className="flex items-center gap-2">
                    {selectedProposal && (
                      <>
                        {isEditing ? (
                          <>
                            <Button
                              onClick={handleSave}
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <Save className="w-4 h-4 sm:mr-2" />
                              Save
                            </Button>
                            <Button
                              onClick={handleCancel}
                              variant="outline"
                              size="sm"
                            >
                              <X className="w-4 h-4 sm:mr-2" />
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              onClick={() => setIsEditing(true)}
                              size="sm"
                            >
                              <Edit className="w-4 h-4 sm:mr-2" />
                              Edit
                            </Button>
                            <Button
                              onClick={() =>
                                copyToClipboard(selectedProposal.proposal)
                              }
                              variant="outline"
                              size="sm"
                            >
                              <Copy className="w-4 h-4 sm:mr-2" />
                              Copy
                            </Button>
                          </>
                        )}
                      </>
                    )}
                    <DialogClose asChild>
                      <Button variant={"outline"} size={"icon"}>
                        <XIcon />
                      </Button>
                    </DialogClose>
                  </div>
                </div>
              </DialogHeader>

              <ScrollArea className="h-[calc(90vh-64px)] px-4 py-4">
                {selectedProposal && (
                  <div className="space-y-4">
                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <Badge
                        className={`${getTypeColor(
                          selectedProposal.type
                        )} border text-xs`}
                      >
                        {React.createElement(
                          getTypeIcon(selectedProposal.type),
                          { className: "w-3 h-3 mr-1" }
                        )}
                        {selectedProposal.type.toUpperCase()}
                      </Badge>
                      {/* <Badge
                        className={`${getPriorityColor(
                          selectedProposal.priority
                        )} border text-xs`}
                      >
                        {selectedProposal.priority.toUpperCase()}
                      </Badge> */}
                      <div className="ml-auto text-xs text-gray-500">
                        {new Date(selectedProposal.updatedAt).toISOString()}
                      </div>
                    </div>

                    {/* Client Info */}
                    <div>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <User className="w-4 h-4" />
                        <span className="font-medium">
                          {selectedProposal.successRate}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">
                        Title
                      </Label>
                      {isEditing ? (
                        <Input
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          className="font-medium"
                          placeholder="Enter proposal title"
                        />
                      ) : (
                        <div className="text-base font-semibold text-gray-900 p-3 border border-gray-200 rounded-lg bg-gray-50">
                          {selectedProposal.title}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <Label className="text-sm font-medium text-gray-700 mb-2 block">
                        Content
                      </Label>
                      {isEditing ? (
                        <Textarea
                          value={editedContent}
                          onChange={(e) => setEditedContent(e.target.value)}
                          className="min-h-[300px] text-sm font-mono resize-none"
                          placeholder="Enter proposal content"
                        />
                      ) : (
                        <div className="border border-gray-200 rounded-lg bg-gray-50 p-4 min-h-[300px]">
                          <pre className="whitespace-pre-wrap text-sm text-gray-900 font-sans leading-relaxed">
                            {selectedProposal.proposal}
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </ScrollArea>
            </DialogContent>
          </Dialog>
        ) : (
          // Desktop Panel (only show when not mobile and panel is open)
          <Sheet
            open={showDetailPanel && !isMobile}
            onOpenChange={setShowDetailPanel}
          >
            <SheetContent className="min-w-[50vw]">
              <VisuallyHidden>
                <SheetHeader>
                  <SheetTitle></SheetTitle>
                  <SheetDescription></SheetDescription>
                </SheetHeader>
              </VisuallyHidden>
              <div className=" w-full h-screen bg-white shadow-xl z-50 flex flex-col">
                {/* Detail Header */}
                <div className="flex-shrink-0 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {selectedProposal ? (
                        <>
                          {isEditing ? (
                            <Edit className="w-5 h-5 text-blue-600" />
                          ) : (
                            <FileTextIcon className="w-5 h-5 text-gray-600" />
                          )}
                          <h2 className="text-lg font-semibold text-gray-900">
                            {isEditing ? "Edit Proposal" : "View Proposal"}
                          </h2>
                        </>
                      ) : (
                        <>
                          <FileTextIcon className="w-5 h-5 text-gray-400" />
                          <h2 className="text-lg font-semibold text-gray-500">
                            Select a proposal
                          </h2>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {selectedProposal && (
                        <>
                          {isEditing ? (
                            <>
                              <Button
                                onClick={handleSave}
                                size="sm"
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <Save className="w-4 h-4 mr-2" />
                                Save
                              </Button>
                              <Button
                                onClick={handleCancel}
                                variant="outline"
                                size="sm"
                              >
                                <X className="w-4 h-4 mr-2" />
                                Cancel
                              </Button>
                            </>
                          ) : (
                            <>
                              <Button
                                onClick={() => setIsEditing(true)}
                                size="sm"
                              >
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </Button>
                              <Button
                                onClick={() =>
                                  copyToClipboard(selectedProposal.proposal)
                                }
                                variant="outline"
                                size="sm"
                              >
                                <Copy className="w-4 h-4 mr-2" />
                                Copy
                              </Button>
                            </>
                          )}
                        </>
                      )}
                      <Button onClick={closeModal} variant="ghost" size="sm">
                        <XIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Detail Content */}
                <ScrollArea className="h-[calc(100%-64px)]">
                  <div className="p-6">
                    {selectedProposal ? (
                      <div className="space-y-6">
                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-2 p-3 bg-gray-50 rounded-lg">
                          <Badge
                            className={`${getTypeColor(
                              selectedProposal.type
                            )} border text-xs`}
                          >
                            {React.createElement(
                              getTypeIcon(selectedProposal.type),
                              { className: "w-3 h-3 mr-1" }
                            )}
                            {selectedProposal.type.toUpperCase()}
                          </Badge>
                          {/* <Badge
                            className={`${getPriorityColor(
                              selectedProposal.priority
                            )} border text-xs`}
                          >
                            {selectedProposal.priority.toUpperCase()}
                          </Badge> */}
                          <div className="ml-auto text-xs text-gray-500">
                            {new Date(selectedProposal.updatedAt).toISOString()}
                          </div>
                        </div>

                        {/* Client Info */}
                        <div>
                          <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                            <User className="w-4 h-4" />
                            <span className="font-medium">
                              {selectedProposal.successRate}
                            </span>
                          </div>
                        </div>

                        {/* Title */}
                        <div>
                          <Label className="text-sm font-medium text-gray-700 mb-2 block">
                            Title
                          </Label>
                          {isEditing ? (
                            <Input
                              value={editedTitle}
                              onChange={(e) => setEditedTitle(e.target.value)}
                              className="font-medium"
                              placeholder="Enter proposal title"
                            />
                          ) : (
                            <div className="text-base font-semibold text-gray-900 p-3 border border-gray-200 rounded-lg bg-gray-50">
                              {selectedProposal.title}
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col">
                          <Label className="text-sm font-medium text-gray-700 mb-2 block">
                            Content
                          </Label>
                          {isEditing ? (
                            <Textarea
                              value={editedContent}
                              onChange={(e) => setEditedContent(e.target.value)}
                              className="min-h-[300px] text-sm font-mono resize-none"
                              placeholder="Enter proposal content"
                            />
                          ) : (
                            <div className="border border-gray-200 rounded-lg bg-gray-50 p-4 min-h-[300px]">
                              <pre className="whitespace-pre-wrap text-sm text-gray-900 font-sans leading-relaxed">
                                {selectedProposal.proposal}
                              </pre>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="h-full flex items-center justify-center">
                        <div className="text-center">
                          <FileTextIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Select a proposal
                          </h3>
                          <p className="text-gray-500">
                            Choose a proposal from the list to view or edit
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </div>
  );
};

export default AllProposals;
