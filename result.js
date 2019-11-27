Conflict in grammar: multiple actions possible when lookahead token is VAR in state 50
- reduce by rule: compoundStatement -> localVarDeclaration
- shift token (then go to state 51)
Conflict in grammar: multiple actions possible when lookahead token is IF in state 50
- reduce by rule: compoundStatement -> localVarDeclaration
- shift token (then go to state 66)
Conflict in grammar: multiple actions possible when lookahead token is SCOLON in state 50
- reduce by rule: compoundStatement -> localVarDeclaration
- shift token (then go to state 62)
Conflict in grammar: multiple actions possible when lookahead token is ID in state 50
- reduce by rule: compoundStatement -> localVarDeclaration
- shift token (then go to state 71)
Conflict in grammar: multiple actions possible when lookahead token is NUMBER in state 50
- reduce by rule: compoundStatement -> localVarDeclaration
- shift token (then go to state 72)
Conflict in grammar: multiple actions possible when lookahead token is DECIMAL in state 50
- reduce by rule: compoundStatement -> localVarDeclaration
- shift token (then go to state 73)
Conflict in grammar: multiple actions possible when lookahead token is STRING in state 50
- reduce by rule: compoundStatement -> localVarDeclaration
- shift token (then go to state 74)
Conflict in grammar: multiple actions possible when lookahead token is TRUE in state 50
- reduce by rule: compoundStatement -> localVarDeclaration
- shift token (then go to state 75)
Conflict in grammar: multiple actions possible when lookahead token is FALSE in state 50
- reduce by rule: compoundStatement -> localVarDeclaration
- shift token (then go to state 76)
Conflict in grammar: multiple actions possible when lookahead token is LOOP in state 50
- reduce by rule: compoundStatement -> localVarDeclaration
- shift token (then go to state 64)
Conflict in grammar: multiple actions possible when lookahead token is PRINT in state 50
- reduce by rule: compoundStatement -> localVarDeclaration
- shift token (then go to state 65)
Conflict in grammar: multiple actions possible when lookahead token is VAR in state 54
- reduce by rule: compoundStatement -> localVarDeclaration statementList
- shift token (then go to state 51)
Conflict in grammar: multiple actions possible when lookahead token is IF in state 54
- reduce by rule: compoundStatement -> localVarDeclaration statementList
- shift token (then go to state 66)
Conflict in grammar: multiple actions possible when lookahead token is SCOLON in state 54
- reduce by rule: compoundStatement -> localVarDeclaration statementList
- shift token (then go to state 62)
Conflict in grammar: multiple actions possible when lookahead token is ID in state 54
- reduce by rule: compoundStatement -> localVarDeclaration statementList
- shift token (then go to state 71)
Conflict in grammar: multiple actions possible when lookahead token is NUMBER in state 54
- reduce by rule: compoundStatement -> localVarDeclaration statementList
- shift token (then go to state 72)
Conflict in grammar: multiple actions possible when lookahead token is DECIMAL in state 54
- reduce by rule: compoundStatement -> localVarDeclaration statementList
- shift token (then go to state 73)
Conflict in grammar: multiple actions possible when lookahead token is STRING in state 54
- reduce by rule: compoundStatement -> localVarDeclaration statementList
- shift token (then go to state 74)
Conflict in grammar: multiple actions possible when lookahead token is TRUE in state 54
- reduce by rule: compoundStatement -> localVarDeclaration statementList
- shift token (then go to state 75)
Conflict in grammar: multiple actions possible when lookahead token is FALSE in state 54
- reduce by rule: compoundStatement -> localVarDeclaration statementList
- shift token (then go to state 76)
Conflict in grammar: multiple actions possible when lookahead token is LOOP in state 54
- reduce by rule: compoundStatement -> localVarDeclaration statementList
- shift token (then go to state 64)
Conflict in grammar: multiple actions possible when lookahead token is PRINT in state 54
- reduce by rule: compoundStatement -> localVarDeclaration statementList
- shift token (then go to state 65)
Conflict in grammar: multiple actions possible when lookahead token is VAR in state 169
- reduce by rule: localVarDeclaration -> VAR ID COLON type_specifier SCOLON
- shift token (then go to state 51)

States with conflicts:
State 50
  compoundStatement -> localVarDeclaration . #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  compoundStatement -> localVarDeclaration .statementList #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  statementList -> .statement #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  statementList -> .statementList statement #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  statement -> .compoundStatement #lookaheads= RBRACKET PRINT LOOP FALSE TRUE STRING DECIMAL NUMBER ID SCOLON IF VAR
  statement -> .initialConditionalStatement #lookaheads= RBRACKET PRINT LOOP FALSE TRUE STRING DECIMAL NUMBER ID SCOLON IF VAR
  statement -> .expressionStatement #lookaheads= RBRACKET PRINT LOOP FALSE TRUE STRING DECIMAL NUMBER ID SCOLON IF VAR
  statement -> .loopStatement #lookaheads= RBRACKET PRINT LOOP FALSE TRUE STRING DECIMAL NUMBER ID SCOLON IF VAR
  statement -> .printStatement #lookaheads= RBRACKET PRINT LOOP FALSE TRUE STRING DECIMAL NUMBER ID SCOLON IF VAR
  compoundStatement -> .localVarDeclaration
  compoundStatement -> .localVarDeclaration statementList
  initialConditionalStatement -> .conditionalStatement puntoSemanticoIF #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  initialConditionalStatement -> .conditionalStatement ELSE puntoSemanticoElse LBRACKET statement conditionalStatementAUX RBRACKET #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  expressionStatement -> .SCOLON #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  expressionStatement -> .expression SCOLON #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  loopStatement -> .LOOP loopPuntoSemantico ( expression ) loopExpresionPuntoSemantico LBRACKET statement RBRACKET loopExpresionPuntoSemanticoFinal #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  printStatement -> .PRINT ( expression ) SCOLON #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  localVarDeclaration -> .VAR ID COLON type_specifier SCOLON
  localVarDeclaration -> .VAR ID COLON type_specifier SCOLON localVarDeclaration
  conditionalStatement -> .IF ( expression ) puntoSemanticoIFEXP LBRACKET statement conditionalStatementAUX RBRACKET #lookaheads= RBRACKET ELSE ELIF PRINT LOOP FALSE TRUE STRING DECIMAL NUMBER ID SCOLON IF VAR
  conditionalStatement -> .conditionalStatement ELIF puntoSemanticoIFEXP ( expression ) LBRACKET statement RBRACKET #lookaheads= RBRACKET ELSE ELIF PRINT LOOP FALSE TRUE STRING DECIMAL NUMBER ID SCOLON IF VAR
  expression -> .assignmentExpression #lookaheads= SCOLON COMA ) ]
  expression -> .expression COMA assignmentExpression #lookaheads= SCOLON COMA ) ]
  assignmentExpression -> .conditionalExpression #lookaheads= SCOLON COMA ) ]
  assignmentExpression -> .unaryExpression assignmentExpressionAssign assignmentExpression assignmentExpressionAux #lookaheads= SCOLON COMA ) ]
  conditionalExpression -> .orExpression #lookaheads= SCOLON COMA ) ]
  unaryExpression -> .ID #lookaheads= ASSIGN SCOLON * / GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP - + ( [ ) ]
  unaryExpression -> .NUMBER #lookaheads= ASSIGN SCOLON * / GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP - + ( [ ) ]
  unaryExpression -> .DECIMAL #lookaheads= ASSIGN SCOLON * / GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP - + ( [ ) ]
  unaryExpression -> .STRING #lookaheads= ASSIGN SCOLON * / GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP - + ( [ ) ]
  unaryExpression -> .TRUE #lookaheads= ASSIGN SCOLON * / GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP - + ( [ ) ]
  unaryExpression -> .FALSE #lookaheads= ASSIGN SCOLON * / GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP - + ( [ ) ]
  orExpression -> .andExpression #lookaheads= SCOLON OROP COMA ) ]
  orExpression -> .orExpression orExpressionOpPuntoSemantico andExpression orExpressionAux #lookaheads= SCOLON OROP COMA ) ]
  andExpression -> .equalExpression #lookaheads= SCOLON ANDOP COMA OROP ) ]
  andExpression -> .andExpression andExpressionAND equalExpression andExpressionAux #lookaheads= SCOLON ANDOP COMA OROP ) ]
  equalExpression -> .relationalExpression #lookaheads= SCOLON EQUALOP NOTEQUALOP OROP COMA ANDOP ) ]
  equalExpression -> .equalExpression equalExpressionEqual relationalExpression equalExpressionAux #lookaheads= SCOLON EQUALOP NOTEQUALOP OROP COMA ANDOP ) ]
  equalExpression -> .equalExpression equalExpressionNotEqual relationalExpression equalExpressionAux #lookaheads= SCOLON EQUALOP NOTEQUALOP OROP COMA ANDOP ) ]
  relationalExpression -> .arithmethicExpression #lookaheads= SCOLON GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP ) ]
  relationalExpression -> .relationalExpression relationalExpressionAuxGreater arithmethicExpression relationalExpressionAux #lookaheads= SCOLON GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP ) ]
  relationalExpression -> .relationalExpression relationalExpressionAuxLess arithmethicExpression relationalExpressionAux #lookaheads= SCOLON GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP ) ]
  relationalExpression -> .relationalExpression relationalExpressionAuxGreaterEqual arithmethicExpression relationalExpressionAux #lookaheads= SCOLON GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP ) ]
  relationalExpression -> .relationalExpression relationalExpressionAuxLessEqual arithmethicExpression relationalExpressionAux #lookaheads= SCOLON GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP ) ]
  arithmethicExpression -> .multiplicationExpression #lookaheads= SCOLON + - EQUALOP NOTEQUALOP OROP COMA ANDOP LTEQUALOP GTEQUALOP LTOP GTOP ) ]
  arithmethicExpression -> .arithmethicExpression aritmeticoSuma multiplicationExpression arithmethicPuntoSemantico #lookaheads= SCOLON + - EQUALOP NOTEQUALOP OROP COMA ANDOP LTEQUALOP GTEQUALOP LTOP GTOP ) ]
  arithmethicExpression -> .arithmethicExpression aritmeticoResta multiplicationExpression arithmethicPuntoSemantico #lookaheads= SCOLON + - EQUALOP NOTEQUALOP OROP COMA ANDOP LTEQUALOP GTEQUALOP LTOP GTOP ) ]
  multiplicationExpression -> .postfixExpression #lookaheads= SCOLON * / GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP - + ) ]
  multiplicationExpression -> .multiplicationExpression multiplicacionMultiplo unaryExpression multiplicacionPuntoSemantico #lookaheads= SCOLON * / GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP - + ) ]
  multiplicationExpression -> .multiplicationExpression multiplicacionDivision unaryExpression multiplicacionPuntoSemantico #lookaheads= SCOLON * / GTOP LTOP GTEQUALOP LTEQUALOP ANDOP COMA OROP NOTEQUALOP EQUALOP - + ) ]
  postfixExpression -> .unaryExpression #lookaheads= SCOLON [ ( + - EQUALOP NOTEQUALOP OROP COMA ANDOP LTEQUALOP GTEQUALOP LTOP GTOP / * ) ]
  postfixExpression -> .postfixExpression [ expression ] #lookaheads= SCOLON [ ( + - EQUALOP NOTEQUALOP OROP COMA ANDOP LTEQUALOP GTEQUALOP LTOP GTOP / * ) ]
  postfixExpression -> .postfixExpression ( ) #lookaheads= SCOLON [ ( + - EQUALOP NOTEQUALOP OROP COMA ANDOP LTEQUALOP GTEQUALOP LTOP GTOP / * ) ]
  postfixExpression -> .postfixExpression ( argumentsList ) #lookaheads= SCOLON [ ( + - EQUALOP NOTEQUALOP OROP COMA ANDOP LTEQUALOP GTEQUALOP LTOP GTOP / * ) ]
State 54
  compoundStatement -> localVarDeclaration statementList . #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  statementList -> statementList .statement #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  statement -> .compoundStatement
  statement -> .initialConditionalStatement
  statement -> .expressionStatement
  statement -> .loopStatement
  statement -> .printStatement
  compoundStatement -> .localVarDeclaration
  compoundStatement -> .localVarDeclaration statementList
  initialConditionalStatement -> .conditionalStatement puntoSemanticoIF
  initialConditionalStatement -> .conditionalStatement ELSE puntoSemanticoElse LBRACKET statement conditionalStatementAUX RBRACKET
  expressionStatement -> .SCOLON
  expressionStatement -> .expression SCOLON
  loopStatement -> .LOOP loopPuntoSemantico ( expression ) loopExpresionPuntoSemantico LBRACKET statement RBRACKET loopExpresionPuntoSemanticoFinal
  printStatement -> .PRINT ( expression ) SCOLON
  localVarDeclaration -> .VAR ID COLON type_specifier SCOLON
  localVarDeclaration -> .VAR ID COLON type_specifier SCOLON localVarDeclaration
  conditionalStatement -> .IF ( expression ) puntoSemanticoIFEXP LBRACKET statement conditionalStatementAUX RBRACKET
  conditionalStatement -> .conditionalStatement ELIF puntoSemanticoIFEXP ( expression ) LBRACKET statement RBRACKET
  expression -> .assignmentExpression
  expression -> .expression COMA assignmentExpression
  assignmentExpression -> .conditionalExpression
  assignmentExpression -> .unaryExpression assignmentExpressionAssign assignmentExpression assignmentExpressionAux
  conditionalExpression -> .orExpression
  unaryExpression -> .ID
  unaryExpression -> .NUMBER
  unaryExpression -> .DECIMAL
  unaryExpression -> .STRING
  unaryExpression -> .TRUE
  unaryExpression -> .FALSE
  orExpression -> .andExpression
  orExpression -> .orExpression orExpressionOpPuntoSemantico andExpression orExpressionAux
  andExpression -> .equalExpression
  andExpression -> .andExpression andExpressionAND equalExpression andExpressionAux
  equalExpression -> .relationalExpression
  equalExpression -> .equalExpression equalExpressionEqual relationalExpression equalExpressionAux
  equalExpression -> .equalExpression equalExpressionNotEqual relationalExpression equalExpressionAux
  relationalExpression -> .arithmethicExpression
  relationalExpression -> .relationalExpression relationalExpressionAuxGreater arithmethicExpression relationalExpressionAux
  relationalExpression -> .relationalExpression relationalExpressionAuxLess arithmethicExpression relationalExpressionAux
  relationalExpression -> .relationalExpression relationalExpressionAuxGreaterEqual arithmethicExpression relationalExpressionAux
  relationalExpression -> .relationalExpression relationalExpressionAuxLessEqual arithmethicExpression relationalExpressionAux
  arithmethicExpression -> .multiplicationExpression
  arithmethicExpression -> .arithmethicExpression aritmeticoSuma multiplicationExpression arithmethicPuntoSemantico
  arithmethicExpression -> .arithmethicExpression aritmeticoResta multiplicationExpression arithmethicPuntoSemantico
  multiplicationExpression -> .postfixExpression
  multiplicationExpression -> .multiplicationExpression multiplicacionMultiplo unaryExpression multiplicacionPuntoSemantico
  multiplicationExpression -> .multiplicationExpression multiplicacionDivision unaryExpression multiplicacionPuntoSemantico
  postfixExpression -> .unaryExpression
  postfixExpression -> .postfixExpression [ expression ]
  postfixExpression -> .postfixExpression ( )
  postfixExpression -> .postfixExpression ( argumentsList )
State 169
  localVarDeclaration -> VAR ID COLON type_specifier SCOLON . #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  localVarDeclaration -> VAR ID COLON type_specifier SCOLON .localVarDeclaration #lookaheads= RBRACKET VAR IF SCOLON ID NUMBER DECIMAL STRING TRUE FALSE LOOP PRINT
  localVarDeclaration -> .VAR ID COLON type_specifier SCOLON
  localVarDeclaration -> .VAR ID COLON type_specifier SCOLON localVarDeclaration
GENERANDO CUADRUPLOS
0 cuadruplo {
  operator: 'GOTO',
  operandLeft: 'main',
  operandRight: '',
  result: 1
}
1 cuadruplo {
  operator: '>',
  operandLeft: 'b',
  operandRight: 'a',
  result: 't0'
}
2 cuadruplo {
  operator: 'GOTOF',
  operandLeft: 't0',
  operandRight: '',
  result: ''
}
3 cuadruplo {
  operator: '=',
  operandLeft: 'true',
  operandRight: '',
  result: 'dentroIF'
}
[]
[]
[ 2 ]
[ 'bool', 'bool', 'bool' ]
IF STATEMENT
Expresion aritmetica
0 cuadruplo {
  operator: 'GOTO',
  operandLeft: 'main',
  operandRight: '',
  result: 1
}
1 cuadruplo {
  operator: '>',
  operandLeft: 'b',
  operandRight: 'a',
  result: 't0'
}
2 cuadruplo {
  operator: 'GOTOF',
  operandLeft: 't0',
  operandRight: '',
  result: 5
}
3 cuadruplo {
  operator: '=',
  operandLeft: 'true',
  operandRight: '',
  result: 'dentroIF'
}
4 cuadruplo {
  operator: 'GOTO',
  operandLeft: '',
  operandRight: '',
  result: ''
}
5 cuadruplo {
  operator: '+',
  operandLeft: 70000,
  operandRight: 'b',
  result: 't1'
}
6 cuadruplo {
  operator: '=',
  operandLeft: 't1',
  operandRight: '',
  result: 'b'
}
[]
[]
[ 4 ]
[ 'bool', 'bool', 'bool', 'int', 'int' ]
GENERANDO CUADRUPLOS
GENERANDO CUADRUPLOS
0 cuadruplo {
  operator: 'GOTO',
  operandLeft: 'main',
  operandRight: '',
  result: 1
}
1 cuadruplo {
  operator: '>',
  operandLeft: 'b',
  operandRight: 'a',
  result: 't0'
}
2 cuadruplo {
  operator: 'GOTOF',
  operandLeft: 't0',
  operandRight: '',
  result: 5
}
3 cuadruplo {
  operator: '=',
  operandLeft: 'true',
  operandRight: '',
  result: 'dentroIF'
}
4 cuadruplo {
  operator: 'GOTO',
  operandLeft: '',
  operandRight: '',
  result: 7
}
5 cuadruplo {
  operator: '+',
  operandLeft: 70000,
  operandRight: 'b',
  result: 't1'
}
6 cuadruplo {
  operator: '=',
  operandLeft: 't1',
  operandRight: '',
  result: 'b'
}
7 cuadruplo {
  operator: '*',
  operandLeft: 70002,
  operandRight: 70001,
  result: 't2'
}
8 cuadruplo {
  operator: '=',
  operandLeft: 't2',
  operandRight: '',
  result: 'c'
}
9 cuadruplo {
  operator: '<',
  operandLeft: 70003,
  operandRight: 'i',
  result: 't3'
}
10 cuadruplo {
  operator: 'GOTOF',
  operandLeft: 't3',
  operandRight: '',
  result: 13
}
11 cuadruplo {
  operator: 'PRINT',
  operandLeft: '',
  operandRight: '',
  result: 'i'
}
12 cuadruplo {
  operator: 'GOTO',
  operandLeft: '',
  operandRight: '',
  result: 9
}
[]
[]
[]
[
  'bool', 'bool',
  'bool', 'int',
  'int',  'float',
  'int',  'bool',
  'int'
]
Program
Funcion:  {
  name: 'main',
  parameters: '',
  type: 'void',
  localVariables: tablaVariables {
    tabla: {
      b: [Object],
      a: [Object],
      localdos: [Object],
      localtes2: [Object],
      dentroIF: [Object],
      i: [Object]
    }
  },
  globalVariables: tablaVariables {
    tabla: {
      c: [Object],
      globalmartin: [Object],
      globaldaniel: [Object],
      globaltest: [Object]
    }
  }
}
DESPUES DE PARSEAR
Program
