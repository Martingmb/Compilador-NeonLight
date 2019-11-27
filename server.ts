import * as express from 'express';
import * as jison from "jison";
import * as bodyParser from "body-parser";
import { maquinaVirtual } from './maquinaVirtual';
import { readFileSync } from "fs";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (request, res) => {
    res.send('Hola');
})

app.post('/compile', (req, res) => {
    var bnf = readFileSync("neonlightGramatica.jison", "utf8");
    var parser = jison.Jison.Parser(bnf);
    let data = req.body.data;
    let parsed = parser.parse(req.body.data);
    let vm =new maquinaVirtual(parsed);
    vm.processCode();
    res.status(201).json({
        message: 'Compile succesfully',
        intercode: vm.getResult()
    });
});


app.listen('8080', () => {
    console.log("EXPRESS RUNNING");
})
