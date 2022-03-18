const express = require('express');
const app = express(), bodyParser = require("body-parser");
const port = 3080;
import { JsonDB } from 'node-json-db';
import { Config } from 'node-json-db/dist/lib/JsonDBConfig'

let db = new JsonDB(new Config("./db.json", true, false, '/'));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.get('/executar-get', async (req, res) => {
    try {
        return res.json(db.getData("/"));
    } catch (e) {
        return res.json(e);
    }

});

app.post('/executar-post', async (req, res) => {

});

app.listen(port, () => {
    console.log(`Server on na porta:${port}`);
});