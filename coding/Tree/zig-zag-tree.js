class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const zigzagOrder = (root) => {
    if (!root) return [];
    let stackQueue = [root];
    let result = [];
    let level = 1;
    
    while (stackQueue.length > 0) {
        const isLtoR = level % 2 === 1;
        const subLength = stackQueue.length;
        const subList = [];
        for (let i = 0; i < subLength; i++) {
            let node;
            if (isLtoR) {
               node = stackQueue.shift();
                if (node.left) stackQueue.push(node.left);
                if (node.right) stackQueue.push(node.right);
            } else {
                node = stackQueue.pop();                
                if (node.right) stackQueue.unshift(node.right);
                if (node.left) stackQueue.unshift(node.left);
                
            }
            subList.push(node.val);
        }
        level++;
        result.push(subList);
    }
    return result;
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

//      12
//    /   \
//   6     5
//  / \     \
// 4   6     12
console.log(zigzagOrder(a));