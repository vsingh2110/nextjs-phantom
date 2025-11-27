import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Siemens Magnetom Avanto 1.5T MRI Scanner | Phantom Healthcare',
  description: 'Buy refurbished Siemens Magnetom Avanto 1.5T MRI scanner. Tim technology for whole-body imaging, specifications and pricing.',
  keywords: 'Siemens Avanto price, Magnetom Avanto specifications, 1.5 Tesla MRI buy, Siemens MRI scanner India',
};

export default function SiemensMagnetomAvantoPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Siemens Magnetom Avanto</h1>
          <p className="text-xl opacity-90">1.5 Tesla Tim Technology MRI System</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-700 mb-4">
                The Siemens Magnetom Avanto is a revolutionary 1.5T MRI system featuring Tim 
                (Total Imaging Matrix) technology that enables whole-body imaging without patient 
                repositioning. Ideal for high-throughput imaging centers.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Tim Technology - 76 coil elements</li>
                <li>syngo MR software platform</li>
                <li>iPAT parallel imaging</li>
                <li>Whole-body imaging without repositioning</li>
                <li>Zero-helium boil-off technology</li>
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
                    <td className="py-3">45 mT/m</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Slew Rate</td>
                    <td className="py-3">200 T/m/s</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Channels</td>
                    <td className="py-3">Up to 32 channels</td>
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
