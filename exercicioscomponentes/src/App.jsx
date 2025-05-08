import Exemplo1 from  "./componentes/exemplo1.jsx"
import Exercicio1 from "./componentes/exercicio1.jsx"
import Exercicio2 from "./componentes/exercicio2.jsx"

export default function App(){


  return (
    <div>

    <h1>Exercicios componentes</h1>
    <h3>Chamada para o Exemplo</h3>
    <Exemplo1 numero1 = {8} numero2 = {2}/>

    <hr />

    <h1>Exercicio 1</h1>

    <Exercicio1 numero = {31} />

    <hr />

    <h1>Exercicio 2</h1>

    <Exercicio2 peso = {60} altura = {1.70} />

    </div>
    
  )

  
  
}
  
