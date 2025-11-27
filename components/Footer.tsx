'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'Overview', href: '#overview' },
  { name: 'Residences', href: '#residences' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Floor Plans', href: '#floorplans' },
  { name: 'Location', href: '#location' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-charcoal-950 text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo.svg" 
                alt="ANP Privado" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
            </div>
            <p className="text-charcoal-400 text-sm leading-relaxed mb-6">
              Private. Elevated. Truly Privado. Premium residences at Pune's most coveted address.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-charcoal-800 hover:bg-champagne-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-charcoal-800 hover:bg-champagne-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-charcoal-800 hover:bg-champagne-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="w-10 h-10 bg-charcoal-800 hover:bg-champagne-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-charcoal-400 hover:text-champagne-500 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-champagne-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-charcoal-400 text-sm">Sales Enquiry</p>
                  <a href="tel:+919766915700" className="text-white hover:text-champagne-500 transition-colors">
                    +91 97669 15700
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-champagne-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-charcoal-400 text-sm">Sales Lounge</p>
                  <p className="text-white text-sm">
                    PAN Card Club Road, Baner,<br />Pune, Maharashtra 411045
                  </p>
                  <a 
                    href="https://maps.app.goo.gl/JvwX6uWirRce3Wto7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-champagne-400 hover:text-champagne-500 text-sm mt-1 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <div className="space-y-4">
              <div>
                <p className="text-charcoal-400 text-sm mb-1">Sales Office Hours</p>
                <p className="text-white text-sm">Monday - Sunday</p>
                <p className="text-white text-sm">10:00 AM - 7:00 PM</p>
              </div>
              <div>
                <p className="text-charcoal-400 text-sm mb-1">Site Visit</p>
                <p className="text-white text-sm">By Appointment Only</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="mt-4 w-full bg-champagne-600 hover:bg-champagne-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
              >
                Schedule Site Visit
              </motion.button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-charcoal-800 pt-8">
          <div className="bg-charcoal-900 rounded-lg p-6 mb-6">
            <p className="text-xs text-charcoal-400 leading-relaxed">
              <strong className="text-charcoal-300">RERA Disclaimer:</strong> This project is registered under RERA (Registration Number: MahaRERA No.: P52100002500). Possession within 4 years. All information provided is indicative and subject to change. Artistic impressions, renders, and floor plans are for representational purposes only and may vary from actual construction. Prices are subject to change without prior notice. All specifications are as per final RERA-approved plans. Buyers are advised to verify all details independently before making any purchase decision. This is an official channel partner website for marketing purposes only.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-charcoal-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} ANP Privado. All rights reserved. | Channel Partner Marketing Website
            </p>
            <div className="flex items-center gap-6">
              <button className="text-charcoal-400 hover:text-champagne-500 text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="text-charcoal-400 hover:text-champagne-500 text-sm transition-colors">
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

