import { useState, useEffect } from 'react';
import { Play, ArrowRight, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-transport-flow.jpg';
import appMockup from '@/assets/ego-app-mockup.jpg';

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const heroTexts = [
    "Stuck in Traffic?",
    "Smart Commuting Starts Here"
  ];

  // Countdown to October 2025
  useEffect(() => {
    const targetDate = new Date('2025-10-01T00:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(timer);
  }, []);

  // Text morphing effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { icon: Clock, label: "Hours Lost Daily", value: "4.5", color: "text-accent" },
    { icon: MapPin, label: "Routes Covered", value: "200+", color: "text-primary" },
    { icon: Users, label: "Beta Users", value: "5K+", color: "text-secondary" }
  ];

  return (
    <section className="section-padding pt-32 overflow-hidden relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up-fade">
            {/* Morphing Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gradient-hero block">
                  {heroTexts[currentText]}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Join the transportation revolution in Metro Manila. Real-time tracking, 
                capacity monitoring, and arrival predictions powered by advanced algorithms.
              </p>
            </div>

            {/* Beta Countdown */}
            <div className="card-professional bg-gradient-hero p-6">
              <h3 className="text-lg font-semibold mb-4 text-primary-foreground">
                Beta Launch Countdown
              </h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                {[
                  { label: 'Days', value: countdown.days },
                  { label: 'Hours', value: countdown.hours },
                  { label: 'Minutes', value: countdown.minutes },
                  { label: 'Seconds', value: countdown.seconds }
                ].map((item, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-2xl font-bold text-primary-foreground animate-pulse-glow">
                      {item.value}
                    </div>
                    <div className="text-sm text-primary-foreground/80">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero group">
                Join Beta Testing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="btn-professional group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center space-y-2 hover-lift">
                  <stat.icon className={`h-8 w-8 mx-auto ${stat.color} animate-float-gentle`} />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative">
            {/* Main Hero Image */}
            <div className="relative overflow-hidden rounded-lg shadow-intense">
              <img 
                src={heroImage} 
                alt="Traffic transformation visualization"
                className="w-full h-auto animate-float-gentle"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating App Mockup */}
            <div className="absolute -bottom-8 -left-8 lg:-left-12">
              <div className="relative animate-float-gentle" style={{ animationDelay: '1s' }}>
                <img 
                  src={appMockup}
                  alt="eGO mobile app interface"
                  className="w-48 h-auto drop-shadow-2xl magnetic-hover"
                />
                <div className="absolute -inset-4 bg-primary/20 rounded-full animate-pulse-glow opacity-50" />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 right-8 card-professional bg-card p-4 animate-float-gentle" style={{ animationDelay: '2s' }}>
              <div className="text-sm font-medium text-card-foreground">Live Tracking</div>
              <div className="text-xs text-muted-foreground">99.9% Accuracy</div>
            </div>

            <div className="absolute bottom-16 right-4 card-professional bg-accent text-accent-foreground p-3 animate-float-gentle" style={{ animationDelay: '0.5s' }}>
              <div className="text-sm font-medium">Real-time Updates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};