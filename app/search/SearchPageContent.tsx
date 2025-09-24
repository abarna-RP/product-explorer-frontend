"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/search?q=${query}`)
        .then((res) => res.json())
        .then((data) => setResults(data))
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Search results for: "{query}"
      </h1>

      {results.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((product) => (
            <div key={product.id} className="border rounded-lg shadow p-4">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">{product.author}</p>
              <p className="font-bold">
                {product.currency}
                {product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
