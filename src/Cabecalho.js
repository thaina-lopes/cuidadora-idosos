import logo from "./img/logo.png";
import "./Cabecalho.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Cabecalho() {
  return (
    <header>
      <div className="cabecalho">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <a href="#servicos">Serviços</a>
          <a href="#sobremim">Sobre mim</a>
          <a href="#contato">Contato</a>
          <a
            className="whats"
            href="https://api.whatsapp.com/send?phone=5551996695151"
            target="_blank"
          >
            <FaWhatsapp size={35} />
            <span class="balao">Whatsapp</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
