import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '32-Slice CT Scanners | Phantom Healthcare',
  description: 'Explore our range of 32-slice CT scanners. Mid-range CT systems offering excellent balance of speed, resolution and value.',
  keywords: '32 slice CT scanner, 32 slice CT price, mid-range CT scanner, GE Optima CT660, Siemens Go.Top',
};

export default function ThirtyTwoSliceCTPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">32-Slice CT Scanners</h1>
          <p className="text-xl opacity-90">Mid-Range CT Systems for Advanced Diagnostics</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Available Models</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border hover:border-blue-500 transition">
              <h3 className="text-xl font-bold mb-2">GE Optima CT660</h3>
              <p className="text-gray-600 mb-4">High-performance 32-slice system with advanced cardiac and angiography capabilities.</p>
              <a href="/product-pages/brand-new-ct-scan-machines/32-slice-ct/ge-optima-ct660" className="text-blue-600 hover:underline">View Details →</a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border hover:border-blue-500 transition">
              <h3 className="text-xl font-bold mb-2">Siemens Somatom Go.Top</h3>
              <p className="text-gray-600 mb-4">Innovative 32-slice CT with tablet-based operation and patient-centric design.</p>
              <a href="/product-pages/brand-new-ct-scan-machines/32-slice-ct/siemens-somatom-go-top" className="text-blue-600 hover:underline">View Details →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
