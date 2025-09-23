"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export const dynamic = "force-dynamic"; // 🚨 Prevent prerender errors

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/search/query?q=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [query]);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        Search Results for: <span className="text-blue-600">{query}</span>
      </h1>

      {results.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((product) => (
            <div key={product.id} className="border rounded-lg shadow p-4">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-40 object-cover mb-2"
              />
              <h2 className="font-semibold">{product.title}</h2>
              <p className="text-sm text-gray-600">{product.author}</p>
              <Link
                href={`/product/${product.id}`}
                className="text-blue-600 hover:underline text-sm mt-2 block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
