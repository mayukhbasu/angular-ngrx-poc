const hasCycle = (graph) => {
    const visiting = new Set();
    const visited = new Set();
    for(let node in graph){
        if(cycleDetect(graph, node, visiting, visited)) return true;
    }
    return false
}

const cycleDetect = (graph, node, visiting, visited) => {
    if(visited.has(node)) return false;
    if(visiting.has(node)) return true;
    visiting.add(node);
    for(let neighbor of graph[node]) {
        if(cycleDetect(graph, neighbor, visiting, visited)) {
            return true;
        }
    }
    visiting.delete(node);
    visited.add(node);
    return false
}

const flag = hasCycle({
    a: ["b"],
    b: ["c"],
    c: ["a"],
  }); //
  console.log(flag);