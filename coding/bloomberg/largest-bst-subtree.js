class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

var largestBSTSubtree = function(root) {
    let max = 0;
    const dfs = (node) => {
        if(!node) return [0 , null, null];
        if(!node.left && !node.right) {
            max = Math.max(max , 1);
            return [1, node.val, node.val];
        }
        let [leftCount, leftMin, leftMax] = dfs(node.left);
        let [rightCount, rightMin, rightMax] = dfs(node.right);
        leftMax = leftMax !== null ? leftMax : -Infinity
        rightMin = rightMin !== null ? rightMin : Infinity;
        if(node.val > leftMax && node.val < rightMin && leftCount && rightCount) {
            leftMin = leftMin !== null ? leftMin : node.val;
            rightMax = rightMax !== null ? rightMax : node.val;
            let count = 1 + leftCount + rightCount;
            max = Math.max(max , count);
            return [count, leftMin, rightMax];
        } else return [false, null, null];
    }
    dfs(root);
    return max;

    // let max = 0;
    // const dfs = (node) => {
        
    //     if (!node) return [0,null,null];
    //     if (!node.left && !node.right) {
    //         max = Math.max(max, 1);
    //         return [1, node.val, node.val];
    //     }
    //     let [left, leftMin, leftMax] = dfs(node.left);
    //     let [right, rightMin, rightMax] = dfs(node.right);
    //     leftMax = leftMax !== null ? leftMax : -Infinity;
    //     rightMin = rightMin !== null ? rightMin : Infinity;
    //     if (node.val > leftMax && node.val < rightMin && left !== false && right !== false) {
    //         let count = left + right + 1;
    //         max = Math.max(count, max);
    //         leftMin = leftMin !== null ? leftMin : node.val;
    //         rightMax = rightMax !== null ? rightMax : node.val;
    //         return [count, leftMin, rightMax];
    //     } else return [false,null,null];
    // }
    // dfs(root);
    // return max;
};


const a = new Node(10);
const b = new Node(5);
const c = new Node(15);
const d = new Node(1);
const e = new Node(8);
const f = new Node(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
console.log(largestBSTSubtree(a))
