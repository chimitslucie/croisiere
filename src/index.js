import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homePage";
import Bateau from "./Pages/Bateau";
import Barcelone from "./Pages/Barcelone";
import Cagliari from "./Pages/Cagliari";
import Naples from "./Pages/Naples";
import Civitavecchia from "./Pages/Civitavecchia";
import Genes from "./Pages/Genes";
import "./Style/Main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/bateau" element={<Bateau />} />
        <Route exact path="/Barcelone" element={<Barcelone />} />
        <Route exact path="/Cagliari" element={<Cagliari />} />
        <Route exact path="/Naples" element={<Naples />} />
        <Route exact path="/Civitavecchia" element={<Civitavecchia />} />
        <Route exact path="/Genes" element={<Genes />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
