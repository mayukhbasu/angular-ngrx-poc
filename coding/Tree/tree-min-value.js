
class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// const treeMinValue = (root) => {
//     let smallest = Infinity;
//     const stack = [root];
//     while(stack.length > 0) {
//         const current = stack.pop();
//         if(current.val < smallest) smallest = current.val;
//         if(current.left) stack.push(current.left);
//         if(current.right) stack.push(current.right);
//     }
//     return smallest;
// }
const treeMinValue = (root) => {
    if(root === null) return Infinity;
    const leftMin = treeMinValue(root.left);
    const rightMin = treeMinValue(root.right);
    return Math.min(root.val, leftMin, rightMin);
    // if(root === null) return Infinity;
    // const leftMin = treeMinValue(root.left);
    // const rightMin = treeMinValue(root.right);
    // return Math.min(root.val, leftMin, rightMin);
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

treeMinValue(a); // -> -2
console.log(treeMinValue(a));