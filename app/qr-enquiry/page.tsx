'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Phone, User, Home } from 'lucide-react';

export default function QREnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    interestedIn: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'qr-code',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          mobile: '',
          email: '',
          interestedIn: '',
          consent: false,
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-champagne-50 via-white to-charcoal-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Logo & Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <img src="/logo.svg" alt="ANP Privado" className="h-16 mx-auto mb-4" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-charcoal-900 mb-2"
          >
            Welcome to ANP Privado
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-charcoal-600"
          >
            Your dream home awaits at Baner's most prestigious address
          </motion.p>
        </div>

        {/* RERA Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl p-4 shadow-md border border-champagne-200 mb-6 text-center"
        >
          <p className="text-sm text-charcoal-600 mb-1">RERA Registered Project</p>
          <p className="text-lg font-bold text-champagne-600">MahaRERA No.: P52100002500</p>
          <p className="text-xs text-charcoal-500 mt-1">Possession Within 4 Years</p>
        </motion.div>

        {/* Form */}
        {submitStatus !== 'success' ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-charcoal-100"
          >
            <h2 className="text-xl font-bold text-charcoal-900 mb-6 text-center">
              Get Instant Call Back
            </h2>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Full Name*
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal-400" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Mobile Number*
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal-400" />
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                    pattern="[6-9]\d{9}"
                    className="w-full pl-11 pr-4 py-3 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500"
                  />
                </div>
              </div>


              {/* Interested In */}
              <div>
                <label className="block text-sm font-medium text-charcoal-700 mb-2">
                  Interested In*
                </label>
                <div className="relative">
                  <Home className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-charcoal-400" />
                  <select
                    value={formData.interestedIn}
                    onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 bg-white appearance-none"
                  >
                    <option value="">Select configuration</option>
                    <option value="3 BHK">3 BHK (1309 sq.ft.)</option>
                    <option value="3 BHK Large">3 BHK Large (1489 sq.ft.)</option>
                    <option value="4 BHK">4 BHK (1855 sq.ft.)</option>
                    <option value="4 BHK Large">4 BHK Large (2306 sq.ft.)</option>
                    <option value="Investor">Investor Enquiry</option>
                  </select>
                </div>
              </div>

              {/* Consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  required
                  className="mt-1 text-champagne-600 focus:ring-champagne-500"
                />
                <label htmlFor="consent" className="text-xs text-charcoal-600">
                  I authorize ANP Privado to contact me via call, SMS, or WhatsApp. This will override my registry on DND/NDNC.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-champagne-600 hover:bg-champagne-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Get Call Back in 10 Minutes'
              )}
            </button>

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
              >
                {errorMessage}
              </motion.div>
            )}

            {/* Contact Info */}
            <div className="mt-6 text-center">
              <p className="text-sm text-charcoal-600 mb-2">Or call us directly</p>
              <a
                href="tel:+919766915700"
                className="text-lg font-bold text-champagne-600 hover:text-champagne-700"
              >
                +91 97669 15700
              </a>
            </div>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-charcoal-100 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-charcoal-900 mb-4">
              Thank You!
            </h2>
            <p className="text-charcoal-600 mb-6">
              Your enquiry has been received. Our team will contact you within 10 minutes.
            </p>
            <div className="bg-champagne-50 rounded-lg p-4 border border-champagne-200">
              <p className="text-sm text-charcoal-700 mb-2">
                <strong>ANP Privado</strong>
              </p>
              <p className="text-sm text-charcoal-600">
                PAN Card Club Road, Baner, Pune
              </p>
              <p className="text-sm text-champagne-600 font-semibold mt-2">
                Starting from ₹2.61 Cr* AI
              </p>
            </div>
            <button
              onClick={() => window.location.href = '/'}
              className="mt-6 text-champagne-600 hover:text-champagne-700 font-semibold"
            >
              Visit Full Website →
            </button>
          </motion.div>
        )}

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center text-xs text-charcoal-500"
        >
          <p>© 2024 ANP Privado. All rights reserved.</p>
          <p className="mt-1">Channel Partner Marketing Website</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

