"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreativeHero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient bg-gradient-primary-3"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 floating-element rounded-full animate-float opacity-30"></div>
      <div
        className="absolute top-60 right-20 w-24 h-24 floating-element rounded-full animate-float opacity-20"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-1/4 w-16 h-16 floating-element rounded-full animate-float opacity-25"
        style={{ animationDelay: "4s" }}
      ></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white/20 rounded-full animate-pulse-glow"></div>
      <div
        className="absolute bottom-1/4 right-10 w-12 h-12 bg-white/15 rounded-full animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="mx-auto px-6 lg:px-8 relative z-10 flex min-h-screen flex-col items-center justify-center space-y-16 text-center">
        {/* Main Headline & Subheadline */}
        <div
          className={`max-w-4xl space-y-8 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h1 className="text-[40px] lg:text-6xl font-bold leading-tight pt-10">
            <span className="text-white">
              {/* Turn Upwork Jobs into */}
              Dominate
            </span>{" "}
            <br className="max-lg:hidden" />
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Freelance Proposals
            </span>{" "}
            <br className="max-lg:hidden" />
            <span className="text-white">Instantly</span>
          </h1>
          <p className="lg:text-xl text-white/90 leading-relaxed">
            Copy any Upwork job. Watch AI generate a ready-to-send proposal
            tailored to the client.
            <span className="text-yellow-300 font-semibold">
              {" "}
              No more blank pages.
            </span>
          </p>

          {/* Trust Indicators */}
          {/* <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">10,000+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">10-Second Generation</span>
            </div>
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              className="btn-creative text-lg px-8 py-6 group"
              onClick={() => router.push("/dashboard/generate")}
            >
              Generate My First Proposal
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="glass-button text-lg px-8 py-6 flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          {/* <p className="text-white/70 text-sm max-w-md mx-auto">
            Join Sarah, Marcus, and 9,998 other freelancers who've increased their response rate by 3x
          </p> */}
        </div>

        {/* Demo Video */}
        <div
          className={`relative max-w-4xl w-full ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          <div className="glass-card p-6 rounded-3xl shadow-hero mx-auto">
            {/* Video Placeholder */}
            <div className="w-full aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden relative group cursor-pointer">
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>

              {/* Demo Content Preview */}
              <div className="absolute top-4 left-4 right-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-white text-xs">upwork.com</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-white/20 rounded w-3/4"></div>
                    <div className="h-2 bg-white/20 rounded w-1/2"></div>
                  </div>
                </div>
              </div>

              {/* Generated Proposal Preview */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-primary/20 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-3 h-3 text-yellow-400" />
                    <span className="text-white text-xs">
                      AI Generated Proposal
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-2 bg-yellow-300/30 rounded w-full"></div>
                    <div className="h-2 bg-yellow-300/30 rounded w-4/5"></div>
                    <div className="h-2 bg-yellow-300/30 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Label */}
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-white/70 text-sm">
                Live Demo - See It In Action
              </span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CreativeHero;
