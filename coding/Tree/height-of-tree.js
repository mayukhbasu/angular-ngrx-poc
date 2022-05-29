class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const height = (node) => {
    if(node === null) return - 1;
    leftHeight = height(node.left);
    rightHeight = height(node.right);
    return 1 + Math.max(leftHeight, rightHeight);
}
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(height(a)); 