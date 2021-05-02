/*
    [Breadth First Search]

    - 정점들과 같은 레벨에 있는 노드 ( 형제 노드 )을 먼저 탐색하는 방식
    - 두 개의 큐를 사용한다.
    - 탐색을 하는데 있어서 우선 순위가 너비 = 층이 된다는 것이 핵심
    - 시간 복잡도 : 노드 수 + 간선 수 = O(n)
*/
const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"] 
};

const BFS = (graph, startNode) => {
    let visited = [];
    let needVisit = [];

    needVisit.push(startNode);

    while (needVisit.length !== 0) {
        const node = needVisit.shift();

        if (!visited.includes(node)) {
            visited.push(node)
            needVisit = [...needVisit, ...graph[node]];
        }
    }

    return visited;
}

console.log(BFS(graph, "A"));