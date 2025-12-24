'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsPostMetadata } from '@/lib/news';

interface NewsGridProps {
  news: NewsPostMetadata[];
}

const categories = ['All', 'Events', 'Product Launch', 'Company News', 'Industry Updates', 'Awards'];

export default function NewsGrid({ news }: NewsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNews = useMemo(() => {
    if (selectedCategory === 'All') return news;
    return news.filter(item => item.category === selectedCategory);
  }, [news, selectedCategory]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      timeZone: 'Asia/Kolkata'
    });
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-[#59913d] text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* News Grid */}
      {filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((item) => (
            <Link
              key={item.slug}
              href={`/events-and-news/${item.slug}`}
              className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#255a0a] text-white text-xs font-semibold rounded-full shadow-lg">
                    {item.category}
                  </span>
                </div>
                {/* Blur Background Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                {/* Meta Info */}
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <time dateTime={item.date}>
                    {formatDate(item.date)}
                  </time>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-[#59913d] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{item.author}</span>
                  <span className="text-sm font-semibold text-[#59913d] group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No news or events found in this category.</p>
        </div>
      )}
    </div>
  );
}
