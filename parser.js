// Generated automatically by nearley, version 2.18.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

const moo = require("moo");

const lexer = moo.compile({
    OP: [':', ';', '(', ')', '{','}', '=', '.'],
    program: "Program",
    function: "fn",
    number: /[0-9]+/,
    word: /[a-zA-Z]+/,
    times:  /\*|x/,
    ws:     /[ \t\v\f]+?/,
    newline: {match: '\n', lineBreaks: true}
});
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "Program$ebnf$1", "symbols": ["varDeclaration"], "postprocess": id},
    {"name": "Program$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "Program", "symbols": [(lexer.has("program") ? {type: "program"} : program), (lexer.has("ws") ? {type: "ws"} : ws), "programID", (lexer.has("ws") ? {type: "ws"} : ws), "Program$ebnf$1", "main"]},
    {"name": "main$ebnf$1$subexpression$1", "symbols": ["functionType"]},
    {"name": "main$ebnf$1$subexpression$1", "symbols": [{"literal":"void"}]},
    {"name": "main$ebnf$1", "symbols": ["main$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "main$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "main$ebnf$2", "symbols": []},
    {"name": "main$ebnf$2", "symbols": ["main$ebnf$2", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "main", "symbols": [{"literal":"fn"}, (lexer.has("ws") ? {type: "ws"} : ws), {"literal":"main"}, {"literal":"("}, "parameter", {"literal":")"}, "main$ebnf$1", (lexer.has("ws") ? {type: "ws"} : ws), {"literal":"{"}, "varDeclaration", "main$ebnf$2", "return", {"literal":"}"}]},
    {"name": "varDeclaration$ebnf$1", "symbols": []},
    {"name": "varDeclaration$ebnf$1$subexpression$1", "symbols": ["var", (lexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "varDeclaration$ebnf$1", "symbols": ["varDeclaration$ebnf$1", "varDeclaration$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "varDeclaration", "symbols": ["varDeclaration$ebnf$1"]},
    {"name": "function$ebnf$1$subexpression$1", "symbols": ["functionType"]},
    {"name": "function$ebnf$1$subexpression$1", "symbols": [{"literal":"void"}]},
    {"name": "function$ebnf$1", "symbols": ["function$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "function$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "function$ebnf$2", "symbols": []},
    {"name": "function$ebnf$2", "symbols": ["function$ebnf$2", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "function", "symbols": [{"literal":"fn"}, (lexer.has("ws") ? {type: "ws"} : ws), "functionID", {"literal":"("}, "parameter", {"literal":")"}, "function$ebnf$1", (lexer.has("ws") ? {type: "ws"} : ws), {"literal":"{"}, (lexer.has("ws") ? {type: "ws"} : ws), "varDeclaration", (lexer.has("ws") ? {type: "ws"} : ws), "function$ebnf$2", (lexer.has("ws") ? {type: "ws"} : ws), "return", (lexer.has("ws") ? {type: "ws"} : ws), {"literal":"}"}]},
    {"name": "statement", "symbols": ["print"]},
    {"name": "statement", "symbols": ["ifStatement"]},
    {"name": "statement", "symbols": ["expression"]},
    {"name": "statement", "symbols": ["assign"]},
    {"name": "statement", "symbols": ["loop"]},
    {"name": "statement", "symbols": ["function"]},
    {"name": "assign$subexpression$1", "symbols": ["expression"]},
    {"name": "assign$subexpression$1", "symbols": ["constant"]},
    {"name": "assign", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws), "id", (lexer.has("ws") ? {type: "ws"} : ws), {"literal":"="}, (lexer.has("ws") ? {type: "ws"} : ws), "assign$subexpression$1", (lexer.has("ws") ? {type: "ws"} : ws), {"literal":";"}]},
    {"name": "expression$ebnf$1$subexpression$1", "symbols": ["logOP", (lexer.has("ws") ? {type: "ws"} : ws), "exp"]},
    {"name": "expression$ebnf$1", "symbols": ["expression$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "expression$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "expression", "symbols": ["exp", "expression$ebnf$1"]},
    {"name": "exp", "symbols": ["term"]},
    {"name": "exp$ebnf$1$subexpression$1", "symbols": ["term", (lexer.has("ws") ? {type: "ws"} : ws), "arithOP"]},
    {"name": "exp$ebnf$1", "symbols": ["exp$ebnf$1$subexpression$1"]},
    {"name": "exp$ebnf$1$subexpression$2", "symbols": ["term", (lexer.has("ws") ? {type: "ws"} : ws), "arithOP"]},
    {"name": "exp$ebnf$1", "symbols": ["exp$ebnf$1", "exp$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exp", "symbols": ["exp$ebnf$1"]},
    {"name": "term", "symbols": ["factor"]},
    {"name": "term$ebnf$1$subexpression$1", "symbols": ["factor", (lexer.has("ws") ? {type: "ws"} : ws), "mdOP"]},
    {"name": "term$ebnf$1", "symbols": ["term$ebnf$1$subexpression$1"]},
    {"name": "term$ebnf$1$subexpression$2", "symbols": ["factor", (lexer.has("ws") ? {type: "ws"} : ws), "mdOP"]},
    {"name": "term$ebnf$1", "symbols": ["term$ebnf$1", "term$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "term", "symbols": ["term$ebnf$1"]},
    {"name": "factor", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws), {"literal":"("}, (lexer.has("ws") ? {type: "ws"} : ws), "expression", (lexer.has("ws") ? {type: "ws"} : ws), {"literal":")"}]},
    {"name": "factor$ebnf$1$subexpression$1", "symbols": [{"literal":"*"}]},
    {"name": "factor$ebnf$1$subexpression$1", "symbols": [{"literal":"/"}]},
    {"name": "factor$ebnf$1", "symbols": ["factor$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "factor$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "factor", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws), "factor$ebnf$1", "number"]},
    {"name": "loop$ebnf$1", "symbols": []},
    {"name": "loop$ebnf$1", "symbols": ["loop$ebnf$1", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "loop", "symbols": [{"literal":"for"}, "logOP", {"literal":"{"}, "loop$ebnf$1", {"literal":"}"}]},
    {"name": "print$subexpression$1", "symbols": ["expression"]},
    {"name": "print$subexpression$1$subexpression$1", "symbols": ["string"]},
    {"name": "print$subexpression$1$subexpression$1", "symbols": ["char"]},
    {"name": "print$subexpression$1$subexpression$1", "symbols": ["number"]},
    {"name": "print$subexpression$1", "symbols": ["print$subexpression$1$subexpression$1"]},
    {"name": "print", "symbols": [{"literal":"print"}, {"literal":"("}, (lexer.has("ws") ? {type: "ws"} : ws), "print$subexpression$1", (lexer.has("ws") ? {type: "ws"} : ws), {"literal":")"}]},
    {"name": "var$subexpression$1", "symbols": ["id", {"literal":":"}, (lexer.has("ws") ? {type: "ws"} : ws), "type", {"literal":";"}]},
    {"name": "var$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": [{"literal":","}], "postprocess": id},
    {"name": "var$subexpression$1$ebnf$1$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "var$subexpression$1$ebnf$1$subexpression$1", "symbols": ["id", (lexer.has("ws") ? {type: "ws"} : ws), "var$subexpression$1$ebnf$1$subexpression$1$ebnf$1"]},
    {"name": "var$subexpression$1$ebnf$1", "symbols": ["var$subexpression$1$ebnf$1$subexpression$1"]},
    {"name": "var$subexpression$1$ebnf$1$subexpression$2$ebnf$1", "symbols": [{"literal":","}], "postprocess": id},
    {"name": "var$subexpression$1$ebnf$1$subexpression$2$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "var$subexpression$1$ebnf$1$subexpression$2", "symbols": ["id", (lexer.has("ws") ? {type: "ws"} : ws), "var$subexpression$1$ebnf$1$subexpression$2$ebnf$1"]},
    {"name": "var$subexpression$1$ebnf$1", "symbols": ["var$subexpression$1$ebnf$1", "var$subexpression$1$ebnf$1$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "var$subexpression$1", "symbols": ["var$subexpression$1$ebnf$1", {"literal":":"}, (lexer.has("ws") ? {type: "ws"} : ws), "type", {"literal":";"}]},
    {"name": "var$subexpression$1", "symbols": [{"literal":":"}, (lexer.has("ws") ? {type: "ws"} : ws), "type", (lexer.has("ws") ? {type: "ws"} : ws), "varAssign", {"literal":";"}]},
    {"name": "var", "symbols": [{"literal":"var"}, (lexer.has("ws") ? {type: "ws"} : ws), "var$subexpression$1"]},
    {"name": "var", "symbols": [{"literal":"var[]"}, (lexer.has("ws") ? {type: "ws"} : ws), "id", {"literal":":"}, (lexer.has("ws") ? {type: "ws"} : ws), "type", (lexer.has("ws") ? {type: "ws"} : ws), {"literal":"="}, (lexer.has("ws") ? {type: "ws"} : ws), {"literal":"["}, "int", {"literal":"]"}, {"literal":";"}]},
    {"name": "varAssign$subexpression$1", "symbols": ["expression"]},
    {"name": "varAssign$subexpression$1", "symbols": ["constant"]},
    {"name": "varAssign", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws), {"literal":"="}, (lexer.has("ws") ? {type: "ws"} : ws), "varAssign$subexpression$1"]},
    {"name": "varAssign$subexpression$2", "symbols": ["expression"]},
    {"name": "varAssign$subexpression$2", "symbols": ["constant"]},
    {"name": "varAssign", "symbols": ["id", {"literal":"["}, "int", {"literal":"]"}, {"literal":"="}, "varAssign$subexpression$2"]},
    {"name": "ifStatement$ebnf$1", "symbols": []},
    {"name": "ifStatement$ebnf$1", "symbols": ["ifStatement$ebnf$1", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ifStatement$ebnf$2", "symbols": ["elifStatement"], "postprocess": id},
    {"name": "ifStatement$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ifStatement", "symbols": [{"literal":"if"}, {"literal":"("}, "expression", {"literal":")"}, (lexer.has("ws") ? {type: "ws"} : ws), {"literal":"{"}, (lexer.has("ws") ? {type: "ws"} : ws), "ifStatement$ebnf$1", (lexer.has("ws") ? {type: "ws"} : ws), {"literal":"}"}, "ifStatement$ebnf$2"]},
    {"name": "elifStatement$ebnf$1", "symbols": []},
    {"name": "elifStatement$ebnf$1", "symbols": ["elifStatement$ebnf$1", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "elifStatement$ebnf$2", "symbols": ["elseStatement"], "postprocess": id},
    {"name": "elifStatement$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "elifStatement", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws), {"literal":"elif"}, {"literal":"("}, "expression", {"literal":")"}, (lexer.has("ws") ? {type: "ws"} : ws), {"literal":"{"}, (lexer.has("ws") ? {type: "ws"} : ws), "elifStatement$ebnf$1", (lexer.has("ws") ? {type: "ws"} : ws), {"literal":"}"}, "elifStatement$ebnf$2"]},
    {"name": "elifStatement", "symbols": ["elseStatement"]},
    {"name": "elseStatement$ebnf$1", "symbols": []},
    {"name": "elseStatement$ebnf$1", "symbols": ["elseStatement$ebnf$1", "statement"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "elseStatement", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws), {"literal":"else"}, (lexer.has("ws") ? {type: "ws"} : ws), {"literal":"{"}, (lexer.has("ws") ? {type: "ws"} : ws), "elseStatement$ebnf$1", (lexer.has("ws") ? {type: "ws"} : ws), {"literal":"}"}]},
    {"name": "type", "symbols": ["int"]},
    {"name": "type", "symbols": ["float"]},
    {"name": "type", "symbols": ["string"]},
    {"name": "type", "symbols": ["char"]},
    {"name": "type", "symbols": ["bool"]},
    {"name": "parameter$ebnf$1$subexpression$1", "symbols": ["id", {"literal":":"}, (lexer.has("ws") ? {type: "ws"} : ws), "type"]},
    {"name": "parameter$ebnf$1", "symbols": ["parameter$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "parameter$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "parameter", "symbols": ["parameter$ebnf$1"]},
    {"name": "parameter$ebnf$2$subexpression$1$ebnf$1", "symbols": [{"literal":","}], "postprocess": id},
    {"name": "parameter$ebnf$2$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "parameter$ebnf$2$subexpression$1", "symbols": ["id", {"literal":":"}, (lexer.has("ws") ? {type: "ws"} : ws), "type", "parameter$ebnf$2$subexpression$1$ebnf$1"]},
    {"name": "parameter$ebnf$2", "symbols": ["parameter$ebnf$2$subexpression$1"]},
    {"name": "parameter$ebnf$2$subexpression$2$ebnf$1", "symbols": [{"literal":","}], "postprocess": id},
    {"name": "parameter$ebnf$2$subexpression$2$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "parameter$ebnf$2$subexpression$2", "symbols": ["id", {"literal":":"}, (lexer.has("ws") ? {type: "ws"} : ws), "type", "parameter$ebnf$2$subexpression$2$ebnf$1"]},
    {"name": "parameter$ebnf$2", "symbols": ["parameter$ebnf$2", "parameter$ebnf$2$subexpression$2"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "parameter", "symbols": ["parameter$ebnf$2"]},
    {"name": "logOP", "symbols": [{"literal":"<"}]},
    {"name": "logOP", "symbols": [{"literal":">"}]},
    {"name": "logOP", "symbols": [{"literal":"=="}]},
    {"name": "logOP", "symbols": [{"literal":"!="}]},
    {"name": "logOP", "symbols": [{"literal":">="}]},
    {"name": "logOP", "symbols": [{"literal":"<="}]},
    {"name": "mdOP", "symbols": [{"literal":"*"}]},
    {"name": "mdOP", "symbols": [{"literal":"/"}]},
    {"name": "arithOP", "symbols": [{"literal":"+"}]},
    {"name": "arithOP", "symbols": [{"literal":"-"}]},
    {"name": "functionType", "symbols": [{"literal":":"}, (lexer.has("ws") ? {type: "ws"} : ws), "type"]},
    {"name": "return", "symbols": [{"literal":"return"}, (lexer.has("ws") ? {type: "ws"} : ws), "expression", {"literal":";"}]},
    {"name": "constant", "symbols": ["id"]},
    {"name": "constant", "symbols": ["number"]},
    {"name": "functionID", "symbols": ["id"]},
    {"name": "programID", "symbols": ["id"]},
    {"name": "id$ebnf$1", "symbols": [/[a-zA-Z]/]},
    {"name": "id$ebnf$1", "symbols": ["id$ebnf$1", /[a-zA-Z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "id", "symbols": ["id$ebnf$1"]},
    {"name": "number$ebnf$1", "symbols": []},
    {"name": "number$ebnf$1", "symbols": ["number$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number", "symbols": ["number$ebnf$1"]},
    {"name": "number$ebnf$2", "symbols": []},
    {"name": "number$ebnf$2", "symbols": ["number$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number$ebnf$3", "symbols": []},
    {"name": "number$ebnf$3", "symbols": ["number$ebnf$3", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "number", "symbols": ["number$ebnf$2", {"literal":"."}, "number$ebnf$3"]},
    {"name": "int", "symbols": [{"literal":"int"}]},
    {"name": "float", "symbols": [{"literal":"float"}]},
    {"name": "char", "symbols": [{"literal":"char"}]},
    {"name": "string", "symbols": [{"literal":"string"}]},
    {"name": "bool", "symbols": [{"literal":"true"}]},
    {"name": "bool", "symbols": [{"literal":"false"}]}
]
  , ParserStart: "Program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();