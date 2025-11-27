export default async function InternationalServices({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">Services ({lang.toUpperCase()})</h1>
      <p className="text-lg text-gray-600 mb-8">
        Our medical imaging equipment services in the {lang.replace('en-', '').toUpperCase()} region.
      </p>
      <div className="bg-gray-50 p-6 rounded-lg">
        <p className="text-gray-600">[Placeholder: Services available in this international market]</p>
      </div>
    </div>
  );
}
