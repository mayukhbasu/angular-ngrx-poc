const prereqsPossible = (numCourses, prereqs) => {
    let visiting = new Set();
    const graph = buildGraph(numCourses, prereqs);
    for(let node in graph){
        if(hasCycle(graph, node, visiting)){
            return false;
        }
    }
    return true;
    // const graph = buildGraph(numCourses, prereqs);
    // const visiting = new Set();
    // const visited = new Set();
    // for(let node in graph) {
    //     if(hasCycle(graph, node, visiting, visited)){
    //         return false;
    //     }
    // }
    // return true;
}

const hasCycle = (graph, node, visiting) => {
    if(visiting.has(node)) return false;
    visiting.add(node);
    for(let neighbor of graph[node]){
        hasCycle(graph, neighbor, visiting);
    }
    visiting.delete(node);
    return false;
    // if(visiting.has(node)) return true;
    // visiting.add(node);
    // for(let neighbor of graph[node]) {
    //     if(hasCycle(graph, neighbor, visiting)) {
    //         return true;
    //     }
    // }
    // visiting.delete(node);
    
    // return false;
}

const buildGraph = (numOfCourse, prereqs) => {
    const graph = {};
    for(let course = 0; course < numOfCourse; course++){
        graph[course] = [];
    }
    for(let prereq of prereqs) {
        const [courseA, courseB] = prereq;
        graph[courseA].push(courseB);
    }
    return graph;
    // const graph = {};
    // for(let course = 0; course < numOfCourse; course ++) {
    //     graph[course] = [];
    // }
    // for(let prereq of prereqs) {
    //     const [courseA, courseB] = prereq;
    //     graph[courseA].push(courseB);
    // }
    // return graph;
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