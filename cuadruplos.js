"use strict";
exports.__esModule = true;
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
exports.cuadruplo = cuadruplo;
