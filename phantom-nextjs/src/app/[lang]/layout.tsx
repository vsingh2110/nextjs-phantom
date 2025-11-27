import { notFound } from 'next/navigation';
import { InternationalHeader, InternationalFooter, getCountryConfig, getValidCountryCodes } from '@/components/international';

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function InternationalLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  const config = getCountryConfig(lang);

  if (!config) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <InternationalHeader config={config} />
      <main className="flex-grow">
        {children}
      </main>
      <InternationalFooter config={config} />
    </div>
  );
}

// Generate static params for all valid countries
export async function generateStaticParams(): Promise<{ lang: string }[]> {
  return getValidCountryCodes().map((lang) => ({ lang }));
}
