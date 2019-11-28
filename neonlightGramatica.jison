/* lexical grammar */
%lex

%options case-insensitive

%nonassoc IFNOELSE
%nonassoc ELSE

%%

\s+                   /* skip whitespace */
"Program"               return 'PROGRAM'
"fn"                    return 'FUNCTION'
"return"                return 'RETURN'
"if"                    return 'IF'
"elif"                  return 'ELIF'
"else"                  return 'ELSE'
"for"                   return 'LOOP'
"main"                  return 'MAIN'
"var[]"                 return 'VECTOR'
"var"                   return 'VAR'
"print"                 return 'PRINT'
"void"                  return 'VOID'
"int"                   return 'INT'
"float"                 return 'FLOAT'
"char"                  return 'CHAR'
"string"                return 'STRINGT'
"bool"                  return 'BOOL'
"true"                  return 'TRUE'
"false"                 return 'FALSE'
";"                     return 'SCOLON'
":"                     return 'COLON'
","                     return 'COMA'
'>='                    return 'GTEQUALOP'
'<='                    return 'LTEQUALOP'
'>'                     return 'GTOP'
'<'                     return 'LTOP'
'=='                    return 'EQUALOP'
'!='                    return 'NOTEQUALOP'
'&&'                    return 'ANDOP'
'||'                    return 'OROP'
([a-zA-Z])[a-zA-Z0-9_]* return 'ID'
[0-9]+\b                return 'NUMBER'
[0-9]+("."[0-9]+)?\b    return 'DECIMAL'
"*"                     return '*'
"/"                     return '/'
"-"                     return '-'
"+"                     return '+'
"^"                     return '^'
"!"                     return '!'
"%"                     return '%'
"="                     return 'ASSIGN'
"("                     return '('
")"                     return ')'
"{"                     return 'LBRACKET'
"}"                     return 'RBRACKET'
"["                     return '['
"]"                     return ']'
"PI"                    return 'PI'
"E"                     return 'E'
\"(\\.|[^"\\])*\"       return 'STRING'
<<EOF>>                 return 'EOF'
.                       return 'INVALID'

/lex


%{
    var tablaVariables = /** @class */ (function () {
        function tablaVariables() {
            this.tabla = new Object();
        }
        tablaVariables.prototype.insert = function (variable) {
            if (this.tabla.hasOwnProperty(variable.varName)) {
                var element = this.tabla[variable.varName];
                element.value = variable.value;
                this.tabla[variable.varName] = element;
            }
            else {
                this.tabla[variable.varName] = variable;
            }
        };
        tablaVariables.prototype.insertDir = function (variableName, dir) {
            if (this.tabla.hasOwnProperty(variableName)) {
                var element = this.tabla[variableName];
                element.direction = dir;
                this.tabla[variableName] = element;
            }
            else {
                return false;
            }
        };
        tablaVariables.prototype.getVariable = function (variableName) {
            if (this.tabla.hasOwnProperty(variableName)) {
                return true;
            }
            else {
                return false;
            }
        };
        tablaVariables.prototype.getDirection = function (variableName) {
            var v = this.tabla[variableName];
            return v.direction;
        };
        tablaVariables.prototype.getVariableType = function (variableName) {
            var v = this.tabla[variableName];
            return v;
        };
        tablaVariables.prototype.getDirection = function (variableName) {
            var v = this.tabla[variableName];
            return v.direction;
        };
        tablaVariables.prototype.printData = function () {
            for (var key in this.tabla) {
                if (this.tabla.hasOwnProperty(key)) {
                    console.log(this.tabla[key]);
                }
            }
        };
        return tablaVariables;
    }());
    var directorioProcedimientos = /** @class */ (function () {
        function directorioProcedimientos() {
            this.tabla = new Object;
        }
        directorioProcedimientos.prototype.insert = function (fn) {
            if (this.tabla.hasOwnProperty(fn.name)) {
                throw new Error("Redeclaracion de funcion");
            }
            else {
                this.tabla[fn.name] = fn;
            }
        };
        directorioProcedimientos.prototype.getFn = function (name) {
            return this.tabla[name];
        };
        directorioProcedimientos.prototype.printData = function () {
            for (var key in this.tabla) {
                if (this.tabla.hasOwnProperty(key)) {
                    console.log("Funcion: ", this.tabla[key]);
                }
            }
        };
        directorioProcedimientos.prototype.getTablaFunciones = function () {
            return this.tabla;
        };
        return directorioProcedimientos;
    }());
    var cuadruplo = /** @class */ (function () {
        function cuadruplo(oper, opL, opR, result) {
            this.operator = oper;
            this.operandLeft = opL;
            this.operandRight = opR;
            this.result = result;
        }
        cuadruplo.prototype.changeResult = function (result) {
            this.result = result;
        };
        return cuadruplo;
    }());
    var cuadruplos_1 = cuadruplo;
    var expression = /** @class */ (function () {
        function expression() {
            this.cuadruplos = [];
            this.tempCount = 0;
            this.cuadruploIndex = 0;
            this.operandos = [];
            this.operadores = [];
            this.pSaltos = [];
            this.tipos = [];
            this.cuboSemantico = {
                int: {
                    int: {
                        '+': 'int',
                        '-': 'int',
                        '*': 'int',
                        '/': 'int',
                        '<': 'bool',
                        '>': 'bool',
                        '==': 'bool',
                        '!=': 'bool',
                        '>=': 'bool',
                        '<=': 'bool'
                    },
                    float: {
                        '+': 'float',
                        '-': 'float',
                        '*': 'float',
                        '/': 'float',
                        '<': 'bool',
                        '>': 'bool',
                        '==': 'bool',
                        '!=': 'bool',
                        '>=': 'bool',
                        '<=': 'bool'
                    },
                    string: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    char: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    bool: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    }
                },
                float: {
                    int: {
                        '+': 'float',
                        '-': 'float',
                        '*': 'float',
                        '/': 'float',
                        '<': 'bool',
                        '>': 'bool',
                        '==': 'bool',
                        '!=': 'bool',
                        '>=': 'bool',
                        '<=': 'bool'
                    },
                    float: {
                        '+': 'float',
                        '-': 'float',
                        '*': 'float',
                        '/': 'float',
                        '<': 'bool',
                        '>': 'bool',
                        '==': 'bool',
                        '!=': 'bool',
                        '>=': 'bool',
                        '<=': 'bool'
                    },
                    string: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    char: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    bool: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    }
                },
                string: {
                    int: {
                        '+': 'string',
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    float: {
                        '+': 'string',
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    string: {
                        '+': 'string',
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    char: {
                        '+': 'string',
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    bool: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    }
                },
                char: {
                    int: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    float: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    string: {
                        '+': 'string',
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    char: {
                        '+': 'string',
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    bool: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    }
                },
                bool: {
                    int: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    float: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    string: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    char: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': null,
                        '!=': null,
                        '>=': null,
                        '<=': null
                    },
                    bool: {
                        '+': null,
                        '-': null,
                        '*': null,
                        '/': null,
                        '<': null,
                        '>': null,
                        '==': 'bool',
                        '!=': 'bool',
                        '>=': null,
                        '<=': null
                    }
                }
            };
        }
        expression.prototype.getType = function (firstType, secondType, op) {
            return this.cuboSemantico[firstType][secondType][op];
        };
        expression.prototype.setTemporalMemoria = function (seg) {
            this.temporal = seg;
        };
        expression.prototype.relacionalOp = function (opL, opR, operator) {
            var cua = new cuadruplos_1(operator, opL, opR, this.tempCount);
            this.tempCount += 1;
            this.pushCuadruplo(cua);
        };
        expression.prototype.generarCuadruplos = function (trash) {
            console.log("GENERANDO CUADRUPLOS");
            while (this.operandos.length > 1) {
                var op2 = this.operandos.pop();
                var op1 = this.operandos.pop();
                var operador = this.operadores.pop();
                var result = 't' + this.tempCount;
                this.operandos.push(result);
                this.tempCount += 1;
                var cua = new cuadruplos_1(operador, op1, op2, result);
                this.pushCuadruplo(cua);
            }
        };
        expression.prototype.gotoMain = function () {
            var cua = new cuadruplos_1('GOTO', 'main', '', '');
            this.pushCuadruplo(cua);
        };
        expression.prototype.resolverMain = function () {
            var salto = this.pSaltos.pop();
            var cua = this.cuadruplos[salto];
            cua.changeResult(this.cuadruploIndex);
            this.cuadruplos[salto] = cua;
        };
        expression.prototype.ifStatement = function () {
            // this.generarCuadruplos();
            var cua = new cuadruplos_1('GOTOF', this.operandos.pop(), '', '');
            this.pushCuadruplo(cua);
        };
        expression.prototype.assignStatement = function () {
            var op2 = this.operandos.pop();
            var op1 = this.operandos.pop();
            var cua = new cuadruplos_1(this.operadores.pop(), op2, '', op1);
            this.pushCuadruplo(cua);
        };
        expression.prototype.agregarSalto = function () {
            this.pSaltos.push(this.cuadruploIndex - 1);
        };
        expression.prototype.agregarSaltoLoop = function () {
            this.pSaltos.push(this.cuadruploIndex);
        };
        expression.prototype.elseStatement = function () {
            var cua = new cuadruplos_1('GOTO', '', '', '');
            this.pushCuadruplo(cua);
        };
        expression.prototype.loopStatement = function () {
            // this.generarCuadruplos();
            var cua = new cuadruplos_1('GOTOF', this.operandos.pop(), '', '');
            this.pushCuadruplo(cua);
        };
        expression.prototype.resolverIf = function () {
            var salto = this.pSaltos.pop();
            var cua = this.cuadruplos[salto];
            cua.changeResult(this.cuadruploIndex);
            this.cuadruplos[salto] = cua;
        };
        expression.prototype.resolverElse = function () {
            var salto = this.pSaltos.pop();
            var cua = this.cuadruplos[salto];
            cua.changeResult(this.cuadruploIndex);
            this.cuadruplos[salto] = cua;
        };
        expression.prototype.resolverLoop = function () {
            var end = this.pSaltos.pop();
            var ret = this.pSaltos.pop();
            var cua = new cuadruplos_1('GOTO', '', '', ret);
            this.pushCuadruplo(cua);
            cua = this.cuadruplos[end];
            cua.changeResult(this.cuadruploIndex);
            this.cuadruplos[end] = cua;
        };
        expression.prototype.pushCuadruplo = function (cuadruplo) {
            this.cuadruplos.push(cuadruplo);
            this.cuadruploIndex += 1;
        };
        expression.prototype.addOperando = function (operand, type) {
            this.operandos.push(operand);
            this.tipos.push(type);
        };
        expression.prototype.addOperador = function (operator) {
            this.operadores.push(operator);
        };
        expression.prototype.printData = function () {
            this.cuadruplos.forEach(function (element, index) {
                console.log(index, element);
            });
            console.log(this.operandos);
            console.log(this.operadores);
            console.log(this.pSaltos);
            console.log(this.tipos);
        };
        expression.prototype.topOperandos = function () {
            return this.operandos.length > 0 ? this.operandos[this.operandos.length - 1] : null;
        };
        expression.prototype.topOperadores = function () {
            if (this.operadores.length > 0) {
                return this.operadores[this.operadores.length - 1];
            }
            else {
                return null;
            }
        };
        expression.prototype.sumaResta = function () {
            if (this.topOperadores() == '-' || this.topOperadores() == '+') {
                var rOp = this.operandos.pop();
                var rT = this.tipos.pop();
                var lOp = this.operandos.pop();
                var lT = this.tipos.pop();
                var op = this.operadores.pop();
                var resultType = this.getType(lT, rT, op);
                if (resultType != null) {
                    this.tipos.push(resultType);
                    var result = void 0;
                    if (resultType == 'int') {
                        result = this.temporal.getDireccionInt();
                    }
                    else {
                        result = this.temporal.getDireccionFloat();
                    }
                    var cua = new cuadruplos_1(op, lOp, rOp, result);
                    this.tempCount += 1;
                    this.operandos.push(result);
                    this.pushCuadruplo(cua);
                }
                else {
                    throw Error('Type mismatch');
                }
            }
        };
        expression.prototype.multiplicacionDiv = function () {
            if (this.topOperadores() == '*' || this.topOperadores() == '/') {
                var rOp = this.operandos.pop();
                var rT = this.tipos.pop();
                var lOp = this.operandos.pop();
                var lT = this.tipos.pop();
                var op = this.operadores.pop();
                var resultType = this.getType(lT, rT, op);
                if (resultType != null) {
                    this.tipos.push(resultType);
                    var result = void 0;
                    if (resultType == 'int') {
                        result = this.temporal.getDireccionInt();
                    }
                    else {
                        result = this.temporal.getDireccionFloat();
                    }
                    var cua = new cuadruplos_1(op, lOp, rOp, result);
                    this.tempCount += 1;
                    this.operandos.push(result);
                    this.pushCuadruplo(cua);
                }
                else {
                    throw Error('Type mismatch');
                }
            }
        };
        expression.prototype.relacionalOP = function () {
            if (this.topOperadores() == '&&' || this.topOperadores() == '||' || this.topOperadores() == '<' || this.topOperadores() == '>' || this.topOperadores() == '<=' || this.topOperadores() == '>=' || this.topOperadores() == '!=' || this.topOperadores() == '==') {
                var rOp = this.operandos.pop();
                var rT = this.tipos.pop();
                var lOp = this.operandos.pop();
                var lT = this.tipos.pop();
                var op = this.operadores.pop();
                var resultType = this.getType(lT, rT, op);
                if (resultType != null) {
                    this.tipos.push(resultType);
                    var result = this.temporal.getDireccionBool();
                    var cua = new cuadruplos_1(op, lOp, rOp, result);
                    this.tempCount += 1;
                    this.operandos.push(result);
                    this.pushCuadruplo(cua);
                }
                else {
                    throw Error(lT + " " + op + " " + rT + " Type mismatch");
                }
            }
        };
        expression.prototype.printStatement = function () {
            var cua = new cuadruplos_1('PRINT', '', '', this.operandos.pop());
            this.tempCount += 1;
            this.pushCuadruplo(cua);
        };
        expression.prototype.getVariableType = function (tablaLocal, tablaGlobal, variableName) {
            var tl = tablaLocal.getVariableType(variableName);
            var tG = tablaGlobal.getVariableType(variableName);
            return tl != undefined ? tl.type : tG.type
        };
        expression.prototype.getCurrentIndex = function () {
            return this.cuadruploIndex;
        };
        expression.prototype.genEndProc = function () {
            var cua = new cuadruplos_1('ENDPROC', '', '', '');
            this.tempCount += 1;
            this.pushCuadruplo(cua);
        };
        expression.prototype.genERA = function (funcName) {
            var cua = new cuadruplos_1('ERA', '', '', funcName);
            this.tempCount += 1;
            this.pushCuadruplo(cua);
        };
        expression.prototype.genGOSUB = function (funcName) {
            var cua = new cuadruplos_1('GOSUB', '', '', funcName);
            this.tempCount += 1;
            this.pushCuadruplo(cua);
        };
        expression.prototype.genENDP = function () {
            var cua = new cuadruplos_1('ENDP', '', '', '');
            this.tempCount += 1;
            this.pushCuadruplo(cua);
        };
        expression.prototype.getCuadruplos = function () {
            return this.cuadruplos;
        };
        return expression;
    }());
    var segmentoMemoria = /** @class */ (function () {
        function segmentoMemoria(tip, inicio, tam) {
            this.tipo = tip;
            this.dirInicio = inicio;
            this.tamano = tam - 1;
            this.dirFinal = this.dirInicio + this.tamano;
            var tamanoPorTipo = Math.floor(this.tamano / 5);
            this.intInicio = this.dirInicio;
            this.intCurrent = this.intInicio;
            this.intFinal = this.dirInicio + tamanoPorTipo - 1;
            this.intMemoria = new Object();
            this.floatInicio = this.dirInicio + tamanoPorTipo;
            this.floatCurrent = this.floatInicio;
            this.floatFinal = this.dirInicio + tamanoPorTipo * 2 - 1;
            this.floatMemoria = new Object();
            this.charInicio = this.dirInicio + tamanoPorTipo * 2;
            this.charCurrent = this.charInicio;
            this.charFinal = this.dirInicio + tamanoPorTipo * 3 - 1;
            this.charMemoria = new Object();
            this.stringInicio = this.dirInicio + tamanoPorTipo * 3;
            this.stringCurrent = this.stringInicio;
            this.stringFinal = this.dirInicio * tamanoPorTipo * 4 - 1;
            this.stringMemoria = new Object();
            this.boolInicio = this.dirInicio + tamanoPorTipo * 4;
            this.boolCurrent = this.boolInicio;
            this.boolFinal = this.dirFinal;
            this.boolMemoria = new Object();
        }
        segmentoMemoria.prototype.guardarEnDir = function (dir, type, value) {
            switch (type) {
                case 'int':
                    this.intMemoria[dir] = value;
                    break;
                case 'float':
                    this.floatMemoria[dir] = value;
                    break;
                case 'char':
                    this.charMemoria[dir] = value;
                    break;
                case 'string':
                    this.stringMemoria[dir] = value;
                    break;
                case 'bool':
                    this.boolMemoria[dir] = value;
                    break;
                default:
                    break;
            }
        };
        segmentoMemoria.prototype.getFromDir = function (dir, type) {
            switch (type) {
                case 'int':
                    return this.intMemoria[dir];
                case 'float':
                    return this.floatMemoria[dir];
                case 'char':
                    return this.charMemoria[dir];
                case 'string':
                    return this.stringMemoria[dir];
                case 'bool':
                    return this.boolMemoria[dir];
                default:
                    break;
            }
        };
        segmentoMemoria.prototype.getDireccionInt = function () {
            var dir = this.intCurrent;
            this.intCurrent += 1;
            return dir;
        };
        segmentoMemoria.prototype.getDireccionFloat = function () {
            var dir = this.floatCurrent;
            this.floatCurrent += 1;
            return dir;
        };
        segmentoMemoria.prototype.getDireccionChar = function () {
            var dir = this.charCurrent;
            this.charCurrent += 1;
            return dir;
        };
        segmentoMemoria.prototype.getDireccionString = function () {
            var dir = this.stringCurrent;
            this.stringCurrent += 1;
            return dir;
        };
        segmentoMemoria.prototype.getDireccionBool = function () {
            var dir = this.boolCurrent;
            this.boolCurrent += 1;
            return dir;
        };
        segmentoMemoria.prototype.getDireccionIntArray = function (size) {
            var dir = this.intCurrent;
            this.intCurrent += size;
            return dir;
        };
        segmentoMemoria.prototype.getDireccionFloatArray = function (size) {
            var dir = this.floatCurrent;
            this.floatCurrent += size;
            return dir;
        };
        segmentoMemoria.prototype.getDireccionCharArray = function (size) {
            var dir = this.charCurrent;
            this.charCurrent += size;
            return dir;
        };
        segmentoMemoria.prototype.getDireccionStringArray = function (size) {
            var dir = this.stringCurrent;
            this.stringCurrent += size;
            return dir;
        };
        segmentoMemoria.prototype.getDireccionBoolArray = function (size) {
            var dir = this.boolCurrent;
            this.boolCurrent += size;
            return dir;
        };
        segmentoMemoria.prototype.resetMemory = function () {
            this.intCurrent = this.intInicio;
            this.intMemoria = new Object();
            this.floatCurrent = this.floatInicio;
            this.floatMemoria = new Object();
            this.charCurrent = this.charInicio;
            this.charMemoria = new Object();
            this.stringCurrent = this.stringInicio;
            this.stringMemoria = new Object();
            this.boolCurrent = this.boolInicio;
            this.boolMemoria = new Object();
        };
        return segmentoMemoria;
    }());
    var memoriaVirtual = /** @class */ (function () {
        function memoriaVirtual() {
            this.dataSegment = new segmentoMemoria('Global', 1000, 20000);
            this.stack = new segmentoMemoria('Stack', 21000, 50000);
            this.constantes = new segmentoMemoria('Constantes', 71000, 1000);
            this.temporal = new segmentoMemoria('Temporales', 72000, 10000);
            this.tablaConstantes = new Object();
        }
        memoriaVirtual.prototype.getVirtualMemoryLocationConstant = function (type) {
            switch (type) {
                case 'int':
                    return this.constantes.getDireccionInt();
                case 'float':
                    return this.constantes.getDireccionFloat();
                case 'char':
                    return this.constantes.getDireccionChar();
                case 'string':
                    return this.constantes.getDireccionString();
                case 'bool':
                    return this.constantes.getDireccionBool();
                default:
                    break;
            }
        };
        memoriaVirtual.prototype.getVirtualMemoryLocationGlobal = function (type) {
            switch (type) {
                case 'int':
                    return this.dataSegment.getDireccionInt();
                case 'float':
                    return this.dataSegment.getDireccionFloat();
                case 'char':
                    return this.dataSegment.getDireccionChar();
                case 'string':
                    return this.dataSegment.getDireccionString();
                case 'bool':
                    return this.dataSegment.getDireccionBool();
                default:
                    break;
            }
        };
        memoriaVirtual.prototype.getVirtualMemoryLocationVectorGlobal = function (size, type) {
            switch (type) {
                case 'int':
                    return this.dataSegment.getDireccionIntArray(size);
                case 'float':
                    return this.dataSegment.getDireccionFloatArray(size);
                case 'char':
                    return this.dataSegment.getDireccionCharArray(size);
                case 'string':
                    return this.dataSegment.getDireccionStringArray(size);
                case 'bool':
                    return this.dataSegment.getDireccionBoolArray(size);
                default:
                    break;
            }
        };
        memoriaVirtual.prototype.getVirtualMemoryLocationStack = function (type) {
            switch (type) {
                case 'int':
                    return this.stack.getDireccionInt();
                case 'float':
                    return this.stack.getDireccionFloat();
                case 'char':
                    return this.stack.getDireccionChar();
                case 'string':
                    return this.stack.getDireccionString();
                case 'bool':
                    return this.stack.getDireccionBool();
                default:
                    break;
            }
        };
        memoriaVirtual.prototype.getVirtualMemoryLocationVectorStack = function (size, type) {
            switch (type) {
                case 'int':
                    return this.stack.getDireccionIntArray(size);
                case 'float':
                    return this.stack.getDireccionFloatArray(size);
                case 'char':
                    return this.stack.getDireccionCharArray(size);
                case 'string':
                    return this.stack.getDireccionStringArray(size);
                case 'bool':
                    return this.stack.getDireccionBoolArray(size);
                default:
                    break;
            }
        };
        memoriaVirtual.prototype.getVirtualMemoryLocationTemporal = function (type) {
            switch (type) {
                case 'int':
                    return this.temporal.getDireccionInt();
                case 'float':
                    return this.temporal.getDireccionFloat();
                case 'char':
                    return this.temporal.getDireccionChar();
                case 'string':
                    return this.temporal.getDireccionString();
                case 'bool':
                    return this.temporal.getDireccionBool();
                default:
                    break;
            }
        };
        memoriaVirtual.prototype.getConstant = function (dir, type) {
            return this.constantes.getFromDir(dir, type);
        };
        memoriaVirtual.prototype.getTemporal = function (dir, type) {
            return this.temporal.getFromDir(dir, type);
        };
        memoriaVirtual.prototype.getGlobal = function (dir, type) {
            return this.dataSegment.getFromDir(dir, type);
        };
        memoriaVirtual.prototype.saveStack = function (dir, type, value) {
            this.stack.guardarEnDir(dir, type, value);
        };
        memoriaVirtual.prototype.saveTemporal = function (dir, type, value) {
            this.temporal.guardarEnDir(dir, type, value);
        };
        memoriaVirtual.prototype.saveConstante = function (dir, type, value) {
            this.constantes.guardarEnDir(dir, type, value);
        };
        memoriaVirtual.prototype.saveGlobal = function (dir, type, value) {
            this.dataSegment.guardarEnDir(dir, type, value);
        };
        memoriaVirtual.prototype.resetStack = function () {
            this.stack.resetMemory();
        };
        memoriaVirtual.prototype.resetTemporal = function () {
            this.temporal.resetMemory();
        };
        memoriaVirtual.prototype.getTemporalSegmento = function () {
            return this.temporal;
        };
        memoriaVirtual.prototype.insertConstante = function (dir, val) {
            this.tablaConstantes[dir] = val;
        };
        memoriaVirtual.prototype.getTablaConstantes = function () {
            return this.tablaConstantes;
        };
        memoriaVirtual.prototype.getConstantes = function () {
            for (var key in this.constantes) {
                if (this.constantes.hasOwnProperty(key)) {
                    var element = this.constantes[key];
                    console.log(element);
                }
            }
        };
        return memoriaVirtual;
    }());
    var dirGlobal;
    var dirVariable;
    var direccionConst;
    var memoria = new memoriaVirtual();   
    var expresionSemantica = new expression();
    var directorioFunciones = new directorioProcedimientos();
    var tabla = new tablaVariables();
    var tablaLocal = new tablaVariables();
    var tablaLocalFuncion = new tablaVariables();
    var tablaProcessing = '';
    var parameters = [];
    var mapDir = new Object();
    expresionSemantica.setTemporalMemoria(memoria.getTemporalSegmento());
%}

/* Asociaciones y precedencia de operadores */

%right '='
%left '<' '>' '!=' '==' '<=' '>='
%left '+' '-'
%left '*' '/'
%left '^'
%right '!'
%right '%'
%left UMINUS


%start pgm

%% /*Gramatica de Neonlight*/

pgm
: PROGRAM ID SCOLON 
| PROGRAM ID SCOLON varDeclaration puntoSemanticoMain mainFunction
| PROGRAM ID SCOLON varDeclaration puntoSemanticoMain functionDeclaration mainFunction
| pgm EOF { typeof console !== 'undefined' ? console.log("=============") : print($1);
    memoria.getConstantes();
    console.log("======================");
    console.log(memoria.getTablaConstantes());
          return { 
              tablaFunciones: directorioFunciones.getTablaFunciones(),
              tablaConstantes: memoria.getTablaConstantes(),
              cuadruplos: expresionSemantica.getCuadruplos(),
              tablaGlobal: tabla["tabla"],
              funDir: mapDir
            }; 
        }
;

puntoSemanticoMain 
: {
    expresionSemantica.gotoMain();
    expresionSemantica.agregarSalto();
}
;

resolverMain
: {
    expresionSemantica.resolverMain();
}
;

varDeclaration
: VECTOR ID '[' NUMBER ']' COLON type_specifier SCOLON {
    dirGlobal = memoria.getVirtualMemoryLocationVectorGlobal($4, $7);
    memoria.saveGlobal(dirGlobal, $7, null);
    tabla.insert({varName: $2, type: $7, direction: dirGlobal, size: $4});
}
| VECTOR ID '[' NUMBER ']' COLON type_specifier SCOLON varDeclaration {
    dirGlobal = memoria.getVirtualMemoryLocationVectorGlobal($4, $7);
    memoria.saveGlobal(dirGlobal, $7, null);
    tabla.insert({varName: $2, type: $7, direction: dirGlobal, size: $4});
}
| VAR ID COLON type_specifier SCOLON { 
    dirGlobal = memoria.getVirtualMemoryLocationGlobal($4);
    memoria.saveGlobal(dirGlobal, $4, null);
    tabla.insert({varName: $2, type: $4, direction: dirGlobal});
    }
| VAR ID COLON type_specifier SCOLON varDeclaration { 
    dirGlobal = memoria.getVirtualMemoryLocationGlobal($4);
    memoria.saveGlobal(dirGlobal, $4, null);
    tabla.insert({varName: $2, type: $4, direction: dirGlobal});
    }
| varDeclarationAux assignmentExpressionAssign assignmentExpression assignmentExpressionAux SCOLON {

}
;

varDeclarationAux 
: VAR ID COLON type_specifier {
    dirGlobal = memoria.getVirtualMemoryLocationGlobal($4);
    memoria.saveGlobal(dirGlobal, $4, null);
    tabla.insert({varName: $2, type: $4, direction: dirGlobal});
    expresionSemantica.addOperando(dirGlobal, $4);
}
;

mainFunction
: FUNCTION MAIN resolverMain '(' ')' COLON functionType_specifier LBRACKET compoundStatement RBRACKET {
    tablaProcessing = $2;
    directorioFunciones.insert({name: $2, parameters: '', type: $7, localVariables: tablaLocal, globalVariables: tabla});
    expresionSemantica.genENDP();
    expresionSemantica.printData();
}
;

functionDeclaration
: FUNCTION functionPuntoSemanticoIndex '('  ')' COLON VOID LBRACKET compoundStatement  RBRACKET {
    tablaProcessing = $2;
    directorioFunciones.insert({name: $2, parameters: parameters, type: $6, localVariables: tablaLocal, globalVariables: tabla});
    parameters = [];
    tablaLocal = tablaLocalFuncion;
    expresionSemantica.genEndProc();
}
| functionDeclaration FUNCTION functionPuntoSemanticoIndex '('  ')' COLON VOID LBRACKET compoundStatement  RBRACKET {
    tablaProcessing = $2;
    directorioFunciones.insert({name: $3, parameters: parameters, type: $7, localVariables: tablaLocal, globalVariables: tabla});
    parameters = [];
    tablaLocal = tablaLocalFuncion;
    expresionSemantica.genEndProc();
}
| FUNCTION functionPuntoSemanticoIndex '('  ')' COLON VOID LBRACKET compoundStatement returnStatement  RBRACKET {
    tablaProcessing = $2;
    directorioFunciones.insert({name: $2, parameters: parameters, type: $6, localVariables: tablaLocal, globalVariables: tabla});
    parameters = [];
    tablaLocal = tablaLocalFuncion;
    expresionSemantica.genEndProc();
}
| FUNCTION functionPuntoSemanticoIndex '(' functionParameters ')' COLON void LBRACKET compoundStatement  RBRACKET {
    tablaProcessing = $2;
    directorioFunciones.insert({name: $2, parameters: parameters, type: $7, localVariables: tablaLocal, globalVariables: tabla});
    parameters = [];
    tablaLocal = tablaLocalFuncion;
    expresionSemantica.genEndProc();

    console.log(directorioFunciones.getFn($2));
}
| FUNCTION functionPuntoSemanticoIndex '(' functionParameters ')' COLON functionType_specifier LBRACKET compoundStatement  RBRACKET {
    tablaProcessing = $2;
    directorioFunciones.insert({name: $2, parameters: parameters, type: $7, localVariables: tablaLocal, globalVariables: tabla});
    parameters = [];
    tablaLocal = tablaLocalFuncion;
    expresionSemantica.genEndProc();

    console.log(directorioFunciones.getFn($2));
}
;

returnStatement
: RETURN {

}
| RETURN unaryExpression {

}
| RETURN conditionalExpression {

}
| RETURN functionCall {

}
;

functionPuntoSemanticoIndex
: ID {
    mapDir[$1] = expresionSemantica.getCurrentIndex();
}
;

functionParameters
: ID COLON type_specifier {
    parameters.push({id: $1, type: $3});
    console.log({id: $1, type: $3});

}
| ID COLON type_specifier SCOLON functionParameters {
    parameters.push({id: $1, type: $3});
    console.log({id: $1, type: $3});
}
;

functionPS 
: {
    console.log("Entre al punto semantico")
}
;

compoundStatement
: statementList
| localVarDeclaration coumpoundStatement2
;

coumpoundStatement2
: statementList
| statementSemantico
;

statementList
: statement statementList2
;

statementList2
:statementList
| statementSemantico
;

statementSemantico
: {

}
;

statement
: functionCall
| initialConditionalStatement
| expressionStatement
| loopStatement
| printStatement
;

functionCall 
: ID '(' ')' {
    console.log("============================================")
    expresionSemantica.genERA($1);
    expresionSemantica.genGOSUB($1);
}
| ID '(' parameter_list ')' {

}
;

parameter_list
: conditionalExpression statementSemantico {

}
| parameter_list conditionalExpression {

}
;

printStatement 
: PRINT '(' expression ')' SCOLON  {
    expresionSemantica.printStatement();
}
;

loopStatement
: LOOP loopPuntoSemantico '(' expression ')' loopExpresionPuntoSemantico LBRACKET statement RBRACKET loopExpresionPuntoSemanticoFinal {
    // expresionSemantica.generarCuadruplos();
}
;

testSemantico 
: {
    console.log('\x1b[36m%s\x1b[0m', 'TEST');
    expresionSemantica.printData();
}
; 

loopPuntoSemantico 
: {
    expresionSemantica.agregarSaltoLoop();
}
;

loopExpresionPuntoSemantico 
: {
    expresionSemantica.loopStatement();
    expresionSemantica.agregarSalto();
}
;

loopExpresionPuntoSemanticoFinal 
: {
    expresionSemantica.resolverLoop();
}
;

expressionStatement 
: SCOLON
| expression SCOLON
;

initialConditionalStatement 
: conditionalStatement puntoSemanticoIF
| conditionalStatement ELSE puntoSemanticoElse LBRACKET statement conditionalStatementAUX RBRACKET {
    expresionSemantica.resolverElse();
}
;


conditionalStatement
: IF '(' expression ')' puntoSemanticoIFEXP LBRACKET statement conditionalStatementAUX RBRACKET %prec IFNOELSE {
    console.log("IF STATEMENT")
}
| conditionalStatement ELIF puntoSemanticoIFEXP '(' expression ')' LBRACKET statement RBRACKET
;

conditionalStatementAUX
: {
    expresionSemantica.printData()
}
;

puntoSemanticoIF 
: {
    expresionSemantica.resolverIf();
}
;

puntoSemanticoElse
: {
    expresionSemantica.elseStatement();
    expresionSemantica.resolverIf();
    expresionSemantica.agregarSalto();
}
;

puntoSemanticoIFEXP
: {
    expresionSemantica.ifStatement();
    expresionSemantica.agregarSalto();
    }
;

expression 
: assignmentExpression {
}
| expression COMA assignmentExpression
;

assignmentExpression
: conditionalExpression
| unaryExpression assignmentExpressionAssign assignmentExpression assignmentExpressionAux {
}
;

assignmentExpressionAssign 
: ASSIGN {
    expresionSemantica.addOperador($1);
}
;

assignmentExpressionAux 
: {
    expresionSemantica.assignStatement();
}
;

conditionalExpression
: orExpression
;

orExpression
: andExpression
| orExpression orExpressionOpPuntoSemantico andExpression orExpressionAux {
}
;

orExpressionOpPuntoSemantico 
: OROP {
    expresionSemantica.addOperador($1);
}
;

orExpressionAux
: {
    expresionSemantica.relacionalOP();
}
;

andExpression
: equalExpression
| andExpression andExpressionAND equalExpression andExpressionAux{
    
}
;

andExpressionAND
: ANDOP {
    expresionSemantica.addOperador($1);
}
;

andExpressionAux 
: {
    expresionSemantica.relacionalOP();
}
;

equalExpression
: relationalExpression
| equalExpression equalExpressionEqual relationalExpression equalExpressionAux {
    
}
| equalExpression equalExpressionNotEqual relationalExpression equalExpressionAux {
    
}
;

equalExpressionEqual 
: EQUALOP {
    expresionSemantica.addOperador($1);
}
;

equalExpressionNotEqual 
: NOTEQUALOP {
    expresionSemantica.addOperador($1);
}
;

equalExpressionAux 
: {
    expresionSemantica.relacionalOP();
}
;

relationalExpression 
: arithmethicExpression {
}
| relationalExpression relationalExpressionAuxGreater arithmethicExpression relationalExpressionAux {
    
}
| relationalExpression relationalExpressionAuxLess arithmethicExpression relationalExpressionAux {
    
}
| relationalExpression relationalExpressionAuxGreaterEqual arithmethicExpression relationalExpressionAux {
    
}
| relationalExpression relationalExpressionAuxLessEqual arithmethicExpression relationalExpressionAux {
}
;

relationalExpressionAux 
: {
    expresionSemantica.relacionalOP();
}
;

relationalExpressionAuxGreater
: GTOP {
    expresionSemantica.addOperador($1);
}
;

relationalExpressionAuxLess
: LTOP {
    expresionSemantica.addOperador($1);
}
;

relationalExpressionAuxGreaterEqual
: GTEQUALOP {
    expresionSemantica.addOperador($1);
}   
;

relationalExpressionAuxLessEqual
: LTEQUALOP {
    expresionSemantica.addOperador($1);
}
;

arithmethicExpression
: multiplicationExpression
| arithmethicExpression aritmeticoSuma multiplicationExpression arithmethicPuntoSemantico {
}
| arithmethicExpression aritmeticoResta multiplicationExpression arithmethicPuntoSemantico {
}
;

aritmeticoSuma
: '+' {
    expresionSemantica.addOperador($1);
}
;

aritmeticoResta
: '-' {
    expresionSemantica.addOperador($1);
}
;

arithmethicPuntoSemantico
: {
    console.log("Expresion aritmetica");
    expresionSemantica.sumaResta();
}
;

multiplicationExpression 
: postfixExpression
| multiplicationExpression multiplicacionMultiplo unaryExpression multiplicacionPuntoSemantico {
    
}
| multiplicationExpression multiplicacionDivision unaryExpression multiplicacionPuntoSemantico {
    
}
;

multiplicacionMultiplo 
: '*' {
    expresionSemantica.addOperador($1);
}
;

multiplicacionDivision
: '/' {
    expresionSemantica.addOperador($1);
}
;

multiplicacionPuntoSemantico 
: {
    expresionSemantica.multiplicacionDiv();
}   
;

unaryExpression
: ID {
    if(tablaLocal.getVariable($1) || tabla.getVariable($1)) {
        let tipo = expresionSemantica.getVariableType(tablaLocal, tabla, $1);
        if(tabla.getVariable($1)) {
            dirVariable = tabla.getDirection($1);
            if(dirVariable == null) {
                dirVariable = memoria.getVirtualMemoryLocationGlobal(tipo);
                memoria.saveGlobal(dirVariable, tipo, null);
            }

        } else {
            dirVariable = tablaLocal.getDirection($1);
            if(dirVariable == null){
                dirVariable = memoria.getVirtualMemoryLocationStack(tipo);
                tablaLocal.insertDir($1, dirVariable);
                memoria.saveStack(dirVariable, tipo, null);
            }
        }

        expresionSemantica.addOperando(dirVariable, tipo);
    } else {
        throw Error(`Variable ${$1} no declarada`);
    }
}
| NUMBER {
    direccionConst = memoria.getVirtualMemoryLocationConstant('int');
    memoria.saveConstante(direccionConst, 'int', $1);
    memoria.insertConstante(direccionConst, {type: 'int', value: $1});
    expresionSemantica.addOperando(direccionConst, 'int');
}
| DECIMAL {
    direccionConst = memoria.getVirtualMemoryLocationConstant('float');
    memoria.saveConstante(direccionConst, 'float', $1);
    memoria.insertConstante(direccionConst, {type: 'float', value: $1});
    expresionSemantica.addOperando(direccionConst, 'float');
}
| STRING {
    direccionConst = memoria.getVirtualMemoryLocationConstant('string');
    memoria.saveConstante(direccionConst, 'string', $1);
    memoria.insertConstante(direccionConst, {type: 'string', value: $1});
    expresionSemantica.addOperando(direccionConst, 'string');
}
| TRUE {
    direccionConst = memoria.getVirtualMemoryLocationConstant('bool');
    memoria.saveConstante(direccionConst, 'bool', $1);
    memoria.insertConstante(direccionConst, {type: 'bool', value: $1});
    expresionSemantica.addOperando(direccionConst, 'bool');
}
| FALSE {
    direccionConst = memoria.getVirtualMemoryLocationConstant('bool');
    memoria.saveConstante(direccionConst, 'bool', $1);
    memoria.insertConstante(direccionConst, {type: 'bool', value: $1});
    expresionSemantica.addOperando(direccionConst, 'bool');
}
;

postfixExpression 
: unaryExpression
| postfixExpression "[" expression "]" SCOLON
| postfixExpression "(" ")" SCOLON
| postfixExpression "(" argumentsList ")"
;

argumentsList 
: assignmentExpression
| argumentsList COMA assignmentExpression
;

localVarDeclaration
: VAR ID COLON type_specifier SCOLON { 
    tablaLocal.insert({varName: $2, type: $4, direction: null});
    }
| VAR ID COLON type_specifier SCOLON localVarDeclaration {
    tablaLocal.insert({varName: $2, type: $4, direction: null});
}
;

functionType_specifier
: VOID
| INT
| FLOAT
| CHAR
| STRING
| BOOL
;

type_specifier 
: INT
| FLOAT
| CHAR
| STRINGT
| BOOL
;
