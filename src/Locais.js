import "./Locais.css";
import residencia from "./img/residencia.png";
import hospital from "./img/hospital.png";

export default function Locais() {
  return (
    <section className="locais">
      <h2 className="titulo_locais">Locais de atendimento</h2>
      <div className="locais_container">
        <div className="locais_atendimento">
          <img
            src={residencia}
            alt="desenho de uma casa"
            className="img_locais"
          />
          <p>Residências</p>
        </div>
        <div className="locais_atendimento">
          <img
            src={hospital}
            alt="desenho de um hospital"
            className="img_locais"
          />
          <p>Hospitais</p>
        </div>
      </div>
      <h3>Diurno ou noturno</h3>
    </section>
  );
}
