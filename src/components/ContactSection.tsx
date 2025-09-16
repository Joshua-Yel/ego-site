import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

export const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Get in touch for partnerships and inquiries",
      value: "hello@innewgen.com",
      action: "mailto:hello@innewgen.com"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Speak directly with our team",
      value: "+63 2 8888 0000",
      action: "tel:+6328888000"
    },
    {
      icon: MapPin,
      title: "Office",
      description: "Visit our development headquarters",
      value: "Makati City, Metro Manila",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-hero mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to be part of the transportation revolution? We'd love to hear 
            from potential partners, beta testers, and anyone interested in making 
            Metro Manila's commute better.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.action}
                  className="card-professional group hover-lift block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <method.icon className="h-6 w-6 text-primary animate-float-gentle" />
                      </div>
                      <div className="absolute -inset-1 bg-primary/20 rounded-xl animate-pulse-glow opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="space-y-1">
                      <h3 className="font-semibold text-card-foreground">
                        {method.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Company Information */}
            <div className="card-professional bg-gradient-warm p-6">
              <h3 className="text-lg font-semibold mb-4 text-card-foreground">
                About Innewgen
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                We're building the future of transportation technology in the Philippines. 
                Our mission is to make commuting efficient, predictable, and stress-free 
                for millions of Filipino travelers.
              </p>
              <div className="text-xs text-muted-foreground">
                Innovation • Technology • Community
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-professional p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};