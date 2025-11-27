export default async function ServicesIndex({ params }: { params: Promise<{ country_code: string }> }) {
  const { country_code } = await params;
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Our Services ({country_code.toUpperCase()})</h1>
      <p>Comprehensive medical equipment services.</p>
    </div>
  );
}
