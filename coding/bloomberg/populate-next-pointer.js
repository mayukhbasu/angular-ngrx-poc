class Node {
  constructor(val){
      this.val = val;
      this.left = null;
      this.right = null;
      this.next = null;
  }
}

function connect(root) {
  if (!root) return null;
  
  let queue = [root];
  
  while (queue.length) {
      let size = queue.length;
      let prev = null;
      
      for (let i = 0; i < size; i++) {
          let current = queue.shift();
          
          if (prev) {
              prev.next = current;
          }
          
          if (current.left) queue.push(current.left);
          if (current.right) queue.push(current.right);
          
          prev = current;
      }
  }
  
  return root;
}

const a = new Node(12);
const b = new Node(6);
const c = new Node(5);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(connect(a));
