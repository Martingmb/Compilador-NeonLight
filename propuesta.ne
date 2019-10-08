Program -> "Program"   programID   varDeclaration:? function:+   main

main -> "fn"   "main" "(" parameter ")" (functionType | "void"):?   "{"   varDeclaration   statement:*   return   "}"

varDeclaration -> (var  ):*

function -> "fn"   functionID "(" parameter ")" (functionType | "void"):?   "{"   varDeclaration   statement:*   return   "}"

statement -> print | ifStatement | expression | assign | loop | function

assign ->   id   "="   (expression | constant)   ";"

expression ->  exp (logOP   exp ):?

exp -> term | (term   arithOP):+

term -> factor | (factor   mdOP):+

factor ->   "("   expression   ")" |   ("*" | "/"):? number

loop -> "for" logOP "{" statement:* "}"

print -> "print" "("   (expression | (string | char | number) )   ")"

var -> "var"   ( id ":"   type ";" | (id   ",":? ):+ ":"   type ";" | ":"   type   varAssign ";" )  
    | "var[]"   id ":"   type    "="   "[" int "]" ";"


varAssign ->   "="   (expression | constant) 
    | id "[" int "]" "=" (expression | constant) 

ifStatement -> "if" "(" expression ")"   "{"   statement:*   "}" elifStatement:?

elifStatement ->   "elif" "(" expression ")"    "{"   statement:*   "}" elseStatement:? | elseStatement

elseStatement ->    "else"   "{"   statement:*   "}"

type -> int | float | string | char | bool

parameter -> (id ":"   type):? | (id ":"   type ",":?):+

logOP -> "<" | ">" | "==" | "!=" | ">=" | "<="

mdOP -> "*" | "/"

arithOP -> "+" | "-"

functionType -> ":"   type

return -> "return"   expression ";"

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