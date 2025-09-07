"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { madeFor } from "@/constants/constants";
import { CheckIcon, Mail, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiCodemagic } from "react-icons/si";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import CreativeHero from "@/components/shared/CreativeHero";
import CreativeFeatures from "@/components/shared/CreativeFeatures";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "API Documentation", href: "/api-docs" },
    { name: "Integration Guide", href: "/integrations" },
    { name: "Status Page", href: "/status" },
  ];
  return (
    <div className="w-full">
      {/* <Navbar /> */}

      {/* <HeroSection /> */}
      <CreativeHero />
      <CreativeFeatures />
      {/* FEATURES  */}
      {/* <div className="max-w-wrapper bg-secondary/50 mt-0">
        <div className="w-full py-24">
        
          <h2 className="w-full md:max-w-[700px] mx-auto text-4xl font-bold text-center">
            Unlock the Power of AI to{" "}
            <span className="text-gradient-primary">Win More Clients</span>
          </h2>
          <p className="w-full md:max-w-[700px] mx-auto text-center text-xl mt-5">
            Create high-converting freelance proposals in minutes with AI —
            faster, smarter, and more effective.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-7">
            {features.map((fea, i) => {
              return (
                <div
                  className="w-full h-full p-6 rounded-md bg-background shadow hover:shadow-md transition-all"
                  key={i}
                >
                  <div className="w-max h-max p-3 rounded-md bg-primary/10">
                    <fea.Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-semibold text-xl mt-4">{fea.title}</h3>
                    <p className="mt-4">{fea.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}

      {/* MADE FOR  */}
      <section className="relative py-32 overflow-hidden bg-secondary/50">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/10 to-background pointer-events-none z-0" />

        {/* Floating Circles */}
        <div className="absolute top-10 left-1/3 w-72 h-72 bg-primary/10 rounded-full animate-float opacity-10" />
        <div
          className="absolute bottom-10 right-1/4 w-56 h-56 bg-secondary/20 rounded-full animate-float opacity-10"
          style={{ animationDelay: "3s" }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              🎯 Designed for You
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-purple-600 to-pink-500 bg-clip-text text-transparent leading-tight">
              Made for Freelancers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
              Whether you&apos;re a designer, developer, writer or marketer—our
              tools work for your flow.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {madeFor.map((item, index) => (
              <div
                key={index}
                className="group relative transition-all duration-500 transform hover:scale-[1.03] hover:shadow-hero"
               
              >
                {/* Card */}
                <div className="p-6 bg-card rounded-2xl shadow-lg transition-all duration-500 relative overflow-hidden">
                  {/* Glow Background */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                      <item.Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Closing CTA */}
          <p className="text-center text-xl font-semibold mt-24 text-muted-foreground">
            ...our platform helps you close more deals, faster.
          </p>
        </div>
      </section>

      {/* TRY IT NOW  */}
      <section className="relative py-32 bg-background overflow-hidden">
        {/* Floating Blobs */}
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full animate-float opacity-10 z-0" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-secondary/10 rounded-full animate-float opacity-10 z-0" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Try It Now
            </h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Enter your project details below and see our AI in action
            </p>
          </div>

          {/* Form Card */}
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl border border-border bg-card backdrop-blur-md">
            {/* Header Strip */}
            <div className="bg-gradient-to-r from-primary to-indigo-500 py-5 flex items-center justify-center gap-2">
              <div className="p-2 bg-white/10 rounded-full">
                <SiCodemagic className="w-5 h-5 text-white animate-pulse" />
              </div>
              <p className="text-lg md:text-xl font-semibold text-white">
                Generate Your Custom Proposal
              </p>
            </div>

            {/* Form Content */}
            <div className="px-6 py-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Client Name</Label>
                  <Input placeholder="e.g. Acne Corporation" />
                </div>
                <div className="space-y-2">
                  <Label>Project Type</Label>
                  <Input placeholder="e.g. Website Redesign" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Project Scope & Requirements</Label>
                <Textarea placeholder="Describe the project, goals, and technical needs..." />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>
                    Budget Range{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input placeholder="e.g. $5,000 - $10,000" />
                </div>
                <div className="space-y-2">
                  <Label>
                    Project Timeline{" "}
                    <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input placeholder="e.g. 4 weeks" />
                </div>
              </div>

              <Button
                size="lg"
                className="w-full h-14 text-base font-semibold"
                onClick={() => setLoading(true)}
                disabled={loading}
              >
                {loading ? "Generating..." : "Generate My Proposal"}
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-2">
                Takes just 30 seconds to create a professional proposal.
              </p>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="mt-16 max-w-3xl mx-auto bg-secondary/40 border border-border p-6 rounded-2xl backdrop-blur-md shadow-md transition-all hover:shadow-lg">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🤖</div>
              <div>
                <h3 className="font-semibold text-lg">What happens next?</h3>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  After submitting your details, our AI instantly builds a
                  custom proposal tailored to your client&apos;s project. You
                  can review it, make edits, and send it directly — all within
                  minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS  */}
      {/* <div className="w-full">
        <div className="max-w-wrapper py-24 bg-secondary/50">
          <div className="w-full">
            <p className="w-max text-center mx-auto px-5 py-2 rounded-full bg-primary/20 text-voilet-700 text-sm">
              Simple Process
            </p>
            <h2 className="text-4xl text-center font-bold mt-5">
              How <span className="text-gradient-primary">Freeposal</span>{" "}
              Works
            </h2>
            <p className="text-xl text-center mt-5">
              Three simple steps to winning more clients
            </p>
          </div>

          <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full p-[2px] rounded-md bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 hover:-translate-y-2 duration-300 transition-all hover:shadow-lg">
              <div className="bg-background rounded-md p-6">
                <div className="w-full">
                  <div className="w-max h-max p-2 rounded-full bg-primary/10">
                    <FileIcon className="w-7 h-7 shrink-0 text-violet-700" />
                  </div>
                </div>

                <div className="w-full">
                  <h3 className="text-2xl font-bold mt-3 text-gradient-primary">
                    Step 1
                  </h3>
                  <h3 className="text-3xl font-bold mt-3">
                    Describe Your Project
                  </h3>
                  <p className="mt-3 text-wrap">
                    Tell us about your client and project requirements in our
                    simple form.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-[2px] rounded-md bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300 hover:-translate-y-2 duration-300 transition-all hover:shadow-lg">
              <div className="bg-background rounded-md p-6">
                <div className="w-full">
                  <div className="w-max h-max p-2 rounded-full bg-primary/10">
                    <FileIcon className="w-7 h-7 shrink-0 text-violet-700" />
                  </div>
                </div>

                <div className="w-full">
                  <h3 className="text-2xl font-bold mt-3 text-gradient-primary">
                    Step 2
                  </h3>
                  <h3 className="text-3xl font-bold mt-3">
                    AI Creates Content
                  </h3>
                  <p className="mt-3 text-wrap">
                    Our AI generates persuasive, tailored content based on your
                    inputs.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-[2px] rounded-md bg-gradient-to-r from-green-300 via-green-200 to-green-300 hover:-translate-y-2 duration-300 transition-all hover:shadow-lg">
              <div className="bg-background rounded-md p-6">
                <div className="w-full">
                  <div className="w-max h-max p-2 rounded-full bg-primary/10">
                    <FileIcon className="w-7 h-7 shrink-0 text-violet-700" />
                  </div>
                </div>

                <div className="w-full">
                  <h3 className="text-2xl font-bold mt-3 text-gradient-primary">
                    Step 3
                  </h3>
                  <h3 className="text-3xl font-bold mt-3">
                    Send & Win Clients
                  </h3>
                  <p className="mt-3 text-wrap">
                    Review, customize if needed, and send your polished proposal
                    to win more business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mt-20 grid grid-cols-1 sm:grid-cols-3 max-sm:gap-16">
            <div className="w-full flex flex-col items-center justify-center gap-3">
              <h1 className="text-5xl text-center font-bold text-gradient-primary">
                97%
              </h1>
              <p className="text-center">Client Satisfaction</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-3">
              <h1 className="text-5xl text-center font-bold text-gradient-primary">
                2.5x
              </h1>
              <p className="text-center">Higher Close Rate</p>
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-3">
              <h1 className="text-5xl text-center font-bold text-gradient-primary">
                4hrs
              </h1>
              <p className="text-center">Time Saved Per Proposal</p>
            </div>
          </div>

          
        </div>
      </div> */}

      {/* FREELANCERS LOVE US  */}
      <div className="w-full bg-background relative py-24 overflow-hidden">
        {/* Floating Effects */}
        <div className="absolute top-16 left-1/3 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-10 animate-float z-0" />
        <div className="absolute bottom-10 right-1/4 w-60 h-60 bg-purple-400/10 rounded-full blur-3xl opacity-10 animate-float-reverse z-0" />

        <div className="max-w-wrapper relative z-10">
          {/* Heading */}
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-4xl font-bold">
              Loved by{" "}
              <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                Freelancers
              </span>
            </h1>
            <p className="mt-5 text-xl text-muted-foreground">
              See what our customers are saying about how our platform has
              transformed their business
            </p>
          </div>

          {/* Testimonials */}
          <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="w-full rounded-2xl bg-card border border-border p-6 transition-shadow hover:shadow-hero">
              <div className="flex gap-1">
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="mt-5 italic text-muted-foreground">
                &quot;I used to spend 3–4 hours writing proposals. Now, I can
                create a professional proposal in 20 minutes that has doubled my
                closing rate!&quot;
              </p>
              <div className="flex items-center gap-4 mt-6">
                <Image
                  src="/user-1.jpg"
                  width={60}
                  height={60}
                  unoptimized
                  className="rounded-full aspect-square object-cover"
                  alt="Sarah Johnson"
                />
                <div>
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-sm text-muted-foreground">UX Designer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="w-full rounded-2xl bg-card border border-border p-6 transition-shadow hover:shadow-hero">
              <div className="flex gap-1">
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="mt-5 italic text-muted-foreground">
                &quot;The AI perfectly captures my voice and tone. My clients
                can&apos;t tell the difference between the AI-generated content and
                what I would write myself.&quot;
              </p>
              <div className="flex items-center gap-4 mt-6">
                <Image
                  src="/user-2.jpg"
                  width={60}
                  height={60}
                  unoptimized
                  className="rounded-full aspect-square object-cover"
                  alt="Mark Wilson"
                />
                <div>
                  <p className="font-bold">Mark Wilson</p>
                  <p className="text-sm text-muted-foreground">Web Developer</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="w-full rounded-2xl bg-card border border-border p-6 transition-shadow hover:shadow-hero">
              <div className="flex gap-1">
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                <StarIcon className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="mt-5 italic text-muted-foreground">
                &quot;The templates are amazing and customizable. I&apos;ve closed 4
                new clients in the first month of using this platform. Worth
                every penny!&quot;
              </p>
              <div className="flex items-center gap-4 mt-6">
                <Image
                  src="/user-3.jpg"
                  width={60}
                  height={60}
                  unoptimized
                  className="rounded-full aspect-square object-cover"
                  alt="Jessica Chen"
                />
                <div>
                  <p className="font-bold">Jessica Chen</p>
                  <p className="text-sm text-muted-foreground">
                    Marketing Consultant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING  */}
      <div id="pricing" className="w-full bg-secondary/50">
        <div className="max-w-wrapper py-24">
          <h1 className="text-4xl font-bold text-center">
            Simple, <span className="text-gradient-primary">Transparent</span>{" "}
            Pricing
          </h1>
          <p className="mt-5 text-center text-xl">
            Choose the plan that&apos;s right for your business
          </p>

          <div className="w-full mt-16">
            <div className="w-full flex max-md:flex-col items-center justify-center gap-6">
              <div className="w-[320px] h-[500px] p-5 border border-border rounded-xl bg-background hover:shadow-md">
                <h3 className="text-xl font-bold mt-3">Basic</h3>
                <h2 className="text-3xl font-bold mt-3">
                  $4.99 <span className="text-base text-gray-400">/month</span>
                </h2>
                <p className="mt-3">Perfect for trying out the platform</p>
                <Button
                  className="mt-3 text-primary w-full hover:border-primary hover:text-primary"
                  variant={"outline"}
                >
                  Start Free
                </Button>

                <p className="mt-5">
                  <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                  30 proposals/emails per month
                </p>
                <p className="mt-3">
                  <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                  Basic templates
                </p>
                <p className="mt-3">
                  <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                  Text-only documents
                </p>
                <p className="mt-3">
                  <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                  Export as PDF
                </p>
                <p className="mt-3">
                  <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                  Email support
                </p>
              </div>
              <div className="w-[320px] h-[550px] overflow-hidden border rounded-xl border-purple-700 bg-background shadow-md">
                <div className="w-full text-center bg-primary py-2">
                  <p className="font-bold text-center text-white">
                    Most Popular
                  </p>
                </div>
                <div className="w-full p-5">
                  <h3 className="text-xl font-bold mt-3">Pro</h3>
                  <h2 className="text-3xl font-bold mt-3">
                    $9.99{" "}
                    <span className="text-base text-gray-400">/month</span>
                  </h2>
                  <p className="mt-3">
                    Everything you need to grow your business
                  </p>
                  <Button
                    className="mt-3 w-full"
                    variant={"default"}
                    size={"lg"}
                  >
                    Start 7-Day Free Trial
                  </Button>

                  <p className="mt-5">
                    <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                    100 proposals/emails
                  </p>
                  <p className="mt-3">
                    <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                    All premium templates
                  </p>
                  <p className="mt-3">
                    <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                    Custom branding
                  </p>
                  <p className="mt-3">
                    <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                    Multiple export formats
                  </p>
                  <p className="mt-3">
                    <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                    Client tracking
                  </p>
                  <p className="mt-3">
                    <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                    Priority support
                  </p>
                </div>
              </div>

              <div className="w-[320px] h-[500px] p-5 border border-border rounded-xl bg-background hover:shadow-md">
                <h3 className="text-xl font-bold mt-3">Premium</h3>
                <h2 className="text-3xl font-bold mt-3">
                  $11.99 <span className="text-base text-gray-400">/month</span>
                </h2>
                <p className="mt-3">For teams and growing businesses</p>
                <Button
                  className="mt-3 text-primary w-full hover:border-primary hover:text-primary"
                  variant={"outline"}
                >
                  Contact Sales
                </Button>

                <p className="mt-5">
                  <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                  Unlimited proposals/emails
                </p>
                <p className="mt-3">
                  <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                  5 team members
                </p>
                <p className="mt-3">
                  <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                  Team collaboration
                </p>
                <p className="mt-3">
                  <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                  Advanced analytics
                </p>
                <p className="mt-3">
                  <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                  Custom templates
                </p>
                <p className="mt-3">
                  <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                  Client CRM integration
                </p>
                <p className="mt-3">
                  <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                  Dedicated account manager
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center mt-14">
            <p className="text-center">
              All plans come with a 7-day free trial. No credit card required to
              start. Cancel anytime. Need a custom plan?
            </p>
            <Link href={"#"} className="font-medium text-center text-primary">
              Contact us.
            </Link>
          </div>
        </div>
      </div>

      {/* FAQ'S  */}
      <div className="w-full bg-background">
        <div className="max-w-wrapper py-24">
          <h1 className="text-4xl text-center font-bold">
            Frequently Asked{" "}
            <span className="text-gradient-primary">Questions</span>{" "}
          </h1>
          <p className="text-center text-xl mt-5">
            Everything you need to know about our platform
          </p>

          <div className="w-full mt-14">
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg">
                    How does this tool personalize proposals based on the job
                    post I paste?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    The tool uses AI to analyze the job post’s language,
                    requirements, and tone to generate a tailored proposal that
                    aligns with what the client is looking for.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg">
                    Can I customize the generated proposal before submitting it?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Yes, once the proposal is generated, you can edit it
                    directly in the tool to add your own voice, tweak specific
                    sections, or include attachments/links.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg">
                    Will the proposal reflect my skills and experience
                    accurately?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Absolutely — you can input your skills, portfolio links, and
                    background, and the tool incorporates that context into
                    every proposal.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg">
                    Does it work with job posts from platforms other than
                    Upwork?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    While it’s optimized for Upwork, the tool works with job
                    posts from most freelance platforms like Fiverr, Freelancer,
                    and PeoplePerHour, as long as you paste the full job
                    description.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg">
                    How does this tool help me stand out from other freelancers?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    It crafts proposals that sound human, are tailored to each
                    client, and highlight relevant skills — no generic
                    templates, giving you a better chance of grabbing attention.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg">
                    Is there a limit to how many proposals I can generate?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Free users get a limited number of proposals per month. Paid
                    users enjoy unlimited access, advanced customization
                    options, and priority support.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center mt-14">
            <p className="text-center text-lg text-gray-400">
              Still have questions?
            </p>
            <Link
              href={"#"}
              className="text-center font-medium text-lg text-primary underline underline-offset-2 mt-6"
            >
              Contact our support team
            </Link>
          </div>
        </div>
      </div>

      {/* CTA - SECTION  */}
      <div className="w-full bg-gradient-primary-3">
        <div className="max-w-3xl mx-auto px-6 py-24 flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl font-bold text-center text-white">
            Ready to Win More Clients?
          </h1>
          <p className="text-lg text-center text-white">
            Start creating professional proposals and emails today — no credit
            card required.
          </p>

          <Button className="bg-white text-primary hover:bg-gray-200 hover:text-primary">
            Start Your Free Trial
          </Button>
        </div>
      </div>
      {/* rgb(17 24 39) */}

      {/* FOOTER  */}
      <div className="w-full bg-[#111827]">
        <div className="max-w-wrapper pt-16 pb-8">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="w-full">
              <h3 className="font-bold text-3xl text-white">Freeposal</h3>

              <p className="mt-5 md:max-w-[260px] text-gray-300">
                AI-powered proposal and email generation for freelancers and
                small businesses.
              </p>

              <div className="w-full flex items-center justify-start gap-4 mt-5">
                <BsTwitterX className="text-gray-300 shrink-0" />
                <CiLinkedin className="w-6 h-6 text-gray-300 shrink-0" />
                <Mail className="text-gray-300 shrink-0" />
              </div>
            </div>
            <div className="w-full max-md:mt-14">
              <h3 className="font-bold text-xl text-white">Quick Links</h3>

              <div className="w-full mt-6">
                <Link
                  href={"#"}
                  className=" text-gray-300 hover:text-white transition-all"
                >
                  Features
                </Link>
              </div>
              <div className="w-full mt-3">
                <Link
                  href={"#"}
                  className=" text-gray-300 hover:text-white transition-all"
                >
                  How It Works
                </Link>
              </div>
              <div className="w-full mt-3">
                <Link
                  href={"#"}
                  className=" text-gray-300 hover:text-white transition-all"
                >
                  Pricing
                </Link>
              </div>
              <div className="w-full mt-3">
                <Link
                  href={"#"}
                  className=" text-gray-300 hover:text-white transition-all"
                >
                  FAQ&apos;s
                </Link>
              </div>
            </div>
            <div className="w-full max-md:mt-10 space-y-4">
              <h3 className="font-semibold text-xl text-white">Support</h3>
              <ul className="space-y-2">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="w-full max-md:mt-10 space-y-4">
              <h3 className="font-semibold text-xl text-white">Legal</h3>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-accent transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full mt-24 flex max-md:flex-col items-center justify-between gap-3">
            <p className="text-gray-300">
              © 2025 Freeposal. All rights reserved.
            </p>

            <div className=" flex items-center justify-center gap-5">
              <Link href={"#"} className="text-gray-300">
                Privacy
              </Link>
              <Link href={"#"} className="text-gray-300">
                Terms
              </Link>
              <Link href={"#"} className="text-gray-300">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
