import useStore from "../hooks/useStore";

export default function FilterForm() {
  const dataFilters = useStore((state) => state.dataFilters);
  const setDataFilters = useStore((state) => state.setDataFilters);
  const setSelectOreModal = useStore((state) => state.setSelectOreModal);

  return (
    <form className="flex flex-col">
      <input
        className="border-green my-4 w-full rounded-lg border px-2 py-1 outline-0"
        value={dataFilters.search}
        onChange={(e) =>
          setDataFilters({ ...dataFilters, search: e.currentTarget.value })
        }
        type="text"
        placeholder="Buscar producto..."
      />
      <button
        className="border-green mb-4 cursor-pointer rounded-lg border px-2 py-1 outline-0"
        onClick={() => setSelectOreModal(true)}
      >
        Tipos de piedras
      </button>
    </form>
  );
}
