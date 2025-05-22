export default function Exercicio3({valor,taxa,tempo})
{

let parcela = Number(valor + (valor  * (taxa**2/100) * tempo));

return(

<div>
valor: R${valor.toFixed(2)}   
<br />    
taxa: {taxa}%    
<br />
tempo: {tempo} dias
<br />
O valor atualizado da parcela em atraso é: R${parcela.toFixed(2)}

</div>


)

}