class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const lowestCommonAncestor = (root, value1, value2) => {
  const path1 = getPath(root, value1);
  const path2 = getPath(root, value2);
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
e.right = h;
console.log(lowestCommonAncestor(a, 'd', 'f')); 
// a
// /   \
// b     c
// / \     \
// d   e     f
// / \
// g   h