class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const allTreePaths = (root) => {
    if(root === null) return [];
    if(root.left === null && root.right === null) return [[root.val]];
    const paths = [];
    const leftSubTree = allTreePaths(root.left);
    for(let subPath of leftSubTree) {
        paths.push([root.val, ...subPath]);
    }
    const rightSubTree = allTreePaths(root.right);
    for(let subPath of rightSubTree) {
        paths.push([root.val, ...subPath]);
    }
    return paths;
}

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

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
console.log(allTreePaths(a));
allTreePaths(a); // ->