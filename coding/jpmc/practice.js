class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const largestBSTSubtree = (root) => {
  const result = findLargest(root);
  return result;
}

const a = new Node(10);
const b = new Node(5);
const c = new Node(15);
const d = new Node(1);
const e = new Node(8);
const f = new Node(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(largestBSTSubtree(a))