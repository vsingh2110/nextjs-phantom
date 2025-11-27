import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '64-Slice CT Scanners | Phantom Healthcare',
  description: 'Explore our range of 64-slice CT scanners. Advanced CT systems for cardiac imaging, trauma, and high-throughput facilities.',
  keywords: '64 slice CT scanner, 64 slice CT price, cardiac CT scanner, GE Revolution CT, Siemens Definition',
};

export default function SixtyFourSliceCTPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">64-Slice CT Scanners</h1>
          <p className="text-xl opacity-90">Advanced CT Systems for Cardiac & High-Throughput Imaging</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Available Models</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border hover:border-blue-500 transition">
              <h3 className="text-xl font-bold mb-2">GE Revolution CT</h3>
              <p className="text-gray-600 mb-4">Premium 64-slice system with ultra-fast rotation and exceptional cardiac imaging capabilities.</p>
              <a href="/product-pages/brand-new-ct-scan-machines/64-slice-ct/ge-revolution-ct" className="text-blue-600 hover:underline">View Details →</a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border hover:border-blue-500 transition">
              <h3 className="text-xl font-bold mb-2">Siemens Somatom Definition</h3>
              <p className="text-gray-600 mb-4">Dual-source technology for excellent temporal resolution and cardiac imaging.</p>
              <a href="/product-pages/brand-new-ct-scan-machines/64-slice-ct/siemens-somatom-definition" className="text-blue-600 hover:underline">View Details →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
