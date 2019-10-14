class node<T> {

    public data: any;
    public left: node<T>;
    public right: node<T>;

    constructor(data: any) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


export class Tree<T> {

    public root: node<T>;

    constructor(data: any) {
        this.root = new node(data);
    }

    insert(data: any): void {
        if(this.root.data > data) {
            this.root.left = new node(data);
        } else {
            this.root.right = new node(data);
        }
    }

}