const depthFirstSearch = (graph, source) => {
    const stack = [source];
    while(stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        for(let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
    
}

const depthFirstSearchRecursion = (graph, source) => {
    console.log(source);
    for(let neighbor of graph[source]) {
        depthFirstSearchRecursion(graph, neighbor);
    }
}

const breathFirstSearch = (graph, source) => {
    const queue = [source];
    while(queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for(const neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
    // const queue = [source];
    // while(queue.length > 0) {
    //     const current = queue.shift();
    //     console.log(current);
    //     for(let neighbor of graph[current]) {
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

//depthFirstSearch(graph, 'a');
//depthFirstSearchRecursion(graph, 'a');
breathFirstSearch(graph, 'a');

