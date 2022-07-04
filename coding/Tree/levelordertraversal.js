class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const treeLevels = (root) => {
   if(root === null) return [];
   const queue = [{node: root, levelNum: 0}];
   const results = [];
   while(queue.length > 0) {
    const {node, levelNum} = queue.shift();
    if(results.length === levelNum) {
        results[levelNum] = [node.val]
    } else {
        results[levelNum].push(node.val);
    }
    if(node.left) queue.push({node: node.left, levelNum: levelNum + 1})
    if(node.right) queue.push({node: node.right, levelNum: levelNum + 1})
   }
//    if(root === null) return [];
//    const queue = [{node: root, levelNum: 0}];
//    const levels = [];
//    while(queue.length > 0) {
//     const {node, levelNum} = queue.shift();
//     if(levels.length === levelNum) {
//         levels[levelNum] = [node.val]
//     } else {
//         levels[levelNum].push(node.val);
//     }
//     if(node.left) queue.push({node: node.left, levelNum: levelNum + 1});
//     if(node.right) queue.push({node: node.right, levelNum: levelNum + 1})
//    }
//    return levels;
    // if (root === null) return [];
  
    // const levels = [];
    // const queue = [{ node: root, levelNum: 0 }];
    // while (queue.length > 0) {
    //   const { node, levelNum } = queue.shift();
  
    //   if (levels.length === levelNum) {
    //     levels[levelNum] = [node.val];
    //   } else {
    //     levels[levelNum].push(node.val);
    //   }
  
    //   if (node.left !== null) queue.push({ node: node.left, levelNum: levelNum + 1 });
    //   if (node.right !== null) queue.push({ node: node.right, levelNum: levelNum + 1 });
    // }
  
    // return levels;
  };

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
console.log(treeLevels(a));
let zig = treeLevels(a); 
for(let i = 0; i < zig.length; i++) {
    if(i % 2 !== 0) zig[i].reverse();
}
console.log(...zig);
// ->
// [
//   ['a'],
//   ['b', 'c'],
//   ['d', 'e', 'f']
// ]