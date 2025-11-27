'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function QRCode() {
  const [qrUrl, setQrUrl] = useState('');

  useEffect(() => {
    // Get the current domain and generate QR code URL
    const baseUrl = window.location.origin;
    const targetUrl = `${baseUrl}/qr-enquiry`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(targetUrl)}`;
    setQrUrl(qrCodeUrl);
  }, []);

  const handleClick = () => {
    window.open('/qr-enquiry', '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white p-3 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={handleClick}
      title="Click or scan to enquire"
    >
      {qrUrl ? (
        <img 
          src={qrUrl}
          alt="Scan for Quick Enquiry" 
          className="w-20 h-20 md:w-24 md:h-24"
        />
      ) : (
        <div className="w-20 h-20 md:w-24 md:h-24 bg-charcoal-100 animate-pulse rounded" />
      )}
    </motion.div>
  );
}

