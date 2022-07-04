class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const isSibling = (root, sib1, sib2) => {
    if(root === null) return false;
    if(root.left === null || root.right === null) return false;
    return (
        (root.left.data === sib1.data && root.right.data === sib2.data)
        || (root.right.data === sib1.data && root.left.data === sib2.data)
        || isSibling(root.left, sib1, sib2)
        || isSibling(root.right, sib1, sib2)
    )
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
//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

console.log(isSibling(a, b , c));