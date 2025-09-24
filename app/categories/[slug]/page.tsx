"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/category/${params.slug}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [params.slug]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 capitalize">{params.slug}</h1>
      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
