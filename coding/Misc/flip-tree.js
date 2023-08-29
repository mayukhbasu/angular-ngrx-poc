class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
  }
  
  const flipTree = (root) => {
    if(!root) return null;
    const left = flipTree(root.left);
    const right = flipTree(root.right);
    root.left = right;
    root.right = left;
    return root;
  }
  
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  const g = new Node("g");
  const h = new Node("h");
  
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  e.right = h;
  
  //      a
  //    /    \
  //   b      c
  //  / \      \
  // d   e      f
  //    / \
  //    g  h
  
  console.log(flipTree(a));
  