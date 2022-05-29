
const prereqsPossible = (numCourses, prereqs) => {
    const graph = buildGraph(numCourses, prereqs);
    let visiting = new Set();
    for(let node in graph){
        if(hasCycle(graph, node, visiting)){
            return false;
        }
    }
    return true;
}

const hasCycle = (graph, node, visiting) => {
    if(visiting.has(node)) return false;
    visiting.add(node);
    for(let neighbor of graph[node]){
        hasCycle(graph, neighbor, visiting);
    }
    visiting.delete(node);
    return false;
}


const buildGraph = (numOfCourses, prerqs) => {
    const graph = {};
    for(let course = 0; course < numOfCourses; course ++) {
        graph[course] = [];
    }
    for(const edge of prerqs){
        const [courseA, courseB] = edge;
        graph[courseA].push(courseB);
    }
    return graph;
}

const numCourses = 6;
const prereqs = [
  [0, 1],
  [2, 3],
  [0, 2],
  [1, 3],
  [4, 5],
];
console.log(prereqsPossible(numCourses, prereqs))