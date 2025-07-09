'use client';

import React, { useState, useEffect } from 'react';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  successMessage?: string;
}

export default function ContactFormModal({ 
  isOpen, 
  onClose, 
  title = "Contact Us", 
  subtitle = "Fill out the form below and we'll get back to you soon",
  successMessage = "Your Form Has Been Submitted Successfully"
}: ContactFormModalProps) {
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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Debug submitStatus changes
  useEffect(() => {
    console.log('SubmitStatus changed to:', submitStatus);
  }, [submitStatus]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    if (!formData.name || !formData.phone || !formData.country || !formData.city) {
      alert("Fill Required Fields!");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Get timestamp
      const sayDate = () => {
        let dateTimeStamp = Date();
        let DateTimeStampVal = dateTimeStamp.toString();
        return "Form was submitted at: " + DateTimeStampVal;
      };
      let sayDateVal = sayDate();

      console.log('Starting form submission...');
      console.log('Form data:', formData);

      // Check if Firebase is available
      const firebase = (window as any).firebase;
      const db = (window as any).db;
      
      console.log('Firebase available:', !!firebase);
      console.log('DB available:', !!db);

      let firebasePromise = Promise.resolve();
      let emailjsPromise = Promise.resolve();

      // Save Form Data To Firebase FIRST
      if (firebase && db) {
        console.log('Saving to Firebase...');
        firebasePromise = db.doc().set({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          country: formData.country,
          enquiry: formData.enquiry,
          city: formData.city,
          hospital: formData.hospital,
          sayDateVal: sayDateVal,
        }).then(() => {
          console.log('Firebase save successful');
        }).catch((error: any) => {
          console.error('Firebase save error:', error);
          throw error;
        });
      } else {
        console.warn('Firebase not available');
      }

      // Send email using EmailJS SECOND
      const emailjs = (window as any).emailjs;
      console.log('EmailJS available:', !!emailjs);
      console.log('EmailJS ready:', (window as any).emailjsReady);
      
      if (emailjs && emailjs.send && (window as any).emailjsReady) {
        console.log('Sending email via EmailJS...');
        emailjsPromise = emailjs.send("service_x2ysvvr", "template_0qgs9u9", {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          country: formData.country,
          city: formData.city,
          hospital: formData.hospital,
          enquiry: formData.enquiry,
        }).then((response: any) => {
          console.log('EmailJS send successful:', response);
        }).catch((error: any) => {
          console.error('EmailJS send error:', error);
          throw error;
        });
      } else {
        console.warn('EmailJS not available or not ready');
        // Try to wait for EmailJS to be ready
        if (emailjs && emailjs.send && !(window as any).emailjsReady) {
          console.log('Waiting for EmailJS to be ready...');
          await new Promise(resolve => {
            const checkReady = () => {
              if ((window as any).emailjsReady) {
                resolve(true);
              } else {
                setTimeout(checkReady, 100);
              }
            };
            checkReady();
          });
          
          console.log('EmailJS is now ready, sending email...');
          emailjsPromise = emailjs.send("service_x2ysvvr", "template_0qgs9u9", {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            country: formData.country,
            city: formData.city,
            hospital: formData.hospital,
            enquiry: formData.enquiry,
          }).then((response: any) => {
            console.log('EmailJS send successful:', response);
          }).catch((error: any) => {
            console.error('EmailJS send error:', error);
            throw error;
          });
        }
      }

      // Execute both Firebase save and EmailJS send concurrently
      await Promise.all([firebasePromise, emailjsPromise]);
      console.log("Both Firebase save and EmailJS send completed successfully");

      console.log('Setting success status...');
      setSubmitStatus('success');
      console.log('Success status set to:', 'success');
      
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
      
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Error during form submission:', error);
      alert("Something went wrong. Please try again.");
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-2 md:p-8 overflow-x-hidden">
      <div className="bg-white rounded-lg w-full max-w-xs md:max-w-2xl md:w-[700px] h-auto overflow-y-auto relative flex flex-col break-words">
        {/* Header */}
        <div className="bg-primary-500 text-white p-2 md:p-4 rounded-t-lg flex-shrink-0">
          <h2 className="text-lg md:text-xl font-bold text-center break-words">{title}</h2>
          <p className="text-center text-primary-100 mt-1 break-words">{subtitle}</p>
          <button 
            onClick={onClose} 
            className="absolute top-2 right-2 md:top-3 md:right-3 text-white hover:text-gray-200 text-xl font-bold border-none cursor-pointer bg-transparent hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200"
          >
            <i className="fa fa-close"></i>
          </button>
        </div>
        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-2 md:p-6 flex flex-col">
          {/* Spinner */}
          <div 
            className="text-center py-4"
            style={{display: isSubmitting ? 'block' : 'none'}}
          >
            <div className="inline-flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
              <span className="ml-3 text-gray-600">Submitting...</span>
            </div>
          </div>
          
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <i className="fa fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Type Your Name" 
                  required 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="phone">
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <i className="fa fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Type Your Phone Number" 
                  required 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <i className="fa fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Type Your Email" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="country">
                Country <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <i className="fa fa-globe absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="text" 
                  name="country" 
                  id="country" 
                  value={formData.country}
                  onChange={handleInputChange}
                  placeholder="Type Your Country" 
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="city">
                City <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <i className="fa fa-map-marker absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="text" 
                  name="city" 
                  id="city" 
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Type Your City" 
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            {/* Hospital */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="hospital">
                Hospital/Clinic/Diagnostic Center Name <span className="text-gray-500 text-xs">(Optional)</span>
              </label>
              <div className="relative">
                <i className="fa fa-hospital-o absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input 
                  type="text" 
                  name="hospital" 
                  id="hospital" 
                  value={formData.hospital}
                  onChange={handleInputChange}
                  placeholder="Type Hospital/Clinic Name" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            {/* Enquiry */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="enquiry">
                Enquiry <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <i className="fa fa-comment absolute left-3 top-3 text-gray-400"></i>
                <textarea 
                  name="enquiry" 
                  id="enquiry" 
                  value={formData.enquiry}
                  onChange={handleInputChange}
                  placeholder="Type Your Enquiries/Requests" 
                  required
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <i className="fa fa-paper-plane mr-2"></i>
                Submit Request
              </span>
            )}
          </button>

          {/* Footer Note */}
          <p className="text-center text-xs text-gray-500 mt-4">
            <i className="fa fa-shield mr-1"></i>
            Your information is secure and will only be used to contact you.
          </p>
        </form>
      </div>
    </div>
  );
} 