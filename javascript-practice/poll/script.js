const data = {
    name: "Root",
    children: [
        {
            name: "Child 1",
            children: [{ name: "Grandchild 1" }, { name: "Grandchild 2" }]
        },
        {
            name: "Child 2",
            children: [{ name: "Grandchild 3" }, { name: "Grandchild 4" }]
        }
    ]
};

const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");
const nodeWidth = 60;
const nodeHeight = 25;


const treeLayout = d3.tree().size([height, width - 160]);
const root = d3.hierarchy(data);
treeLayout(root);

const g = svg.append("g").attr("transform", "translate(80,0)");

const link = g.selectAll(".link")
    .data(root.links())
    .enter()
    .append("path")
    .attr("class", "link")
    .attr("d", d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x));

const node = g.selectAll(".node")
    .data(root.descendants())
    .enter()
    .append("g")
    .attr("class", "node")
    .attr("transform", d => `translate(${d.y},${d.x})`);

node.append("circle")
    .attr("r", 5);

node.append("text")
    .attr("dy", 3)
    .attr("x", d => d.children ? -8 : 8)
    .attr("text-anchor", d => d.children ? "end" : "start")
    .text(d => d.data.name);
