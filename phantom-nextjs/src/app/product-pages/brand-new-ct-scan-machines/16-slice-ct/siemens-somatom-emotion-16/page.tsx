import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Siemens Somatom Emotion 16 CT Scanner | Phantom Healthcare',
  description: 'Buy refurbished Siemens Somatom Emotion 16 slice CT scanner. Compact design, low operating costs, specifications and pricing.',
  keywords: 'Siemens Emotion 16 price, Somatom Emotion 16 specifications, 16 slice CT scanner, Siemens CT scanner India',
};

export default function SiemensSomatomEmotion16Page() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Siemens Somatom Emotion 16</h1>
          <p className="text-xl opacity-90">Compact 16-Slice CT Scanner</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <p className="text-gray-700 mb-4">
                The Siemens Somatom Emotion 16 is a compact, efficient CT system designed for 
                facilities requiring high-quality imaging in a space-saving footprint. Known for 
                its low operating costs and excellent reliability.
              </p>
              
              <h3 className="text-2xl font-bold mt-8 mb-4">Key Features</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>16-slice detector array</li>
                <li>Compact installation footprint</li>
                <li>CARE Dose4D radiation reduction</li>
                <li>syngo.via compatible</li>
                <li>Low power consumption</li>
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
                    <td className="py-3">0.6 seconds</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Gantry Aperture</td>
                    <td className="py-3">70 cm</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Power</td>
                    <td className="py-3">40 kW</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Applications</td>
                    <td className="py-3">General, Trauma, Ortho</td>
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
