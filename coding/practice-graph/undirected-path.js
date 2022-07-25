const buildGraph = (edges) => {
    const graph = {};
    for(let edge of edges) {
        const [node1, node2] = edge;
        if(!(node1 in graph)) graph[node1] = [];
        if(!(node2 in graph)) graph[node2] = [];
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    return graph;
}

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges);
    return hasPath(graph, nodeA, nodeB, new Set());
}

const hasPath = (graph, src, dest, visited) => {
    if(visited.has(src)) return false;
    if(src === dest) return true;
    visited.add(src);
    for(let neighbor of graph[src]) {
        if(hasPath(graph, neighbor, dest, visited)) {
            return true;
        }
    }
    return false;
}


const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];

  console.log(undirectedPath(edges, 'l', 'j'));
  
  undirectedPath(edges, 'l', 'j'); // -> true