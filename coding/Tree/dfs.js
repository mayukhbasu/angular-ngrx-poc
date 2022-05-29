class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root) => {
    if(root === null) return [];
    const stack = [root];
    const results = [];
    while(stack.length > 0) {
        const node = stack.pop();
        results.push(node.val)
        
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return results;
    // if(root === null) return [];
    // const results = [];
    // const stack = [root];
    // while(stack.length > 0) {
    //     let current = stack.pop();
    //     results.push(current.val);
    //     if(current.right) stack.push(current.right);
    //     if(current.left) stack.push(current.left);
        
    // }
    // return results;
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
