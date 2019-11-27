export class cuadruplo {
    private operandLeft: any;
    private operandRight: any;
    private operator: any;
    private result: any;

    constructor(oper, opL, opR, result) {
        this.operator = oper;
        this.operandLeft = opL;
        this.operandRight = opR;
        this.result = result
    }

    changeResult(result: any) {
        this.result = result;
    }

}