export default async function CitySpecPage({ params }: { params: Promise<{ country_code: string; city_slug: string; category_slug: string; spec_slug: string }> }) {
  const { country_code, city_slug, category_slug, spec_slug } = await params;
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{spec_slug} {category_slug} in {city_slug}</h1>
      <p>Premium {spec_slug} {category_slug.replace('-', ' ')} available in {city_slug}.</p>
    </div>
  );
}
