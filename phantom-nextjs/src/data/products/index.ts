/**
 * Product Data Index
 * ==================
 * Central export for all product data
 */

import { Product } from '@/types/product';
import { mri3TProducts } from './mri-3t';
import { ctScannerProducts } from './ct-scanners';

// Combine all products
export const allProducts: Product[] = [
  ...mri3TProducts,
  ...ctScannerProducts,
];

// Export by category
export { mri3TProducts } from './mri-3t';
export { ctScannerProducts } from './ct-scanners';

// Helper functions
export function getProductById(id: string): Product | undefined {
  return allProducts.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter(product => product.category === category);
}

export function getProductsByBrand(brand: string): Product[] {
  return allProducts.filter(product => product.brand === brand);
}

export function getRelatedProducts(productId: string, limit: number = 3): Product[] {
  const product = getProductById(productId);
  if (!product || !product.relatedProducts) return [];
  
  return product.relatedProducts
    .map(id => getProductById(id))
    .filter((p): p is Product => p !== undefined)
    .slice(0, limit);
}
