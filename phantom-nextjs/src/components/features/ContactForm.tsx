'use client';

import { useState, useCallback } from 'react';
import { submitFormToFirebase, FormData } from '@/lib/firebase';
import { sendEmailNotification } from '@/lib/emailjs';

interface ContactFormProps {
  formId?: string;
  className?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function ContactForm({ 
  formId = "contactForm", 
  className = "",
  onSuccess,
  onError 
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    hospital: '',
    enquiry: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validateForm = useCallback(() => {
    const newErrors: any = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
    }
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleInputChange = useCallback((e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev: any) => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e: any) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      // Prepare data for Firebase
      const firebaseData: FormData = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        country: formData.country,
        enquiry: formData.enquiry,
        city: formData.city,
        hospital: formData.hospital,
        timestamp: new Date().toISOString()
      };

      // Submit to Firebase and send email concurrently
      const [firebaseResult, emailResult] = await Promise.all([
        submitFormToFirebase(firebaseData),
        sendEmailNotification(formData)
      ]);

      console.log('Firebase result:', firebaseResult);
      console.log('Email result:', emailResult);

      // Clear form
      setFormData({
        name: '',
        phone: '',
        email: '',
        country: '',
        city: '',
        hospital: '',
        enquiry: ''
      });

      // Show success message
      setSubmitStatus('success');
      setStatusMessage('Your form has been submitted successfully! We will contact you soon.');
      
      // If this is a popup form, close the modal after success
      if (formId === 'popupContactForm') {
        // Dispatch custom event to close modal
        window.dispatchEvent(new CustomEvent('closeContactModal'));
      }
      
      onSuccess?.();

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setSubmitStatus('error');
      setStatusMessage(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm, onSuccess, onError]);

  return (
    <>
      {/* Toast Notification for Success/Error Messages */}
      {submitStatus === 'success' && (
        <div className="fixed top-4 right-4 z-[9999] bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg max-w-sm animate-fade-in">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{statusMessage}</p>
            </div>
            <div className="ml-auto pl-3">
              <button
                onClick={() => {
                  setSubmitStatus('idle');
                  setStatusMessage('');
                }}
                className="text-white hover:text-gray-200"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="fixed top-4 right-4 z-[9999] bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg max-w-sm animate-fade-in">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">{statusMessage}</p>
            </div>
            <div className="ml-auto pl-3">
              <button
                onClick={() => {
                  setSubmitStatus('idle');
                  setStatusMessage('');
                }}
                className="text-white hover:text-gray-200"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <form 
        id={formId}
        onSubmit={handleSubmit}
        className={`space-y-4 sm:space-y-5 ${className}`}
      >
        {/* Name Field */}
        <div className="space-y-1">
          <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Type your name"
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'} disabled:bg-gray-100 disabled:cursor-not-allowed`}
            disabled={isSubmitting}
          />
          {errors.name && <span className="text-xs sm:text-sm text-red-600">{errors.name}</span>}
        </div>

        {/* Phone Field */}
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Type your phone number"
            className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'} disabled:bg-gray-100 disabled:cursor-not-allowed`}
            disabled={isSubmitting}
          />
          {errors.phone && <span className="text-xs sm:text-sm text-red-600">{errors.phone}</span>}
        </div>

        {/* Email Field */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Type your email"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          />
        </div>

        {/* Country & City - 2 Column Grid on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Country Field */}
          <div className="space-y-1">
            <label htmlFor="country" className="block text-xs sm:text-sm font-medium text-gray-700">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              placeholder="Type your country"
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'} disabled:bg-gray-100 disabled:cursor-not-allowed`}
              disabled={isSubmitting}
            />
            {errors.country && <span className="text-xs sm:text-sm text-red-600">{errors.country}</span>}
          </div>

          {/* City Field */}
          <div className="space-y-1">
            <label htmlFor="city" className="block text-xs sm:text-sm font-medium text-gray-700">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Type your city"
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.city ? 'border-red-500 bg-red-50' : 'border-gray-300 hover:border-gray-400'} disabled:bg-gray-100 disabled:cursor-not-allowed`}
              disabled={isSubmitting}
            />
            {errors.city && <span className="text-xs sm:text-sm text-red-600">{errors.city}</span>}
          </div>
        </div>

        {/* Hospital Field */}
        <div className="space-y-1">
          <label htmlFor="hospital" className="block text-xs sm:text-sm font-medium text-gray-700">
            Hospital/Clinic/Diagnostic Center Name <span className="text-gray-400 text-xs">(Optional)</span>
          </label>
          <input
            type="text"
            id="hospital"
            name="hospital"
            value={formData.hospital}
            onChange={handleInputChange}
            placeholder="Type hospital/clinic/diagnostic center name"
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          />
        </div>

        {/* Enquiry Field */}
        <div className="space-y-1">
          <label htmlFor="enquiry" className="block text-xs sm:text-sm font-medium text-gray-700">
            Enquiry / Request
          </label>
          <textarea
            id="enquiry"
            name="enquiry"
            value={formData.enquiry}
            onChange={handleInputChange}
            placeholder="Type your enquiry or request here..."
            rows={4}
            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg transition-all duration-200 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed resize-y min-h-[100px]"
            disabled={isSubmitting}
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button 
            type="submit" 
            id="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none text-sm sm:text-base flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <i className="fa fa-spinner fa-spin"></i>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane"></i>
                <span>Submit Enquiry</span>
              </>
            )}
          </button>
        </div>
      </form>
    </>
  );
} 