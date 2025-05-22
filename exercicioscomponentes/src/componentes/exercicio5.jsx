export default function Exercicio5({quantidade})
{

let bruto = Number(quantidade * 150)
let ali = Number(bruto * 0.08)
let li = Number(bruto - ali)

return (

    <div>
        A quantidade de consultas é: {quantidade}
        <br />
        O salario bruto é: {bruto}
        <br />
        O valor da aliquota é: {ali}
        <br />
        O Salario liquido é: {li}
    </div>
)

}