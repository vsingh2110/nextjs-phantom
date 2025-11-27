export default async function ServiceDetailPage({ params }: { params: Promise<{ country_code: string; service_slug: string }> }) {
  const { country_code, service_slug } = await params;
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-4">{service_slug.replace('-', ' ')}</h1>
      <p>Region: {country_code.toUpperCase()}</p>
      <p>Details about our {service_slug} service.</p>
    </div>
  );
}
