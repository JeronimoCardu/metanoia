import useStore from "../../hooks/useStore.jsx";
import WhatsAppBtn from "../WhatsAppBtn.jsx";

export default function ProductModal() {
  const productModal = useStore((state) => state.productModal);
  const setProductModal = useStore((state) => state.setProductModal);
  const product = {
    id: 1,
    name: "Amatista",
    description: "Hermosa piedra de amatista con propiedades curativas.",
    price: 25.5,
    imageUrl: "public/img/productsImg/amatista.jpg",
  };
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${productModal.view ? "block" : "hidden"} bg-pink fixed top-1/2 left-1/2 z-100 h-fit w-[90%] -translate-x-1/2 -translate-y-1/2 transform rounded-lg border-2 border-black p-4 shadow-lg`}
    >
      <img src={`${product.imageUrl}`} alt={product.name} />
      <h2 className="mt-2 text-4xl font-bold">{product.name}</h2>
      <p className="my-4">{product.description}</p>
      <p className="text-2xl font-semibold">
        Price: ${product.price.toFixed(2)}
      </p>
      <WhatsAppBtn product={product.name}/>
      <div
        onClick={() =>
          setProductModal({ view: false, edit: false, productId: null })
        }
        className="absolute top-5 right-5 cursor-pointer"
      >
        X
      </div>
    </div>
  );
}
