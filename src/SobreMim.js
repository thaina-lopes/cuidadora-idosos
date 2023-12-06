import "./SobreMim.css";
import sobremim from "./img/img_sobremim.png";

export default function SobreMim() {
  return (
    <section className="sobreMim" id="sobremim">
      <div className="container_imagem">
        <img src={sobremim} alt="Foto da Neiva Garcia" className="foto" />
      </div>
      <div className="container_sobreMim">
        <h2 className="titulo_SobreMim">Sobre mim</h2>
        <p className="paragrafo_SobreMim">
          Me chamo Neiva e sou de Porto Alegre. Nos últimos 7 anos, tenho
          desempenhado um papel dedicado como cuidadora de idosos e acompanhante
          hospitalar. Minha trajetória profissional tem sido marcada por uma
          profunda dedicação para o bem-estar e cuidado dos idosos que
          acompanho. Meu propósito é contribuir para uma existência mais
          significativa e confortável para aqueles que já trilharam longos
          caminhos em suas vidas. Através da minha experiência, empenho-me em
          assegurar não apenas cuidados físicos, mas também zelar pela qualidade
          de vida, dignidade e conforto dos nossos idosos.
        </p>
      </div>
    </section>
  );
}
