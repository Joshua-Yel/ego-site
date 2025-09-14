import { useState } from 'react';
import { Mail, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const BetaSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle beta signup
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const betaFeatures = [
    "Priority access to both eGO Transit and eGO Commute",
    "Direct feedback channel to development team", 
    "Exclusive beta tester community access",
    "Early access to new features and updates",
    "Limited spots - only 5,000 beta testers",
    "Free premium features during beta period"
  ];

  const testimonialPlaceholders = [
    {
      name: "Maria Santos",
      role: "Daily Commuter",
      quote: "Finally, a solution that understands Filipino commuters!",
      rating: 5
    },
    {
      name: "Juan Dela Cruz", 
      role: "Jeepney Driver",
      quote: "Simple interface that actually helps my daily operations.",
      rating: 5
    },
    {
      name: "Ana Rodriguez",
      role: "Student",
      quote: "Never been this excited about public transportation!",
      rating: 5
    }
  ];

  return (
    <section id="beta" className="section-padding bg-gradient-hero">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Join the Beta Revolution
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Be among the first 5,000 users to experience the future of public 
            transportation in Metro Manila. Beta testing starts October 2025.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Beta Benefits */}
          <div className="space-y-8">
            <div className="card-morphing bg-card/10 backdrop-blur border-primary-foreground/20 p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary-foreground flex items-center">
                <Star className="mr-3 h-6 w-6 text-accent animate-float-gentle" />
                Beta Tester Benefits
              </h3>
              
              <div className="space-y-4">
                {betaFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 animate-slide-up-fade"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Urgency Indicator */}
              <div className="mt-8 p-4 bg-accent/20 rounded-xl border border-accent/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-accent font-medium">Limited Spots Available</div>
                    <div className="text-xs text-primary-foreground/70">4,247 / 5,000 registered</div>
                  </div>
                  <div className="text-2xl font-bold text-accent">85%</div>
                </div>
                <div className="mt-2 bg-primary-foreground/20 rounded-full h-2">
                  <div className="bg-accent rounded-full h-2 transition-all duration-1000" style={{ width: '85%' }} />
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="grid gap-4">
              {testimonialPlaceholders.map((testimonial, index) => (
                <div 
                  key={index}
                  className="card-morphing bg-card/10 backdrop-blur border-primary-foreground/20 p-4 hover-lift"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/30 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium text-primary-foreground">{testimonial.name}</span>
                        <span className="text-xs text-primary-foreground/60">• {testimonial.role}</span>
                      </div>
                      <p className="text-sm text-primary-foreground/80 mb-2">"{testimonial.quote}"</p>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-accent fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Signup Form */}
          <div className="space-y-8">
            <div className="card-morphing bg-card p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground text-center">
                Reserve Your Beta Spot
              </h3>
              
              {isSubmitted ? (
                <div className="text-center space-y-4 animate-slide-up-fade">
                  <CheckCircle className="h-16 w-16 text-accent mx-auto animate-pulse-glow" />
                  <h4 className="text-xl font-semibold text-card-foreground">Welcome to the Beta!</h4>
                  <p className="text-muted-foreground">
                    Check your email for confirmation and next steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          className="pl-10 py-3 text-lg"
                          required
                        />
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground">
                      By signing up, you agree to receive updates about the eGO beta program. 
                      We'll never spam or share your email.
                    </div>
                  </div>

                  <Button type="submit" className="btn-hero w-full group">
                    Reserve My Beta Spot
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-border text-center">
                <div className="text-sm text-muted-foreground mb-2">
                  Beta Launch Timeline
                </div>
                <div className="text-lg font-semibold text-card-foreground">
                  October 2025
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Metro Manila Routes First
                </div>
              </div>
            </div>

            {/* Contact Options */}
            <div className="text-center space-y-4">
              <div className="text-primary-foreground/80">
                Have questions about the beta program?
              </div>
              <Button className="btn-morphing">
                Contact Beta Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};