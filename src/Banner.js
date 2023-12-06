import "./Banner.css";
import Botao from "./Botao";
import banner from "./img/img_banner.png";

export default function Banner() {
  return (
    <section className="container_banner">
      <div className="banner">
        <h2 className="titulo">Neiva Garcia</h2>
        <h1 className="subtitulo">Cuidadora de idosos</h1>
        <Botao />
      </div>
      <div className="imagem">
        <img
          src={banner}
          alt="segurando as mãos de uma pessoa idosa"
          className="imagem-banner"
        />
      </div>
    </section>
  );
}
