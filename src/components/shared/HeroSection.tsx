"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SiCodemagic } from "react-icons/si";

interface FormData {
  jobDescription: string;
}

const testimonials = [
  { text: "Landed 3 clients in a week!", author: "Alex M." },
  { text: "My success rate doubled instantly", author: "Sarah K." },
  { text: "Saves me 2 hours per proposal", author: "Mike R." },
];

const HeroSection = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const router = useRouter();

  const form = useForm<FormData>({
    defaultValues: {
      jobDescription: "",
    },
  });

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data: FormData) => {
    if (!data.jobDescription.trim()) {
      return;
    }
    localStorage.setItem(
      "user-1st-jobDescription",
      JSON.stringify(data.jobDescription)
    );
    router.push(`/dashboard/generate`);

    setIsGenerating(true);

    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      //   toast({
      //     title: "Proposal Generated!",
      //     description: "Your personalized proposal is ready. Check your dashboard to view it.",
      //   });
    }, 2000);
  };

  return (
    <div className="min-h-screen gradient-hero relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-20 h-20 bg-primary/15 rounded-full animate-bounce-slow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-24 h-24 bg-primary/8 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-primary/12 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        />

        {/* Abstract shapes */}
        <div className="absolute top-1/4 left-1/2 w-40 h-40 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 bg-gradient-to-tl from-primary/15 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Hero Content */}
      <div className="max-w-[1444px] py-8 relative z-10">
        <div className="max-w-wrapper mx-auto">
          {/* Platform Badges */}
          {/* <div className="flex justify-center mb-8 animate-fade-in-delayed">
            <div className="flex items-center gap-4 glass-card rounded-full px-6 py-3">
              <span className="text-sm font-medium text-muted-foreground">Trusted on:</span>
              <div className="flex items-center gap-3">
                <span className="text-green-600 font-semibold">Upwork</span>
                <span className="text-blue-600 font-semibold">Fiverr</span>
                <span className="text-orange-600 font-semibold">Freelancer</span>
              </div>
            </div>
          </div> */}

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="lg:col-span-7 space-y-8 animate-slide-up">
              {/* AI Badge */}
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  ⚡ AI-powered
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Craft Freelance
                  <br />
                  <span className="text-gradient-primary bg-clip-text text-transparent">
                    Proposals in Seconds
                  </span>
                  <br />
                  with AI
                </h1>

                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                  Paste a job post. Our AI crafts a winning proposal tailored to
                  it — instantly.
                </p>
              </div>

              {/* Trust Badges */}
              {/* <div className="flex flex-wrap gap-4">
                <div className="glass-card rounded-lg px-4 py-3 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="font-medium text-sm">100% tailored</span>
                </div>
                <div className="glass-card rounded-lg px-4 py-3 flex items-center gap-2">
                  <span className="text-2xl">📬</span>
                  <span className="font-medium text-sm">Works with all platforms</span>
                </div>
                <div className="glass-card rounded-lg px-4 py-3 flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <span className="font-medium text-sm">4.9/5 rated</span>
                </div>
              </div> */}

              {/* Testimonial Carousel */}
              <Card className="glass-card border-l-4 border-l-primary p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-lg font-medium italic">
                      &quot;{testimonials[currentTestimonial].text}&quot;
                    </p>
                    <p className="text-sm text-muted-foreground">
                      — {testimonials[currentTestimonial].author}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {testimonials.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentTestimonial
                            ? "bg-primary"
                            : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Interactive Form */}
            <div className="lg:col-span-5 animate-fade-in-delayed">
              <Card className="glass-card p-0 sm:shadow-2xl">
                <div className="w-full rounded-xl overflow-hidden">
                  <div className="w-full bg-gradient-primary py-5 flex items-center justify-center gap-2">
                    <SiCodemagic className="w-4 h-4 text-white mt-0.5" />
                    <p className="text-lg md:text-xl font-bold text-white text-center">
                      Generate Your Custom Proposal
                    </p>
                  </div>
                  <div className="w-full px-4 mt-6 mb-4">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-6"
                      >
                        <FormField
                          control={form.control}
                          name="jobDescription"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <div className="relative">
                                  <Textarea
                                    placeholder="Paste freelance job post here..."
                                    className="min-h-[200px] resize-none border-2 border-muted focus:border-primary transition-colors text-base"
                                    {...field}
                                  />
                                  {!field.value && (
                                    <div className="absolute top-16 left-4 text-muted-foreground/60 text-sm">
                                      Example: &quot;Looking for a React
                                      developer to build...&quot;
                                    </div>
                                  )}
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full bg-primary h-14 text-base"
                          size={"lg"}
                          disabled={isGenerating}
                        >
                          {isGenerating ? (
                            <div className="flex items-center gap-3">
                              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                              <span>Generating your proposal...</span>
                            </div>
                          ) : (
                            <span>Generate My Proposal ✨</span>
                          )}
                        </Button>
                        <p className="text-center text-sm">
                          Takes just 30 seconds to create a professional
                          proposal
                        </p>
                      </form>
                    </Form>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
