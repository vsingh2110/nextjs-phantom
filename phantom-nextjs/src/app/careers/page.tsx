/**
 * CAREERS PAGE COMPONENT
 * ======================
 * 
 * PURPOSE: Job applications and career opportunities at Phantom Healthcare
 * CREATED: December 24, 2025
 * 
 * FEATURES:
 * - Hero section with career message
 * - Job application form with resume upload
 * - W3Forms integration for form submission
 * - File upload support (PDF, DOC, DOCX, JPG, PNG)
 * - All required fields with validation
 * 
 * FORM FIELDS:
 * - Full Name, Email, Phone Number
 * - Current Location (City, State/Province)
 * - Position Applied For (dropdown)
 * - Years of Experience
 * - Current/Last Company
 * - Notice Period
 * - Expected CTC/Salary
 * - Resume Upload (PDF/DOC/DOCX/JPG/PNG, max 5MB)
 * - Cover Letter (optional)
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Careers - Join Phantom Healthcare Team',
  description: 'Explore career opportunities at Phantom Healthcare. Join India\'s leading medical imaging equipment provider. Offices in India, USA & UAE.',
  keywords: ['phantom healthcare careers', 'medical imaging jobs', 'healthcare jobs India', 'medical equipment careers'],
  openGraph: {
    title: 'Careers at Phantom Healthcare',
    description: 'Join India\'s leading medical imaging equipment provider. Apply now for exciting career opportunities.',
    url: 'https://phantomhealthcare.com/careers',
    siteName: 'Phantom Healthcare',
    images: [
      {
        url: '/images/phantom-building.jpg',
        width: 1200,
        height: 630,
        alt: 'Phantom Healthcare Office',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Phantom Healthcare',
    description: 'Join India\'s leading medical imaging equipment provider.',
    images: ['/images/phantom-building.jpg'],
  },
  alternates: {
    canonical: 'https://phantomhealthcare.com/careers',
  },
};

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: 'Home',
            url: 'https://phantomhealthcare.com',
          },
          {
            name: 'Careers',
            url: 'https://phantomhealthcare.com/careers',
          },
        ]}
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Blur */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/phantom-building.jpg"
              alt="Phantom Healthcare Careers"
              fill
              className="object-cover blur-sm opacity-40"
              priority
              quality={30}
            />
          </div>
          
          {/* Main Image */}
          <div className="relative h-full flex items-center justify-center z-10 px-4">
            <Image
              src="/images/phantom-building.jpg"
              alt="Join Phantom Healthcare Team"
              fill
              className="object-contain"
              priority
              quality={90}
            />
          </div>

          {/* Title Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-gradient-to-b from-black/30 to-black/50">
            <div className="text-center px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                Join Our Team
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 drop-shadow-lg">
                Build Your Career with India's Leading Medical Imaging Provider
              </p>
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:text-primary-600 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>/</span>
                  <span className="text-gray-900 font-semibold">Careers</span>
                </li>
              </ol>
            </nav>

            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Job Application Form
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and upload your resume. We'll review your application and get back to you soon.
              </p>

              {/* W3Forms Integration */}
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST"
                encType="multipart/form-data"
                className="space-y-6"
              >
                {/* W3Forms Access Key (Replace with your actual key) */}
                <input type="hidden" name="access_key" value="YOUR_W3FORMS_ACCESS_KEY_HERE" />
                <input type="hidden" name="subject" value="New Job Application - Phantom Healthcare" />
                <input type="hidden" name="from_name" value="Phantom Healthcare Careers" />

                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email and Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      pattern="[0-9+\-\s]+"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="+91 9999999999"
                    />
                  </div>
                </div>

                {/* Location Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                      Current City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="e.g., Delhi, Mumbai, Bangalore"
                    />
                  </div>

                  {/* State */}
                  <div>
                    <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                      State/Province <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="e.g., Haryana, Maharashtra"
                    />
                  </div>
                </div>

                {/* Position Applied For */}
                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-gray-700 mb-2">
                    Position Applied For <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                  >
                    <option value="">Select a position</option>
                    <option value="Service Engineer">Service Engineer (Medical Imaging)</option>
                    <option value="Sales Executive">Sales Executive</option>
                    <option value="Field Application Specialist">Field Application Specialist</option>
                    <option value="Service Manager">Service Manager</option>
                    <option value="Marketing Manager">Marketing Manager</option>
                    <option value="Business Development Manager">Business Development Manager</option>
                    <option value="Operations Manager">Operations Manager</option>
                    <option value="Accounts Manager">Accounts Manager</option>
                    <option value="HR Manager">HR Manager</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Other">Other (Please specify in cover letter)</option>
                  </select>
                </div>

                {/* Experience and Current Company Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Years of Experience */}
                  <div>
                    <label htmlFor="experience" className="block text-sm font-semibold text-gray-700 mb-2">
                      Years of Experience <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="experience"
                      name="experience"
                      required
                      min="0"
                      max="50"
                      step="0.5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="e.g., 5"
                    />
                  </div>

                  {/* Current/Last Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Current/Last Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                {/* Notice Period and CTC Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Notice Period */}
                  <div>
                    <label htmlFor="notice_period" className="block text-sm font-semibold text-gray-700 mb-2">
                      Notice Period <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="notice_period"
                      name="notice_period"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors bg-white"
                    >
                      <option value="">Select notice period</option>
                      <option value="Immediate">Immediate</option>
                      <option value="15 Days">15 Days</option>
                      <option value="1 Month">1 Month</option>
                      <option value="2 Months">2 Months</option>
                      <option value="3 Months">3 Months</option>
                    </select>
                  </div>

                  {/* Expected CTC */}
                  <div>
                    <label htmlFor="expected_ctc" className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected CTC/Salary (Annual) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="expected_ctc"
                      name="expected_ctc"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="e.g., 6 LPA or $60,000"
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                    Upload Resume <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      required
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max size: 5MB)
                  </p>
                </div>

                {/* Cover Letter (Optional) */}
                <div>
                  <label htmlFor="cover_letter" className="block text-sm font-semibold text-gray-700 mb-2">
                    Cover Letter (Optional)
                  </label>
                  <textarea
                    id="cover_letter"
                    name="cover_letter"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="Tell us why you're the perfect fit for this role..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold text-lg rounded-lg hover:from-primary-700 hover:to-primary-800 focus:ring-4 focus:ring-primary-300 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
                  >
                    <span>Submit Application</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>

                {/* Privacy Note */}
                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We'll only use your information for recruitment purposes.
                </p>
              </form>
            </div>

            {/* Why Join Us Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-trophy text-primary-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Leader</h3>
                <p className="text-gray-600 text-sm">
                  Join India's leading medical imaging equipment provider with global presence
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-users text-primary-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Great Team</h3>
                <p className="text-gray-600 text-sm">
                  Work with experienced professionals in a collaborative environment
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fa-solid fa-chart-line text-primary-600 text-2xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Career Growth</h3>
                <p className="text-gray-600 text-sm">
                  Excellent opportunities for learning and professional development
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
