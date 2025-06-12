export default function Exercicio4({cor}){

 const estilo = {

        border : "2px solid " + cor,
        textAlign : "center",
        padding : "10px"


 };

return(

    <div >

        <h2 style={ estilo }>Exercicio 1 - Estilos CSS no React</h2>
        <p>Hello  <span style={ {color : cor}}>world</span></p>

    </div>

)




}