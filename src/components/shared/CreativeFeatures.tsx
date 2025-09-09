"use client";


import { useState } from 'react';
import { Zap, Target, Brain, Trophy, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Personalized Proposals',
    description: 'Advanced AI analyzes each job post and creates proposals that speak directly to client needs.',
    highlight: '🧠 Smart AI',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    icon: Zap,
    title: 'Fast, 10-Second Turnaround',
    description: 'Generate professional proposals faster than you can read the job post. No more writer\'s block.',
    highlight: '⚡ Lightning Fast',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Target,
    title: 'Increases Your Win Rate',
    description: 'Our users see 3x higher response rates with proposals that convert browsers into clients.',
    highlight: '🎯 High Converting',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: Trophy,
    title: 'Built for Freelancers',
    description: 'Designed specifically for Upwork, Fiverr, and freelance platforms. We speak your language.',
    highlight: '🏆 Freelancer-First',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Clock,
    title: 'Save Hours Daily',
    description: 'Stop spending hours crafting proposals. Get back to doing the work you love and earning more.',
    highlight: '⏰ Time Saver',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Shield,
    title: 'Proven Templates',
    description: 'Built on winning proposal structures used by top 1% freelancers. Success guaranteed.',
    highlight: '🛡️ Battle-Tested',
    gradient: 'from-indigo-500 to-purple-600'
  }
];

const CreativeFeatures = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/10 to-background"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-1/4 w-64 h-64 floating-element rounded-full animate-float opacity-5"></div>
      <div className="absolute bottom-10 right-1/4 w-48 h-48 floating-element rounded-full animate-float opacity-5" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-primary">Powerful Features</span>
          </div>
          
          <h2 className="text-3xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            Why 10,000+ Freelancers
            <br />
            Choose ProposalAI
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to write winning proposals that get you hired faster and more often.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Floating Card */}
                <div className={`
                  step-card h-full relative overflow-hidden p-6 rounded-xl
                  ${hoveredIndex === index ? 'shadow-hero scale-105 shadow-2xl' : 'shadow-primary/20 shadow-xl'}
                  transition-all duration-500
                `}>
                  
                  {/* Gradient Overlay */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 
                    ${hoveredIndex === index ? 'opacity-10' : 'opacity-0'}
                    transition-opacity duration-500
                  `}></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className={`
                      w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} 
                      p-4 mb-6 shadow-floating
                      ${hoveredIndex === index ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}
                      transition-all duration-500
                    `}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>

                    {/* Highlight Badge */}
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                      {feature.highlight}
                    </div>

                    {/* Title */}
                    <h3 className={`
                      text-xl font-bold mb-4
                      ${hoveredIndex === index ? 'text-primary' : 'text-foreground'}
                      transition-colors duration-300
                    `}>
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`
                    absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient}
                    ${hoveredIndex === index ? 'animate-pulse scale-150' : 'scale-100'}
                    transition-all duration-300
                  `}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '10,000+', label: 'Active Users', icon: '👥' },
              { number: '3x', label: 'Higher Response Rate', icon: '📈' },
              { number: '10sec', label: 'Average Generation', icon: '⚡' },
              { number: '95%', label: 'User Satisfaction', icon: '⭐' }
            ].map((stat, index) => (
              <div key={index} className="text-center glass-card p-6 rounded-2xl shadow-floating hover:shadow-hero transition-all duration-300">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeFeatures;