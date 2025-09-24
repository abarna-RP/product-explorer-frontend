"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";

export default function CategoryPage() {
  const { slug } = useParams();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetch(`https://product-explorer-backend-2.onrender.com/products/category/${slug}`)
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [slug]);

  if (loading) return <p className="p-4">Loading category...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 capitalize">{slug}</h1>
      {products.length === 0 ? (
        <p className="text-red-500">No products found in this category.</p>
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
