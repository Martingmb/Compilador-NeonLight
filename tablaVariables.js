"use strict";
exports.__esModule = true;
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
    tablaVariables.prototype.printData = function () {
        for (var key in this.tabla) {
            if (this.tabla.hasOwnProperty(key)) {
                console.log(this.tabla[key]);
            }
        }
    };
    return tablaVariables;
}());
exports.tablaVariables = tablaVariables;
