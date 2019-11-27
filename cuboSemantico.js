"use strict";
exports.__esModule = true;
var cuboSemantico = /** @class */ (function () {
    function cuboSemantico() {
        this.types = ['int', 'float', 'string', 'char', 'bool'];
        this.operators = ['+', '-', '*', '/', '<', '>', '==', '!=', '>=', '<='];
        this.mathOP = ['+', '-', '*', '/'];
        this.numTypes = ['int', 'float'];
        this.charOP = ['+'];
        this.charTypes = ['char', 'string'];
        this.logOp = ['<', '>', '==', '!=', '>=', '<='];
        this.boolOp = ['==', '!='];
        this.logTypes = ['bool'];
        this.cubo = new Object;
        for (var i = 0; i < this.types.length; i++) {
            this.cubo[this.types[i]] = new Object;
            for (var j = 0; j < this.types.length; j++) {
                this.cubo[this.types[i]][this.types[j]] = new Object;
                for (var k = 0; k < this.operators.length; k++) {
                    this.cubo[this.types[i]][this.types[j]][this.operators[k]] = null;
                }
            }
        }
    }
    cuboSemantico.prototype.getType = function (firstType, secondType, op) {
        return this.cubo[firstType][secondType][op];
    };
    cuboSemantico.prototype.insertTypeRule = function (firstType, secondType, op, result) {
        this.cubo[firstType][secondType][op] = result;
    };
    cuboSemantico.prototype.prepareSemanticRules = function (types, op) {
        for (var i = 0; i < types.length; i++) {
            for (var j = 0; j < types.length; j++) {
                for (var k = 0; k < op.length; k++) {
                    if (types[i] == types[j]) {
                        this.insertTypeRule(types[i], types[j], op[k], types[i]);
                    }
                    else {
                        this.insertTypeRule(types[i], types[j], op[k], types[types.length - 1]);
                    }
                }
            }
        }
    };
    cuboSemantico.prototype.setRules = function () {
        this.prepareSemanticRules(this.numTypes, this.mathOP);
        this.prepareSemanticRules(this.charTypes, this.charOP);
        this.prepareSemanticRules(this.numTypes, this.logOp);
        this.prepareSemanticRules(this.logTypes, this.boolOp);
    };
    cuboSemantico.prototype.printCombination = function () {
        for (var i = 0; i < this.types.length; i++) {
            for (var j = 0; j < this.types.length; j++) {
                for (var k = 0; k < this.operators.length; k++) {
                    console.log("Type 1: ", this.types[i], " Type 2: ", this.types[j], " OP: ", this.operators[k]);
                    console.log("Produce: ", this.cubo[this.types[i]][this.types[j]][this.operators[k]]);
                }
            }
        }
    };
    cuboSemantico.prototype.printCubo = function () {
        console.log(this.cubo);
    };
    return cuboSemantico;
}());
exports["default"] = cuboSemantico;
var test = {
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
console.log(test['int']['int']['*']);
