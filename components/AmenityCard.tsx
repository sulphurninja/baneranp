'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Amenity } from '@/types';

interface AmenityCardProps {
  amenity: Amenity;
  index: number;
}

export default function AmenityCard({ amenity, index }: AmenityCardProps) {
  // Dynamically get the icon component
  const IconComponent = (Icons as any)[amenity.icon] || Icons.Circle;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-charcoal-100 card-hover"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-champagne-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-champagne-600 transition-colors duration-300">
          <IconComponent className="w-6 h-6 text-champagne-600 group-hover:text-white transition-colors duration-300" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-charcoal-900 mb-1 group-hover:text-champagne-600 transition-colors">
            {amenity.name}
          </h4>
          <p className="text-sm text-charcoal-600 leading-relaxed">
            {amenity.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

