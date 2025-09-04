import { Link } from "react-router-dom";
import { useState } from "react";
export default function Exercicio2() {
    const [n1, setN1] = useState(0);
    const [resultado, setResultado] = useState('')

    function calcular() {
        let cel = ((Number(n1) - 32) * 5) / 9;
        setResultado(n1 + ' em celcius ' + cel.toFixed(2));
    }
    return (
        <div>
            <h1>Exercicio 2</h1>
            <div class='container'>
                <form>
                    <p>Digite um numero:
                        <input type="text" value={n1} onChange={(e) => setN1(e.target.value)} />
                    </p>
                    <p>
                        <input type="button" value='Executar' onClick={calcular} />
                    </p>
                </form>

                <p>
                    {resultado}
                </p>
                <li><Link to={"/"}>voltar</Link></li>
            </div>

        </div>
    )
}