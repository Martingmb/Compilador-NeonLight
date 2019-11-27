"use strict";
exports.__esModule = true;
var maquinaVirtual_1 = require("./maquinaVirtual");
var fs_1 = require("fs");
var jison = require("jison");
var bnf = fs_1.readFileSync("neonlightGramatica.jison", "utf8");
var parser = jison.Jison.Parser(bnf);
// let parsed = parser.parse("Program holaMundo; var globaltest: bool; var globaldaniel: string; var globalmartin: int; var c: float; fn fibo(par: int): int { var funcion2: char;  c = 5 + 5; }  fn main(): void { var localtes2: int; var localdos: string; var a: int; var b: int; fibo();  if(a>b) { var dentroIF: bool; dentroIF = true; } else { b = b + 1; } c = 4 * 4; var i: int; for(i < 10) { print(i); } }")
var parsed = parser.parse("Program holaMundo; var test: int = 1; fn fibo(): void { var t1: int; var t2: int; var t3: int; t1 = 0; t2 = 1; t3 = 0; for(t3 <= 20) { print(t3); t1 = t2; t2 = t3; t3 = t1 + t2; } } fn main(): void { fibo(); }");
console.log("DESPUES DE PARSEAR");
console.log(parsed);
var vm = new maquinaVirtual_1.maquinaVirtual(parsed);
vm.processCode();
