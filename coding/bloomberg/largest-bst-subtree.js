class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

const largestBSTSubtree = (root) => {
    const result = findLargest(root);
    return result[1];
}

const findLargest = (node) => {
    if(!node) return [true, 0, Infinity, -Infinity];
    const [isBSTLeft, sizeLeft, lowerBoundLeft, upperBoundLeft] = findLargest(node.left);
    const [isBSTRight, sizeRight, lowerBoundRight, upperBoundRight] = findLargest(node.right);
    const lowerNext = Math.min(node.val, lowerBoundLeft);
    const upperNext = Math.max(node.val, upperBoundRight);
    const isBST = isBSTLeft && isBSTRight && node.val > upperBoundLeft && node.val < lowerBoundRight;
    const size = isBST ? (1 + sizeLeft + sizeRight) : Math.max(sizeLeft, sizeRight);
    return [isBST, size, lowerNext, upperNext];
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
