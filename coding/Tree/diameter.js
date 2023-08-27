class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

var diameterOfBinaryTree = function(root) {
  let result = 1;
  dfs(root)
  
  function dfs(root) {
      if(!root) {
          return 0;
      }
      let l = dfs(root.left);
      let r = dfs(root.right);
      result = Math.max(result, l + r + 1);
      return Math.max(l, r) + 1;
  }
  
  return result - 1;
};

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
console.log(diameterOfBinaryTree(a));