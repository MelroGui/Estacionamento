
const mysql = require('mysql');

const connect = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "Estacionamento"
});

function listarVagas(req, res) {
    let query = "SELECT * FROM Vagas";

    connect.query(query, (err, result) => {
        if(err == null) {
            res.json(result).status(200).end();
        }else {
            res.json(err).status(400).end();
        }
    })
};

function listaVaga(req, res) {
    let query = `SELECT * FROM Vagas WHERE id_vaga = '${req.params.id_vaga}'`;
    
    connect.query(query, (err, result) => {
        if(err == null) {
            res.status(200).json(result).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarVagas,
    listaVaga
}