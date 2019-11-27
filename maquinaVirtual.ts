export class segmentoMemoria {
    private tipo: string;
    private tamano: number;
    private dirInicio: number;
    private dirFinal: number;

    private intInicio: number;
    private intCurrent: number;
    private intFinal: number;
    private intMemoria: object;

    private floatInicio: number;
    private floatCurrent: number;
    private floatFinal: number;
    private floatMemoria: object;

    private charInicio: number;
    private charCurrent: number;
    private charFinal: number;
    private charMemoria: object;

    private stringInicio: number;
    private stringCurrent: number;
    private stringFinal: number;
    private stringMemoria: object;

    private boolInicio: number;
    private boolCurrent: number;
    private boolFinal: number;
    private boolMemoria: object;

    constructor(tip: string, inicio: number, tam: number) {
        this.tipo = tip;
        this.dirInicio = inicio;
        this.tamano = tam - 1;
        this.dirFinal = this.dirInicio + this.tamano;

        let tamanoPorTipo = Math.floor(this.tamano / 5);

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

    guardarEnDir(dir:number, type: string, value: any) {
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
    }

    getFromDir(dir:number, type: string) {
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
    }

    getDireccionInt() {
        let dir = this.intCurrent;
        this.intCurrent +=1;
        return dir;
    }

    getDireccionFloat() {
        let dir = this.floatCurrent;
        this.floatCurrent +=1;
        return dir;
    }

    getDireccionChar() {
        let dir = this.charCurrent;
        this.charCurrent +=1;
        return dir;
    }

    getDireccionString() {
        let dir = this.stringCurrent;
        this.stringCurrent +=1;
        return dir;
    }

    getDireccionBool() {
        let dir = this.boolCurrent;
        this.boolCurrent +=1;
        return dir;
    }

    getDireccionIntArray(size: number) {
        let dir = this.intCurrent;
        this.intCurrent +=size;
        return dir;
    }

    getDireccionFloatArray(size: number) {
        let dir = this.floatCurrent;
        this.floatCurrent +=size;
        return dir;
    }

    getDireccionCharArray(size: number) {
        let dir = this.charCurrent;
        this.charCurrent +=size;
        return dir;
    }

    getDireccionStringArray(size: number) {
        let dir = this.stringCurrent;
        this.stringCurrent +=size;
        return dir;
    }

    getDireccionBoolArray(size: number) {
        let dir = this.boolCurrent;
        this.boolCurrent +=size;
        return dir;
    }

    getTipo(dir) {
        dir = Number(dir);
        if(dir < this.intFinal) {
            return 'int';
        } else if(dir < this.floatFinal) {
            return 'float';
        } else if(dir < this.charFinal) {
            return 'char';
        } else if(dir < this.stringFinal) {
            return 'string';
        } else {
            return 'bool';
        }
    }

    resetMemory() {
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
    }

}

export class memoriaVirtual {

    private dataSegment: segmentoMemoria;
    private stack: segmentoMemoria;
    private constantes: segmentoMemoria;
    private temporal: segmentoMemoria;
    public tablaConstantes: object;


    constructor() {
        this.dataSegment = new segmentoMemoria('Global', 1000, 20000);
        this.stack = new segmentoMemoria('Stack', 21000, 50000);
        this.constantes = new segmentoMemoria('Constantes', 71000, 1000);
        this.temporal = new segmentoMemoria('Temporales', 72000, 10000);
        this.tablaConstantes = new Object();
    }

    getVirtualMemoryLocationConstant(type: string) {
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
    }

    getVirtualMemoryLocationGlobal(type: string) {
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
    }

    getVirtualMemoryLocationVectorGlobal(size: number ,type: string) {
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
    }

    getVirtualMemoryLocationStack(type: string) {
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
    }

    getVirtualMemoryLocationVectorStack(size: number, type: string) {
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
    }

    getVirtualMemoryLocationTemporal(type: string) {
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
    }

    getConstant(dir: number, type: string) {
        return this.constantes.getFromDir(dir, type);
    }

    getTemporal(dir: number, type: string) {
        return this.temporal.getFromDir(dir, type);
    }

    getStack(dir: number, type: string) {
        return this.stack.getFromDir(dir, type);
    }

    getGlobal(dir: number, type: string) {
        return this.dataSegment.getFromDir(dir, type);
    }

    saveStack(dir: number, type: string, value: any) {
        this.stack.guardarEnDir(dir, type, value);
    }

    saveTemporal(dir: number, type: string, value: any) {
        this.temporal.guardarEnDir(dir, type, value);
    }

    saveConstante(dir: number, type: string, value: any) {
        this.constantes.guardarEnDir(dir, type, value);
    }

    saveGlobal(dir: number, type: string, value: any) {
        this.dataSegment.guardarEnDir(dir, type, value);
    }

    resetStack() {
        this.stack.resetMemory();
    }

    resetTemporal() {
        this.temporal.resetMemory();
    }

    getTemporalSegmento() {
        return this.temporal;
    }

    insertConstante(dir: number, val: any) {
        this.tablaConstantes[dir] = val; 
    }

    getTablaConstantes() {
        return this.tablaConstantes;
    }

    getConstantes() {
        for (const key in this.constantes) {
            if (this.constantes.hasOwnProperty(key)) {
                const element = this.constantes[key];
                console.log(element);
            }
        }
    }


    getTypeGlobal(dir) {
        return this.dataSegment.getTipo(dir);
    }

    getTypeStack(dir) {
        return this.stack.getTipo(dir);
    }

    getTypoConstant(dir) {
        return this.constantes.getTipo(dir);
    }

    getTypoTemporal(dir) {
        return this.temporal.getTipo(dir);
    }

}


export class maquinaVirtual {
    private memoria: memoriaVirtual;
    private tablaFunciones: object;
    private tablaConstantes: object;
    private tablaGlobales: object;
    private cuadruplos: Array<any>;
    private index: number;
    public tiposOperaciones: object;
    public direccionesFunciones: object;
    public result: string = "";
    public stackReturn: Array<any> = [];

    constructor(interCode) {
        this.memoria = new memoriaVirtual();
        this.tablaFunciones = interCode.tablaFunciones;
        this.tablaConstantes = interCode.tablaConstantes;
        this.tablaGlobales = interCode.tablaGlobal;
        this.cuadruplos = interCode.cuadruplos;
        this.direccionesFunciones = interCode.funDir;
        this.index = 0;

        console.log("TABLA FUNCIONES", this.tablaFunciones);

        for (const key in this.tablaConstantes) {
            if (this.tablaConstantes.hasOwnProperty(key)) {
                const element = this.tablaConstantes[key];
                console.log(key, element);
                let dir = Number(key);
                this.memoria.saveConstante(dir, element.type, element.value);
            }
        }

        this.tiposOperaciones = {
            'GOTO': () => {
                console.log(this.cuadruplos[this.index].result);
                this.index = this.cuadruplos[this.index].result;
            },
            'GOTOF': () => {
                console.log("GOTOFALSE  ");
                let c = this.cuadruplos[this.index];
                console.log(c);
                let result = (this.getValue(c.operandLeft, this.findType(c.operandLeft)));
                if(result) {
                    this.index++;
                } else {
                    this.index = c.result;
                }
            },
            'PRINT': () => {
                let c = this.cuadruplos[this.index];
                console.log("PRINT")
                console.log('\x1b[36m%s\x1b[34m%s\x1b[0m', c);
                console.log(this.findType(c.result));
                this.result += "\x1b[32m>\x1b[0m " + this.getValue(c.result, this.findType(c.result)) + "\n";
                this.index++;
            },
            'ERA': () => {
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
                console.log("CREATE MEMORY FOR FUNCTION");
                let c = this.cuadruplos[this.index];
                console.log('\x1b[33m%s\x1b[0m', c);
                this.index++;
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
            },
            'GOSUB': () => {
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
                console.log("GO TO FUNCTION");
                let c = this.cuadruplos[this.index];
                let fun = c.result;
                console.log(this.direccionesFunciones, this.direccionesFunciones[fun]);
                console.log('\x1b[33m%s\x1b[0m', c);
                this.stackReturn.push(this.index);
                this.index = this.direccionesFunciones[fun];  
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
            },
            'ENDPROC': () => {
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
                console.log("TERMINANDO FUNCION");
                this.index = this.stackReturn.pop();
                this.index++;
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
            },
            '=': () => {
                let c = this.cuadruplos[this.index];
                console.log('\x1b[33m%s\x1b[0m', c);
                let dir = this.getValue(c.operandLeft, this.findType(c.operandLeft));
                console.log('\x1b[36m%s\x1b[0m', dir);
                let type = this.findType(dir);
                this.saveValue(c.result, type, this.getValue(c.operandLeft, type));
                this.index++;
            },
            '+': () => {
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
                console.log("SUMA");
                let c = this.cuadruplos[this.index];
                console.log(c);
                let oL = Number(this.getValue(c.operandLeft, this.findType(c.operandLeft)));
                let oR = Number(this.getValue(c.operandRight, this.findType(c.operandRight)));
                let resultType = this.findType(c.result);
                console.log("TYPO ", resultType, "C", c.result);
                this.saveValue(c.result, resultType, oL + oR);
                console.log("OPL: ", oL, "OPR: ", oR, "RESULT: ", oL + oR);
                this.index++;
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
            },
            '*': () => {
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
                console.log("MULTIPLICACION");
                let c = this.cuadruplos[this.index];
                console.log(c);
                let oL = Number(this.getValue(c.operandLeft, this.findType(c.operandLeft)));
                let oR = Number(this.getValue(c.operandRight, this.findType(c.operandRight)));
                let resultType = this.findType(c.result);
                console.log("TYPO ", resultType, "C", c.result);
                this.saveValue(c.result, resultType, oL * oR);
                console.log("OPL: ", oL, "OPR: ", oR, "RESULT: ", oL * oR);
                this.index++;
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
            },
            '/': () => {
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
                console.log("DIVISION");
                let c = this.cuadruplos[this.index];
                console.log(c);
                let oL = Number(this.getValue(c.operandLeft, this.findType(c.operandLeft)));
                let oR = Number(this.getValue(c.operandRight, this.findType(c.operandRight)));
                let resultType = this.findType(c.result);
                if(resultType == 'int') {
                    console.log("TYPO ", resultType, "C", c.result);
                    this.saveValue(c.result, resultType, Math.floor(oL / oR));
                    console.log("OPL: ", oL, "OPR: ", oR, "RESULT: ", Math.floor(oL / oR));
                } else {
                    console.log("TYPO ", resultType, "C", c.result);
                    this.saveValue(c.result, resultType, oL / oR);
                    console.log("OPL: ", oL, "OPR: ", oR, "RESULT: ", oL / oR);
                }
                this.index++;
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
            },
            '<': () => {
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
                console.log("COMPARACION");
                let c = this.cuadruplos[this.index];
                console.log(c);
                let oL = Number(this.getValue(c.operandLeft, this.findType(c.operandLeft)));
                let oR = Number(this.getValue(c.operandRight, this.findType(c.operandRight)));
                let r = oL < oR;

                console.log(oL, oR, r);
                console.log("OPL: ", oL, "OPR: ", oR, "RESULT: ", r);
                this.saveValue(c.result, this.findType(c.result), r);
                this.index++;
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
            },
            '>': () => {
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
                console.log("COMPARACION");
                let c = this.cuadruplos[this.index];
                console.log(c);
                let oL = Number(this.getValue(c.operandLeft, this.findType(c.operandLeft)));
                let oR = Number(this.getValue(c.operandRight, this.findType(c.operandRight)));
                let r = oL > oR;

                console.log(oL, oR, r);
                console.log("OPL: ", oL, "OPR: ", oR, "RESULT: ", r);
                this.saveValue(c.result, this.findType(c.result), r);
                this.index++;
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
            },
            '>=': () => {
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
                console.log("COMPARACION");
                let c = this.cuadruplos[this.index];
                console.log(c);
                let oL = Number(this.getValue(c.operandLeft, this.findType(c.operandLeft)));
                let oR = Number(this.getValue(c.operandRight, this.findType(c.operandRight)));
                let r = oL <= oR;

                console.log(oL, oR, r);
                console.log("OPL: ", oL, "OPR: ", oR, "RESULT: ", r);
                this.saveValue(c.result, this.findType(c.result), r);
                this.index++;
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
            },
            '<=': () => {
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
                console.log("COMPARACION");
                let c = this.cuadruplos[this.index];
                console.log(c);
                let oL = Number(this.getValue(c.operandLeft, this.findType(c.operandLeft)));
                let oR = Number(this.getValue(c.operandRight, this.findType(c.operandRight)));
                let r = oL <= oR;

                console.log(oL, oR, r);
                console.log("OPL: ", oL, "OPR: ", oR, "RESULT: ", r);
                this.saveValue(c.result, this.findType(c.result), r);
                this.index++;
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
            },
            '!=': () => {
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
                console.log("COMPARACION");
                let c = this.cuadruplos[this.index];
                console.log(c);
                let oL = Number(this.getValue(c.operandLeft, this.findType(c.operandLeft)));
                let oR = Number(this.getValue(c.operandRight, this.findType(c.operandRight)));
                let r = oL != oR;

                console.log(oL, oR, r);
                console.log("OPL: ", oL, "OPR: ", oR, "RESULT: ", r);
                this.saveValue(c.result, this.findType(c.result), r);
                this.index++;
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
            },
            '==': () => {
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
                console.log("COMPARACION");
                let c = this.cuadruplos[this.index];
                console.log(c);
                let oL = Number(this.getValue(c.operandLeft, this.findType(c.operandLeft)));
                let oR = Number(this.getValue(c.operandRight, this.findType(c.operandRight)));
                let r = oL == oR;

                console.log(oL, oR, r);
                console.log("OPL: ", oL, "OPR: ", oR, "RESULT: ", r);
                this.saveValue(c.result, this.findType(c.result), r);
                this.index++;
                console.log('\x1b[36m%s\x1b[0m', "=================================================");
            }
        }
    }

    saveValue(dir, type, val) {
        if(dir < 21000) {
            console.log("Guardando global");
            console.log(dir, type, val);
            console.log("------------------------")
            this.memoria.saveGlobal(dir, type, val);
        } else if(dir < 71000) {
            console.log("Guardando stack");
            console.log(dir, type, val);
            console.log("------------------------")
            this.memoria.saveStack(dir, type, val);
        } else if(dir < 72000) {
            console.log("Guardando constante");
            console.log(dir, type, val);
            console.log("------------------------")
            this.memoria.saveConstante(dir, type, val);
        } else if(dir < 82000) {
            console.log("Guardando temporal");
            console.log(dir, type, val);
            console.log("------------------------")
            this.memoria.saveTemporal(dir, type, val);
        }
    }

    getValue(dir, type) {

        if(dir < 21000) {
            console.log("Global");
            console.log("Direccion ", dir, "Tipo ", type);
            return this.memoria.getGlobal(dir, type);
        } else if(dir < 71000) {
            console.log("Stack");
            console.log("Direccion ", dir, "Tipo ", type);
            return this.memoria.getStack(dir, type);
        } else if(dir < 72000) {
            console.log("Constante");
            console.log("Direccion ", dir, "Tipo ", type);
            return this.memoria.getConstant(dir, type);
        } else if(dir < 82000) {
            console.log("Temporal");
            console.log("Direccion ", dir, "Tipo ", type);
            return this.memoria.getTemporal(dir, type);
        }
    }

    findType(dir) {

        if(dir < 21000) {
            return this.memoria.getTypeGlobal(dir);
        } else if(dir < 71000) {
            return this.memoria.getTypeStack(dir);
        } else if(dir < 72000) {
            return this.memoria.getTypoConstant(dir);
        } else if(dir < 82000) {
            console.log("TEMPORAL");
            return this.memoria.getTypoTemporal(dir);
        }

    }

    processCode() {
        while (this.cuadruplos[this.index].operator != 'ENDP') {
            this.tiposOperaciones[this.cuadruplos[this.index].operator]();
        }

        console.log(this.result);
    }

    getResult() {
        return this.result;
    }

}