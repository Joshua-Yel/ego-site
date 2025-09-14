import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { AppShowcase } from '@/components/AppShowcase';
import { BetaSection } from '@/components/BetaSection';
import { ImpactSection } from '@/components/ImpactSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for preloader animation
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold text-gradient-hero animate-pulse mb-4">
            eGO
          </div>
          <div className="text-muted-foreground animate-slide-up-fade">
            Loading the future of transportation...
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 bg-morphing-blob opacity-5 pointer-events-none" />
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Problem Visualization */}
      <ProblemSection />

      {/* Solution Showcase */}
      <SolutionSection />

      {/* Dual App Presentation */}
      <AppShowcase />

      {/* Beta Testing Section */}
      <BetaSection />

      {/* Impact Visualization */}
      <ImpactSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Particles */}
      <div className="bg-particles">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </main>
  );
};

export default Index;