export default class cuboSemantico {

    private types: Array<string> = ['int', 'float', 'string', 'char', 'bool'];
    private operators: Array<string> = ['+', '-', '*', '/', '<', '>', '==', '!=', '>=', '<='];
    private mathOP: Array<string> = ['+', '-', '*', '/'];
    private numTypes: Array<string> = ['int', 'float'];
    private charOP: Array<string> = ['+'];
    private charTypes: Array<string> = ['char', 'string'];
    private logOp: Array<string> = ['<', '>', '==', '!=', '>=', '<='];
    private boolOp: Array<string> = ['==', '!=' ];
    private logTypes: Array<string> = ['bool'];

    private cubo: Object;

    constructor() {
        this.cubo = new Object;

        for (let i = 0; i < this.types.length; i++) {
            this.cubo[this.types[i]] = new Object;
            for (let j = 0; j < this.types.length; j++) {
                this.cubo[this.types[i]][this.types[j]] = new Object;
                for (let k = 0; k < this.operators.length; k++) {
                    this.cubo[this.types[i]][this.types[j]][this.operators[k]] = null;
                }
            }
        }
    }

    getType(firstType: string, secondType:string, op: string):string {
        return this.cubo[firstType][secondType][op];
    }

    insertTypeRule(firstType: string, secondType:string, op: string, result: string) {
        this.cubo[firstType][secondType][op] = result;
    }

    prepareSemanticRules(types:Array<string>, op:Array<string>) {
        for (let i = 0; i < types.length; i++) {
            for (let j = 0; j < types.length; j++) {
                for (let k = 0; k < op.length; k++) {
                    if(types[i] == types[j]) {
                        this.insertTypeRule(types[i], types[j], op[k], types[i]);
                    } else {
                        this.insertTypeRule(types[i], types[j], op[k], types[types.length - 1]);
                    }
                }
            }
        }
    }

    setRules() {
        this.prepareSemanticRules(this.numTypes, this.mathOP);
        this.prepareSemanticRules(this.charTypes, this.charOP);
        this.prepareSemanticRules(this.numTypes, this.logOp);
        this.prepareSemanticRules(this.logTypes, this.boolOp);
    }


    printCombination() {
        for (let i = 0; i < this.types.length; i++) {
            for (let j = 0; j < this.types.length; j++) {
                for (let k = 0; k < this.operators.length; k++) {
                    console.log("Type 1: ", this.types[i],  " Type 2: ", this.types[j], " OP: ", this.operators[k]);
                    console.log("Produce: ", this.cubo[this.types[i]][this.types[j]][this.operators[k]]);
                }
            }
        }
    }

}