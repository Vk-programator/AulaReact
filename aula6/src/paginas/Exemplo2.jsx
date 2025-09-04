import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exemplo2(){
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [resultado, setResultado]= useState(null);

    function calcular(){
        let soma = Number(n1) + Number(n2)
        setResultado("A soma de " + n1 + " + " + n2 + " = " + soma)
    }
    return(

        <div>
            <h1>Exemplo2</h1>
            <div className="container">
                <form>
                    <p>
                        Numero 1:
                        <input type="text" value={n1} onChange={(e) => setN1(e.target.value)} />
                    </p>
                    <p>
                        Numero 1:
                        <input type="text" value={n2} onChange={(e) => setN2(e.target.value)} />
                    </p>
                    <p>
                        <input type="button" value="Exemplo2"onClick={calcular} />
                    </p>
                    <p>
                        {resultado}
                    </p>
                </form>
                <li><Link to={"/"}>voltar</Link></li>
            </div>
        </div>
    )
}