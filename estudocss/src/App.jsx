import Exercicio1 from "./Paginas/Exercicio1"
import Exercicio2 from "./Paginas/Exercicio2"
import Exemplo3 from "./Paginas/Exercicio3"
import Exercicio4 from "./Paginas/Exercicio4"
import Exercicio5 from "./Paginas/Exercicio5"
export default function App() {


  return (
   <div>
    <h1>Aula 02 - Estilo Css no React</h1>
    <Exercicio1 />
    <hr />
    <Exercicio2 />
    <hr />
    <Exemplo3 />
    <hr />
    <Exercicio4  cor = "red"/>
    <hr />
    <Exercicio4  cor = "blue"/>
    <hr />
    <Exercicio4  cor = "violet"/>
    <hr />
    <Exercicio4  cor = "crimson"/>
    <hr />
    <Exercicio5 nota1={4} nota2={2} />
    <hr />
    <Exercicio5 nota1={6} nota2={9} />
   
   </div>
   
  

  )
}


