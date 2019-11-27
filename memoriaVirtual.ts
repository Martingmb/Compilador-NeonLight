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

    createArray() {

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

    getVirtualMemoryLocationStackArray(size: number, type: string) {
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

}