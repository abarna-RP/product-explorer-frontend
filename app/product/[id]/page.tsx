"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          // ✅ backend return single object
          setProduct(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p className="p-4">Loading product...</p>;
  if (!product) return <p className="p-4 text-red-500">Product not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">Home</Link> /{" "}
        <Link href={`/categories/books`} className="hover:underline">Books</Link> /{" "}
        <span className="text-gray-700">{product.title}</span>
      </div>

      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

      <div className="flex gap-6">
        <img
          src={product.imageUrl}  // ✅ fixed
          alt={product.title}
          className="w-64 h-80 object-cover mb-4 rounded-md shadow"
        />

        <div>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Author:</span> {product.author}
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">Price:</span> {product.currency}{product.price}
          </p>

          {/* Rating UI */}
          <div className="flex items-center gap-1 mb-4">
            {Array(5).fill(0).map((_, i) => (
              <span key={i} className="text-yellow-500">★</span>
            ))}
            <span className="text-gray-600 text-sm ml-2">(120 reviews)</span>
          </div>

          <a
            href={product.sourceUrl} // ✅ fixed
            target="_blank"
            className="text-white bg-green-600 px-4 py-2 rounded hover:bg-green-700"
          >
            View Original Product
          </a>
        </div>
      </div>
    </div>
  );
}
