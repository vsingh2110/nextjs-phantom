export default async function CategoryPage({ params }: { params: Promise<{ country_code: string; category_slug: string }> }) {
  const { country_code, category_slug } = await params;
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">Category: {category_slug}</h1>
      <p>Region: {country_code.toUpperCase()}</p>
      <p>Showing all {category_slug.replace('-', ' ')}.</p>
    </div>
  );
}
