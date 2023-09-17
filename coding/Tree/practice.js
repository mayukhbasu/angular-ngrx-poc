class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


const maxPathSum = (root) => {
 if(!root) return 0;
 if(!root.left && !root.right) return root.data;
 const leftSum = maxPathSum(root.left);
 const rightSum = maxPathSum(root.right);
 return root.data + Math.max(leftSum, rightSum);
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

maxPathSum(a); // -> 18
console.log(maxPathSum(a));