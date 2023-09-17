class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

var rightSideView = function(root) {
  const result = []
  let dfs = function (root,level){
      if(!root ) return 
      if( result.length === level ) result.push(root.val)
     
      dfs(root.left,level+1)
      dfs(root.right,level+1)
      
          
  }
  
  dfs(root,0)
  return result
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
console.log(rightSideView(a)); 