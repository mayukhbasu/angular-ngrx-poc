class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
        this.next = null;
    }
}

var getNextMost = function(root) {
    if (!root) return null;
    if (root.left) return root.left; // check left leg
    if (root.right) return root.right; // check right leg
    return getNextMost(root.next); // check nexts
  }
  
  var connect = function(root) {
    if (!root) {
      return root;
    }
    if (root.right) {
      root.right.next = getNextMost(root.next);
    }
    if (root.left) {
      root.left.next = root.right ? root.right : getNextMost(root.next);
    }
    connect(root.right);
    connect(root.left);
    return root;
  };
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

console.log(connect(a))
