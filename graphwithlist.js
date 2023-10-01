// Undirected Graph with adjacencyList
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1, v2) {
        if(this.adjacencyList[v1])  this.adjacencyList[v1].push(v2);
        if(this.adjacencyList[v2])  this.adjacencyList[v2].push(v1);
    }
    removeEdge(v1, v2) {
        if(this.adjacencyList[v1])
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v!==v2);
        if(this.adjacencyList[v2])
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v!==v1);
    }
    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) return;
        while(this.adjacencyList[vertex].length) {
            const adjacencyVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(adjacencyVertex, vertex);
        }
        delete this.adjacencyList[vertex];
    }
}
let graph = new Graph();
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Los Angeles");
graph.addVertex("Hong Kong");
graph.addEdge("Dallas","Tokyo");
graph.addEdge("Dallas","Aspen");
graph.addEdge("Hong Kong","Tokyo");
graph.addEdge("Hong Kong","Dallas");
graph.addEdge("Los Angeles","Hong Kong");
graph.addEdge("Los Angeles","Aspen");
console.log(graph.adjacencyList);
graph.removeVertex('Hong Kong');
console.log(graph.adjacencyList);
graph.removeVertex('Aspen');

console.log(graph.adjacencyList);
