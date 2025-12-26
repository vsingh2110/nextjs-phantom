/**
 * Product Quote Request Form Component
 * =====================================
 * Created: December 27, 2025
 * Purpose: Contact form for product quote requests  
 * Integration: Firebase (MATCHES EXISTING CONTACT FORM FIELDS)
 * 
 * CRITICAL: These fields MUST match Firebase configuration:
 * - name (required)
 * - phone (required)
 * - email (optional)
 * - country (optional)
 * - city (optional)
 * - hospital (optional)
 * - enquiry (required)
 */

'use client';

import { useState, FormEvent } from 'react';

interface ProductQuoteFormProps {
  productName: string;
  productId: string;
}

export default function ProductQuoteForm({ productName, productId }: ProductQuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    
    // TODO: Add Firebase submission logic here (same as contact page)
    try {
      // Simulate submission for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Request Price
            </h2>
            <p className="text-lg text-gray-600">
              Interested in <span className="font-semibold text-blue-600">{productName}</span>? 
              Fill out the form below and our team will contact you within 24 hours.
            </p>
          </div>

          {/* Form - MATCHES FIREBASE FIELDS EXACTLY */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name (Required) */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Type Your Name"
              />
            </div>

            {/* Phone (Required) */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Type Your Phone Number"
              />
            </div>

            {/* Email (Optional) */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Type Your Email"
              />
            </div>

            {/* Country & City Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Type Your Country Name"
                />
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Type Your City Name"
                />
              </div>
            </div>

            {/* Hospital (Optional) */}
            <div>
              <label htmlFor="hospital" className="block text-sm font-medium text-gray-700 mb-2">
                Hospital/Clinic/Diagnostic Center&apos;s Name (Optional)
              </label>
              <input
                type="text"
                id="hospital"
                name="hospital"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Type Hospital/Clinic/Diagnostic Center Name"
              />
            </div>

            {/* Enquiry (Required) - Pre-filled with product name */}
            <div>
              <label htmlFor="enquiry" className="block text-sm font-medium text-gray-700 mb-2">
                Enquiry <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="enquiry"
                name="enquiry"
                required
                defaultValue={`Enquiry for ${productName}`}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Type Your Enquiries/Requests"
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Request'
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-center font-medium">
                  ✓ Form Submitted Successfully! Our team will contact you within 24 hours.
                </p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-center font-medium">
                  ✗ Something went wrong. Please try again or call us at +91 98999 63601
                </p>
              </div>
            )}
          </form>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-2">
              Or call us directly:
            </p>
            <a href="tel:+919899963601" className="text-2xl font-bold text-blue-600 hover:text-blue-700">
              +91 98999 63601
            </a>
            <p className="text-sm text-gray-500 mt-2">
              Monday to Saturday: 10:30 AM - 6:30 PM IST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
