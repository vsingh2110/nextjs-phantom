import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '128-Slice CT Scanners | Phantom Healthcare',
  description: 'Explore our range of 128-slice CT scanners. Premium high-end CT systems for tertiary care hospitals and advanced imaging centers.',
  keywords: '128 slice CT scanner, 128 slice CT price, high-end CT scanner, GE Revolution Frontier, Siemens Force',
};

export default function OneTwentyEightSliceCTPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">128-Slice CT Scanners</h1>
          <p className="text-xl opacity-90">Premium High-End CT Systems for Tertiary Care</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Available Models</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border hover:border-blue-500 transition">
              <h3 className="text-xl font-bold mb-2">GE Revolution Frontier</h3>
              <p className="text-gray-600 mb-4">Flagship 128-slice system with spectral imaging and AI-powered reconstruction.</p>
              <a href="/product-pages/brand-new-ct-scan-machines/128-slice-ct/ge-revolution-frontier" className="text-blue-600 hover:underline">View Details →</a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border hover:border-blue-500 transition">
              <h3 className="text-xl font-bold mb-2">Siemens Somatom Force</h3>
              <p className="text-gray-600 mb-4">Dual-source flagship with TwinBeam technology for ultra-low dose imaging.</p>
              <a href="/product-pages/brand-new-ct-scan-machines/128-slice-ct/siemens-somatom-force" className="text-blue-600 hover:underline">View Details →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
