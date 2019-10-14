"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var _this = this;
exports.__esModule = true;
var cuboSemantico_1 = require("./cuboSemantico");
var fs = require("fs");
var rd = require("readline");
var moo = require("moo");
var nearley = require("nearley");
var grammar = require("./simple");
var tablaVariables_1 = require("./tablaVariables");
var directorioProcedimientos_1 = require("./directorioProcedimientos");
var log = function (item) { console.log(item); };
var parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
var reader1 = rd.createInterface(fs.createReadStream('./example.nl'));
var globalVarTable = new tablaVariables_1.tablaVariables();
var functionTable = new directorioProcedimientos_1.directorioProcedimientos();
var lexer = moo.compile({
    WS: /[ \t]+/,
    comment: /\/\/.*?$/,
    number: /0|[1-9][0-9]*/,
    string: /"(?:\\["\\]|[^\n"\\])*"/,
    startProgram: ['program'],
    id: /[a-zA-Z]+/,
    lparen: '(',
    rparen: ')',
    keyword: ['while', 'if', 'else'],
    vector: ['var[]'],
    variable: ['var'],
    "function": ['fn'],
    type: ['int', 'float', 'string', 'char', 'bool', 'void'],
    semiColon: ';',
    colon: ':',
    assign: '=',
    NL: { match: /\n/, lineBreaks: true }
});
var lexed = [];
var parseData = function (syntax) {
    return {
        programID: syntax[1].ProgramID,
        globalVars: syntax[2].globalVars[0],
        "function": syntax[3].functions[0]
    };
};
var createFunctionTable = function (functionData) {
    functionData.forEach(function (fn) {
        var fnInfo = {
            name: fn.name,
            parameters: fn.parameters,
            type: fn.functionType,
            globalVariables: globalVarTable
        };
        functionTable.insert(fnInfo);
    });
};
var createGlobalVariablesTable = function (globalVar) {
    globalVar.forEach(function (variable) {
        var varInfo = {
            varName: variable.varName,
            type: variable.type,
            value: variable.value || null
        };
        globalVarTable.insert(varInfo);
    });
};
var virtualMachine = function () {
};
var readFile = function () { return __awaiter(_this, void 0, void 0, function () {
    var lineas, reader1_1, reader1_1_1, l, e_1_1;
    var e_1, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                lineas = [];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, 7, 12]);
                reader1_1 = __asyncValues(reader1);
                _b.label = 2;
            case 2: return [4 /*yield*/, reader1_1.next()];
            case 3:
                if (!(reader1_1_1 = _b.sent(), !reader1_1_1.done)) return [3 /*break*/, 5];
                l = reader1_1_1.value;
                lineas.push(l);
                _b.label = 4;
            case 4: return [3 /*break*/, 2];
            case 5: return [3 /*break*/, 12];
            case 6:
                e_1_1 = _b.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 12];
            case 7:
                _b.trys.push([7, , 10, 11]);
                if (!(reader1_1_1 && !reader1_1_1.done && (_a = reader1_1["return"]))) return [3 /*break*/, 9];
                return [4 /*yield*/, _a.call(reader1_1)];
            case 8:
                _b.sent();
                _b.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 11: return [7 /*endfinally*/];
            case 12: return [2 /*return*/, lineas];
        }
    });
}); };
var lexFile = function () { return __awaiter(_this, void 0, void 0, function () {
    var lineas, length, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, readFile()];
            case 1:
                lineas = _a.sent();
                lineas.forEach(function (linea) {
                    lexer.reset(linea);
                    var b = true;
                    while (b) {
                        var temp = lexer.next();
                        if (temp == undefined) {
                            b = false;
                        }
                        else {
                            lexed.push(temp);
                        }
                    }
                });
                lexed.forEach(function (token) {
                    if (token.type == 'WS' || token.type == 'NL') {
                    }
                    else {
                        parser.feed(token.value);
                    }
                });
                length = parser.results.length - 1;
                data = parseData(parser.results[0]);
                createGlobalVariablesTable(data.globalVars);
                createFunctionTable(data["function"]);
                log("Tabla de variables globales: ");
                globalVarTable.printData();
                log("Directorio de procedimientos: ");
                functionTable.printData();
                return [2 /*return*/];
        }
    });
}); };
lexFile();
var cubo = new cuboSemantico_1.cuboSemantico();
cubo.setRules();
cubo.printCombination();
