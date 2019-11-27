import { segmentoMemoria } from './memoriaVirtual';
import { cuadruplo } from './cuadruplos';
export class expression {

    private cuadruplos: Array<cuadruplo> = [];
    private tempCount: number = 0;
    private cuadruploIndex: number = 0;
    private operandos: Array<any> = [];
    private operadores: Array<any> = [];
    private temporal: segmentoMemoria;
    private tipos: Array<any> = [];
    private pSaltos: Array<number> = [];
    private cuboSemantico: Object = {
        int: {
          int: {
            '+': 'int',
            '-': 'int',
            '*': 'int',
            '/': 'int',
            '<': 'bool',
            '>': 'bool',
            '==': 'bool',
            '!=': 'bool',
            '>=': 'bool',
            '<=': 'bool'
          },
          float: {
            '+': 'float',
            '-': 'float',
            '*': 'float',
            '/': 'float',
            '<': 'bool',
            '>': 'bool',
            '==': 'bool',
            '!=': 'bool',
            '>=': 'bool',
            '<=': 'bool'
          },
          string: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          char: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          bool: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          }
        },
        float: {
          int: {
            '+': 'float',
            '-': 'float',
            '*': 'float',
            '/': 'float',
            '<': 'bool',
            '>': 'bool',
            '==': 'bool',
            '!=': 'bool',
            '>=': 'bool',
            '<=': 'bool'
          },
          float: {
            '+': 'float',
            '-': 'float',
            '*': 'float',
            '/': 'float',
            '<': 'bool',
            '>': 'bool',
            '==': 'bool',
            '!=': 'bool',
            '>=': 'bool',
            '<=': 'bool'
          },
          string: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          char: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          bool: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          }
        },
        string: {
          int: {
            '+': 'string',
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          float: {
            '+': 'string',
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          string: {
            '+': 'string',
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          char: {
            '+': 'string',
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          bool: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          }
        },
        char: {
          int: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          float: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          string: {
            '+': 'string',
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          char: {
            '+': 'string',
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          bool: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          }
        },
        bool: {
          int: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          float: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          string: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          char: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': null,
            '!=': null,
            '>=': null,
            '<=': null
          },
          bool: {
            '+': null,
            '-': null,
            '*': null,
            '/': null,
            '<': null,
            '>': null,
            '==': 'bool',
            '!=': 'bool',
            '>=': null,
            '<=': null
          }
        }
      };
    
    
    getType(firstType: string, secondType:string, op: string):string {
        return this.cuboSemantico[firstType][secondType][op];
    }

    setTemporalMemoria(seg: segmentoMemoria) {
        this.temporal = seg;
    }

    relacionalOp(opL: any, opR: any, operator: any) {
        let cua = new cuadruplo(operator, opL, opR, this.tempCount);
        this.tempCount += 1;
        this.pushCuadruplo(cua);

    }

    generarCuadruplos() {
        console.log("GENERANDO CUADRUPLOS")
        while (this.operandos.length > 1) {
            let op2 = this.operandos.pop();
            let op1 = this.operandos.pop();
            let operador = this.operadores.pop();
            let result = 't' + this.tempCount;
            this.tempCount += 1;
            let cua = new cuadruplo(operador, op1, op2, result)
            this.pushCuadruplo(cua);
        }

    }

    gotoMain() {
        let cua = new cuadruplo('GOTO', 'main', '', '');
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    }

    resolverMain() {
        let salto = this.pSaltos.pop();
        let cua = this.cuadruplos[salto];
        cua.changeResult(this.cuadruploIndex);
        this.cuadruplos[salto] = cua;
    }

    ifStatement() {
        this.generarCuadruplos();
        let cua = new cuadruplo('GOTOF', this.operandos.pop(), '', '');
        this.tempCount += 1;
        this.pushCuadruplo(cua);

    }

    elseStatement() {
        let cua = new cuadruplo('GOTO', '', '', '');
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    }

    loopStatement() {
        this.generarCuadruplos();
        let cua = new cuadruplo('GOTOF', this.operandos.pop(), '', '');
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    }

    resolverIf() {
        let salto = this.pSaltos.pop();
        let cua = this.cuadruplos[salto];
        cua.changeResult(this.cuadruploIndex);
        this.cuadruplos[salto] = cua;

    }

    resolverElse() {
        let salto = this.pSaltos.pop();
        let cua = this.cuadruplos[salto];
        cua.changeResult(this.cuadruploIndex);
        this.cuadruplos[salto] = cua;
    }

    resolverLoop() {
        let end = this.pSaltos.pop();
        let ret = this.pSaltos.pop();
        let cua = new cuadruplo('GOTO', '', '', ret);
        this.pushCuadruplo(cua);
        cua = this.cuadruplos[end];
        cua.changeResult(this.cuadruploIndex);
        this.cuadruplos[end] = cua;
    }

    agregarSalto() {
        this.pSaltos.push(this.cuadruploIndex - 1);
    }

    agregarSaltoLoop() {
        this.pSaltos.push(this.cuadruploIndex);
    }

    pushCuadruplo(cuadruplo: cuadruplo) {
        this.cuadruplos.push(cuadruplo);
        this.cuadruploIndex += 1;
    }

    assignStatement() {
        let op2 = this.operandos.pop();
        let op1 = this.operandos.pop();
        let cua = new cuadruplo(this.operadores.pop(), op2, '' , op1);
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    }

    addOperando(operand: any, type?: any) {
        this.operandos.push(operand);
        this.tipos.push(type);
    }

    addOperador(operator: any) {
        this.operadores.push(operator);
    }

    printData() {
        this.cuadruplos.forEach(element => {
            console.log(element);
        });
        console.log(this.operandos)
    }

    topOperandos() {
        return this.operandos.length > 0 ? this.operandos[this.operandos.length - 1] : null;
    }

    topOperadores() {
        if(this.operadores.length > 0) {
            return this.operadores[this.operadores.length - 1];
        } else {
            return null;
        }
    }

    sumaResta() {
        if(this.topOperadores() == '-' || this.topOperadores() == '+') {
            let rOp = this.operandos.pop();
            let rT = this.tipos.pop();
            let lOp = this.operandos.pop();
            let lT = this.tipos.pop();
            let op = this.operadores.pop();
            let resultType = this.getType(lT, rT, op);

            if(resultType != null) {
              this.tipos.push(resultType);
              let result;
              if(resultType == 'int') {
                  result = this.temporal.getDireccionInt();
              } else {
                  result = this.temporal.getDireccionFloat();
              }
              let cua = new cuadruplo(op, lOp, rOp, result);
              this.tempCount += 1;
              this.operandos.push(result);
              this.pushCuadruplo(cua);
            } else {
              throw Error('Type mismatch');
            }

            
        }
    }

    multiplicacionDiv() {
        if(this.topOperadores() == '*' || this.topOperadores() == '/') {
            let rOp = this.operandos.pop();
            let rT = this.tipos.pop();
            let lOp = this.operandos.pop();
            let lT = this.tipos.pop();
            let op = this.operadores.pop();
            let resultType = this.getType(lT, rT, op);

            if(resultType != null) {
              this.tipos.push(resultType);
              let result;
              if(resultType == 'int') {
                  result = this.temporal.getDireccionInt();
              } else {
                  result = this.temporal.getDireccionFloat();
              }
              let cua = new cuadruplo(op, lOp, rOp, result);
              this.tempCount += 1;
              this.operandos.push(result);
              this.pushCuadruplo(cua);
            } else {
              throw Error('Type mismatch');
            }
        }
    }

    relacionalOP() {
      if(this.topOperadores() == '&&' || this.topOperadores() == '||' || this.topOperadores() == '<' || this.topOperadores() == '>' || this.topOperadores() == '<=' || this.topOperadores() == '>=' || this.topOperadores() == '!=' || this.topOperadores() == '==') {
        let rOp = this.operandos.pop();
        let rT = this.tipos.pop();
        let lOp = this.operandos.pop();
        let lT = this.tipos.pop();
        let op = this.operadores.pop();
        let resultType = this.getType(lT, rT, op);

        if(resultType != null) {
          this.tipos.push(resultType);
          let result = this.temporal.getDireccionBool();
          let cua = new cuadruplo(op, lOp, rOp, result);
          this.tempCount += 1;
          this.operandos.push(result);
          this.pushCuadruplo(cua);
        } else {

          throw Error(`${lT} ${op} ${rT} Type mismatch`);
        }
      }
    }

    printStatement() {
        let cua = new cuadruplo('PRINT', '', '', this.operandos.pop());
        this.tempCount += 1;
        this.pushCuadruplo(cua);
    }

    getVariableType(tablaLocal: any, tablaGlobal: any, variableName: any) {
     let tl = tablaLocal.getVariableType(variableName);
     let tG = tablaGlobal.getVariableType(variableName);

      return tl != undefined ? tl.type : tG.type;


    }

    getCurrentIndex() {
      return this.cuadruploIndex;
    }

    genEndProc() {
      let cua = new cuadruplo('ENDPROC', '', '', '');
      this.tempCount += 1;
      this.pushCuadruplo(cua);
    }

    genERA(funcName: string) {
      let cua = new cuadruplo('ERA', '', '', funcName);
      this.tempCount += 1;
      this.pushCuadruplo(cua);
    }

    genGOSUB(funcName: string) {
      let cua = new cuadruplo('GOSUB', '', '', funcName);
      this.tempCount += 1;
      this.pushCuadruplo(cua);
    }

    genENDP() {
      let cua = new cuadruplo('ENDP', '', '', '');
      this.tempCount += 1;
      this.pushCuadruplo(cua);
    }

    getCuadruplos() {
      return this.cuadruplos;
    }

    returnStatement() {
      let cua = new cuadruplo('RETURN', '', '', this.operandos.pop());
      this.tempCount += 1;
      this.pushCuadruplo(cua);
    }
    
}