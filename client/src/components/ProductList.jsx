import FilterForm from "./FilterForm.jsx";
import ProductCard from "./ProductCard.jsx";

export default function ProductList() {
  const products = []; // This would normally come from props or state
  return (
    <section id="products" className="marginDefault my-30 min-h-screen pt-10">
      <h1 className="text-4xl">Productos</h1>
      <FilterForm />
      {products.length === 0 ? (
        <p className="text-green text-lg">No se encontraron productos</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
