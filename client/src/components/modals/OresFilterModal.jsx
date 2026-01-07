import useStore from "../../hooks/useStore.jsx";

export default function OresFilterModal() {
  const selectOreModal = useStore((state) => state.selectOreModal);
  const setSelectOreModal = useStore((state) => state.setSelectOreModal);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${selectOreModal ? "flex" : "hidden"} bg-pink border-green text-green absolute top-[50%] left-[50%] z-100 flex h-[70%] w-[90%] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-2xl border-2 shadow-xl`}
    >
      Modal de Filtros de Ores
      <div
        onClick={() => setSelectOreModal(false)}
        className="absolute top-5 right-5 cursor-pointer"
      >
        X
      </div>
    </div>
  );
}
