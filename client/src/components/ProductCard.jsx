export default function ProductCard({ product }) {
  return (
    <>
      <div className="border-green relative cursor-pointer rounded-lg border p-4 shadow-xl">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="mb-4 h-48 w-full object-cover"
        />
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="text-green my-2 mb-4">
          {product.description.slice(0, 35)}...
        </p>
        <p className="text-purple absolute right-4 bottom-4 font-semibold">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </>
  );
}
