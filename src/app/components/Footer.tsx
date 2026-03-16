import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import kailash from "../components/images/kailash.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ['About Us', 'Our Team', 'Careers', 'Press & Media', 'Blog'],
    Services: ['Complete Home', 'Kitchen Design', 'Bedroom Interiors', 'Living Room', 'Custom Furniture'],
    'Design Ideas': ['Modern', 'Contemporary', 'Classic', 'Minimalist', 'Luxury'],
    Projects: ['Residential', 'Commercial', 'Apartments', 'Villas', 'Offices'],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#0F0F0F] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.img
              src={kailash}
              alt="Studio Yards Interiors"
              className="h-12 w-auto mb-6"
              whileHover={{ scale: 1.05 }}
            />
            <p className="text-[#BFBFBF] mb-6 leading-relaxed">
              Transform your space with timeless interior designs crafted for modern living. Excellence in every detail.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, backgroundColor: '#D4AF37', color: '#0F0F0F' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#D4AF37' }}
                      className="text-[#BFBFBF] hover:text-[#D4AF37] transition-all duration-300 inline-block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="border-t border-[#D4AF37]/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-3 p-4 bg-[#1A1A1A] rounded-xl border border-[#D4AF37]/20"
            >
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[#BFBFBF] text-sm mb-1">Call Us</p>
                <a href="tel:+919177011246" className="text-white font-medium hover:text-[#D4AF37] transition-colors">
                  +91 9177011246
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-3 p-4 bg-[#1A1A1A] rounded-xl border border-[#D4AF37]/20"
            >
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[#BFBFBF] text-sm mb-1">Email Us</p>
                <a href="mailto:info@studioyards.in" className="text-white font-medium hover:text-[#D4AF37] transition-colors">
                  info@studioyards.in
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-start space-x-3 p-4 bg-[#1A1A1A] rounded-xl border border-[#D4AF37]/20"
            >
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-[#BFBFBF] text-sm mb-1">Visit Us</p>
                <p className="text-white font-medium">
                  Hyderabad, Telangana, India
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D4AF37]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#BFBFBF] text-sm">
              © {currentYear} Studio Yards Interiors. All Rights Reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ color: '#D4AF37' }}
                className="text-[#BFBFBF] hover:text-[#D4AF37] transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#D4AF37' }}
                className="text-[#BFBFBF] hover:text-[#D4AF37] transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#D4AF37' }}
                className="text-[#BFBFBF] hover:text-[#D4AF37] transition-colors"
              >
                Sitemap
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
    </footer>
  );
}