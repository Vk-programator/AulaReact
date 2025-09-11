import { Link } from "react-router-dom";
import { useState } from "react";
export default function Exercicio11(){
    const[primeiro, setPrimeiro] = useState(0);
    const[razao, setRazao] = useState(0);
    const[quantidade, setQuantidade] = useState(0);
    const[resultado, setResultado] = useState('');

    function calcular(){
        //Progressão Aritmetica
        let r = Number(razao);
        let a1 = Number(primeiro);
        let n = Number(quantidade);
        let an = a1 + (n - 1) * r;
        let sf = (a1 + an) * n / 2; 
        //Progressão Geometrica
        let ang = a1*r**(n-1);
        let sfa = a1*(r**n - 1)/r-1;

        
        setResultado(
            <div>
            <p>  
                Progressão Aritmerica: <br/>
                Razão:{razao} <br/>
                Termo Geral:{an} <br/>
                Soma finita:{sf}<br/>
                Soma infinita: +-∞ <br/>
                Progressão Geometrica:<br/>
                Razão:{razao} <br/>
                Termo Geral:{ang} <br/>
                Soma finita:{sfa}<br/>
                Soma infinita: +-∞ <br/>
            </p>

            
            </div>
    
        ) 

    }

   
    
return(
    <div>
            <h1>Exercicio 11</h1>
            <div class="container">
                <form>
                    <p> Primeiro termo
                        <input type="text" value={primeiro} onChange={(e) => setPrimeiro(e.target.value)} />
                    </p>
                    <p> Razão
                        <input type="text" value={razao} onChange={(e) => setRazao(e.target.value)}/>
                    </p>
                    <p> quantidade de digitos
                        <input type="text" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} />
                    </p>
                    <p>
                        <input type="button" value="Executar" onClick={calcular} />
                    </p>
                </form>
                <p>
                    {resultado}
                </p>
            </div>
    </div>
)
}