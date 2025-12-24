import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import BlogGrid from '@/components/ui/BlogGrid';
import BreadcrumbJsonLd from '@/components/schemas/BreadcrumbJsonLd';
import BlogListingSpeakableJsonLd from '@/components/schemas/BlogListingSpeakableJsonLd';

export const metadata: Metadata = {
  title: 'Blog - Phantom Healthcare | Medical Imaging Insights & News',
  description: 'Expert insights on medical imaging equipment, MRI, CT scanners, maintenance, and healthcare technology from Phantom Healthcare.',
  openGraph: {
    title: 'Blog - Phantom Healthcare',
    description: 'Expert insights on medical imaging equipment and healthcare technology',
    type: 'website',
    url: 'https://www.phantomhealthcare.com/blogs',
  },
};

export default function BlogsPage() {
  const posts = getAllPosts();

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.phantomhealthcare.com' },
    { name: 'Blog', url: 'https://www.phantomhealthcare.com/blogs' },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <BlogListingSpeakableJsonLd />

      <main className="main-content">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#59913d] via-[#4a7a32] to-[#255a0a] py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
          
          <div className="container relative z-10">
            <nav className="mb-6 lg:mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-white/80">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>/</span>
                  <span className="text-white font-semibold">Blog</span>
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 lg:mb-6">
                Blog & Industry Insights
              </h1>
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl">
                Expert perspectives on medical imaging technology, equipment maintenance, industry trends, and healthcare innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-12 lg:py-20 bg-gray-50">
          <div className="container">
            {posts.length > 0 ? (
              <BlogGrid posts={posts} />
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h2>
                <p className="text-gray-600">
                  We're working on exciting content. Check back soon for insights and updates!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-[#59913d] to-[#255a0a]">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Subscribe to receive the latest industry insights, product updates, and healthcare technology news.
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
                  className="px-8 py-3.5 bg-white text-[#59913d] font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
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