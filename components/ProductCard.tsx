"use client";

import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border rounded-lg shadow p-4">
      <img
        src={product.imageUrl}   // ✅ image_url → imageUrl
        alt={product.title}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-sm text-gray-600">{product.author}</p>
      <p className="text-blue-600 font-bold">
        {product.currency} {product.price}
      </p>
      <Link
        href={`/product/${product.id}`}
        className="text-white bg-blue-600 px-3 py-1 rounded mt-2 inline-block hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
}
