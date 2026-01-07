import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import OresFilterModal from "./components/modals/OresFilterModal.jsx";
import ProductModal from "./components/modals/ProductModal.jsx";
import useStore from "./hooks/useStore.jsx";

export default function App() {
  const selectOreModal = useStore((state) => state.selectOreModal);
  const setSelectOreModal = useStore((state) => state.setSelectOreModal);
  const productModal = useStore((state) => state.productModal);
  const setProductModal = useStore((state) => state.setProductModal);
  return (
    <>
      <OresFilterModal />
      <ProductModal />
      <main
        onClick={() => {
          if (selectOreModal) {
            setSelectOreModal(false);
          }
          if (productModal.view) {
            setProductModal({ view: false, edit: false, productId: null });
          }
        }}
        className={`${selectOreModal || productModal.view ? "blur-md" : ""}`}
      >
        <Hero />
        <ProductList />
      </main>
      <Footer />
    </>
  );
}
