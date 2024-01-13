const graph = {
  'JFK': {'SFO': 500, 'ATL': 200},
  'ATL': {'LAX': 300, 'ORD': 100},
  'SFO': {'ORD': 200},
  'LAX': {'ORD': 150},
  'ORD': {}
};

const findCheapestFlight = (graph = {}, start, end) => {
  const distance = {};
  const queue = [];
  for(let node in graph) {
    distance[node] = Infinity;
  }
  queue.push([start, 0]);
  distance[start] = 0;
  while(queue.length > 0) {
    queue.sort((a, b) => a[1] - b[1]);
    const [currentAirport, currentCost] = queue.shift();
    if(currentAirport === end) return currentCost;
    for(let neighbor in graph[currentAirport]) {
      const newCost = currentCost + graph[currentAirport][neighbor];
      if(newCost < distance[neighbor]) {
        distance[neighbor] = newCost;
        queue.push([neighbor, newCost]);
      }
    }
  }
  return "No path found"
}

const start = 'JFK';
const end = 'ORD';
const result = findCheapestFlight(graph, start, end);
console.log(`The cheapest flight from ${start} to ${end} costs: ${result}`);