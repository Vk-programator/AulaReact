export default function Exercicio1 ({numero})
{

    let cel = (Number(numero) - 32) *5/9;

    return(
        <div>
            A temperatura de {numero} em celsius é igual a {cel.toFixed(2)}
        </div>
    )


}
