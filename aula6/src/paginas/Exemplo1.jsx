import { Link } from "react-router-dom";
import { useState } from "react";
export default function Exemplo1() {
    const [nome, setNome] = useState("Victor");
    const [idade, setIdade] = useState(19);
    const [resultado, setResultado] = useState(null);

    function calcular() {
        let dias = Number(idade) * 365;
        if (nome != "" && idade != "") {
            setResultado("Olá " + nome + " você ja viveu " + dias + "dias");
        } else {
            setResultado("Não foram informados valores suficientes");
        }
    }
    function limpar() {
        setIdade("");
        setNome("");
        setResultado("")
    }

    return (
        <div>
            <h1>Exemplo 1</h1>
            <div className="container">
                <form>
                    <p>
                        Digite o nome do aluno <br />
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </p>
                    <p>
                        Digite a idade do aluno <br />
                        <input type="text" value={idade} onChange={(e) => setIdade(e.target.value)} />
                    </p>
                    <p>
                        <input type="button" value="Exemplo1" onClick={calcular} />
                        <input type="button" value="Limpar" onClick={limpar} />
                    </p>
                    <p>
                        <b>Resultados:</b><br />
                        Nome:{nome} <br />
                        Idade:{idade} <br />
                        <p>
                            {resultado}
                        </p>
                    </p>
                </form>
                <li><Link to={"/"}>voltar</Link></li>
            </div>
        </div>
    )
}