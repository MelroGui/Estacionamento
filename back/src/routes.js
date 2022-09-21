const Express = require('express');

const router = Express.Router();

const ClientesController = require("./controllers/ClientesController");
const VeiculosController = require("./controllers/VeiculosController");

router.get("/Clientes", ClientesController.listarClientes);
router.get("/Cliente/:data", ClientesController.listaCliente);
router.post("/Cliente", ClientesController.cadastrarCliente);

router.get("/Veiculos", VeiculosController.listarVeiculos);
router.get("/Veiculo/:data", VeiculosController.listaVeiculo);
router.post("/Veiculo", VeiculosController.cadastrarVeiculo);

module.exports = router;