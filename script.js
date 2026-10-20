const express = require('express');
const app = express();

app.post('/executar', (req, res) => {
    const codigoDoUtilizador = req.body.codigo;
    
    eval(codigoDoUtilizador); 
});