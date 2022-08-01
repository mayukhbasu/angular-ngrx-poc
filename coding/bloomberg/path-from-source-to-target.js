var allPathsSourceTarget = function(graph) {
    const ans = [];
    if(!graph) return [];
    dfs(graph, [0], ans);
    return ans;
};

const dfs = (graph, path, ans) => {
    const root = path[path.length - 1];
    if(root === graph.length - 1) {
        ans.push([...path]);
        return;
    }
    if(!graph[root] || !graph[root].length) return;
    for(let i = 0; i < graph[root].length; i++) {
        path.push(graph[root][i]);
        dfs(graph, path, ans);
        path.pop();
    }
}
const graph = [[1,2],[3],[3],[]];
console.log(allPathsSourceTarget(graph));