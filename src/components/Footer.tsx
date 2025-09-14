import { Zap, Mail, Globe, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'eGO Transit', href: '#apps' },
      { name: 'eGO Commute', href: '#apps' },
      { name: 'Beta Program', href: '#beta' },
      { name: 'Pricing', href: '#' }
    ],
    company: [
      { name: 'About Innewgen', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Contact', href: '#contact' }
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Support Center', href: '#' },
      { name: 'Status Page', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Data Protection', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'Website', icon: Globe, href: 'https://innewgen.com' }
  ];

  return (
    <footer className="bg-ego-dark text-ego-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Zap className="h-10 w-10 text-primary animate-float-gentle" />
                  <div className="absolute -inset-2 bg-primary/20 rounded-full animate-pulse-glow opacity-50" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient-hero">eGO</div>
                  <div className="text-sm text-ego-white/60">by Innewgen</div>
                </div>
              </div>
              
              <p className="text-ego-white/80 max-w-md">
                Revolutionizing public transportation in Metro Manila through real-time 
                tracking, capacity monitoring, and intelligent predictions. Making every 
                commute efficient, predictable, and stress-free.
              </p>

              <div className="space-y-4">
                <div className="text-sm font-medium text-ego-white/90">
                  Stay Updated on Beta Launch
                </div>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-ego-white/10 border border-ego-white/20 rounded-lg text-ego-white placeholder-ego-white/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-glow transition-colors">
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-ego-white/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 group magnetic-hover"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="grid md:grid-cols-4 gap-8 lg:col-span-4">
              <div className="space-y-4">
                <h3 className="font-semibold text-ego-white">Product</h3>
                <ul className="space-y-2">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-ego-white/70 hover:text-primary transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-ego-white">Company</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-ego-white/70 hover:text-primary transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-ego-white">Resources</h3>
                <ul className="space-y-2">
                  {footerLinks.resources.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-ego-white/70 hover:text-primary transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-ego-white">Legal</h3>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-ego-white/70 hover:text-primary transition-colors duration-300"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ego-white/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-ego-white/60">
              © 2024 Innewgen. All rights reserved. • Making transportation efficient for everyone.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-ego-white/60">
              <span>Beta launching October 2025</span>
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
              <span>Made with ❤️ for Metro Manila</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Beta CTA */}
      <div className="fixed bottom-8 right-8 z-40 md:hidden">
        <a
          href="#beta"
          className="btn-beta animate-pulse-glow shadow-intense"
        >
          Join Beta
        </a>
      </div>
    </footer>
  );
};