import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { features, madeFor } from "@/constants/constants";
import { CheckIcon, FileIcon, Mail, StarIcon } from "lucide-react";
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
import HeroSection from "@/components/shared/HeroSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* <Navbar /> */}
    
      {/* <div className="max-w-wrapper z-[10]">
        <div className="w-full flex items-center justify-center">
          <div className="w-full md:max-w-4xl mt-[10vh] md:mt-[20vh]">
            <h1 className="text-4xl md:text-6xl font-bold text-wrap text-center z-10">
              <span className="text-gradient-primary">Win More Clients</span>{" "}
              With Ready-to-Send Proposals & Emails — Powered by AI
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-center mt-6">
              Create stunning proposals and professional emails in minutes. Just
              enter client details — we&apos;ll do the rest.
            </p>
            <div className="w-full flex max-md:flex-col items-center justify-center gap-5 mt-6">
              <Button className="text-lg" size={"lg"}>
                Start Free — No Credit Card Required
              </Button>
              <Link href={"#"} className="text-lg text-primary font-medium">
                See Example
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <HeroSection />

      {/* FEATURES  */}
      <div className="max-w-wrapper bg-secondary/50 mt-20">
        <div className="w-full py-24">
          <h2 className="w-full md:max-w-[700px] mx-auto text-4xl font-bold text-center">
            Powerful Features to{" "}
            <span className="text-gradient-primary">Win More Clients</span>
          </h2>
          <p className="w-full md:max-w-[700px] mx-auto text-center text-xl mt-5">
            Our AI-powered platform helps you create professional proposals and
            emails that convert prospects into clients.
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
      </div>

      {/* MADE FOR  */}
      <div className="w-full bg-background">
        <div className="max-w-wrapper py-24">
          <h1 className="font-bold text-4xl text-center">
            Made for Freelancers & Small Business Owners
          </h1>
          <p className="text-center text-xl mt-5">Whether you&apos;re a...</p>

          <div className="max-w-5xl mx-auto">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">
              {madeFor.map((made, i) => {
                return (
                  <div
                    className="w-full h-full flex items-start justify-center gap-4 p-4 rounded-md hover:bg-secondary/50 transition-all"
                    key={i}
                  >
                    <div className="w-max-h-full">
                      <div className="w-max h-max p-2 rounded-full bg-primary/10">
                        <made.Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="w-full">
                      <h3 className="font-semibold text-lg">{made.title}</h3>
                      <p className="mt-2">{made.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-center text-xl font-semibold mt-16">
            ...our platform helps you close more deals, faster.
          </p>
        </div>
      </div>

      {/* TRY IT NOW  */}
      <div className="w-full">
        <div className="max-w-wrapper py-24">
          <h1 className="text-center text-5xl font-bold text-primary">
            Try It Now
          </h1>
          <p className="mt-5 text-xl text-center">
            Enter your project details below and see our AI in action
          </p>

          <div className="max-w-4xl mx-auto mt-16">
            <div className="w-full rounded-xl shadow-xl overflow-hidden">
              <div className="w-full bg-gradient-primary py-5 flex items-center justify-center gap-2">
                <SiCodemagic className="w-4 h-4 text-white mt-0.5" />
                <p className="text-lg md:text-xl font-bold text-white text-center">
                  Generate Your Custom Proposal
                </p>
              </div>
              <div className="w-full px-4  mb-4">
                <div className="w-full mt-8 mb-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="w-full space-y-1.5">
                    <Label>Client Name</Label>
                    <Input placeholder="eg. Acne Corporation" />
                  </div>
                  <div className="w-full space-y-1.5">
                    <Label>Project Type</Label>
                    <Input placeholder="eg. Website Design" />
                  </div>
                </div>

                <div className="w-full space-y-1.5">
                  <Label>Project Scope & requirements</Label>
                  <Textarea placeholder="eg. Website Design" />
                </div>

                <div className="w-full mt-8 mb-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="w-full space-y-1.5">
                    <Label>Budget Range (optional)</Label>
                    <Input placeholder="eg. $5,000 - $10,000" />
                  </div>
                  <div className="w-full space-y-1.5">
                    <Label>Project Timeline (optional)</Label>
                    <Input placeholder="eg. 4 weeks" />
                  </div>
                </div>

                <Button
                  className="w-full bg-primary h-14 text-base"
                  size={"lg"}
                >
                  Generate My Proposal
                </Button>

                <p className="text-center text-sm mt-4">
                  Takes just 30 seconds to create a professional proposal
                </p>
              </div>
            </div>

            <div className="w-full rounded-md border border-gray-300 bg-secondary/50 p-4 mt-14">
              <h3 className="font-semibold text-base">What happens next?</h3>
              <p className="mt-2.5">
                After submitting your details, our AI will generate a custom
                proposal tailored to your client&apos;s needs. You&apos;ll be
                able to review, edit, and send it directly to your client.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS  */}
      <div className="w-full">
        <div className="max-w-wrapper py-24 bg-secondary/50">
          <div className="w-full">
            <p className="w-max text-center mx-auto px-5 py-2 rounded-full bg-primary/20 text-voilet-700 text-sm">
              Simple Process
            </p>
            <h2 className="text-4xl text-center font-bold mt-5">
              How <span className="text-gradient-primary">Freeposal.ai</span>{" "}
              Works
            </h2>
            <p className="text-xl text-center mt-5">
              Three simple steps to winning more clients
            </p>
          </div>

          <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* BOXES  */}
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

          {/* <div className="w-full flex flex-col justify-center items-center rounded-md mt-20 px-4 py-8 space-y-4 bg-background">
            <h2 className="text-center text-3xl font-bold">
              Ready to transform your proposal process?
            </h2>
            <Button className="">Start Your Free Trial</Button>
            <p className="text-sm text-center">No credit card required</p>
          </div> */}
        </div>
      </div>

      {/* FREELANCERS LOVE US  */}
      <div className="w-full bg-background">
        <div className="max-w-wrapper py-24">
          <div className="max-w-xl mx-auto">
            <h1 className="text-4xl font-bold text-center">
              Loved by{" "}
              <span className="text-gradient-primary">Freelancers</span>
            </h1>

            <p className="mt-5 text-center text-xl">
              See what our customers are saying about how our platform has
              transformed their business
            </p>
          </div>
          <div className="w-full mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full rounded-md border border-gray-200 p-4 hover:shadow-md transition-all">
              <div className="w-full flex items-center justify-start gap-2">
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
              </div>
              <p className="mt-5">
                <i>
                  &quot;I used to spend 3-4 hours writing proposals. Now, I can
                  create a professional proposal in 20 minutes that has doubled
                  my closing rate!&quot;
                </i>
              </p>

              <div className="w-full flex items-center gap-5 justify-start mt-4">
                <div className="w-max h-max">
                  <Image
                    src={"/user-1.jpg"}
                    width={60}
                    height={60}
                    unoptimized
                    className="shrink-0 aspect-square rounded-full object-cover"
                    alt="user"
                  />
                </div>
                <div className="w-full">
                  <p className="font-bold">Sarah Johnson</p>
                  <p className="text-sm">UX Designer</p>
                </div>
              </div>
            </div>
            <div className="w-full rounded-md border border-gray-200 p-4 hover:shadow-md transition-all">
              <div className="w-full flex items-center justify-start gap-2">
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
              </div>
              <p className="mt-5">
                <i>
                  &quot;The AI perfectly captures my voice and tone. My clients
                  can&apos;t tell the difference between the AI-generated
                  content and what I would write myself.&quot;
                </i>
              </p>

              <div className="w-full flex items-center gap-5 justify-start mt-4">
                <div className="w-max h-max">
                  <Image
                    src={"/user-2.jpg"}
                    width={60}
                    height={60}
                    unoptimized
                    className="shrink-0 aspect-square rounded-full object-cover"
                    alt="user"
                  />
                </div>
                <div className="w-full">
                  <p className="font-bold">Mark Wilson</p>
                  <p className="text-sm">Web Developer</p>
                </div>
              </div>
            </div>
            <div className="w-full rounded-md border border-gray-200 p-4 hover:shadow-md transition-all">
              <div className="w-full flex items-center justify-start gap-2">
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
                <StarIcon className="w-5 h-5 shrink-0 text-yellow-300 fill-yellow-300" />
              </div>
              <p className="mt-5">
                <i>
                  &quot;The templates are amazing and customizable. I&apos;ve
                  closed 4 new clients in the first month of using this
                  platform. Worth every penny!&quot;
                </i>
              </p>

              <div className="w-full flex items-center gap-5 justify-start mt-4">
                <div className="w-max h-max">
                  <Image
                    src={"/user-3.jpg"}
                    width={60}
                    height={60}
                    unoptimized
                    className="shrink-0 aspect-square rounded-full object-cover"
                    alt="user"
                  />
                </div>
                <div className="w-full">
                  <p className="font-bold">Jessica Chen</p>
                  <p className="text-sm">Marketing Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRICING  */}
      <div className="w-full bg-secondary/50">
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
              <div className="w-[320px] h-[500px] p-5 border border-gray-200 rounded-xl bg-background hover:shadow-md">
                <h3 className="text-xl font-bold mt-3">Free</h3>
                <h2 className="text-3xl font-bold mt-3">Free</h2>
                <p className="mt-3">Perfect for trying out the platform</p>
                <Button
                  className="mt-3 text-primary w-full hover:border-primary hover:text-primary"
                  variant={"outline"}
                >
                  Start Free
                </Button>

                <p className="mt-5">
                  <CheckIcon className="w-5 h-5 shrink-0 inline-flex mr-2.5 text-primary" />{" "}
                  5 proposals/emails per month
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
                    $19 <span className="text-base text-gray-400">/month</span>
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
                    Unlimited proposals/emails
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

              <div className="w-[320px] h-[500px] p-5 border border-gray-200 rounded-xl bg-background hover:shadow-md">
                <h3 className="text-xl font-bold mt-3">Business</h3>
                <h2 className="text-3xl font-bold mt-3">
                  $49 <span className="text-base text-gray-400">/month</span>
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
                  Everything in Pro
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
                    Is it accessible?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg">
                    Is it styled?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg">
                    Is it animated?
                  </AccordionTrigger>
                  <AccordionContent className="text-lg">
                    Yes. It&apos;s animated by default, but you can disable it
                    if you prefer.
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
      <div className="w-full bg-gradient-primary">
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
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full">
              <h3 className="font-bold text-3xl text-white">Freeposal.ai</h3>

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
              <h3 className="font-bold text-xl text-white">Product</h3>

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
          </div>
          <div className="w-full mt-24 flex max-md:flex-col items-center justify-between gap-3">
            <p className="text-gray-300">
              © 2025 Freeposal.ai. All rights reserved.
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
