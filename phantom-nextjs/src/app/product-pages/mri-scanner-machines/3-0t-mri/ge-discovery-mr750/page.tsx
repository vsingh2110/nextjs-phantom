import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GE Discovery MR750 3.0T MRI Scanner | Phantom Healthcare',
  description: 'Buy refurbished GE Discovery MR750 3.0T MRI scanner. Premium high-field MRI with exceptional image quality, specifications and pricing.',
  keywords: 'GE Discovery MR750 price, GE 3T MRI specifications, 3 Tesla MRI buy, GE MRI scanner India',
};

export default function GEDiscoveryMR750Page() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GE Discovery MR750</h1>
          <p className="text-xl opacity-90">Premium 3.0 Tesla High-Field MRI System</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-700 mb-4">
                The GE Discovery MR750 is a premium 3.0T MRI system designed for advanced clinical 
                and research applications. With exceptional gradient performance and cutting-edge 
                sequences, it delivers outstanding image quality for neuro, MSK, and body imaging.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>SIGNA PET/MR compatibility</li>
                <li>FOCUS DWI technology</li>
                <li>PROPELLER 3.0 motion correction</li>
                <li>DISCO dynamic contrast imaging</li>
                <li>32-channel head coil standard</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Field Strength</td>
                    <td className="py-3">3.0 Tesla</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Bore Size</td>
                    <td className="py-3">60 cm</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Gradient Strength</td>
                    <td className="py-3">50 mT/m</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Slew Rate</td>
                    <td className="py-3">200 T/m/s</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Channels</td>
                    <td className="py-3">Up to 128 channels</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-8">
                <a href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 inline-block">
                  Request Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
