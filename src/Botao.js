import "./Botao.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Botao() {
  return (
    <a
      className="botao_whats"
      href="https://api.whatsapp.com/send?phone=5551996695151"
      target="_blank"
    >
      <FaWhatsapp size={35} />
      <span className="numero-whats">Entrar em contato</span>
    </a>
  );
}
