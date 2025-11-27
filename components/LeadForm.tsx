'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';

interface LeadFormProps {
  variant?: 'inline' | 'full';
  source?: string;
}

export default function LeadForm({ variant = 'full', source = 'website' }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    interestedIn: '',
    buyingFor: '',
    message: '',
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
          source,
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
          buyingFor: '',
          message: '',
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

  if (variant === 'inline') {
    return (
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-xl p-6 border border-charcoal-100"
      >
        <p className="text-sm font-semibold text-charcoal-900 mb-4">
          Get complete pricing, floor plans & curated offers
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
          <input
            type="text"
            placeholder="Your Name*"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="px-4 py-3 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 text-sm"
          />
          <input
            type="tel"
            placeholder="Mobile Number*"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            required
            pattern="[6-9]\d{9}"
            className="px-4 py-3 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 text-sm"
          />
          <select
            value={formData.interestedIn}
            onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
            required
            className="px-4 py-3 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 text-sm bg-white"
          >
            <option value="">Interested In*</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4 BHK">4 BHK</option>
            <option value="5 BHK">5 BHK</option>
            <option value="Investor">Investor</option>
          </select>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-champagne-600 hover:bg-champagne-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center text-sm px-4 py-3"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              'Get Call Back'
            )}
          </button>
        </div>

        <div className="flex items-start gap-2 mb-2">
          <input
            type="checkbox"
            id="consent-inline"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            required
            className="mt-1"
          />
          <label htmlFor="consent-inline" className="text-xs text-charcoal-600">
            I authorize ANP Privado and its representatives to contact me via call, SMS, or WhatsApp. This will override DND/NDNC registration.
          </label>
        </div>

        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 text-green-600 text-sm font-medium"
          >
            <CheckCircle2 className="w-4 h-4" />
            Thank you! We'll call you back in 10 minutes.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-red-600 text-sm"
          >
            {errorMessage}
          </motion.div>
        )}
      </motion.form>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-charcoal-100 max-w-2xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-2">
            Full Name*
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-2">
            Mobile Number*
          </label>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            required
            pattern="[6-9]\d{9}"
            className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500"
          />
        </div>


        <div>
          <label className="block text-sm font-medium text-charcoal-700 mb-2">
            Preferred Configuration*
          </label>
          <select
            value={formData.interestedIn}
            onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
            required
            className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 bg-white"
          >
            <option value="">Select configuration</option>
            <option value="3 BHK">3 BHK</option>
            <option value="3 BHK Large">3 BHK Large</option>
            <option value="4 BHK">4 BHK</option>
            <option value="4 BHK Large">4 BHK Large</option>
            <option value="5 BHK Duplex">5 BHK Duplex</option>
            <option value="Investor">Investor</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-charcoal-700 mb-2">
            Are you buying for?
          </label>
          <div className="flex flex-wrap gap-3">
            {['Self Use', 'Investment', 'Both'].map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="buyingFor"
                  value={option}
                  checked={formData.buyingFor === option}
                  onChange={(e) => setFormData({ ...formData, buyingFor: e.target.value })}
                  className="text-champagne-600 focus:ring-champagne-500"
                />
                <span className="text-sm text-charcoal-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-charcoal-700 mb-2">
            Anything specific you're looking for?
          </label>
          <textarea
            placeholder="Tell us about your requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 border border-charcoal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne-500 resize-none"
          />
        </div>

        <div className="md:col-span-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.consent}
              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
              required
              className="mt-1 text-champagne-600 focus:ring-champagne-500"
            />
            <span className="text-sm text-charcoal-600">
              I authorize ANP Privado and its representatives to contact me via call, SMS, or WhatsApp. This will override my registry on DND/NDNC.
            </span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Request Call Back'
        )}
      </button>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800"
        >
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm font-medium">
            Thank you for your interest! Our team will contact you within 10 minutes.
          </p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm"
        >
          {errorMessage}
        </motion.div>
      )}
    </motion.form>
  );
}

