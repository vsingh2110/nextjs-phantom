export default async function SpecPage({ params }: { params: Promise<{ country_code: string; category_slug: string; spec_slug: string }> }) {
  const { country_code, category_slug, spec_slug } = await params;
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{spec_slug} {category_slug}</h1>
      <p>Region: {country_code.toUpperCase()}</p>
      <p>Browse all {spec_slug} models.</p>
    </div>
  );
}
