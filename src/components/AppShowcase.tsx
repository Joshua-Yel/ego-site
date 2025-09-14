import { useState } from 'react';
import { Smartphone, Users, MapPin, Clock, Route, Bell, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import appMockup from '@/assets/ego-app-mockup.jpg';

export const AppShowcase = () => {
  const [activeApp, setActiveApp] = useState('transit');

  const apps = {
    transit: {
      name: 'eGO Transit',
      subtitle: 'For Operators & Drivers',
      description: 'Streamlined interface designed for drivers and conductors to easily log trips, count passengers, and broadcast real-time location data.',
      color: 'primary',
      features: [
        {
          icon: MapPin,
          title: 'Easy Trip Logging',
          description: 'Simple one-tap trip start/stop with automatic route detection'
        },
        {
          icon: Users,
          title: 'Passenger Counting',
          description: 'Quick and accurate passenger count with smart increment/decrement'
        },
        {
          icon: Route,
          title: 'Route Broadcasting',
          description: 'Automatic location sharing with real-time GPS accuracy'
        },
        {
          icon: Clock,
          title: 'Schedule Management',
          description: 'Track departure times and maintain consistent service intervals'
        }
      ]
    },
    commute: {
      name: 'eGO Commute', 
      subtitle: 'For Passengers',
      description: 'Comprehensive passenger app with live tracking, capacity indicators, and intelligent trip planning for stress-free commuting.',
      color: 'secondary',
      features: [
        {
          icon: MapPin,
          title: 'Live Vehicle Tracking',
          description: 'See exact bus/jeepney locations with real-time arrival predictions'
        },
        {
          icon: Users,
          title: 'Capacity Indicators',
          description: 'Know vehicle occupancy before boarding to avoid overcrowding'
        },
        {
          icon: Route,
          title: 'Smart Trip Planning',
          description: 'Optimized route suggestions based on current traffic conditions'
        },
        {
          icon: Bell,
          title: 'Push Notifications',
          description: 'Get alerts for delays, route changes, and boarding reminders'
        }
      ]
    }
  };

  const currentApp = apps[activeApp as keyof typeof apps];

  return (
    <section id="apps" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
            Dual App Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two specialized applications working together to create a seamless 
            transportation network connecting operators and passengers in real-time.
          </p>
        </div>

        {/* App Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-2xl p-2 border border-border shadow-soft">
            <button
              onClick={() => setActiveApp('transit')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeApp === 'transit' 
                  ? 'bg-primary text-primary-foreground shadow-morphing' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              eGO Transit
            </button>
            <button
              onClick={() => setActiveApp('commute')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeApp === 'commute' 
                  ? 'bg-secondary text-secondary-foreground shadow-morphing' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              eGO Commute
            </button>
          </div>
        </div>

        {/* App Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* App Details */}
          <div className="space-y-8 animate-slide-up-fade">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Smartphone className={`h-8 w-8 text-${currentApp.color} animate-float-gentle`} />
                <div>
                  <h3 className="text-3xl font-bold text-card-foreground">
                    {currentApp.name}
                  </h3>
                  <p className="text-muted-foreground">{currentApp.subtitle}</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground">
                {currentApp.description}
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6">
              {currentApp.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 group hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative">
                    <div className={`p-3 bg-${currentApp.color}/10 rounded-xl`}>
                      <feature.icon className={`h-6 w-6 text-${currentApp.color}`} />
                    </div>
                    <div className={`absolute -inset-1 bg-${currentApp.color}/20 rounded-xl animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  
                  <div className="space-y-1">
                    <h4 className="font-semibold text-card-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* App Benefits */}
            <div className="card-morphing bg-gradient-warm p-6">
              <h4 className="font-semibold text-card-foreground mb-4">Key Benefits</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="space-y-1">
                  <Star className="h-6 w-6 text-accent mx-auto" />
                  <div className="text-sm font-medium">Easy to Use</div>
                </div>
                <div className="space-y-1">
                  <Shield className="h-6 w-6 text-accent mx-auto" />
                  <div className="text-sm font-medium">Reliable</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-beta">
                Join Beta Testing
              </Button>
              <Button className="btn-morphing">
                Learn More
              </Button>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-intense animate-float-gentle">
              <img 
                src={appMockup}
                alt={`${currentApp.name} mobile interface`}
                className="w-full h-auto magnetic-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -top-4 -right-4 card-morphing bg-accent text-accent-foreground p-3 animate-float-gentle" style={{ animationDelay: '0.5s' }}>
              <div className="text-sm font-medium">Real-time</div>
            </div>

            <div className="absolute -bottom-4 -left-4 card-morphing bg-primary text-primary-foreground p-3 animate-float-gentle" style={{ animationDelay: '1s' }}>
              <div className="text-sm font-medium">99.9% Uptime</div>
            </div>

            <div className="absolute top-1/2 -left-8 card-morphing bg-secondary text-secondary-foreground p-4 animate-float-gentle" style={{ animationDelay: '1.5s' }}>
              <div className="text-xs text-secondary-foreground/80">Coming Soon</div>
              <div className="font-medium">Beta Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};