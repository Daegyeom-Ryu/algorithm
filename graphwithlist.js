class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head)  return undefined;
        let poppedNode = this.tail;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let node = this.head;
            let beforeNode;
            while(node.next) {
                beforeNode = node;
                node = node.next;
            }
            beforeNode.next = null;
            this.tail = beforeNode;
        }
        this.length--;
        return poppedNode.value;// vertex value
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
        return this;
    }
    dequeue() {
        if(!this.head)  return undefined;
        let oldFirst = this.head;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            oldFirst.next = null;
        }
        this.length--;
        return oldFirst.value;
    }
}
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
    depthFirstIterative(start) {
        const result = [];
        const visited = {};
        const stack = new Stack();
        const adjacencyList = this.adjacencyList;
        function dfs(vertex) {
            if(!adjacencyList[vertex]) return null; // 아예 없는 vertex 입력시 종료
            visited[vertex] = true;
            stack.push(vertex);
            let currVertex;
            while(stack.length > 0) {
                currVertex = stack.pop();
                result.push(currVertex);
                adjacencyList[currVertex].forEach(neighbor=>{
                    if(!visited[neighbor]) {
                        visited[neighbor] = true;
                        stack.push(neighbor);
                    }
                });   
            }
        }
        let isVertexExist = dfs(start);
        if(isVertexExist === null)  return undefined;
        // 마저 돌지 못한 vertex도 다시 dfs 호출해줘야 함
        // for(let v in this.adjacencyList) {
        //     if(!visited[v]) dfs(v);
        // }
        return result;
    }
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        function dfs(vertex) {
            if(!adjacencyList[vertex]) return null; // 아예 없는 vertex 입력시 종료
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor])  dfs(neighbor);
            });
        }
        let isVertexExist = dfs(start);
        if(isVertexExist === null)  return undefined;
        // 마저 돌지 못한 vertex도 다시 dfs 호출해줘야 함
        // for(let v in this.adjacencyList) {
        //     if(!visited[v]) dfs(v);
        // }
        return result;
    }
    breathFirst(start) {
        const result = [];
        const visited = {};
        const queue = new Queue();
        const adjacencyList = this.adjacencyList;
        function bfs(vertex) {
            if(!adjacencyList[vertex])    return null;
            visited[vertex] = true;
            queue.enqueue(vertex);
            let currVertex;
            while(queue.length > 0) {
                currVertex = queue.dequeue();
                result.push(currVertex);
                adjacencyList[currVertex].forEach(neighbor =>{
                // adjacencyList[currVertex].slice().reverse().forEach(neighbor =>{
                    if(!visited[neighbor]) {
                        visited[neighbor] = true;
                        queue.enqueue(neighbor);
                    }
                });
            }
        }
        let isVertexExist = bfs(start);
        if(isVertexExist === null)  return undefined;
        // 마저 돌지 못한 vertex도 다시 bfs 호출해줘야 함
        // for(let v in this.adjacencyList) {
        //     if(!visited[v]) bfs(v);
        // }
        return result;
    }
}
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B");
graph.addEdge("A","C");
graph.addEdge("B","D");
graph.addEdge("C","E");
graph.addEdge("D","E");
graph.addEdge("D","F");
graph.addEdge("E","F");
// console.log(graph.depthFirstRecursive("A"));    // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
// console.log(graph.depthFirstIterative("A"));    // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
// console.log(graph.breathFirst("A"));    // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

//      A
//   /    \      
//   B     C
//   |     |
//   D --- E
//    \  /
//     F 