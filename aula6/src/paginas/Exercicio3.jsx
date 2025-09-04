import { Link } from "react-router-dom";
import { useState } from "react";
export default function Exercicio3(){
    const[pres, setPres] = useState(0);
    const[juros, setJuros] = useState(0);
    const[dias, setDias] = useState(0);
    return(
        <div>
            <h1>Exercicio 3</h1>
            <div class='container'>
                <form>
                    <p>Digite o valor da prestação:
                        <input type="text" />
                    </p>
                    <p>Digite a taxa de juros:
                        <input type="text" />
                    </p>
                    <p>Digite o tempo(em dias) de atraso:
                        <input type="text" />
                    </p>
                    <p>
                        <input type="button" value='Executar' />
                    </p>
                </form>
            <li><Link to={"/"}>voltar</Link></li>
            </div>
            
        </div>
    )
}