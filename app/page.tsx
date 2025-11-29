'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  IndianRupee,
  Building2,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Download,
  ChevronLeft,
  ChevronRight,
  Play,
  X,
} from 'lucide-react';
import * as Icons from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadForm from '@/components/LeadForm';
import ConfigurationCard from '@/components/ConfigurationCard';
import AmenityCard from '@/components/AmenityCard';
import QRCode from '@/components/QRCode';

import {
  configurations,
  amenities,
  locationHighlights,
  testimonials,
  projectFacts,
  pricingData,
  paymentFAQs,
  floorPlans,
} from '@/lib/data';

export default function Home() {
  const [selectedFloorPlan, setSelectedFloorPlan] = useState(floorPlans[0]);
  const [selectedAmenityCategory, setSelectedAmenityCategory] = useState<string>('all');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const amenityCategories = [
    { id: 'all', label: 'All Amenities' },
    { id: 'wellness', label: 'Wellness' },
    { id: 'social', label: 'Social' },
    { id: 'sports', label: 'Sports' },
    { id: 'kids', label: 'Kids & Family' },
    { id: 'convenience', label: 'Convenience' },
  ];

  const filteredAmenities =
    selectedAmenityCategory === 'all'
      ? amenities
      : amenities.filter((a) => a.category === selectedAmenityCategory);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/95 via-charcoal-900/85 to-charcoal-900/70 z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videohero.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="section-container relative z-20 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-champagne-400 font-semibold mb-4 tracking-wide uppercase text-sm"
              >
                New Launch · Baner, Pune
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="heading-xl text-white mb-6 leading-tight"
              >
                Presenting
                <br />
                <span className="text-champagne-400">An Abode of Privacy</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl text-gray-200 mb-8 leading-relaxed"
              >
                At ANP Privado, life unfolds in a world that is exotic, endearing, and luxuriant.
                Welcome to the World of Privado at Pan Card Club Road, Baner.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4 mb-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-champagne-600/20 rounded-full flex items-center justify-center">
                    <IndianRupee className="w-5 h-5 text-champagne-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Starting from ₹2.61 Cr* AI onwards</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-champagne-600/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-champagne-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">10 Acres of Wonders at PAN Card Club Road, Baner</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-champagne-600/20 rounded-full flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-champagne-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">65+ Rare Amenities • All Corner Apartments</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 mb-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  Get Pricing & Brochure
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-charcoal-900 backdrop-blur-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule a Site Visit
                </motion.button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-sm text-gray-400"
              >
                RERA registration in process · Channel partner | Instant call-back guaranteed
              </motion.p>
            </motion.div>

            {/* Right Content - Building Video */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full aspect-[4/5] object-cover"
                >
                  <source src="/videohero.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <p className="text-xs text-charcoal-600 font-medium">Artistic Impression</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Lead Capture Strip */}
      <section className="py-12 bg-champagne-50 border-b border-champagne-100">
        <div className="section-container">
          <LeadForm variant="inline" source="hero-strip" />
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 md:py-32 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-charcoal-900 mb-4">
              ANP Privado at PAN Card Club Road, Baner
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Where architectural excellence meets the prestige of Pune's most coveted address
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                At <strong>ANP Privado</strong>, life unfolds in a world that is exotic, endearing, and luxuriant. Welcome to the World of Privado at Pan Card Club Road, Baner—where admiration never ends.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                Spread across <strong>10 acres of wonders</strong>, ANP Privado features <strong>9 meditative towers</strong> housing exclusive 3 & 4 BHK homes. Every residence is an <strong>all-corner apartment</strong>, ensuring maximum natural light, ventilation, and privacy.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                Experience <strong>65+ rare amenities</strong> including a sprawling <strong>50,000 sq.ft. indoor clubhouse</strong>—one of Pune's largest. From wellness to recreation, every aspect of modern living has been thoughtfully curated.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed">
                This is more than a home—it's an abode of privacy where luxury meets tranquility. <strong>Show flat ready, visit today.</strong> For HNI buyers and investors seeking the perfect blend of location, luxury, and lifestyle, ANP Privado represents an opportunity that comes once in a generation.
              </p>
            </motion.div>

            {/* Right - Project Facts Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-champagne-50 to-white rounded-2xl p-8 shadow-xl border border-champagne-100"
            >
              <h3 className="text-2xl font-bold text-charcoal-900 mb-6">Project Highlights</h3>
              <div className="space-y-4">
                {[
                  { label: 'Location', value: projectFacts.location },
                  { label: 'Land Parcel', value: projectFacts.landArea },
                  { label: 'Configurations', value: projectFacts.configurations },
                  { label: 'Starting Price', value: projectFacts.startingPrice },
                  { label: 'Possession', value: projectFacts.possession },
                  { label: 'Towers', value: projectFacts.towers },
                  { label: 'Total Units', value: projectFacts.units },
                  { label: 'Open Space', value: projectFacts.openSpace },
                  { label: 'Clubhouse', value: projectFacts.clubhouseArea },
                ].map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex items-center justify-between py-3 border-b border-champagne-200 last:border-0"
                  >
                    <span className="text-charcoal-600 font-medium">{fact.label}</span>
                    <span className="text-charcoal-900 font-semibold text-right">{fact.value}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-charcoal-500 mt-6 italic">
                * All information is indicative & subject to change as per RERA approvals
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RERA Info Banner with QR Code */}
      <section className="py-8 bg-gradient-to-r from-champagne-600 to-champagne-700 border-y border-champagne-800">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 md:gap-6 flex-wrap md:flex-nowrap">
              {/* RERA Certificate Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-2 rounded-xl shadow-lg"
              >
                <img 
                  src="/rera.jpeg" 
                  alt="RERA Certificate" 
                  className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
              </motion.div>
              
              {/* QR Code - Points to /qr-enquiry page */}
              <QRCode />
              
              {/* RERA Info Text */}
              <div className="text-white">
                <p className="text-sm font-medium mb-1">RERA Registered Project</p>
                <p className="text-xl md:text-2xl font-bold mb-1">MahaRERA No.: P52100002500</p>
                <p className="text-xs md:text-sm opacity-90">Possession Within 4 Years • Scan QR for Quick Enquiry</p>
              </div>
            </div>
            <motion.a
              href="tel:+919766915700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-white text-champagne-700 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              <Icons.Phone className="w-5 h-5" />
              +91 97669 15700
            </motion.a>
          </div>
        </div>
      </section>

      {/* Residences / Configurations Section */}
      <section id="residences" className="py-20 md:py-32 bg-gradient-to-b from-charcoal-50 to-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-charcoal-900 mb-4">
              Residences Curated for Finer Living
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Choose from thoughtfully designed configurations that adapt to your lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {configurations.map((config, index) => (
              <ConfigurationCard
                key={config.id}
                config={config}
                index={index}
                onCTAClick={scrollToContact}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-20 md:py-32 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-charcoal-900 mb-4">
              Amenities That Anticipate Your Every Need
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Over 40,000 sq.ft. of curated spaces designed for wellness, recreation, and community
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {amenityCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedAmenityCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedAmenityCategory === category.id
                    ? 'bg-champagne-600 text-white shadow-lg'
                    : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAmenities.map((amenity, index) => (
              <AmenityCard key={amenity.id} amenity={amenity} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Floor Plans Section */}
      <section id="floorplans" className="py-20 md:py-32 bg-gradient-to-b from-charcoal-50 to-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-charcoal-900 mb-4">
              Thoughtfully Planned Floor Layouts
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Every square foot designed with purpose and precision
            </p>
          </motion.div>

          {/* Floor Plan Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {floorPlans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedFloorPlan(plan)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedFloorPlan.id === plan.id
                    ? 'bg-champagne-600 text-white shadow-lg'
                    : 'bg-white text-charcoal-700 hover:bg-charcoal-50 border border-charcoal-200'
                }`}
              >
                {plan.configuration}
              </button>
            ))}
          </motion.div>

          {/* Floor Plan Display */}
          <motion.div
            key={selectedFloorPlan.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden border border-charcoal-100"
          >
            {/* Floor Plan Image */}
            <div className="lg:col-span-2 bg-charcoal-50 p-8 flex items-center justify-center">
              <img src={selectedFloorPlan.image} alt={selectedFloorPlan.configuration} className="w-full h-auto rounded-lg blur-sm" />
      </div>

            {/* Floor Plan Details */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-6">
                  {selectedFloorPlan.configuration}
                </h3>
                <div className="space-y-4 mb-8">
                  <div>
                    <p className="text-sm text-charcoal-600 mb-1">Carpet Area</p>
                    <p className="text-lg font-semibold text-charcoal-900">
                      {selectedFloorPlan.carpetArea} sq.ft.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-600 mb-1">Facing</p>
                    <p className="text-lg font-semibold text-charcoal-900">
                      {selectedFloorPlan.facing}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-600 mb-1">Tower</p>
                    <p className="text-lg font-semibold text-charcoal-900">
                      {selectedFloorPlan.tower}
                    </p>
                  </div>
                </div>
      </div>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Floor Plan PDF
                </motion.button>
                <p className="text-xs text-charcoal-500 text-center italic">
                  All floor plans are indicative & subject to architect/authority changes
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 md:py-32 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-charcoal-900 mb-4">
              Visualise Your Future Everyday
          </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Explore renders and artistic impressions of your new home
            </p>
          </motion.div>

          {/* Gallery Grid - Masonry Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/WhatsApp Image 2025-11-27 at 5.04.15 PM.jpeg', label: 'Exterior View' },
              { src: '/2.jpeg', label: '3 BHK Layout' },
              { src: '/3.jpeg', label: '3 BHK Large' },
              { src: '/4.jpeg', label: '4 BHK Layout' },
              { src: '/5.jpeg', label: '4 BHK Large' },
              { src: '/6.jpeg', label: 'Floor Plan' },
              { src: '/7.jpeg', label: 'Floor Plan' },
              { src: '/8.jpeg', label: 'Floor Plan' },
              { src: '/9.jpeg', label: 'Floor Plan' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-xl shadow-lg cursor-pointer card-hover ${
                  index === 0 || index === 4 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img 
                  src={item.src} 
                  alt={item.label} 
                  className={`w-full h-full object-cover ${
                    index === 0 || index === 4 ? 'aspect-[16/10]' : 'aspect-square'
                  }`} 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-semibold text-lg mb-1">
                      {item.label}
                    </p>
                    <p className="text-champagne-300 text-sm">ANP Privado</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Connectivity Section */}
      <section id="location" className="py-20 md:py-32 bg-gradient-to-b from-charcoal-50 to-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-charcoal-900 mb-4">
              An Address That Works as Hard as You Do
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Strategically located at PAN Card Club Road with unmatched connectivity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-charcoal-100 rounded-2xl overflow-hidden shadow-xl h-[500px]"
            >
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4387854280203!2d73.78111779999999!3d18.554246499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfde0cadd94f%3A0xed9735aa8a38a161!2sANP%20PRIVADO!5e0!3m2!1sen!2sin!4v1764250581311!5m2!1sen!2sin" width="600" height="450"   loading="lazy"/>
            </motion.div>

            {/* Connectivity Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-charcoal-900 mb-8">Key Landmarks & Connectivity</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {locationHighlights.map((location, index) => {
                  const IconComponent = (Icons as any)[location.icon] || Icons.MapPin;
                  return (
                    <motion.div
                      key={location.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-white rounded-xl p-5 shadow-md border border-charcoal-100 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-champagne-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-champagne-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-charcoal-900 mb-1 text-sm">
                            {location.name}
                          </h4>
                          <p className="text-xs text-charcoal-600">
                            {location.distance} · {location.time}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 bg-champagne-50 rounded-xl p-6 border border-champagne-100"
              >
                <h4 className="font-bold text-charcoal-900 mb-3">Why PAN Card Club Road?</h4>
                <p className="text-charcoal-700 leading-relaxed">
                  PAN Card Club Road has emerged as Pune's most prestigious residential corridor, attracting HNI buyers and investors. With its proximity to IT hubs, premium schools, hospitals, and entertainment zones, it offers the perfect balance of convenience and exclusivity.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & Payment Plans Section */}
      <section id="pricing" className="py-20 md:py-32 bg-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-charcoal-900 mb-4">
              Transparent Pricing & Investor-Friendly Options
            </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Flexible payment plans designed for your convenience
            </p>
          </motion.div>

          {/* Pricing Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-charcoal-100 mb-12"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-champagne-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Configuration</th>
                    <th className="px-6 py-4 text-left font-semibold">Carpet Area</th>
                    <th className="px-6 py-4 text-left font-semibold">Starting Price</th>
                    <th className="px-6 py-4 text-center font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((item, index) => (
                    <motion.tr
                      key={item.configuration}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="border-b border-charcoal-100 hover:bg-champagne-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-charcoal-900">{item.configuration}</td>
                      <td className="px-6 py-4 text-charcoal-700">{item.carpetArea}</td>
                      <td className="px-6 py-4 font-semibold text-champagne-600">{item.startingPrice}</td>
                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={scrollToContact}
                          className="text-champagne-600 hover:text-champagne-700 font-semibold text-sm underline"
                        >
                          Get Breakup
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Payment Schedule CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Payment Schedule
            </motion.button>
          </motion.div>

          {/* Payment FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-charcoal-900 mb-8 text-center">
              Payment Plan FAQs
            </h3>
            <div className="max-w-3xl mx-auto space-y-4">
              {paymentFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-md border border-charcoal-100 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-charcoal-50 transition-colors"
                  >
                    <span className="font-semibold text-charcoal-900">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: expandedFAQ === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="w-5 h-5 text-charcoal-600" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedFAQ === index ? 'auto' : 0,
                      opacity: expandedFAQ === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-charcoal-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-charcoal-50 to-white">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-lg text-charcoal-900 mb-4">
              What Our Residents Say
          </h2>
            <p className="text-lg text-charcoal-600 max-w-3xl mx-auto">
              Hear from those who've made ANP Privado their home
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-charcoal-100 card-hover"
              >
                <div className="mb-6">
                  <svg className="w-10 h-10 text-champagne-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-charcoal-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-charcoal-900">{testimonial.name}</p>
                  <p className="text-sm text-charcoal-600">
                    {testimonial.role} · {testimonial.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Developer Section */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img src="/WhatsApp Image 2025-11-27 at 5.04.14 PM.jpeg" alt="ANP Privado" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md text-charcoal-900 mb-6">
                Built by People Who Build Landmarks
          </h2>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                With over two decades of excellence in real estate development, ANP Group has established itself as a trusted name in creating premium residential and commercial spaces across Pune.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                Our commitment to quality, transparency, and customer satisfaction has earned us the trust of thousands of families who call our developments home.
              </p>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-8">
                ANP Privado represents the culmination of our experience, vision, and dedication to creating not just buildings, but legacies that stand the test of time.
              </p>

              {/* Credibility Badges */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-champagne-50 rounded-lg border border-champagne-100">
                  <p className="text-3xl font-bold text-champagne-600 mb-1">20+</p>
                  <p className="text-sm text-charcoal-700 font-medium">Years of Excellence</p>
                </div>
                <div className="text-center p-4 bg-champagne-50 rounded-lg border border-champagne-100">
                  <p className="text-3xl font-bold text-champagne-600 mb-1">50+</p>
                  <p className="text-sm text-charcoal-700 font-medium">Projects Delivered</p>
                </div>
                <div className="text-center p-4 bg-champagne-50 rounded-lg border border-champagne-100">
                  <p className="text-3xl font-bold text-champagne-600 mb-1">5000+</p>
                  <p className="text-sm text-charcoal-700 font-medium">Happy Families</p>
                </div>
                <div className="text-center p-4 bg-champagne-50 rounded-lg border border-champagne-100">
                  <p className="text-3xl font-bold text-champagne-600 mb-1">100%</p>
                  <p className="text-sm text-charcoal-700 font-medium">RERA Compliant</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="btn-primary"
              >
                Schedule a Meeting with Our Team
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA + Lead Form Section */}
      <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-champagne-50 via-white to-charcoal-50">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-lg text-charcoal-900 mb-4">
              Ready to Experience ANP Privado in Person?
          </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Share a few details & our team will curate a personalised walkthrough for you
            </p>
          </motion.div>

          <LeadForm variant="full" source="bottom-form" />

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-center"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm text-charcoal-700 font-medium">Instant Call-Back</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm text-charcoal-700 font-medium">100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm text-charcoal-700 font-medium">No Spam Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm text-charcoal-700 font-medium">RERA Verified</span>
            </div>
          </motion.div>
      </div>
      </section>

      <Footer />
    </main>
  );
}
