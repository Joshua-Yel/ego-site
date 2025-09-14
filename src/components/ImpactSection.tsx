import { useEffect, useState } from 'react';
import { TrendingUp, Leaf, Clock, Users, MapPin, Zap } from 'lucide-react';

export const ImpactSection = () => {
  const [animatedMetrics, setAnimatedMetrics] = useState({
    timeReduction: 0,
    co2Reduction: 0,
    stressReduction: 0,
    efficiencyGain: 0
  });

  const targetMetrics = {
    timeReduction: 45,
    co2Reduction: 30,
    stressReduction: 60,
    efficiencyGain: 85
  };

  useEffect(() => {
    const animateMetrics = () => {
      const duration = 2500;
      const steps = 60;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOut = 1 - Math.pow(1 - progress, 3);

        setAnimatedMetrics({
          timeReduction: Math.floor(targetMetrics.timeReduction * easeOut),
          co2Reduction: Math.floor(targetMetrics.co2Reduction * easeOut),
          stressReduction: Math.floor(targetMetrics.stressReduction * easeOut),
          efficiencyGain: Math.floor(targetMetrics.efficiencyGain * easeOut)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);

      return timer;
    };

    const timer = setTimeout(animateMetrics, 500);
    return () => clearTimeout(timer);
  }, []);

  const impacts = [
    {
      icon: Clock,
      title: "Time Savings",
      value: `${animatedMetrics.timeReduction}%`,
      description: "Reduction in daily commute uncertainty",
      color: "text-primary",
      details: "Average 2.3 hours saved per week per commuter"
    },
    {
      icon: Leaf,
      title: "Environmental Impact", 
      value: `${animatedMetrics.co2Reduction}%`,
      description: "Lower carbon emissions through efficiency",
      color: "text-accent",
      details: "Supporting sustainable transportation goals"
    },
    {
      icon: TrendingUp,
      title: "Stress Reduction",
      value: `${animatedMetrics.stressReduction}%`,
      description: "Less anxiety with predictable commutes",
      color: "text-secondary",
      details: "Improved mental health and productivity"
    },
    {
      icon: Zap,
      title: "System Efficiency",
      value: `${animatedMetrics.efficiencyGain}%`,
      description: "Better resource utilization",
      color: "text-primary",
      details: "Optimized routes and capacity management"
    }
  ];

  const ptmpBenefits = [
    "Supports DOTr's Public Transport Modernization Program",
    "Enhances data collection for transport planning",
    "Improves passenger experience and satisfaction",
    "Enables evidence-based policy decisions"
  ];

  const timeline = [
    { year: "2024", event: "Development & Testing", status: "completed" },
    { year: "2025", event: "Beta Launch (Metro Manila)", status: "upcoming" },
    { year: "2025", event: "Full Metro Manila Rollout", status: "planned" },
    { year: "2026", event: "Nationwide Expansion", status: "planned" }
  ];

  return (
    <section id="impact" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
            Transforming Transportation Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond convenience - eGO creates measurable positive change for 
            commuters, the environment, and the entire Metro Manila transportation ecosystem.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className="card-professional text-center group hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="p-4 bg-muted rounded-2xl inline-block">
                  <impact.icon className={`h-10 w-10 ${impact.color} animate-float-gentle`} />
                </div>
                <div className="absolute -inset-1 bg-primary/20 rounded-2xl animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className={`text-4xl font-bold ${impact.color} mb-2 animate-pulse-glow`}>
                {impact.value}
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                {impact.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-3">
                {impact.description}
              </p>

              <div className="text-xs text-muted-foreground/80">
                {impact.details}
              </div>
            </div>
          ))}
        </div>

        {/* Social Impact */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-card-foreground">
                Supporting National Transportation Goals
              </h3>
              <p className="text-lg text-muted-foreground">
                eGO aligns with the Department of Transportation's modernization 
                initiatives, providing digital infrastructure for smarter public transport.
              </p>
            </div>

            <div className="space-y-4">
              {ptmpBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 animate-slide-up-fade"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card-professional bg-gradient-warm p-8">
            <h4 className="text-xl font-semibold mb-6 text-card-foreground">
              Economic Impact Projection
            </h4>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">₱15B</div>
                  <div className="text-sm text-muted-foreground">Annual time savings value</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">12M</div>
                  <div className="text-sm text-muted-foreground">Commuters potentially served</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">2,500</div>
                  <div className="text-sm text-muted-foreground">Jobs created indirectly</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">40%</div>
                  <div className="text-sm text-muted-foreground">Improvement in route efficiency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="card-professional bg-muted/30 p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-card-foreground">
            Implementation Roadmap
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full rounded-full opacity-20" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center justify-center animate-slide-up-fade ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex-1 lg:text-right lg:pr-8">
                    {index % 2 === 0 && (
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">{item.year}</div>
                        <div className="text-lg font-semibold text-card-foreground">{item.event}</div>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10">
                    <div className={`w-4 h-4 rounded-full border-4 ${
                      item.status === 'completed' ? 'bg-accent border-accent' :
                      item.status === 'upcoming' ? 'bg-primary border-primary animate-pulse-glow' :
                      'bg-muted border-muted-foreground'
                    }`} />
                  </div>

                  <div className="flex-1 lg:pl-8">
                    {index % 2 !== 0 && (
                      <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">{item.year}</div>
                        <div className="text-lg font-semibold text-card-foreground">{item.event}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};