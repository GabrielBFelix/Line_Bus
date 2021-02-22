const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req, res){ // / simboliza o principal (no caso o localhost)
    res.sendFile(path.join(__dirname+'/front_end/index.html'));
});
router.get('/sobre', function(req, res){
    res.sendFile(path.join(__dirname+'/front_end/sobre.html'));
});

app.use('/', router);
app.listen(process.env.port || 3000);
console.log('server rodando');
