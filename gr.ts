import * as grammar from "./simple";
import * as nearley from "nearley";

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

const log = (item: any) => {console.log(item)};

parser.feed("Program")
parser.feed("\"holaa\"")
parser.feed("var")
parser.feed("hello:string;")
parser.feed("var[]")
parser.feed("arr:")
parser.feed("string")
parser.feed("=[6];")
// parser.feed("var")
// parser.feed("testAssign:string")
// parser.feed("=214;")


let length = parser.results.length - 1;

// log(parser.results[length])
// log("Sin encontrar el mas optimo")
// log(parser.results)
log("Variables")
log(parser.results[length][2].globalVars[0])