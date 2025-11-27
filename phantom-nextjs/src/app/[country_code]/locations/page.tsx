export default async function LocationsIndex({ params }: { params: Promise<{ country_code: string }> }) {
  const { country_code } = await params;
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Locations in {country_code.toUpperCase()}</h1>
      <p>Find medical equipment in your city.</p>
    </div>
  );
}
