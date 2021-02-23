const Rota = require('./backend/Rota');

const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

function enviar_para_html(req, res, caminho){
    res.sendFile(path.join(__dirname+caminho));
}

router.get('/', function(req, res){ // / simboliza o principal (no caso o localhost)
    enviar_para_html(req, res, '/frontend/index.html');
});
router.get('/sobre', function(req, res){
    enviar_para_html(req, res, '/frontend/sobre.html');
});

app.use('/', router);
app.listen(process.env.port || 3000);
console.log('server rodando');

const rota = new Rota();
rota.gerarOnibus(2, 2, 'quant_assentos', 'nada');
