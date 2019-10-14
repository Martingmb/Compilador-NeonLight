"use strict";
exports.__esModule = true;
var grammar = require("./simple");
var nearley = require("nearley");
var parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
var log = function (item) { console.log(item); };
parser.feed("Program");
parser.feed("\"helloworld\"");
parser.feed("var");
parser.feed("hola:string;");
parser.feed("var");
parser.feed("mundo:string;");
// parser.feed("var")
// parser.feed("world:int=40;")
// parser.feed("var")
// parser.feed("hello:string;")
parser.feed("var[]");
parser.feed("arr:");
parser.feed("string");
parser.feed("=[6];");
// parser.feed("var")
// parser.feed("testAssign:string")
// parser.feed("=214;")
// log(parser.results)
// // log("Sin encontrar el mas optimo")
log("Variables");
log(parser.results[0][2].globalVars[0]);
