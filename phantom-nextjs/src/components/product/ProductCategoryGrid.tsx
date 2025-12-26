/**
 * Product Category Grid Component
 * ================================
 * Displays product cards in a responsive grid for category pages
 * Created: December 26, 2025
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductCategoryGridProps {
  products: Product[];
  category?: string;
}

export default function ProductCategoryGrid({ products, category }: ProductCategoryGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative"
        >
          {/* Availability Ribbon Badge */}
          {product.availability === 'Available' && (
            <div className="absolute top-0 left-0 z-10">
              <div className="bg-[#59913d] text-white text-xs font-bold px-8 py-2 transform -rotate-45 -translate-x-6 translate-y-4 shadow-lg">
                Available
              </div>
            </div>
          )}
          {product.availability === 'Coming Soon' && (
            <div className="absolute top-0 left-0 z-10">
              <div className="bg-blue-500 text-white text-xs font-bold px-8 py-2 transform -rotate-45 -translate-x-6 translate-y-4 shadow-lg">
                Coming Soon
              </div>
            </div>
          )}
          {product.availability === 'Out of Stock' && (
            <div className="absolute top-0 right-0 z-10">
              <div className="bg-red-600 text-white text-xs font-bold px-8 py-2 transform rotate-45 translate-x-6 translate-y-4 shadow-lg">
                Out of Stock
              </div>
            </div>
          )}
          
          {/* Product Image */}
          <div className="relative h-64 bg-gray-100">
            <Image
              src={product.mainImage.src}
              alt={product.mainImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/600x400/e5e7eb/6b7280?text=Medical+Equipment';
              }}
            />
          </div>

          {/* Product Content */}
          <div className="p-6">
            {/* For Coming Soon or Out of Stock - Show Simple Message */}
            {(product.availability === 'Coming Soon' || product.availability === 'Out of Stock') ? (
              <div className="text-center py-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {product.availability === 'Coming Soon' ? 'Coming Soon' : 'Out Of Stock'}
                </h3>
                <p className="text-gray-500 text-sm">
                  {product.availability === 'Coming Soon' ? '----------------------------' : '-----------------'}
                </p>
              </div>
            ) : (
              /* For Available Products - Show Full Details */
              <>
                {/* Brand */}
                <p className="text-sm text-gray-600 font-medium mb-2">{product.brand}</p>
                
                {/* Product Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {product.fullName || product.name}
                </h3>

                {/* Short Description */}
                {product.shortDescription && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.shortDescription}
                  </p>
                )}

                {/* Key Highlights */}
                {product.highlights && product.highlights.length > 0 && (
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {product.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index} className="text-sm text-gray-700 flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Condition Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {product.condition.charAt(0).toUpperCase() + product.condition.slice(1)}
                  </span>
                </div>

                {/* CTA Button */}
                <Link
                  href={product.urlPath || `/product-pages/${product.category}/${product.id}`}
                  className="block w-full text-center bg-[#59913d] hover:bg-[#255a0a] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Learn More
                </Link>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
