var fs = require("fs");
var jison = require("jison");

var bnf = fs.readFileSync("gramatica.jison", "utf8");
var parser = new jison.Parser(bnf);

parser.parse("2!*2*2")