import { variableInformation } from "./variableInterface";

export class tablaVariables {

    private tabla: Object;
    private varCounter: number = 0;

    constructor() {
        this.tabla = new Object();
    }

    insert(variable: variableInformation) {

        if(this.tabla.hasOwnProperty(variable.varName)) {
            const element = this.tabla[variable.varName];
            element.value = variable.value;
            this.tabla[variable.varName] = element;
        } else {
            this.tabla[variable.varName] = variable;
            this.varCounter++;
        }
    }

    getVariable(variableName: string) {
        if(this.tabla.hasOwnProperty(variableName)) {
            return true;
        } else {
            return false;
        }
    }

    insertDir(variableName: string, dir: number) {
        if(this.tabla.hasOwnProperty(variableName)) {
            const element = this.tabla[variableName];
            element.direction = dir;
            this.tabla[variableName] = element;

        } else {
            return false;
        }
    }

    getVariableType(variableName: string) {
        let v = this.tabla[variableName];
        return v;
    }

    getDirection(variableName: string) {
        let v = this.tabla[variableName] as variableInformation;
        return v.direction;
    }

    printData() {
        for (const key in this.tabla) {
            if (this.tabla.hasOwnProperty(key)) {
                console.log(this.tabla[key]);
            }
        }
    }
}