import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '3.0T MRI Scanners | Phantom Healthcare',
  description: 'Explore our range of 3.0 Tesla MRI scanners. High-field MRI systems for advanced neuroimaging, research, and specialized applications.',
  keywords: '3.0T MRI scanner, 3 Tesla MRI price, GE Discovery MR750, Siemens Vida, high-field MRI India',
};

export default function ThreeTeslaMRIPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">3.0T MRI Scanners</h1>
          <p className="text-xl opacity-90">High-Field MRI for Advanced & Research Applications</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Available Models</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border hover:border-purple-500 transition">
              <h3 className="text-xl font-bold mb-2">GE Discovery MR750</h3>
              <p className="text-gray-600 mb-4">Premium 3T system with SIGNA technology for exceptional neuro and musculoskeletal imaging.</p>
              <a href="/product-pages/mri-scanner-machines/3-0t-mri/ge-discovery-mr750" className="text-purple-600 hover:underline">View Details →</a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border hover:border-purple-500 transition">
              <h3 className="text-xl font-bold mb-2">Siemens Magnetom Vida</h3>
              <p className="text-gray-600 mb-4">BioMatrix technology for patient-specific imaging with AI-powered workflows.</p>
              <a href="/product-pages/mri-scanner-machines/3-0t-mri/siemens-magnetom-vida" className="text-purple-600 hover:underline">View Details →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
