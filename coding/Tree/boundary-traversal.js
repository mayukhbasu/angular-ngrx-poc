class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const printLeft = (root) => {
  const results = [];
  const dfs = (root, level) => {
    if(!root) return;
    if(results.length === level) results.push(root.data);
    dfs(root.left, level + 1);
    dfs(root.right, level + 1);
  }
  dfs(root, 0);
  return results;
}

const printRight = (root) => {
  const results = [];
  const dfs = (root, level) => {
    if(!root) return;
    if(results.length === level) results.push(root.data);
    dfs(root.right, level + 1);
    dfs(root.left, level + 1);
  }
  dfs(root, 0);
  return results;
}

const printLeaves = (root) => {
  const leafNodes = [];
  const queue = [root];
  while(queue.length > 0) {
    const node = queue.shift();
    if(!node.left && !node.right) leafNodes.push(node.data);
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }
  return leafNodes;
}
const printBoundary = (root) => {
  const leftResults = printLeft(root);
  const rightResults = printRight(root);
  const leaftResults = printLeaves(root);
  return [...leftResults, ...leaftResults, ...rightResults.reverse()];
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

let x = new Node(4);
let y = new Node(4);
x.right = y;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1
console.log(printBoundary(a))
printBoundary(a)