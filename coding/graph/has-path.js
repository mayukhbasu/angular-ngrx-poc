const hasPath = (graph, src, dst) => {
    if(src === dst) return true;
    for(let neighbors of graph[src]) {
        if(hasPath(graph, neighbors, dst)){
            return true;
        }
    }
    return false;
    
}

const hasPathBFS = (graph, src, dest) => {
    const queue = [src];
    while(queue.length > 0) {
        const current = queue.shift();
        if(current === dest) return true;
        for(let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    return false
    // const queue = [src];
    // while(queue.length > 0) {
    //     const current = queue.shift();
    //     if(current === dest) return true;
    //     for(let neighbor of graph[current]){
    //         queue.push(neighbor);
    //     }
    // }
    // return false;
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

hasPath(graph, 'f', 'k'); // true
//console.log(hasPath(graph, 'f', 'k'));
console.log(hasPathBFS(graph, 'f', 'k'));