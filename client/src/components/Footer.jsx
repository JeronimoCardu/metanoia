export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-green mt-10 w-full">
      <div className="mx-auto max-w-7xl px-4 py-4 text-center text-white">
        © {year} Metanoia. Todos los derechos reservados.
      </div>
    </footer>
  );
}
