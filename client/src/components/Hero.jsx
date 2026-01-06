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
      <button className="border-purple my-10 rounded-full border-2 p-2">
        <IoArrowDown className="text-purple size-15" />
      </button>
    </section>
  );
}
