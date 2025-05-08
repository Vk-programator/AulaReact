export default function Exercicio2({peso, altura})
{

    let imc = Number(peso) / (Number(altura) ** 2);


    return(


        <div>

        O seu imc é {imc.toFixed(2)}

        </div>


    )

}