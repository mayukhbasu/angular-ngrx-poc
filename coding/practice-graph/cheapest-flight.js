// Initialize the graph using an adjacency list
const graph = {
  'JFK': {'SFO': 500, 'ATL': 200},
  'ATL': {'LAX': 300, 'ORD': 100},
  'SFO': {'ORD': 200},
  'LAX': {'ORD': 150},
  'ORD': {}
};

// Dijkstra's Algorithm
function findCheapestFlight(graph, start, end) {
  // Initialize distance object and previous node object
  const distances = {};
  const pq = []; // Priority Queue

  for (let airport in graph) {
    distances[airport] = Infinity;
  }
  
  // Start node distance is 0
  distances[start] = 0;
  pq.push([start, 0]);

  while (pq.length > 0) {
    pq.sort((a, b) => a[1] - b[1]); // Sort by cost
    const [currentAirport, currentCost] = pq.shift(); // Dequeue

    // Stop if reached destination
    if (currentAirport === end) return currentCost;

    for (let neighbor in graph[currentAirport]) {
      const newCost = currentCost + graph[currentAirport][neighbor];
      if (newCost < distances[neighbor]) {
        distances[neighbor] = newCost;
        pq.push([neighbor, newCost]);
      }
    }
  }

  return "No path found";
}

// Test the function
const start = 'JFK';
const end = 'ORD';
const result = findCheapestFlight(graph, start, end);
console.log(`The cheapest flight from ${start} to ${end} costs: ${result}`);
