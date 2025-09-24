export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/category/${params.slug}`,
    { cache: "no-store" } // 👈 fresh data always
  );
  const products = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{params.slug.toUpperCase()}</h1>

      {products.length === 0 ? (
        <p className="text-gray-500">No products found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product: any) => (
            <div key={product.id} className="border rounded-lg shadow p-4">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-gray-600">{product.author}</p>
              <p className="font-bold">
                {product.currency}{product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
