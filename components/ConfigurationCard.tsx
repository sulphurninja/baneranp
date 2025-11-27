'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Home, Maximize2, IndianRupee } from 'lucide-react';
import { Configuration } from '@/types';

interface ConfigurationCardProps {
  config: Configuration;
  index: number;
  onCTAClick: () => void;
}

export default function ConfigurationCard({ config, index, onCTAClick }: ConfigurationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover border border-charcoal-100"
    >
      {/* Image */}
      <div className="relative h-64 bg-gradient-to-br from-charcoal-100 to-charcoal-200 overflow-hidden">
        {config.image ? (
          <img src={config.image} alt={config.name} className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Home className="w-20 h-20 text-charcoal-300" />
          </div>
        )}
        <div className="absolute top-4 right-4 bg-champagne-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {config.type}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-charcoal-900 mb-2">{config.name}</h3>
        
        <div className="flex items-center gap-6 mb-4 pb-4 border-b border-charcoal-100">
          <div className="flex items-center gap-2">
            <Maximize2 className="w-5 h-5 text-champagne-600" />
            <div>
              <p className="text-xs text-charcoal-600">Carpet Area</p>
              <p className="text-sm font-semibold text-charcoal-900">
                {config.carpetArea.min} - {config.carpetArea.max} sq.ft.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IndianRupee className="w-5 h-5 text-champagne-600" />
            <div>
              <p className="text-xs text-charcoal-600">Starting From</p>
              <p className="text-sm font-semibold text-charcoal-900">
                ₹{(config.price.starting / 10000000).toFixed(2)} Cr*
              </p>
            </div>
          </div>
        </div>

        <ul className="space-y-2 mb-6">
          {config.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-charcoal-700">
              <span className="w-1.5 h-1.5 bg-champagne-600 rounded-full mt-1.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCTAClick}
          className="w-full flex items-center justify-center gap-2 bg-champagne-600 hover:bg-champagne-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group"
        >
          Request Detailed Cost Sheet
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </motion.div>
  );
}

