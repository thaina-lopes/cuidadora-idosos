import Botao from "./Botao";
import "./Contato.css";

export default function Contato() {
  return (
    <section className="contato" id="contato">
      <h2 className="titulo_contato">Contato</h2>
      <a
        className="botaowhats"
        href="https://api.whatsapp.com/send?phone=5551996695151"
        target="_blank"
      >
        Solicite seu orçamento
      </a>
      <Botao />
    </section>
  );
}
