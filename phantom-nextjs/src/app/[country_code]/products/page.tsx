export default async function ProductsIndex({ params }: { params: Promise<{ country_code: string }> }) {
  const { country_code } = await params;
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">All Products ({country_code.toUpperCase()})</h1>
      <p>Browse our complete catalog of medical imaging equipment.</p>
    </div>
  );
}
