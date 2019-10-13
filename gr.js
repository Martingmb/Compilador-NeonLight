"use strict";
exports.__esModule = true;
var grammar = require("./simple");
var nearley = require("nearley");
var parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
var log = function (item) { console.log(item); };
parser.feed("Program");
parser.feed("\"holaa\"");
parser.feed("var");
parser.feed("hello:string;");
parser.feed("var[]");
parser.feed("arr:");
parser.feed("string");
parser.feed("=[6];");
parser.feed("var");
parser.feed("testAssign:string");
parser.feed("=214;");
var length = parser.results.length - 1;
// log(parser.results[length])
// log("Sin encontrar el mas optimo")
// log(parser.results)
log("Variables");
log(parser.results[length][2].globalVars[0]);
