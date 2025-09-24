// app/categories/[slug]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const { slug } = useParams() as { slug: string };
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/category/${slug}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch(() => setProducts([]))
        .finally(() => setLoading(false));
    }
  }, [slug]);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{slug.toUpperCase()}</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
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
