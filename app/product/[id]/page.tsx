export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  // ✅ params-ஐ await பண்ணணும்
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
    { cache: "no-store" }
  );
  const product = await res.json();

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={product.imageUrl}
        alt={product.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-600 mb-2">by {product.author}</p>
      <p className="font-bold text-lg mb-4">
        {product.currency}{product.price}
      </p>
      <a
        href={product.sourceUrl}
        target="_blank"
        className="text-blue-600 underline"
      >
        View Source
      </a>
    </div>
  );
}
