import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/random-character", fetcher);

  if (error) return <div>Failed to load character</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Random Character</h1>
      <ul>
        <li>
          Name: {data.firstName} {data.lastName}
        </li>
        <li>Age: {data.age}</li>
        <li>Twitter: {data.twitter}</li>
        <li>Geohash: {data.geohash}</li>
        <li>Email: {data.email}</li>
        <li>Phone: {data.phone}</li>
        <li>Address: {data.address}</li>
      </ul>
    </div>
  );
}
