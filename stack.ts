/**
 *
 * *Implementacion de la estructura de datos Stack
 * *Stack es un estructura de datos lineal de tipo LIFO
 * ? LIFO(Last In First Out)
 * @export
 * @class Stack
 * @template T
 */
export class Stack<T> {    
    /**
     *
     * *Arreglo donde se guardan los elementos de la pila
     * @private
     * @type {Array<T>}
     * @memberof Stack
     */
    private stack: Array<T>;

    
    /**
    * *Crea una instancia del Stack
    * @param {*} elements
    * @memberof Stack
    */
    constructor(...elements) {
        this.stack = [...elements];
    }
    
    /**
     *
     * *Inserte un elemento al final de la pila
     * !Utilizo el metodo push que es nativo de JavaScript
     * @param {T} element
     * @memberof Stack
     */
    push(element: T): void {
        this.stack.push(element);
    }

    
    /**
     *
     * *Elimina el ultimo elemento de la pila
     * !Utilizo el metodo pop que es nativo de JavaScript
     * @memberof Stack
     */
    pop(): void {
        this.stack.pop();
    }

    
    /**
     * 
     * *Regresa la longitud de la lista
     * !Utiliza la propiedad nativa de JavaScript
     * @returns {number}
     * @memberof Stack
     */
    length(): number {
        return this.stack.length;
    }

}