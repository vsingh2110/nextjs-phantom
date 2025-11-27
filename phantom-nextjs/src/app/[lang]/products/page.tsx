export default async function InternationalProducts({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">Products ({lang.toUpperCase()})</h1>
      <p className="text-lg text-gray-600 mb-8">
        Browse our medical imaging equipment catalog for the {lang.replace('en-', '').toUpperCase()} market.
      </p>
      <div className="bg-gray-50 p-6 rounded-lg">
        <p className="text-gray-600">[Placeholder: Product categories for this international market]</p>
      </div>
    </div>
  );
}
