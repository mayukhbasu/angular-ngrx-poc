class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const bottomRightValue = (root) => {
    // todo
    const queue = [root];
    let current = null;
    while(queue.length > 0) {
        current = queue.shift();
        if(current.left !== null) queue.push(current.left);
        if(current.right !== null) queue.push(current.right);
    }
    return current.value;
};

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(bottomRightValue(a));
