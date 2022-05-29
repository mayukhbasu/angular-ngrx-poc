class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const breadthFirstValues = (root) => {
    if(root === null) return [];
    const queue = [root];
    const values = [];
    while(queue.length > 0) {
        const current = queue.shift();
        values.push(current.val);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
    return values;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;
console.log(breadthFirstValues(a));