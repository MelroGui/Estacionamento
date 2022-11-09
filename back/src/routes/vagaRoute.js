const Express = require('express');

const router = Express.Router();

const VagasC = require("../controllers/VagasController");

router.get("/Estacionamento/Vagas", VagasC.listarVagas);
router.get("/Estacionamento/Vagas/:id_vaga", VagasC.listaVaga);

module.exports = router;