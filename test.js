"use strict";
exports.__esModule = true;
var maquinaVirtual_1 = require("./maquinaVirtual");
var fs_1 = require("fs");
var jison = require("jison");
var bnf = fs_1.readFileSync("neonlightGramatica.jison", "utf8");
var parser = jison.Jison.Parser(bnf);
// let parsed = parser.parse("Program holaMundo; var globaltest: bool; var globaldaniel: string; var globalmartin: int; var c: float; fn fibo(par: int): int { var funcion2: char;  c = 5 + 5; }  fn main(): void { var localtes2: int; var localdos: string; var a: int; var b: int; fibo();  if(a>b) { var dentroIF: bool; dentroIF = true; } else { b = b + 1; } c = 4 * 4; var i: int; for(i < 10) { print(i); } }")
var parsed = parser.parse("Program holaMundo; var[] vector[10]: int; var test: int = 1; fn fibo(): void { var t1: int; var t2: int; var t3: int; t1 = 0; t2 = 1; t3 = 0; for(t3 <= 20) { print(t3); t1 = t2; t2 = t3; t3 = t1 + t2; } } fn factorial(): void { var j: int; j = 1; var factorial: int; factorial = 1; for(j <= 5) { factorial = j * factorial;  j = j + 1; print(\"FACTORIAL\"); print(factorial); fibo(); } print(factorial); print(\"Fibonacci\"); } fn main(): void { var test2: int; test2 = 10; print(\"Hello World!\"); print(test); var i: int; i = 0; for(i != 100) { i = i + 1; } if(i > 10) { var dentroIF: bool; print(\"ES MAYOR QUE 10\"); } else { print(\"ES MENOR QUE 10\"); }  factorial();  }");
console.log("DESPUES DE PARSEAR");
console.log(parsed);
var vm = new maquinaVirtual_1.maquinaVirtual(parsed);
vm.processCode();
