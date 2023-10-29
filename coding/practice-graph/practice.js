const largestComponent = (graph = {}) => {
  const visited = new Set();
  let largest = 0;
  for(let node in graph) {
    let size = explore(graph, node, visited);
    if(size > largest) largest = size;
  }
  return largest;
}

const explore = (graph, node, visited = new Set()) => {
  if(visited.has(node)) return 0;
  visited.add(node);
  let size = 1;
  for(let neighbor of graph[node]) {
    size += explore(graph, neighbor, visited);
  }
  return size;
}


const result = largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); // - 4

console.log(result);