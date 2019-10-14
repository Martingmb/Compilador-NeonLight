import { tablaVariables } from "./tablaVariables";

export interface functionInformation {
    name: string;
    parameters: Array<any>;
    type: string;
    localVariables?: tablaVariables;
    globalVariables?: tablaVariables;
}