import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1.5T MRI Scanners | Phantom Healthcare',
  description: 'Explore our range of 1.5 Tesla MRI scanners. The gold standard for clinical MRI imaging with excellent image quality.',
  keywords: '1.5T MRI scanner, 1.5 Tesla MRI price, GE Signa HDxt, Siemens Avanto, MRI scanner India',
};

export default function OneFiveTeslaMRIPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">1.5T MRI Scanners</h1>
          <p className="text-xl opacity-90">The Gold Standard for Clinical MRI Imaging</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Available Models</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border hover:border-purple-500 transition">
              <h3 className="text-xl font-bold mb-2">GE Signa HDxt 1.5T</h3>
              <p className="text-gray-600 mb-4">High-definition imaging with advanced coil technology and fast scanning protocols.</p>
              <a href="/product-pages/mri-scanner-machines/1-5t-mri/ge-signa-hdxt" className="text-purple-600 hover:underline">View Details →</a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border hover:border-purple-500 transition">
              <h3 className="text-xl font-bold mb-2">Siemens Magnetom Avanto</h3>
              <p className="text-gray-600 mb-4">Tim (Total Imaging Matrix) technology for whole-body imaging without repositioning.</p>
              <a href="/product-pages/mri-scanner-machines/1-5t-mri/siemens-magnetom-avanto" className="text-purple-600 hover:underline">View Details →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
