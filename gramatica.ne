@{%
const moo = require("moo");

const lexer = moo.compile({
  ws:     /[ \t\n\v\f]+/,
  number: /[0-9]+/,
  word: /[a-z]+/,
  times:  /\*|x/
});
%}

@lexer lexer

Program -> "Program" _ programID __ varDeclaration:? function:+ _ main

main -> "fn" __ "main" "(" parameter ")" (functionType | "void"):? __ "{" __ varDeclaration __ statement:* __ return __ "}"

varDeclaration -> (var _):*

function -> "fn" __ functionID "(" parameter ")" (functionType | "void"):? __ "{" __ varDeclaration __ statement:* __ return __ "}"

statement -> print | ifStatement | expression | assign | loop | function

assign -> _ id __ "=" __ (expression | constant) _ ";"

expression ->  exp (logOP _ exp ):?

exp -> term | (term _ arithOP):+

term -> factor | (factor _ mdOP):+

factor -> _ "(" _ expression _ ")" | _ ("*" | "/"):? number

loop -> "for" logOP "{" statement:* "}"

print -> "print" "(" _ (expression | (string | char | number) ) _ ")"

var -> "var" __ ( id ":" __ type ";" | (id _ ",":? ):+ ":" __ type ";" | ":" __ type _ varAssign ";" )  
    | "var[]" __ id ":" __ type  _ "=" _ "[" int "]" ";"


varAssign -> _ "=" _ (expression | constant) 
    | id "[" int "]" "=" (expression | constant) 

ifStatement -> "if" "(" expression ")" _ "{" _ statement:* _ "}" elifStatement:?

elifStatement -> _ "elif" "(" expression ")"  _ "{" _ statement:* _ "}" elseStatement:? | elseStatement

elseStatement ->  _ "else" _ "{" _ statement:* _ "}"

type -> int | float | string | char | bool

parameter -> (id ":" _ type):? | (id ":" _ type ",":?):+

logOP -> "<" | ">" | "==" | "!=" | ">=" | "<="

mdOP -> "*" | "/"

arithOP -> "+" | "-"

functionType -> ":" _ type

return -> "return" __ expression ";"

constant -> id | number

functionID -> id
programID -> id

id -> [a-zA-Z]:+
number -> [0-9]:* | [0-9]:* "." [0-9]:*

int -> [0-9]:* 
float -> [0-9]:* "." [0-9]:*
char -> `'` [a-zA-Z] `'`
string -> "\"" [a-zA-Z]:* "\""
bool -> "true" | "false"

_ -> whitespace:* {% function(d) { return null; } %}
__ -> whitespace:+ {% function(d) { return null; } %}

whitespace -> [ \t\n\v\f] {% id %}