'use client';

import Link from 'next/link';
import Image from 'next/image';
import YouTubeLite from '../ui/YouTubeLite';

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 antialiased relative overflow-hidden">
      {/* Background Image using Next.js Image for optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/phantom-building.jpg"
          alt="Phantom Healthcare Building"
          fill
          className="object-cover object-center"
          priority={false}
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* About Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              About Phantom Healthcare
            </h2>
            <p className="text-sm sm:text-base text-white leading-relaxed text-justify">
              Our Group had started the operations in year 2011 and has become
              the leading remarketers, refurbishers and re-assemblers of
              Pre-owned Super Conductive MRIs and CT Scanners in India. Phantom
              Healthcare strives to provide professional support with quality
              services that are custom fit to the needs of today's growing
              healthcare industry. We aim to develop long-term relationships
              with our clients and do our best possible to keep Imaging
              equipment up-to-date and working like new.
            </p>
            <div className="pt-4">
              <Link 
                href="/about" 
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn More
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>

          {/* About Video - YouTubeLite with same aspect-video container */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-800">
              <YouTubeLite videoId="xmB3MDYaOMU" title="Phantom Healthcare Company Overview" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
