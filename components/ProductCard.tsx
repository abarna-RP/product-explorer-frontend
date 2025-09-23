import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col">
      <img
        src={product.imageUrl}  // ✅ fixed
        alt={product.title}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">{product.author}</p>
      <p className="font-bold mt-2">
        {product.currency}
        {product.price}
      </p>
      <Link
        href={`/product/${product.id}`}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
      >
        View Details
      </Link>
    </div>
  );
}
