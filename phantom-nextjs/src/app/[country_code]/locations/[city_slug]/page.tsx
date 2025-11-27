export default async function CityPage({ params }: { params: Promise<{ country_code: string; city_slug: string }> }) {
  const { country_code, city_slug } = await params;
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Medical Equipment in {city_slug}</h1>
      <p>Region: {country_code.toUpperCase()}</p>
      <p>Explore our range of products available in {city_slug}.</p>
    </div>
  );
}
