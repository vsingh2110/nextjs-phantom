import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GE Signa HDxt 1.5T MRI Scanner | Phantom Healthcare',
  description: 'Buy refurbished GE Signa HDxt 1.5T MRI scanner. High-definition imaging, specifications, features and pricing.',
  keywords: 'GE Signa HDxt price, GE Signa 1.5T specifications, 1.5 Tesla MRI buy, GE MRI scanner India',
};

export default function GESignaHDxtPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GE Signa HDxt 1.5T</h1>
          <p className="text-xl opacity-90">High-Definition 1.5 Tesla MRI System</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-700 mb-4">
                The GE Signa HDxt 1.5T is a high-definition MRI system offering exceptional image 
                quality with advanced gradient technology. Trusted by healthcare facilities worldwide 
                for neurological, musculoskeletal, and body imaging.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>HD Gradients for superior image clarity</li>
                <li>OpTix RF technology</li>
                <li>PROPELLER motion correction</li>
                <li>IDEAL fat-water separation</li>
                <li>Multi-channel phased array coils</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Field Strength</td>
                    <td className="py-3">1.5 Tesla</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Bore Size</td>
                    <td className="py-3">60 cm</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Gradient Strength</td>
                    <td className="py-3">33 mT/m</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Slew Rate</td>
                    <td className="py-3">120 T/m/s</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Channels</td>
                    <td className="py-3">8/16/32 channel options</td>
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
