class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
var verticalTraversal = function(root) {
    const map = new Map()
    dfs(root, map);
    const res1 = Array.from(map.keys())
    const res2 =  res1.sort((a,b)=>a-b)
       // sort based on map index, -2,-1,0,1,2,3
      const res3 = res2.map((a)=>map.get(a).sort((a,b)=>{ // sort the array values of each index based on depth
      if(a.depth === b.depth) return a.val - b.val
      return a.depth - b.depth // same index in map, but different depth in the tree
    }))
    return res3.map((a)=>{ // map and retrieve only the values from the objects
      return a.map((n)=>n.val)
    })
  };
  
function dfs(root, map, idx = 0, depth = 0){
    if(!root) return map
    if(!map.get(idx)) map.set(idx , [])
    map.get(idx).push({val: root.val, depth})
    dfs(root.left, map, idx-1, depth+1)
    dfs(root.right, map, idx+1, depth+1)
    return map
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
console.log(verticalTraversal(a))