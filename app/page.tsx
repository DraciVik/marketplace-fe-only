import ProductGrid from './ProductGrid';

export const revalidate = 60;

async function fetchProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products');

    if (!res.ok) {
      let errorMessage = `Failed to fetch products. Status: ${res.status}`;

      switch (res.status) {
        case 404:
          errorMessage += ' - Not Found';
          break;
        case 500:
          errorMessage += ' - Internal Server Error';
          break;
        default:
          errorMessage += ` - ${res.statusText}`;
          break;
      }

      throw new Error(errorMessage);
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching products:', error);

    throw error;
  }
}

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <div className="container mx-auto px-4">
      <ProductGrid products={products} />
    </div>
  );
}
