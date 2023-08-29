
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const isIdentical  = (mainRoot, subRoot) => {
  if(!mainRoot && !subRoot) return true;
  if(!mainRoot || !subRoot) return false;
  return mainRoot.data === subRoot.data && isIdentical(mainRoot.left, subRoot.left) && 
  isIdentical(mainRoot.right, subRoot.right)
}

const isSubTree = (mRoot, sRoot) => {
  if(!mRoot) return false;
  if(!sRoot) return true;
  if(isIdentical(mRoot, sRoot)) return true;
  return isSubTree(mRoot.left, sRoot) || isSubTree(mRoot.right, sRoot);
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
console.log(isSubTree(a, x));