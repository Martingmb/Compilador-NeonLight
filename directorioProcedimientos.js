"use strict";
exports.__esModule = true;
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
exports.directorioProcedimientos = directorioProcedimientos;
