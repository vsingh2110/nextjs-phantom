export default async function CountryHome({ params }: { params: Promise<{ country_code: string }> }) {
  const { country_code } = await params;
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">Phantom Medical - {country_code.toUpperCase()}</h1>
      <p>Welcome to our {country_code} regional site.</p>
    </div>
  );
}
