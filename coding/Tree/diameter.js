class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const diameterOfBinaryTree = (root) => {
  let diameter = 0;
  const depth = (node) => {
    if(!node) return 0;
    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);
    diameter = Math.max(diameter, leftDepth + rightDepth);
    return 1 + Math.max(leftDepth, rightDepth);
  }
  depth(root);
  return diameter;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

//       1
//     /   \
//   2      3
//   / \
// 4   5


console.log(diameterOfBinaryTree(root));  