import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h1>Estudo De Estados</h1>
            <li><Link to={"/ex1"}>Exemplo 1</Link></li>
            <li><Link to={"/ex2"}>Exemplo 2</Link></li>
            <h2>Exercicios</h2>
            <li><Link to={"/exe1"}>Exercicio 1</Link></li>
            <li><Link to={"/exe2"}>Exercicio 2</Link></li>
            <li><Link to={"/exe3"}>Exercicio 3</Link></li>
            <li><Link to={"/exe4"}>Exercicio 4</Link></li>
            <li><Link to={"/exe5"}>Exercicio 5</Link></li>
        </div>
    )
}