import ProductDetail from './ProductDetail';

async function fetchProduct(id: string) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!res.ok) {
      let errorMessage = `Failed to fetch product with ID: ${id}. Status: ${res.status}`;

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
    console.error(`Error fetching product with ID: ${id}`, error);

    throw error;
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);

  return (
    <div className="container mx-auto px-4">
      <ProductDetail product={product} />
    </div>
  );
}
