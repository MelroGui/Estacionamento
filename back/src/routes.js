const Express = require('express');

const router = Express.Router();

const ClientesController = require("./controllers/ClientesController");

router.get("/Clientes", ClientesController.listarClientes);
router.get("/Cliente/:data", ClientesController.listaCliente);
router.post("/Cliente", ClientesController.cadastrarCliente);

module.exports = router;