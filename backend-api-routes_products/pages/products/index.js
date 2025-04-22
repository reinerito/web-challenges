import useSWR from "swr";

// This function helps us fetch data
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductsPage() {
  // Fetch data from our API
  const { data, error } = useSWR("/api/products", fetcher);

  // Show loading message while data is being fetched
  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>
              Price: {product.price}
              {product.currency}
            </p>
            <p>Category: {product.category}</p>
            <a href={`/products/${product.id}`}>View Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
