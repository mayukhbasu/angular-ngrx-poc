class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root) => {
    let results = [];
    let stack = [root];
    while(stack.length > 0) {
        let node = stack.pop();
        results.push(node.value);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return results;
}

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
console.log(depthFirstValues(a));
