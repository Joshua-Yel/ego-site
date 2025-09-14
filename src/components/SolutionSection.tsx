import { Zap, MapPin, Users, Clock, Smartphone, Brain } from 'lucide-react';

export const SolutionSection = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-Time GPS Tracking",
      description: "Precise vehicle location with sub-meter accuracy using advanced GPS algorithms",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Passenger Capacity Monitoring", 
      description: "Smart counting systems provide real-time occupancy data for optimal boarding",
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "AI-Powered Arrival Predictions",
      description: "Machine learning algorithms analyze traffic patterns to predict accurate arrival times",
      color: "text-accent"
    },
    {
      icon: Brain,
      title: "Intelligent Route Optimization",
      description: "Dynamic routing suggestions based on real-time traffic and passenger demand",
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Seamless Mobile Experience",
      description: "Intuitive Flutter-based apps designed for Philippine commuter needs",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Instant Notifications",
      description: "Push notifications for delays, capacity updates, and route changes",
      color: "text-accent"
    }
  ];

  const techStack = [
    { name: "Flutter", description: "Cross-platform mobile development" },
    { name: "GTFS Integration", description: "Standardized transit data format" },
    { name: "Mapbox", description: "Advanced mapping and location services" },
    { name: "Machine Learning", description: "Predictive analytics engine" },
    { name: "Real-time APIs", description: "Instant data synchronization" },
    { name: "Cloud Infrastructure", description: "Scalable and reliable backend" }
  ];

  return (
    <section id="solution" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
            Smart Transportation Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            eGO transforms public transportation with real-time visibility, 
            intelligent predictions, and seamless user experience designed 
            specifically for Metro Manila's unique transit ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-professional group hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6">
                <div className="p-4 bg-muted rounded-2xl inline-block">
                  <feature.icon className={`h-8 w-8 ${feature.color} animate-float-gentle`} />
                </div>
                <div className="absolute -inset-1 bg-primary/20 rounded-2xl animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="card-professional bg-gradient-hero p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-primary-foreground">
              Powered by Advanced Technology
            </h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Built on proven technologies with a focus on reliability, 
              scalability, and performance for Metro Manila's scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="bg-card/10 backdrop-blur rounded-2xl p-6 border border-primary-foreground/20 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold mb-2 text-primary-foreground">
                  {tech.name}
                </h4>
                <p className="text-primary-foreground/70 text-sm">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">99.9%</div>
              <div className="text-primary-foreground/70 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">&lt;2s</div>
              <div className="text-primary-foreground/70 text-sm">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">±30s</div>
              <div className="text-primary-foreground/70 text-sm">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/70 text-sm">Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};