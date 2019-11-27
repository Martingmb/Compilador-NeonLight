"use strict";
exports.__esModule = true;
var express = require("express");
var jison = require("jison");
var bodyParser = require("body-parser");
var fs_1 = require("fs");
var app = express();
var bnf = fs_1.readFileSync("neonlightGramatica.jison", "utf8");
var parser = jison.Jison.Parser(bnf);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/test', function (request, res) {
    res.send('Hola');
});
app.post('/compile', function (req, res) {
    var parsed = parser.parse(req.body.data);
    res.status(201).json({
        message: 'Compile succesfully',
        intercode: parsed
    });
});
app.listen('8080', function () {
    console.log("EXPRESS RUNNING");
});
