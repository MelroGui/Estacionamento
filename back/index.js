const Express = require('express');
const cors = require('cors');

const cliroute = require('./src/routes/cliRoute.js');
const veiculoRoute = require('./src/routes/veiculoRoute.js');
const vagaroute = require('./src/routes/vagaRoute.js');

const app = Express();
app.use(Express.json());
app.use(cors());
app.use(cliroute);
app.use(veiculoRoute);
app.use(vagaroute);

app.listen(3000, () => {
    console.log("Bom dia con una flo proce");
});