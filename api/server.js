const express = require('express');
const app = express(), bodyParser = require("body-parser");
const port = 3080;
const JSONdb = require('simple-json-db');
const db = new JSONdb('./db/db.json');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.get('/executar-get', async (req, res) => {
    try {
        return res.json(db.get('teste'));
    } catch (e) {
        return res.json(e);
    }

});

app.post('/executar-post', async (req, res) => {
    try {
        db.set(req.body.dado, req.body.dado);
        return res.json('POST executado com sucesso');
    } catch (e) {
        return res.json(e);
    }
});

app.listen(port, () => {
    console.log(`Server on na porta:${port}`);
});