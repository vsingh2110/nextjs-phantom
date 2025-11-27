export default function LocationsIndex() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
      <p className="text-lg text-gray-600 mb-8">
        Find Phantom Medical Imaging Equipment in your city.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder: Grid of Indian cities will be rendered here */}
        <p className="text-gray-500">[City cards will be listed here: Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Indore, etc.]</p>
      </div>
    </div>
  );
}
