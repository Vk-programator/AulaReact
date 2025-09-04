import { Link } from "react-router-dom";
import { useState } from "react";
export default function Exercicio3(){
    const[pres, setPres] = useState(0);
    const[juros, setJuros] = useState(0);
    const[dias, setDias] = useState(0);
    const[resultado, setResultado] = useState('')

    function calcular(){
        let v = Number(pres);
        let j = Number(juros);
        let d = Number(dias);

        let total = v + (v * ((j**2)/100) * d)

        setResultado('O valor total da parcela é ' + total)

    }
    return(
        <div>
            <h1>Exercicio 3</h1>
            <div class='container'>
                <form>
                    <p>Digite o valor da prestação:
                        <input type="text" value={pres} onChange={(e) => setPres(e.target.value)}/>
                    </p>
                    <p>Digite a taxa de juros:
                        <input type="text" value={juros} onChange={(e) => setJuros(e.target.value)}/>
                    </p>
                    <p>Digite o tempo(em dias) de atraso:
                        <input type="text" value={dias} onChange={(e) => setDias(e.target.value)}/>
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