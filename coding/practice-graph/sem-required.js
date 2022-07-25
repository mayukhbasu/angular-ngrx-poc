const semestersRequired = (numCourses, prereqs) => {
    const graph = buildGraph(numCourses, prereqs);
    const distance = {};
    for(let course in graph){
        if(graph[course].length === 0) distance[course] = 1; //counting nodes
    }
    for(let course in graph) {
        traverseDistance(graph, course, distance);
    }
    return Math.max(...Object.values(distance));
}

const traverseDistance = (graph, node, distance) => {
    if(node in distance) return distance[node];
    let maxDistance = 0;
    for(let neighbor of graph[node]) {
      const neighborDistance =   traverseDistance(graph, neighbor, distance);
      if(neighborDistance > maxDistance){
        maxDistance = neighborDistance;
      }
    }
    distance[node] = 1 + maxDistance;
    return distance[node];
}

const buildGraph = (numOfCourses, prereqs) => {
    const graph = {};
    for(let i = 0; i < numCourses; i++){
        graph[i] = [];
    }
    for(let prereq of prereqs) {
        const [a, b] = prereq;
        graph[a].push(b);
    }
    return graph
}

const numCourses = 6;
const prereqs = [
  [1, 2],
  [2, 4],
  [3, 5],
  [0, 5],
];
console.log(semestersRequired(numCourses, prereqs));
semestersRequired(numCourses, prereqs); // -> 3