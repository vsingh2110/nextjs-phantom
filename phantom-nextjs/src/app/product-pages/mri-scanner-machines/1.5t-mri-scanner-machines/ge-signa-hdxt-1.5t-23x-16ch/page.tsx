import ProductPageTemplate from '@/components/product/ProductPageTemplate';
import { allProducts } from '@/data/products';

export default function Page() {
  const product = allProducts.find(p => p.id === 'ge-signa-hdxt-1.5t-23x-16ch');
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  return <ProductPageTemplate product={product} />;
}

export async function generateMetadata() {
  const product = allProducts.find(p => p.id === 'ge-signa-hdxt-1.5t-23x-16ch');
  
  if (!product) {
    return {};
  }
  
  return {
    title: product.metaTitle,
    description: product.metaDescription,
    keywords: product.keywords?.join(', '),
  };
}
