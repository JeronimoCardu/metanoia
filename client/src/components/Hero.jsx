import { IoArrowDown } from "react-icons/io5";

export default function Hero() {
  return (
    <section className="marginDefault text-center">
      <img src="/public/img/logo-web.png" alt="Metanoia Logo" />
      <h2 className="text-green text-lg">
        Piedras que acompañan tu transformación <br />
        En Metanoia seleccionamos piedras naturales cargadas de energía y
        significado, pensadas para acompañarte en cada etapa de tu camino.
        Conectá con lo esencial y llevá equilibrio, intención y belleza a tu día
        a día.
      </h2>
      <a href="#products" className="mx-auto my-10 block w-fit">
        <IoArrowDown className="text-purple border-purple mx-auto my-10 size-15 rounded-full border-2 p-2" />
      </a>
    </section>
  );
}
