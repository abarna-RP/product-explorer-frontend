"use client";

import { useEffect, useState } from "react";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [params.id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <img
        src={product.imageUrl}  // ✅ Fix
        alt={product.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-600">{product.author}</p>
      <p className="text-xl text-blue-600 font-bold mt-2">
        {product.currency} {product.price}
      </p>
      <a
        href={product.sourceUrl}   // ✅ Fix
        target="_blank"
        className="text-blue-500 underline mt-4 block"
      >
        View Source
      </a>
    </div>
  );
}
