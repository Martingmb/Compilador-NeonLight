// Generated automatically by nearley, version 2.18.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const moo = require("moo");

const lexer = moo.compile({
  ws:     /[ \t]+/,
  number: /[0-9]+/,
  word: /[a-z]+/,
  times:  /\*|x/
});
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "multiplication", "symbols": [(lexer.has("number") ? {type: "number"} : number), (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("times") ? {type: "times"} : times), (lexer.has("ws") ? {type: "ws"} : ws), (lexer.has("number") ? {type: "number"} : number)], "postprocess": ([first, , , , second]) => first * second},
    {"name": "trig", "symbols": [{"literal":"sin"}, (lexer.has("number") ? {type: "number"} : number)]}
]
  , ParserStart: "multiplication"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
