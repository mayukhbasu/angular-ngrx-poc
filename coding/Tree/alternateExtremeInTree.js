class Node {
    constructor(data){
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

function printExtremeNodes(root){
    // if(root == null) return;
    // var q = [];
    // q.push(root);
    // var flag = false;
    // while(q.length > 0){
    //     var nodeCount = q.length;
    //     var n = nodeCount;
        
    //     while(n -- > 0){
    //         var current = q[0];
    //         if(current.left !== null)q.push(current.left);
    //         if(current.right !== null)q.push(current.right);
    //         q.shift();
    //         if(flag && n == nodeCount - 1) console.log(current.data);
    //         if(!flag && n === 0) console.log(current.data);
    //     }
    //     flag = !flag
    // }
    if(root == null) return;
    var queue = [];
    queue.push(root);
    var flag = false;
    while(queue.length > 0){
        let nodeCount = queue.length;
        let n = nodeCount;
        while(n -- > 0){
            let current = queue[0];
            if(current.left !== null) queue.push(current.left);
            if(current.right !== null) queue.push(current.right);
            queue.shift();
            if(flag && n === nodeCount - 1){
                console.log(current.data);
            }
            if(!flag && n === 1){
                console.log(current.data);
            }
        }
        flag = !flag;
    }
}
var root = new Node(1); 
root.left = new Node(2); 
root.right = new Node(3); 
root.left.left = new Node(4); 
root.left.right = new Node(5); 
root.right.right = new Node(7); 
root.left.left.left = new Node(8); 
root.left.left.right = new Node(9); 
root.left.right.left = new Node(10); 
root.left.right.right = new Node(11); 
root.right.right.left = new Node(14); 
root.right.right.right = new Node(15); 
root.left.left.left.left = new Node(16); 
root.left.left.left.right = new Node(17); 
root.right.right.right.right = new Node(31); 
printExtremeNodes(root); 