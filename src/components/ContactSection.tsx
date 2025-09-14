import { useState } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  const inquiryTypes = [
    "Beta Testing Partnership",
    "Media & Press Inquiries", 
    "Investment Opportunities",
    "Technical Integration",
    "General Questions",
    "Other"
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
              {isSubmitted ? (
                <div className="text-center space-y-6 animate-slide-up-fade">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <Send className="h-10 w-10 text-accent animate-pulse-glow" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Thank you for reaching out. We'll get back to you within 24 hours 
                    with more information about eGO and partnership opportunities.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-card-foreground">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-card-foreground">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-card-foreground">
                      Inquiry Type
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleSelectChange}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select inquiry type...</option>
                      {inquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-card-foreground">
                      Message
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your interest in eGO, potential partnership opportunities, or any questions you have..."
                        className="pl-10 min-h-[120px]"
                        required
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-hero w-full group"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <div className="text-xs text-muted-foreground text-center">
                    We respect your privacy and will never share your information with third parties.
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};