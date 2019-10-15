"use strict";
exports.__esModule = true;
var grammar = require("./parser");
var nearley = require("nearley");
var parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
var log = function (item) { console.log(item); };
parser.feed("Program helloWorld var hola: int; fn main()void { return = 9 ; }");
log(parser.results);
