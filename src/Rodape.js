import "./Rodape.css";
import logo from "./img/logo.png";

export default function Rodape() {
  return (
    <footer>
      <div className="rodape">
        <img src={logo} alt="Logo" className="logo-rodape" />
        <p className="paragrafo_rodape">
          {" "}
          &copy; Desenvolvido por{" "}
          <a
            href="https://portfolio-three-mu-32.vercel.app/"
            target="_blank"
            className="thaina"
          >
            Thainá Lopes
          </a>
        </p>
      </div>
    </footer>
  );
}
