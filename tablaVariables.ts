import { variableInformation } from "./variableInterface";

export class tablaVariables {

    private tabla: Object;

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
        }
    }

    printData() {
        for (const key in this.tabla) {
            if (this.tabla.hasOwnProperty(key)) {
                console.log(this.tabla[key]);
            }
        }
    }
}