import * as express from 'express';
import * as jison from "jison";
import * as bodyParser from "body-parser";
import { maquinaVirtual } from './maquinaVirtual';
import { readFileSync } from "fs";

const app = express();

var bnf = readFileSync("neonlightGramatica.jison", "utf8");
var parser = jison.Jison.Parser(bnf);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (request, res) => {
    res.send('Hola');
})

app.post('/compile', (req, res) => {
    let parsed = parser.parse(req.body.data);

    res.status(201).json({
        message: 'Compile succesfully',
        intercode: parsed
    });
});


app.listen('8080', () => {
    console.log("EXPRESS RUNNING");
})
