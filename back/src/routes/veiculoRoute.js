const Express = require('express');

const router = Express.Router();

const VeiculosController = require("../controllers/VeiculosController");

router.get("/Estacionamento/Veiculos", VeiculosController.listarVeiculos);
router.get("/Estacionamento/Veiculo/:placa", VeiculosController.listaVeiculo);
router.post("/Estacionamento/Veiculo", VeiculosController.cadastrarVeiculo);

module.exports = router;