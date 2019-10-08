import * as grammar from "./parser";
import * as nearley from "nearley";

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

const log = (item: any) => {console.log(item)};

parser.feed("Program helloWorld var hola: int; fn main()void { return = 9 ; }")

log(parser.results)