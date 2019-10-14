/**
 *
 * *Objeto que guarda la llave, valor y apuntador al siguiento nodo
 * @class Node
 */
class Node {
   
/**
 *
 * *Llave del nodo
 * @private
 * @type {string}
 * @memberof Node
 */
private key: string;
/**
 *
 * *Valor del nodo
 * @private
 * @type {*}
 * @memberof Node
 */
private value: any;
/**
 *
 * *Apuntador al siguiente
 * ? En caso de colisiones
 * @private
 * @type {Node}
 * @memberof Node
 */
private next: Node;

    /**
     *Crea una instancia de Nodo
     * @param {string} key
     * @param {*} value
     * @memberof Node
     */
    constructor(key: string, value: any) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}


/**
 *
 * *Estructura de datos basado en Llave-Valor
 * *Asigna un valor a una llave y se accede/modifica el valor con la misma llave
 * @export
 * @class Hash
 */
export class Hash {

    /**
     *
     * *Arreglo que guarda los nodos de la tabla Hash
     * @private
     * @type {Array<any>}
     * @memberof Hash
     */
    private cells: Array<any>;

    /**
     *Crea una instancia de Hash
     * @param {Number} size
     * @memberof Hash
     */
    constructor(size: Number) {
        this.cells = new Array(size);
    }

    /**
     *
     * *Genera un hash dado una llave 
     * @param {string} key
     * @returns {number}
     * @memberof Hash
     */
    hash(key: string): number {
        let total: number = 0;

        for (let index = 0; index < key.length; index++) {
            total += key.charCodeAt(index);
        }

        return total % this.cells.length;
    }

    /**
     *
     * *Inserta el nodo en la posicion dada por la llave
     * *Si no existe en la celda un nodo, se añade
     * *Si existe y llave es igual, se modifica la informacion
     * *Si existe y llave es diferente, el nodo se añade como colision.
     * ?El nodo anterior apunta al nuevo nodo
     * @param {string} key
     * @param {*} value
     * @returns {void}
     * @memberof Hash
     */
    insert(key: string, value: any): void {
        const hash = this.hash(key);

        if (!this.cells[hash]) {
            this.cells[hash] = new Node(key, value);
        } else if(this.cells[hash].key === key) {
            this.cells[hash].value = value;
        } else {
            let node = this.cells[hash];

            while (node.next) {
                if (node.next.key === key) {
                    node.next.value = value;
                    return;
                }
                node = node.next;
            }
            node.next = new Node(key, value);
        }

    }

    /**
     *
     * *Obtiene el valor que guarda la llave
     * ?Verifica que llave sea exactemente igual a la guardada en el nodo
     * @param {string} key
     * @returns {*}
     * @memberof Hash
     */
    get(key: string): any {
        const hash = this.hash(key);

        if(!this.cells[hash]) {
            return null;
        } else {
            let node = this.cells[hash];

            while (node) {
                if(node.key === key) {
                    return node.value;
                }

                node = node.next;
            }

            return null;
        }


    }

}