import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppBtn({ product }) {
  return (
    <a
      href={`https://wa.me/2325471890/?text=Hola,%20estoy%20interesado%20en%20el%20producto%20que%20vi%20en%20su%20sitio%20web.%20¿Podrías%20proporcionarme%20más%20información%20sobre%20el%20producto%20${encodeURIComponent(product)}?`}
      target="_blank"
      rel="noopener noreferrer"
      className="border-green hover:bg-darkGreen mt-4 flex w-fit items-center gap-2 justify-self-end rounded border bg-green-600 px-6 py-3 font-semibold text-white"
    >
      Consultar via WhatsApp <FaWhatsapp />
    </a>
  );
}
