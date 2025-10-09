const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const banco = mysql2.createConnection({
    host : "localhost",
    port : 3308,
    user : "root",
    password : "mysqlfatec",
    database : "aulabd"
});

banco.connect( (erro) => {

    if (erro){
        console.log("Erro ao conectar ao MySQL: ");
        console.log(erro);
    } else {
        console.log("Conectado ao MySQL com sucesso !");
    }
});

app.listen(port, () => {
    console.log("Servidor rodando em http//localhost:" + port);
});
