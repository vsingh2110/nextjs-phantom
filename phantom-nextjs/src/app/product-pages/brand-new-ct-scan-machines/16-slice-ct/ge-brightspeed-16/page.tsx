import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GE BrightSpeed 16 CT Scanner | Phantom Healthcare',
  description: 'Buy refurbished GE BrightSpeed 16 slice CT scanner. Specifications, features, pricing and warranty information.',
  keywords: 'GE BrightSpeed 16 price, GE BrightSpeed 16 specifications, 16 slice CT scanner buy, GE CT scanner India',
};

export default function GEBrightSpeed16Page() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GE BrightSpeed 16</h1>
          <p className="text-xl opacity-90">16-Slice CT Scanner System</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-700 mb-4">
                The GE BrightSpeed 16 is a reliable and efficient 16-slice CT scanner designed for 
                general diagnostic imaging. Known for its excellent image quality, low maintenance 
                costs, and user-friendly interface.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>16-slice detector configuration</li>
                <li>Fast scan times (0.5s rotation)</li>
                <li>Low dose imaging technology</li>
                <li>SmartPrep patient positioning</li>
                <li>Xtream workstation compatibility</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
              <table className="w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Slices</td>
                    <td className="py-3">16</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Rotation Speed</td>
                    <td className="py-3">0.5 seconds</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Gantry Aperture</td>
                    <td className="py-3">70 cm</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Power</td>
                    <td className="py-3">60 kW</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Applications</td>
                    <td className="py-3">Routine, Cardiac, Angio</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-8">
                <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 inline-block">
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
