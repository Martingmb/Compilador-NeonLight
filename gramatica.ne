@{%
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
%}

@lexer lexer

Program -> %program %ws programID %ws varDeclaration:?  main

main -> "fn" %ws "main" "(" parameter ")" (functionType | "void"):? %ws "{"  varDeclaration  statement:*  return "}"

varDeclaration -> (var %ws):*

function -> "fn" %ws functionID "(" parameter ")" (functionType | "void"):? %ws "{" %ws varDeclaration %ws statement:* %ws return %ws "}"

statement -> print | ifStatement | expression | assign | loop | function

assign -> %ws id %ws "=" %ws (expression | constant) %ws ";"

expression ->  exp (logOP %ws exp ):?

exp -> term | (term %ws arithOP):+

term -> factor | (factor %ws mdOP):+

factor -> %ws "(" %ws expression %ws ")" | %ws ("*" | "/"):? number

loop -> "for" logOP "{" statement:* "}"

print -> "print" "(" %ws (expression | (string | char | number) ) %ws ")"

var -> "var" %ws ( id ":" %ws type ";" | (id %ws ",":? ):+ ":" %ws type ";" | ":" %ws type %ws varAssign ";" )  
    | "var[]" %ws id ":" %ws type  %ws "=" %ws "[" int "]" ";"


varAssign -> %ws "=" %ws (expression | constant) 
    | id "[" int "]" "=" (expression | constant) 

ifStatement -> "if" "(" expression ")" %ws "{" %ws statement:* %ws "}" elifStatement:?

elifStatement -> %ws "elif" "(" expression ")"  %ws "{" %ws statement:* %ws "}" elseStatement:? | elseStatement

elseStatement ->  %ws "else" %ws "{" %ws statement:* %ws "}"

type -> int | float | string | char | bool

parameter -> (id ":" %ws type):? | (id ":" %ws type ",":?):+

logOP -> "<" | ">" | "==" | "!=" | ">=" | "<="

mdOP -> "*" | "/"

arithOP -> "+" | "-"

functionType -> ":" %ws type

return -> "return" %ws expression ";"

constant -> id | number

functionID -> id
programID -> id

id -> [a-zA-Z]:+
number -> [0-9]:* | [0-9]:* "." [0-9]:*

int -> "int"
float -> "float"
char -> "char"
string -> "string"
bool -> "true" | "false"