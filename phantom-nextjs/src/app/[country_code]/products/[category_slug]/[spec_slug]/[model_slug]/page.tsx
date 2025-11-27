export default async function ProductDetailPage({ params }: { params: Promise<{ country_code: string; category_slug: string; spec_slug: string; model_slug: string }> }) {
  const { country_code, category_slug, spec_slug, model_slug } = await params;
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{model_slug}</h1>
      <div className="bg-gray-100 p-6 rounded-lg">
        <p><strong>Category:</strong> {category_slug}</p>
        <p><strong>Specification:</strong> {spec_slug}</p>
        <p><strong>Region:</strong> {country_code.toUpperCase()}</p>
        <p className="mt-4">Full product specifications and details will appear here.</p>
      </div>
    </div>
  );
}
