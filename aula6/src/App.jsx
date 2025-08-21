import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Exemplo1 from "./paginas/Exemplo1";
import Exemplo2 from "./paginas/Exemplo2";
import Home from "./paginas/Home";
import Exercicio4 from "./paginas/Exercicio4";
import Exercicio5 from "./paginas/Exercicio5";
import Exercicio3 from "./paginas/Exercicio3";
import Exercicio2 from "./paginas/Exercicio2";
import Exercicio1 from "./paginas/Exercicio1";
import "./paginas/estilo.css";

export default function App(){
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ex1" element={<Exemplo1 />} />
          <Route path="ex2" element={<Exemplo2 />} />
          <Route path="exe1" element={<Exercicio1 />} />
          <Route path="exe2" element={<Exercicio2 />} />
          <Route path="exe3" element={<Exercicio3 />} />
          <Route path="exe4" element={<Exercicio4 />} />
          <Route path="exe5" element={<Exercicio5 />} />
        </Routes>
      </BrowserRouter>

  )

}
