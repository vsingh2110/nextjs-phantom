'use client';

import { useState } from 'react';
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

  const validateForm = () => {
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
  };

  const handleInputChange = (e: any) => {
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
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

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
      alert('Your Form Has Been Submitted Successfully');
      onSuccess?.();

    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      alert(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      id={formId}
      onSubmit={handleSubmit}
      className={`contact-form ${className}`}
    >
      <div className="form-group">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Your Name *"
          className={errors.name ? 'error' : ''}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>

      <div className="form-group">
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone Number *"
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email Address"
        />
      </div>

      <div className="form-group">
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className={errors.country ? 'error' : ''}
        >
          <option value="">Select Country *</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Other">Other</option>
        </select>
        {errors.country && <span className="error-message">{errors.country}</span>}
      </div>

      <div className="form-group">
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          placeholder="City *"
          className={errors.city ? 'error' : ''}
        />
        {errors.city && <span className="error-message">{errors.city}</span>}
      </div>

      <div className="form-group">
        <input
          type="text"
          id="hospital"
          name="hospital"
          value={formData.hospital}
          onChange={handleInputChange}
          placeholder="Hospital/Clinic Name"
        />
      </div>

      <div className="form-group">
        <textarea
          id="enquiry"
          name="enquiry"
          value={formData.enquiry}
          onChange={handleInputChange}
          placeholder="Your Enquiry"
          rows={4}
        />
      </div>

      <div className="form-group">
        <button 
          type="submit" 
          id="submit"
          disabled={isSubmitting}
          className="submit-btn"
        >
          {isSubmitting ? (
            <>
              <span id="spinner" style={{ display: 'inline-block' }}>
                <i className="fa fa-spinner fa-spin"></i>
              </span>
              Submitting...
            </>
          ) : (
            'Submit'
          )}
        </button>
      </div>
    </form>
  );
} 