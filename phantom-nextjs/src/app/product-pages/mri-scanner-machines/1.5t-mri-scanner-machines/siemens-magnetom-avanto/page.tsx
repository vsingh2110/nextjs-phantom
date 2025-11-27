export default function ModelPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">Siemens Magnetom Avanto 1.5T</h1>
      <p className="text-lg text-gray-600 mb-8">
        Complete specifications and details for Siemens Magnetom Avanto 1.5T MRI Scanner.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
          <p className="text-gray-600">[Placeholder: Technical specifications table]</p>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <p className="text-gray-600">[Placeholder: Product images]</p>
        </div>
      </div>
    </div>
  );
}
