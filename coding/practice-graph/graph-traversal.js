const depthFirstPrint = (graph, source) => {
    const stack = [source];
    while(stack.length > 0) {
        console.log(stack.pop());
        for(let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}

const dfsRecursion = (graph, source) => {
    console.log(source);
    for(let neighbor of graph[source]){
        dfsRecursion(graph, neighbor);
    }
}

const breathFirstSearch = (graph, source) => {
    const queue = [source];
    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for(let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
    // const queue = [source];
    // while(queue.length > 0){
    //     const current = queue.shift();
    //     console.log(current)
    //     for(let neighbor of graph[current]){
    //         queue.push(neighbor);
    //     }
    // }
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

//dfsRecursion(graph, 'a');
breathFirstSearch(graph, 'a');
//a