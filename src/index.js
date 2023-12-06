import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Cabecalho from "./Cabecalho";
import Banner from "./Banner";
import Servicos from "./Servicos";
import SobreMim from "./SobreMim";
import Locais from "./Locais";
import Contato from "./Contato";
import Rodape from "./Rodape";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cabecalho />
    <Banner />
    <Servicos />
    <Locais />
    <SobreMim />
    <Contato />
    <Rodape />
  </React.StrictMode>
);
