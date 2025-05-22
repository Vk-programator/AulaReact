import Exemplo1 from  "./componentes/exemplo1.jsx"
import Exercicio1 from "./componentes/exercicio1.jsx"
import Exercicio2 from "./componentes/exercicio2.jsx"
import Exercicio3 from "./componentes/exercicio3.jsx"
import Exercicio4 from "./componentes/exercicio4.jsx"
import Exercicio5 from "./componentes/exercicio5.jsx"
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

    <hr />
    <h1>Exercicio 3</h1>

    <Exercicio3 valor = {100} taxa = {10} tempo = {2} />
    <br />
    <Exercicio3 valor = {100} taxa = {10} tempo = {10} />

    <hr />
    
    <h1>Exercicio 4</h1>
    <Exercicio4 tipo="triangulo" base={5} altura={6} />

    <hr />
    <h1>Exercicio 5</h1>
    <Exercicio5 quantidade = {30} />
    
    </div>

    
  )

  
  
}
  
