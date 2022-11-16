const Express = require('express');
const router = Express.Router();

const CliR = require("../controllers/ClientesController");

router.get("/Estacionamento/Clientes", CliR.listarClientes);
router.get("/Estacionamento/Clientes/:id_Cli", CliR.listarCliid);
router.post("/Estacionamento/Cliente", CliR.cadastrarCliente);
router.delete("/Estacionamento/Clienti/:id_Cli", CliR.apagarCliente);

module.exports = router;