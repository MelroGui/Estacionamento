const mysql = require('mysql');

const connect = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "Estacionamento"
});


function listarVeiculos(req, res) {
    let query = "SELECT * FROM Veiculos";

    connect.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.json(err).status(400).end();
        }
    })
};

function listaVeiculo(req, res) {
    let query = `SELECT * FROM Veiculos WHERE placa = '${req.params.placa}'`;

    connect.query(query, (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
};

function cadastrarVeiculo(req, res) {
    let query = `INSERT INTO Veiculos VALUES ('${req.body.id_Cli}', '${req.body.placa}', '${req.body.cor}', '${req.body.modelo}', '${req.body.descricao}')`;

    connect.query(query, (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    });
};

module.exports = {
    listarVeiculos,
    listaVeiculo,
    cadastrarVeiculo
}