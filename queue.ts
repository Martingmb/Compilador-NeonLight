
/**
 *
 * *Implementacion de la fila en JavaScript
 * *Es una estructura de datos lineal de tipo FIFO
 * ? FIFO (First In First Out)
 * @export
 * @class Queue
 * @template T
 */
export class Queue<T> {
    
/**
 *
 * *Arreglo donde se guardan los elementos de la fila
 * @private
 * @type {Array<T>}
 * @memberof Queue
 */
private queue: Array<T>;

/**
 * *Crea una instancia de Queue.
 * @param {*} elements
 * @memberof Queue
 */
constructor(...elements) {
        this.queue = [...elements];
    }

/**
 *
 * *Agrega un elemento al final de la fila
 * !Utilizo el metodo nativo push de JavaScript
 * @param {T} element
 * @memberof Queue
 */
push(element: T): void {
        this.queue.push(element);
    }

/**
 *
 * *Elimina el primer elemento de la fila
 * !Utilizo el metodo nativo shift de JavaScript
 * @memberof Queue
 */
pop(): void {
        this.queue.shift();
    }

/**
 *
 * *Obtiene la longitud de la fila
 * !Utilizo la propiedad nativa de length de JavaScript
 * @returns {number}
 * @memberof Queue
 */
length(): number {
        return this.queue.length;
    }
}