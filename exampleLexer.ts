import * as fs from "fs";
import * as rd from 'readline';
import * as moo from "moo";
import * as nearley from 'nearley';
import * as grammar from "./simple";
import { variableInformation } from "./variableInterface";
import { functionInformation } from "./funcionInterface";
import { tablaVariables } from "./tablaVariables";
import { directorioProcedimientos } from './directorioProcedimientos';

const log = (item: any) => {console.log(item)};
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));
var reader1 = rd.createInterface(fs.createReadStream('./example.nl'));

let globalVarTable: tablaVariables = new tablaVariables();
let functionTable: directorioProcedimientos = new directorioProcedimientos();

let lexer = moo.compile({
    WS:      /[ \t]+/,
    comment: /\/\/.*?$/,
    number:  /0|[1-9][0-9]*/,
    string:  /"(?:\\["\\]|[^\n"\\])*"/,
    startProgram: ['program'],
    id: /[a-zA-Z]+/,
    lparen:  '(',
    rparen:  ')',
    keyword: ['while', 'if', 'else'],
    vector: ['var[]'],
    variable: ['var'],
    function: ['fn'],
    type: ['int', 'float', 'string', 'char', 'bool', 'void'],
    semiColon: ';',
    colon: ':',
    assign: '=',
    NL:      { match: /\n/, lineBreaks: true },
});


let lexed = [];

const parseData = (syntax:any) => {
    return {
        programID: syntax[1].ProgramID,
        globalVars: syntax[2].globalVars[0],
        function: syntax[3].functions[0]
    }
}

const createFunctionTable = (functionData:Array<any>) => {

    functionData.forEach(fn => {
        let fnInfo: functionInformation = {
            name: fn.name,
            parameters: fn.parameters,
            type: fn.functionType,
            globalVariables: globalVarTable
        }
        functionTable.insert(fnInfo);
    })
}

const createGlobalVariablesTable = (globalVar:Array<any>) => {
    globalVar.forEach(variable => {
        let varInfo: variableInformation = {
            varName: variable.varName,
            type: variable.type,
            value: variable.value || null
        }
        globalVarTable.insert(varInfo);
    })
}

const virtualMachine = () => {

}

const readFile = async() => {
    let lineas = [];
    for await (const l of reader1) {
        lineas.push(l);
    }
    return lineas;
}

const lexFile = async() => {
    let lineas: Array<string> = await readFile();
    
    lineas.forEach(linea => {
        lexer.reset(linea);
        let b = true;
        while(b) {
            let temp = lexer.next();
            if(temp == undefined) {
                b = false;
            } else {
                lexed.push(temp);
            }
        }
    })

    lexed.forEach(token => {
        if(token.type == 'WS'|| token.type == 'NL' ) {
            
        } else {
            parser.feed(token.value);
        }
    });
    let length = parser.results.length - 1;
    let data = parseData(parser.results[0]);
    createGlobalVariablesTable(data.globalVars);
    createFunctionTable(data.function);

    log("Tabla de variables globales: ");
    globalVarTable.printData();
    log("Directorio de procedimientos: ")
    functionTable.printData();

    
}

lexFile();