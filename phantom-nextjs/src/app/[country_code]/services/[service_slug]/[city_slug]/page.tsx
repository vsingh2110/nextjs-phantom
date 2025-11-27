export default async function ServiceCityPage({ params }: { params: Promise<{ country_code: string; service_slug: string; city_slug: string }> }) {
  const { country_code, service_slug, city_slug } = await params;
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{service_slug.replace('-', ' ')} in {city_slug}</h1>
      <p>Professional {service_slug} services available in {city_slug}, {country_code.toUpperCase()}.</p>
    </div>
  );
}
