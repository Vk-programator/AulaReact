import { Link } from "react-router-dom";
import { useState } from "react";
export default function Exemplo1(){
        const [nome, setNome] = useState("Victor");
        const [idade, setIdade] = useState(19);
    return(
        <div>
            <h1>Exemplo 1</h1>
            <div className="container">
            <form>
                <p>
                    Digite o nome do aluno <br />
                    <input type="text" value={nome}/>
                </p>
                <p>
                    Digite a idade do aluno <br />
                    <input type="text" value={idade}/>
                </p>
                <p>
                    <input type="button" value="Exemplo1" />
                    <input type="button" value="Limpar" />
                </p>
            </form>
            <li><Link to={"/"}>voltar</Link></li>
            </div>
        </div>
    )
}