import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import BreadcrumbJsonLd from '@/components/schemas/BreadcrumbJsonLd';
import ArticleJsonLd from '@/components/schemas/ArticleJsonLd';
import BlurBackgroundScript from '@/components/BlurBackgroundScript';
import ImagePair from '@/components/ImagePair';
import SocialShare from '@/components/blog/SocialShare';
import References from '@/components/blog/References';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found - Phantom Healthcare',
    };
  }

  return {
    title: `${post.title} | Phantom Healthcare Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// Custom MDX components
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

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: 'Home', url: 'https://www.phantomhealthcare.com' },
    { name: 'Blog', url: 'https://www.phantomhealthcare.com/blogs' },
    { name: post.title, url: `https://www.phantomhealthcare.com/blogs/${slug}` },
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
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        image={post.image}
        datePublished={post.date}
        author={post.author}
        url={`https://www.phantomhealthcare.com/blogs/${slug}`}
      />

      <main className="main-content">
        {/* Hero Banner - Clean Image Only */}
        <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
          {/* Blurred Background */}
          <div className="absolute inset-0">
            <Image
              src={post.image}
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
              src={post.image}
              alt={post.title}
              fill
              className="object-contain"
              priority
              quality={90}
            />
          </div>

          {/* Category Badge */}
          <div className="absolute top-8 left-8 z-20">
            <span className="px-4 py-2 bg-[#59913d] text-white text-sm font-semibold rounded-full shadow-xl">
              {post.category}
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
                  <Link href="/blogs" className="hover:text-[#59913d] transition-colors">
                    Blog
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span>/</span>
                  <span className="text-gray-900 font-semibold line-clamp-1">{post.title}</span>
                </li>
              </ol>
            </nav>

            {/* Title and Meta */}
            <header className="mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{post.author}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </header>

            {/* Excerpt */}
            <div className="mb-8 p-6 bg-gray-50 border-l-4 border-[#59913d] rounded-r-lg">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                {post.excerpt}
              </p>
            </div>

            {/* Social Share - Top */}
            <SocialShare 
              title={post.title}
              url={`https://phantomhealthcare.com/blogs/${post.slug}`}
            />

            {/* MDX Content */}
            <div className="prose prose-lg max-w-none blog-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={mdxComponents as any}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* References */}
            {post.references && post.references.length > 0 && (
              <References references={post.references} />
            )}

            {/* Social Share - Bottom */}
            <SocialShare 
              title={post.title}
              url={`https://phantomhealthcare.com/blogs/${post.slug}`}
            />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
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

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-[#59913d] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.author}</h3>
                  <p className="text-gray-600">
                    Expert insights on medical imaging technology and healthcare equipment from the team at Phantom Healthcare.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-to-br from-[#59913d] to-[#255a0a] rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Need Medical Imaging Equipment?</h3>
              <p className="mb-6 text-white/90">
                Contact Phantom Healthcare for high-quality refurbished medical imaging equipment, comprehensive AMC services, and expert support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-[#59913d] font-semibold rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
                >
                  Contact Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border-2 border-white/30"
                >
                  View Equipment
                </Link>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-[#59913d] hover:text-[#255a0a] font-semibold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to all blog posts
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
