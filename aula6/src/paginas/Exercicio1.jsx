import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio1() {
    const [n1, setN1] = useState(0);
    const [resultado, setResultado] = useState('')

    function quadrado() {

        let quadrado = Number(n1) ** 2;
        let cubo = Number(n1) ** 3;
        setResultado('O quadrado é ' + quadrado + ' e o cubo é ' + cubo);



    }

    return (
        <div>
            <h1>Exercicio 1</h1>
            <div class='container'>

                <form>
                    <p>Digite um numero qualquer:
                        <input type="text" value={n1} onChange={(e) => setN1(e.target.value)} />
                    </p>
                    <p>
                        <input type="button" value='Executar' onClick={quadrado} />
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