class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
const treeLevels = (root) => {
    // todo
    if(root === null) return [];
    const levels = [];
    const stack = [{node: root, levelNum: 0}];
    while(stack.length > 0) {
      const {node, levelNum} = stack.pop();
      if(levels.length === levelNum) {
        levels.push([node.val])
      } else {
        levels[levelNum].push(node.val);
      }
      if(node.left !== null) stack.push({node: node.left, levelNum: levelNum + 1});
      if(node.right !== null) stack.push({node: node.right, levelNum: levelNum + 1});
    }
    return levels;
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