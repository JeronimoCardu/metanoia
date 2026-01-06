export default function FilterForm() {
  return (
    <form className="flex flex-col">
      <input
        className="border-green my-4 w-full rounded-lg border px-2 py-1 outline-0"
        //   value={dataForm.search}
        //   onChange={(e) =>
        //     setDataForm({ ...dataForm, search: e.currentTarget.value })
        //   }
        type="text"
        placeholder="Buscar producto..."
      />
      <button
        className="border-green mb-4 cursor-pointer rounded-lg border px-2 py-1 outline-0"
        onClick={() => setSelectStoneModal(true)}
      >
        Tipos de piedras
      </button>
    </form>
  );
}
