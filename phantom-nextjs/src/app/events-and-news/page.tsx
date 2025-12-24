import { Metadata } from 'next';
import Link from 'next/link';
import { getAllNews } from '@/lib/news';
import NewsGrid from '@/components/ui/NewsGrid';
import BreadcrumbJsonLd from '@/components/schemas/BreadcrumbJsonLd';

export const metadata: Metadata = {
  title: 'Events & News - Phantom Healthcare | Latest Updates',
  description: 'Stay updated with Phantom Healthcare events, product launches, industry news, and company updates in medical imaging equipment.',
  openGraph: {
    title: 'Events & News - Phantom Healthcare',
    description: 'Latest updates, events, and news from Phantom Healthcare',
    type: 'website',
    url: 'https://www.phantomhealthcare.com/events-and-news',
  },
};

export default function EventsAndNewsPage() {
  const news = getAllNews();

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.phantomhealthcare.com' },
    { name: 'Events & News', url: 'https://www.phantomhealthcare.com/events-and-news' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />

      <main className="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#2980b9] via-[#3498db] to-[#5dade2] py-8 sm:py-10 md:py-14">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb - Left aligned */}
            <nav className="mb-4 sm:mb-5" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li><span className="mx-1">›</span></li>
                <li className="text-white font-medium">Events & News</li>
              </ol>
            </nav>
            {/* Title and Description - Center aligned */}
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-white drop-shadow-lg">
                Events & News
              </h1>
              <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-white/90 mt-3 max-w-3xl mx-auto">
                Stay updated with Phantom Healthcare's latest events, product launches, industry participation, and company news.
              </p>
            </div>
          </div>
        </section>

        {/* News Content */}
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            {news.length > 0 ? (
              <NewsGrid news={news} />
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
                <p className="text-gray-600">
                  We're working on exciting updates. Check back soon for latest news and events!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-r from-[#2980b9] via-[#3498db] to-[#5dade2]">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Never Miss an Update
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Subscribe to receive notifications about upcoming events, product launches, and company news.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-3.5 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:border-white/40 transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-white text-[#2980b9] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
