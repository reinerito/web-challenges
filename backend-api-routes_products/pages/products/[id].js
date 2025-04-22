import { useRouter } from "next/router";
import useSWR from "swr";

// This function helps us fetch data
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ProductDetailsPage() {
  // Get the product ID from the URL
  const router = useRouter();
  const { id } = router.query;

  // Fetch data from our API
  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  // Show loading message while data is being fetched
  if (error) return <div>Failed to load product</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        Price: {data.price}
        {data.currency}
      </p>
      <p>Category: {data.category}</p>
      <a href="/products">Back to All Products</a>
    </div>
  );
}
