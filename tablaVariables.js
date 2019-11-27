"use strict";
exports.__esModule = true;
var tablaVariables = /** @class */ (function () {
    function tablaVariables() {
        this.varCounter = 0;
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
            this.varCounter++;
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
exports.tablaVariables = tablaVariables;
