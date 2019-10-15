"use strict";
exports.__esModule = true;
/**
 *
 * *Objeto que guarda la llave, valor y apuntador al siguiento nodo
 * @class Node
 */
var Node = /** @class */ (function () {
    /**
     *Crea una instancia de Nodo
     * @param {string} key
     * @param {*} value
     * @memberof Node
     */
    function Node(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
    return Node;
}());
/**
 *
 * *Estructura de datos basado en Llave-Valor
 * *Asigna un valor a una llave y se accede/modifica el valor con la misma llave
 * @export
 * @class Hash
 */
var Hash = /** @class */ (function () {
    /**
     *Crea una instancia de Hash
     * @param {Number} size
     * @memberof Hash
     */
    function Hash(size) {
        this.cells = new Array(size);
    }
    /**
     *
     * *Genera un hash dado una llave
     * @param {string} key
     * @returns {number}
     * @memberof Hash
     */
    Hash.prototype.hash = function (key) {
        var total = 0;
        for (var index = 0; index < key.length; index++) {
            total += key.charCodeAt(index);
        }
        return total % this.cells.length;
    };
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
    Hash.prototype.insert = function (key, value) {
        var hash = this.hash(key);
        if (!this.cells[hash]) {
            this.cells[hash] = new Node(key, value);
        }
        else if (this.cells[hash].key === key) {
            this.cells[hash].value = value;
        }
        else {
            var node = this.cells[hash];
            while (node.next) {
                if (node.next.key === key) {
                    node.next.value = value;
                    return;
                }
                node = node.next;
            }
            node.next = new Node(key, value);
        }
    };
    /**
     *
     * *Obtiene el valor que guarda la llave
     * ?Verifica que llave sea exactemente igual a la guardada en el nodo
     * @param {string} key
     * @returns {*}
     * @memberof Hash
     */
    Hash.prototype.get = function (key) {
        var hash = this.hash(key);
        if (!this.cells[hash]) {
            return null;
        }
        else {
            var node = this.cells[hash];
            while (node) {
                if (node.key === key) {
                    return node.value;
                }
                node = node.next;
            }
            return null;
        }
    };
    return Hash;
}());
exports.Hash = Hash;
