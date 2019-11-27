import { maquinaVirtual } from './maquinaVirtual';
import { readFileSync } from "fs";
import * as jison from "jison";
import { tablaVariables } from "./tablaVariables";
import { variableInformation } from "./variableInterface";

var bnf = readFileSync("neonlightGramatica.jison", "utf8");
var parser = jison.Jison.Parser(bnf);

// let parsed = parser.parse("Program holaMundo; var globaltest: bool; var globaldaniel: string; var globalmartin: int; var c: float; fn fibo(par: int): int { var funcion2: char;  c = 5 + 5; }  fn main(): void { var localtes2: int; var localdos: string; var a: int; var b: int; fibo();  if(a>b) { var dentroIF: bool; dentroIF = true; } else { b = b + 1; } c = 4 * 4; var i: int; for(i < 10) { print(i); } }")

let parsed = parser.parse(`Program holaMundo; var i: int = 1;  fn main(): void { i = i + 1; if(i > 5) { print("I es mayor que 5"); } else { print("I no es mayor que 5"); } }`);

console.log("DESPUES DE PARSEAR");
console.log(parsed);

let vm =new maquinaVirtual(parsed);

vm.processCode();