"use strict";
exports.__esModule = true;
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
    segmentoMemoria.prototype.createArray = function () {
    };
    return segmentoMemoria;
}());
exports.segmentoMemoria = segmentoMemoria;
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
    memoriaVirtual.prototype.getVirtualMemoryLocationStackArray = function (size, type) {
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
exports.memoriaVirtual = memoriaVirtual;
