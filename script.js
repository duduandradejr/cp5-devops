var express = require('express');
var app = express();

app.get('/executar', function(req, res) {
    var entrada = req.query.codigo;
    eval(entrada); // Vulnerabilidade crítica de injeção de código
});