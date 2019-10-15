import { functionInformation } from "./funcionInterface";

export class directorioProcedimientos {

    private tabla: Object;

    constructor() {
        this.tabla = new Object;
    }

    insert(fn: functionInformation) {
        if(this.tabla.hasOwnProperty(fn.name)) {
            throw new Error("Redeclaracion de funcion");
        } else {
            this.tabla[fn.name] = fn;
        }
    }


    printData() {
        for (const key in this.tabla) {
            if (this.tabla.hasOwnProperty(key)) {
                console.log("Funcion: ", this.tabla[key]);
            }
        }
    }

}