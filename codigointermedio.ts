import cuboSemantico from './cuboSemantico'

export class Quadruple {

    public leftop: string;
    public rightop: string;
    public operator: string;
    public result: string;

    public quad: Object;

    constructor() {
        this.leftop = '';
        this.rightop = '';
        this.operator = '';
        this.result = '';
    }
}

export class interCode {

    private SOper: Array<string>;
    private STypes: Array<string>;
    private pOper: Array <string>;
    private tempCounter: number;
    private arrQuads: Array<Object>;
    private cubo: cuboSemantico;

    constructor() {
        //Pila de operadores
        this.SOper = [];
        //Pila de tipos
        this.STypes = [];
        //Pila de operandos
        this.pOper = [];
        this.tempCounter = 1;
        this.arrQuads = [];
        this.cubo = new cuboSemantico;
    }

    quadGenerator() {
        var quad: Quadruple;

        var rightOperand = this.pOper.pop();
        var leftOperand = this.pOper.pop();

        var opRight = this.STypes.pop();
        var opLeft = this.STypes.pop();

        var operador = this.SOper.pop();

        var res_type = this.cubo.getType(opLeft, opRight, operador);

        if(operador != '=')
       {
           var newtemp = "t" + String(this.tempCounter);
           this.tempCounter++;
           var resultado = newtemp
           const quad = <Quadruple>({
                leftop: leftOperand,
                rightop: rightOperand,
                operator: operador,
                result: resultado
           })
           this.pOper.push(resultado);
           this.STypes.push(res_type);
       } 
       else
       {
           var resultado = leftOperand;
           const quad = <Quadruple>({
               leftop: rightOperand,
               rightop: null,
               operator: operador,
               result: resultado
           })
       }
       this.arrQuads.push(quad);
    }

    quadPrinter() {
        var resultado = this.pOper.pop();
        this.STypes.pop();
        var operador = this.SOper.pop();
        const quad = <Quadruple>({
            leftop: null,
            rightop: null,
            operator: operador,
            result: resultado
        })
        this.arrQuads.push(quad);
    }

}