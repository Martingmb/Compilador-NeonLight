class node {

    public data: any;
    public next: node;

    constructor(data: any, next: node) {
        this.data = data;
        this.next = next;
    }
}

export class LinkedList {

    private Head: node;

    constructor() {
        this.Head = null;
    }

    addFirst(element: any): void {
        if(this.Head === null) {
            this.Head = new node(element, null);
        } else {
            let temp = this.Head;
            this.Head = new node(element, temp);
            this.Head.next = temp;
        }
    }

    traverse(): void {
        let temp: node = this.Head;

        while(temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    addLast(element: any): void {
        if(this.Head === null) {
            this.addFirst(element);
        } else {
            let temp: node = this.Head;

            while(temp.next != null) {
                temp = temp.next;
            }

            temp.next = new node(element, null);
        }
    }

    insertAfter(nodeBefore: any, element: any): void {
        let temp: node = this.Head;

        while(temp != null && temp.data != nodeBefore) {
            temp = temp.next;
        }

        if(temp != null) {
            temp.next = new node(element, temp.next);
        }
    }

    insertBefore(nodeAfter: any, element: any): void {
        if(this.Head === null) {
            return null;
        }

        if(this.Head.data === nodeAfter) {
            this.addFirst(element);
        }

        let prev: node = null;
        let current: node = this.Head;

        while(current != null && current.data != nodeAfter) {
            prev = current;
            current = current.next;
        }

        if(current != null) {
            prev.next = new node(element, current);
        }
    }

    delete(nodeToDelete: any): void {
        if(this.Head === null) {
            throw console.error("Cannot delete, list is empty");
        }

        if(this.Head.data === nodeToDelete) {
            this.Head = this.Head.next;
            return;
        }

        let prev: node = null;
        let current: node = this.Head;

        while(current != null && current.data != nodeToDelete) {
            prev = current;
            current = current.next;
        }

        if(current === null) {
            throw console.error("Cannot delete, list is empty");
        }

        prev.next = current.next;

    }

}