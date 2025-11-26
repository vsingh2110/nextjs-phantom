'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRef } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

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
  const [statusMessage, setStatusMessage] = useState('');
  const [errors, setErrors] = useState<any>({});
  const [firebaseReady, setFirebaseReady] = useState(false);
  const [firestoreDb, setFirestoreDb] = useState<any>(null);
  const [emailjsReady, setEmailjsReady] = useState(false);
  const [emailjsInstance, setEmailjsInstance] = useState<any>(null);
  const firebaseConfig = {
    apiKey: "AIzaSyB_Jl_3FgNT7bHFRY63_e2FkfuqMkUJz5A",
    authDomain: "phantom-test-site-form.firebaseapp.com",
    databaseURL: "https://phantom-test-site-form-default-rtdb.firebaseio.com",
    projectId: "phantom-test-site-form",
    storageBucket: "phantom-test-site-form.appspot.com",
    messagingSenderId: "514732869106",
    appId: "1:514732869106:web:b65039a4f2e1728aeb976b"
  };

  // Debug submitStatus changes
  useEffect(() => {
    console.log('SubmitStatus changed to:', submitStatus);
  }, [submitStatus]);

  useEffect(() => {
    // Firebase
    try {
      if (!getApps().length) {
        initializeApp(firebaseConfig);
        console.log('Firebase initialized');
      }
      const db = getFirestore();
      setFirestoreDb(db);
      setFirebaseReady(true);
      console.log('Firestore set and ready');
    } catch (e) {
      console.error('Firebase init error:', e);
    }
    // EmailJS (NPM)
    try {
      emailjs.init("2kZrD3IVCkNfJsW6w");
      setEmailjsReady(true);
      setEmailjsInstance(emailjs);
      console.log('EmailJS ready (NPM)');
    } catch (e) {
      console.error('EmailJS init error:', e);
    }
  }, []);

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

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }
    // Block submission if not ready
    if (!firebaseReady || !firestoreDb || !emailjsReady || !emailjsInstance) {
      setSubmitStatus('error');
      setStatusMessage('Form system not ready. Please wait a few seconds and try again.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

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

      // Save Form Data To Firebase FIRST
      if (firebaseReady && firestoreDb) {
        console.log('Saving to Firebase...');
        await addDoc(collection(firestoreDb, 'formData'), {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          country: formData.country,
          enquiry: formData.enquiry,
          city: formData.city,
          hospital: formData.hospital,
          sayDateVal: sayDateVal,
        });
        console.log('Firebase save successful');
      } else {
        console.warn('Firebase not available');
      }

      // Send email using EmailJS SECOND
      if (emailjsReady && emailjsInstance) {
        console.log('Sending email via EmailJS...');
        await emailjsInstance.send("service_x2ysvvr", "template_0qgs9u9", {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          country: formData.country,
          city: formData.city,
          hospital: formData.hospital,
          enquiry: formData.enquiry,
        });
        console.log('EmailJS send successful');
      } else {
        console.warn('EmailJS not available or not ready');
        // Try to wait for EmailJS to be ready
        if (emailjsReady && emailjsInstance && !(window as any).emailjsReady) {
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
          await emailjsInstance.send("service_x2ysvvr", "template_0qgs9u9", {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            country: formData.country,
            city: formData.city,
            hospital: formData.hospital,
            enquiry: formData.enquiry,
          });
        }
      }

      console.log('Setting success status...');
      setSubmitStatus('success');
      setStatusMessage(successMessage);
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
        setStatusMessage('');
      }, 5000);

    } catch (error) {
      console.error('Error during form submission:', error);
      setSubmitStatus('error');
      setStatusMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm, successMessage, onClose, firebaseReady, firestoreDb, emailjsReady, emailjsInstance]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-2 md:p-8 overflow-x-hidden">
      <div className="bg-white rounded-lg w-full max-w-xs md:max-w-3xl md:w-[900px] h-auto max-h-[90vh] overflow-y-auto relative flex flex-col break-words">
        {/* Header */}
        <div className="bg-primary-500 text-white p-2 md:p-4 rounded-t-lg flex-shrink-0 sticky top-0 z-10">
          <h2 className="text-lg md:text-2xl font-bold text-center break-words">{title}</h2>
          <p className="text-center text-primary-100 mt-1 break-words">{subtitle}</p>
          <button 
            onClick={onClose} 
            className="absolute top-2 right-2 md:top-4 md:right-4 text-[#e3342f] hover:text-red-700 text-2xl md:text-3xl font-bold border-none cursor-pointer bg-transparent hover:bg-white hover:bg-opacity-20 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-200 z-[10000]"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        
        {/* Form Container */}
        <form onSubmit={handleSubmit} className="flex-1 p-4 md:p-6">
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
                  disabled={isSubmitting}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
              </div>
              {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
            </div>

            {/* Phone */}
            <div>
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
                  disabled={isSubmitting}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                />
              </div>
              {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
                />
              </div>
              {errors.country && <span className="text-red-500 text-sm mt-1">{errors.country}</span>}
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
                  disabled={isSubmitting}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                />
              </div>
              {errors.city && <span className="text-red-500 text-sm mt-1">{errors.city}</span>}
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white resize-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed shadow-lg hover:shadow-xl mt-6"
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

      {/* Centered Success Overlay */}
      {submitStatus === 'success' && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black bg-opacity-30 animate-fade-in">
          <div className="bg-gradient-to-br from-[#00b67a] to-[#009e60] text-white rounded-2xl shadow-2xl px-8 py-10 flex flex-col items-center max-w-[90vw] w-full sm:w-[400px] animate-slide-up relative">
            <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="#00b67a" />
              <path stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M8 12.5l3 3 5-5" />
            </svg>
            <div className="text-xl font-bold mb-2 text-center">{statusMessage || 'Your Form Has Been Submitted Successfully'}</div>
            <button
              onClick={() => {
                setSubmitStatus('idle');
                setStatusMessage('');
                onClose();
              }}
              className="absolute top-3 right-3 text-white text-2xl hover:text-green-200 focus:outline-none"
              aria-label="Close success message"
            >
              &times;
            </button>
          </div>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="fixed top-4 right-4 z-[10000] bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg max-w-sm animate-fade-in">
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
    </div>
  );
} 