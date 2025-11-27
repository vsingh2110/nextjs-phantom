export default async function CityCategoryPage({ params }: { params: Promise<{ country_code: string; city_slug: string; category_slug: string }> }) {
  const { country_code, city_slug, category_slug } = await params;
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{category_slug} in {city_slug}</h1>
      <p>Find the best {category_slug.replace('-', ' ')} deals in {city_slug}, {country_code.toUpperCase()}.</p>
    </div>
  );
}
