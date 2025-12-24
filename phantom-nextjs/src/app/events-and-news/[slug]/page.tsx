import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllNewsSlugs, getNewsBySlug } from '@/lib/news';
import BreadcrumbJsonLd from '@/components/schemas/BreadcrumbJsonLd';
import NewsArticleJsonLd from '@/components/schemas/NewsArticleJsonLd';
import BlurBackgroundScript from '@/components/BlurBackgroundScript';
import ImagePair from '@/components/ImagePair';import SocialShare from '@/components/blog/SocialShare';
import References from '@/components/blog/References';
// Generate static params for all news/events
export async function generateStaticParams() {
  const slugs = getAllNewsSlugs();
  return slugs;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const newsItem = getNewsBySlug(slug);

  if (!newsItem) {
    return {
      title: 'News Not Found - Phantom Healthcare',
    };
  }

  return {
    title: `${newsItem.title} | Phantom Healthcare`,
    description: newsItem.excerpt,
    openGraph: {
      title: newsItem.title,
      description: newsItem.excerpt,
      type: 'article',
      publishedTime: newsItem.date,
      images: [
        {
          url: newsItem.image,
          width: 1200,
          height: 630,
          alt: newsItem.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: newsItem.title,
      description: newsItem.excerpt,
      images: [newsItem.image],
    },
  };
}

// Custom MDX components (same as blog)
const mdxComponents = {
  h1: (props: any) => <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 mt-8" {...props} />,
  h2: (props: any) => <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 mt-6" {...props} />,
  h4: (props: any) => <h4 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 mt-4" {...props} />,
  p: (props: any) => <p className="text-base lg:text-lg text-gray-700 mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700" {...props} />,
  li: (props: any) => <li className="text-base lg:text-lg" {...props} />,
  a: (props: any) => <a className="text-[#59913d] hover:text-[#255a0a] underline font-medium" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-[#59913d] pl-6 py-2 my-6 italic text-gray-600 bg-gray-50" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6" {...props} />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full divide-y divide-gray-300 border border-gray-300" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-900 border-b border-gray-300" {...props} />
  ),
  td: (props: any) => (
    <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200" {...props} />
  ),
  hr: (props: any) => <hr className="my-8 border-t-2 border-gray-200" {...props} />,
  img: (props: any) => (
    <span className="block my-6">
      <Image
        src={props.src}
        alt={props.alt || ''}
        width={800}
        height={500}
        className="rounded-lg shadow-md w-full h-auto"
      />
    </span>
  ),
  ImagePair: ImagePair,
};

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const newsItem = getNewsBySlug(slug);

  if (!newsItem) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.phantomhealthcare.com' },
    { name: 'Events & News', url: 'https://www.phantomhealthcare.com/events-and-news' },
    { name: newsItem.title, url: `https://www.phantomhealthcare.com/events-and-news/${slug}` },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Kolkata',
    });
  };

  return (
    <>
      <BlurBackgroundScript />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <NewsArticleJsonLd
        title={newsItem.title}
        description={newsItem.excerpt}
        image={newsItem.image}
        datePublished={newsItem.date}
        author={newsItem.author}
        url={`https://www.phantomhealthcare.com/events-and-news/${slug}`}
      />

      <main className="main-content">
        {/* Hero Banner - Clean Image Only */}
        <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
          {/* Blurred Background */}
          <div className="absolute inset-0">
            <Image
              src={newsItem.image}
              alt=""
              fill
              className="object-cover blur-sm scale-110 opacity-40"
              priority
              quality={30}
            />
          </div>
          
          {/* Main Image */}
          <div className="relative h-full flex items-center justify-center z-10 px-4">
            <Image
              src={newsItem.image}
              alt={newsItem.title}
              fill
              className="object-contain"
              priority
              quality={90}
            />
          </div>

          {/* Category Badge */}
          <div className="absolute top-8 left-8 z-20">
            <span className="px-4 py-2 bg-[#255a0a] text-white text-sm font-semibold rounded-full shadow-xl">
              {newsItem.category}
            </span>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-12 lg:py-20 bg-white">
          <div className="w-full max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:text-[#59913d] transition-colors">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>/</span>
                  <Link href="/events-and-news" className="hover:text-[#59913d] transition-colors">
                    Events & News
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>/</span>
                  <span className="text-gray-900 font-semibold line-clamp-1">{newsItem.title}</span>
                </li>
              </ol>
            </nav>

            {/* Title and Meta */}
            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {newsItem.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{newsItem.author}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={newsItem.date}>{formatDate(newsItem.date)}</time>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{newsItem.readTime}</span>
                </div>
              </div>
            </header>

            {/* Excerpt */}
            <div className="mb-8 p-6 bg-gray-50 border-l-4 border-[#255a0a] rounded-r-lg">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                {newsItem.excerpt}
              </p>
            </div>
            {/* Social Share - Top */}
            <SocialShare 
              title={newsItem.title}
              url={`https://phantomhealthcare.com/events-and-news/${newsItem.slug}`}
            />
            {/* MDX Content */}
            <div className="prose prose-lg max-w-none blog-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={mdxComponents as any}
              >
                {newsItem.content}
              </ReactMarkdown>
            </div>
            {/* References */}
            {newsItem.references && newsItem.references.length > 0 && (
              <References references={newsItem.references} />
            )}

            {/* Social Share - Bottom */}
            <SocialShare 
              title={newsItem.title}
              url={`https://phantomhealthcare.com/events-and-news/${newsItem.slug}`}
            />
            {/* Tags */}
            {newsItem.tags && newsItem.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {newsItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Share This News</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
                <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </button>
                <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </button>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-to-br from-[#59913d] to-[#255a0a] rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Interested in Our Products or Services?</h3>
              <p className="mb-6 text-white/90">
                Contact Phantom Healthcare for more information about our medical imaging equipment, services, and upcoming events.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-[#59913d] font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  Get in Touch
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border-2 border-white/30"
                >
                  View Products
                </Link>
              </div>
            </div>

            {/* Back to News */}
            <div className="mt-12 text-center">
              <Link
                href="/events-and-news"
                className="inline-flex items-center gap-2 text-[#59913d] hover:text-[#255a0a] font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all news and events
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
