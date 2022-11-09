const mysql = require('mysql');

const connect = mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "database": "Estacionamento"
});
function listarClientes(req, res) {
    let query = "SELECT * FROM Clientes";

    connect.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {

            if (err == null) {
                res.json(result).status(200).end();
            } else {
                res.json(err).status(400).end();
            }
        }
    })
};

function listarCliid(req, res) {
    let query = `SELECT * FROM Clientes where id_Cli = '${req.params.id_Cli}'`;

    connect.query(query, (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {

            if (err == null) {
                res.json(result).status(200).end();
            } else {
                res.json(err).status(400).end();
            }
        }
    })
};

function cadastrarCliente(req, res) {
    let query = `INSERT INTO Clientes VALUES ('${req.body.cpf}', '${req.body.nome}', '${req.body.telefone}')`;

    connect.query(query, (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {

            if (err == null) {
                res.status(201).json(req.body).end();
            } else {
                res.status(400).json(err).end();
            }
        };
    })
};

const apagarCliente = (req, res) => {
    let querry = `delete from Clientes where id_Cli = '${req.params.id_Cli}'`;

    connect.query(querry, (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
};


module.exports = {
    listarClientes,
    listarCliid,
    cadastrarCliente,
    apagarCliente
}