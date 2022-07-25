const topologicalOrder = (graph) => {
    const numParents = {};
    for(let node in graph){
        numParents[node] = 0;
    }
    for(let node in graph) {
        for(let child of graph[node]) {
            numParents[child]++;
        }
    }
    const ready = [];
    for(let node in graph) {
        if(numParents[node] === 0){
            ready.push(node);
        }
    }
    const orders = [];
    while(ready.length > 0) {
        const current = ready.pop();
        orders.push(current);
        for(let child of graph[current]) {
            numParents[child] --;
            if(numParents[child] === 0) ready.push(child);
        }
    }
    return orders;
    // const numParents = {};
    // for(let node in graph){
    //     numParents[node] = 0;
    // }
    // for(let node in graph){
    //     for(let child of graph[node]){
    //         numParents[child]++; 
    //     }
    // }
    // const ready = [];
    // for(let node in graph){
    //     if(numParents[node] ===0){
    //         ready.push(node);
    //     }
    // }
    // const orders = [];
    // while(ready.length > 0) {
    //     const current = ready.pop();
    //     orders.push(current);
    //     for(let child of graph[current]){
    //         numParents[child]--;
    //         if(numParents[child] === 0) ready.push(child);
    //     }
    // }
    // return orders;
}

const sorted = topologicalOrder({
    a: ["f"],
    b: ["d"],
    c: ["a", "f"],
    d: ["e"],
    e: [],
    f: ["b", "e"],
  });

console.log(sorted);