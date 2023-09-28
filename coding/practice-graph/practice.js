const hasPath = (graph, src, dest) => {
  const queue = [src];
  while(queue.length > 0) {
    const current = queue.shift();
    if(current === dest) return true;
    for(let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return false;
}

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}
console.log(hasPath(graph, 'a', 'e'));