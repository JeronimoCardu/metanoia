import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import OresFilterModal from "./components/modals/OresFilterModal.jsx";

import useStore from "./hooks/useStore.jsx";

export default function App() {
  const selectOreModal = useStore((state) => state.selectOreModal);
  const setSelectOreModal = useStore((state) => state.setSelectOreModal);
  return (
    <>
      <OresFilterModal />
      <main
        onClick={() => selectOreModal && setSelectOreModal(false)}
        className={`${selectOreModal ? "blur-md" : ""}`}
      >
        <Hero />
        <ProductList />
      </main>
      <Footer />
    </>
  );
}
