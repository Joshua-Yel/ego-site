import { useEffect, useState } from 'react';
import { Clock, Users, MapPin, TrendingUp } from 'lucide-react';

export const ProblemSection = () => {
  const [animatedStats, setAnimatedStats] = useState({
    hoursLost: 0,
    waitTime: 0,
    commuters: 0,
    congestion: 0
  });

  const targetStats = {
    hoursLost: 240,
    waitTime: 79,
    commuters: 12,
    congestion: 95
  };

  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setAnimatedStats({
          hoursLost: Math.floor(targetStats.hoursLost * easeOut),
          waitTime: Math.floor(targetStats.waitTime * easeOut),
          commuters: Math.floor(targetStats.commuters * easeOut),
          congestion: Math.floor(targetStats.congestion * easeOut)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);

      return timer;
    };

    const timer = setTimeout(animateNumbers, 500);
    return () => clearTimeout(timer);
  }, []);

  const problems = [
    {
      icon: Clock,
      title: "Excessive Wait Times",
      description: "Commuters waste hours daily waiting for unpredictable public transport",
      stat: `${animatedStats.waitTime}%`,
      label: "experience delays"
    },
    {
      icon: Users,
      title: "Overcrowding Issues", 
      description: "No visibility into vehicle capacity leads to uncomfortable journeys",
      stat: `${animatedStats.commuters}M`,
      label: "daily commuters"
    },
    {
      icon: MapPin,
      title: "Route Uncertainty",
      description: "Lack of real-time information makes trip planning impossible",
      stat: `${animatedStats.hoursLost}`,
      label: "hours lost yearly"
    },
    {
      icon: TrendingUp,
      title: "Traffic Congestion",
      description: "Metro Manila has the world's worst traffic congestion",
      stat: `${animatedStats.congestion}%`,
      label: "congestion level"
    }
  ];

  return (
    <section id="problem" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
            The Transportation Crisis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Metro Manila's public transportation system faces critical challenges 
            that affect millions of daily commuters. The lack of real-time information 
            creates a cascade of problems.
          </p>
        </div>

        {/* Animated Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="card-professional text-center group hover-lift"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-4">
                <problem.icon className="h-12 w-12 mx-auto text-accent animate-float-gentle" />
                <div className="absolute -inset-2 bg-accent/20 rounded-full animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="text-3xl font-bold text-accent mb-2 animate-pulse-glow">
                {problem.stat}
              </div>
              
              <div className="text-sm text-muted-foreground mb-3">
                {problem.label}
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                {problem.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Impact Section */}
        <div className="card-professional bg-gradient-warm p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-card-foreground">
            The Real Cost of Inefficiency
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">₱2.4B</div>
              <div className="text-sm text-muted-foreground">Economic losses daily</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">4.5 hrs</div>
              <div className="text-sm text-muted-foreground">Lost per commuter daily</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">87%</div>
              <div className="text-sm text-muted-foreground">Stress increase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};