/**
 * FAQ SECTION COMPONENT
 * =====================
 * 
 * PURPOSE: Reusable FAQ accordion component for AI SEO (GEO/AEO)
 * CREATED: December 4, 2025
 * 
 * WHY THIS EXISTS:
 * - AI systems (ChatGPT, Google AI, Perplexity) extract Q&A content easily
 * - FAQ format is ideal for direct answer generation
 * - Improves both user experience and AI visibility
 * 
 * USAGE:
 * <FAQSection 
 *   title="Frequently Asked Questions"
 *   faqs={[{ question: "...", answer: "..." }]}
 * />
 */

'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
  /** Background style: 'light' (gray), 'white', or 'gradient' */
  variant?: 'light' | 'white' | 'gradient';
}

export default function FAQSection({ 
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  className = "",
  variant = 'light'
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Background styles based on variant
  const bgStyles = {
    light: 'bg-gray-50',
    white: 'bg-white',
    gradient: 'bg-gradient-to-br from-gray-50 to-white'
  };

  return (
    <section className={`py-12 sm:py-16 md:py-20 ${bgStyles[variant]} ${className}`}>
      <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-gray-600 text-base sm:text-lg 2xl:text-xl max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              {/* Question - Click to toggle */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <span 
                  className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                >
                  <i className="fa-solid fa-chevron-down text-primary-600 text-sm"></i>
                </span>
              </button>

              {/* Answer - Collapsible */}
              <div 
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
