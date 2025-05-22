export default function Exercicio4 ({tipo,base,altura})
{

    let at = Number(base * altura /2)
    let ab = Number(base*altura)

if (tipo == "triangulo")
{



return(

    <div>
    <div>
    A area do triangulo é: {at}
    </div>
    

    </div>
)



} else if (tipo == "retangulo")

{
let area = Number(base*altura)

return(

    <div>

    A area do retangulo é: {ab}

    </div>
) 



} else {

    return(

        <div>
    
        A area é 0
    
        </div>
    )  
    
}



}