import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '16-Slice CT Scanners | Phantom Healthcare',
  description: 'Explore our range of 16-slice CT scanners from leading brands like GE and Siemens. Entry-level CT systems perfect for general diagnostics.',
  keywords: '16 slice CT scanner, 16 slice CT price, entry level CT scanner, GE BrightSpeed 16, Siemens Emotion 16',
};

export default function SixteenSliceCTPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">16-Slice CT Scanners</h1>
          <p className="text-xl opacity-90">Entry-Level CT Systems for General Diagnostics</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Available Models</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GE BrightSpeed 16 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border hover:border-blue-500 transition">
              <h3 className="text-xl font-bold mb-2">GE BrightSpeed 16</h3>
              <p className="text-gray-600 mb-4">Reliable 16-slice system known for excellent image quality and low maintenance costs.</p>
              <a href="/product-pages/brand-new-ct-scan-machines/16-slice-ct/ge-brightspeed-16" className="text-blue-600 hover:underline">View Details →</a>
            </div>

            {/* Siemens Emotion 16 */}
            <div className="bg-white rounded-lg shadow-lg p-6 border hover:border-blue-500 transition">
              <h3 className="text-xl font-bold mb-2">Siemens Somatom Emotion 16</h3>
              <p className="text-gray-600 mb-4">Compact and efficient 16-slice CT with low operating costs and flexible applications.</p>
              <a href="/product-pages/brand-new-ct-scan-machines/16-slice-ct/siemens-somatom-emotion-16" className="text-blue-600 hover:underline">View Details →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
