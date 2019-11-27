"use strict";
exports.__esModule = true;
var cuadruplos_1 = require("./cuadruplos");
var expression = /** @class */ (function () {
    function expression() {
        this.cuadruplos = [];
        this.tempCount = 0;
        this.cuadruploIndex = 0;
        this.operandos = [];
        this.operadores = [];
        this.tipos = [];
        this.pSaltos = [];
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
        var cua = new cuadruplos_1.cuadruplo(operator, opL, opR, this.tempCount);
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    };
    expression.prototype.generarCuadruplos = function () {
        console.log("GENERANDO CUADRUPLOS");
        while (this.operandos.length > 1) {
            var op2 = this.operandos.pop();
            var op1 = this.operandos.pop();
            var operador = this.operadores.pop();
            var result = 't' + this.tempCount;
            this.tempCount += 1;
            var cua = new cuadruplos_1.cuadruplo(operador, op1, op2, result);
            this.pushCuadruplo(cua);
        }
    };
    expression.prototype.gotoMain = function () {
        var cua = new cuadruplos_1.cuadruplo('GOTO', 'main', '', '');
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    };
    expression.prototype.resolverMain = function () {
        var salto = this.pSaltos.pop();
        var cua = this.cuadruplos[salto];
        cua.changeResult(this.cuadruploIndex);
        this.cuadruplos[salto] = cua;
    };
    expression.prototype.ifStatement = function () {
        this.generarCuadruplos();
        var cua = new cuadruplos_1.cuadruplo('GOTOF', this.operandos.pop(), '', '');
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    };
    expression.prototype.elseStatement = function () {
        var cua = new cuadruplos_1.cuadruplo('GOTO', '', '', '');
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    };
    expression.prototype.loopStatement = function () {
        this.generarCuadruplos();
        var cua = new cuadruplos_1.cuadruplo('GOTOF', this.operandos.pop(), '', '');
        this.tempCount += 1;
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
        var cua = new cuadruplos_1.cuadruplo('GOTO', '', '', ret);
        this.pushCuadruplo(cua);
        cua = this.cuadruplos[end];
        cua.changeResult(this.cuadruploIndex);
        this.cuadruplos[end] = cua;
    };
    expression.prototype.agregarSalto = function () {
        this.pSaltos.push(this.cuadruploIndex - 1);
    };
    expression.prototype.agregarSaltoLoop = function () {
        this.pSaltos.push(this.cuadruploIndex);
    };
    expression.prototype.pushCuadruplo = function (cuadruplo) {
        this.cuadruplos.push(cuadruplo);
        this.cuadruploIndex += 1;
    };
    expression.prototype.assignStatement = function () {
        var op2 = this.operandos.pop();
        var op1 = this.operandos.pop();
        var cua = new cuadruplos_1.cuadruplo(this.operadores.pop(), op2, '', op1);
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    };
    expression.prototype.addOperando = function (operand, type) {
        this.operandos.push(operand);
        this.tipos.push(type);
    };
    expression.prototype.addOperador = function (operator) {
        this.operadores.push(operator);
    };
    expression.prototype.printData = function () {
        this.cuadruplos.forEach(function (element) {
            console.log(element);
        });
        console.log(this.operandos);
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
                var cua = new cuadruplos_1.cuadruplo(op, lOp, rOp, result);
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
                var cua = new cuadruplos_1.cuadruplo(op, lOp, rOp, result);
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
                var cua = new cuadruplos_1.cuadruplo(op, lOp, rOp, result);
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
        var cua = new cuadruplos_1.cuadruplo('PRINT', '', '', this.operandos.pop());
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    };
    expression.prototype.getVariableType = function (tablaLocal, tablaGlobal, variableName) {
        var tl = tablaLocal.getVariableType(variableName);
        var tG = tablaGlobal.getVariableType(variableName);
        return tl != undefined ? tl.type : tG.type;
    };
    expression.prototype.getCurrentIndex = function () {
        return this.cuadruploIndex;
    };
    expression.prototype.genEndProc = function () {
        var cua = new cuadruplos_1.cuadruplo('ENDPROC', '', '', '');
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    };
    expression.prototype.genERA = function (funcName) {
        var cua = new cuadruplos_1.cuadruplo('ERA', '', '', funcName);
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    };
    expression.prototype.genGOSUB = function (funcName) {
        var cua = new cuadruplos_1.cuadruplo('GOSUB', '', '', funcName);
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    };
    expression.prototype.genENDP = function () {
        var cua = new cuadruplos_1.cuadruplo('ENDP', '', '', '');
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    };
    expression.prototype.getCuadruplos = function () {
        return this.cuadruplos;
    };
    return expression;
}());
exports.expression = expression;
