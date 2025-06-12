export default function Exercicio5({ nota1, nota2 }){

    let media = Number ((nota1 + nota2)  / 2);
    
    

    if (media >= 6){

        const estilo = {

            backgroundColor : "blue",
            color : "white"

        }

        return(
            <div>
                <h2>Exercicio 2 - Calculo de media</h2>
                <p> nota 1:  {nota1} </p>
                <p> nota 2: {nota2}</p>
                <p>media: {media}</p>
                <p style={estilo}>Aluno Aprovado!</p>
            </div>
        ) 



    } else {

        const estilo = {

            backgroundColor : "crimson",
            color : "white"

        }

        return(
            <div>
                <h2>Exercicio 2 - Calculo de media</h2>
                <p> nota 1:  {nota1} </p>
                <p> nota 2: {nota2}</p>
                <p>media: {media}</p>
                <p style={estilo}>Aluno Reprovado!</p>
            </div>
        ) 
    } 


}