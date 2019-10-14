export class cuboSemantico {

    private types: Array<string> = ['int', 'float', 'string', 'char', 'bool'];
    private operators: Array<string> = ['+', '-', '*', '/', '<', '>', '==', '!=', '>=', '<=', '='];

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

    printCombination() {
        for (let i = 0; i < this.types.length; i++) {
            for (let j = 0; j < this.types.length; j++) {
                for (let k = 0; k < this.operators.length; k++) {
                    console.log("Type 1: ", this.types[i], " ", this.operators[k], " Type 2: ", this.types[2]);
                    console.log("Produce: ", this.cubo[this.types[i]][this.types[j]][this.operators[k]]);
                }
            }
        }
    }

}