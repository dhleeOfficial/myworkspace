/*
    [Depth First Search]

    - needVisit 스택과 visited큐 두 개의 자료 구조를 생성
    - 큐와 스택 구현은 별도의 라이브러리를 활용할 수도 있지만 간단히 배열을 통해 구현가능
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
    J: ["I"],
};

const DFS = (graph, startNode) => {
    let needVisitStack = [];
    let visitedQueue = [];

    needVisitStack.push(startNode);

    while (needVisitStack.length !== 0) {
        const node = needVisitStack.pop();

        if (!visitedQueue.includes(node)) {
            visitedQueue.push(node);

            needVisitStack = [...needVisitStack, ...graph[node]];
        }
    }

    return visitedQueue;
}

console.log(DFS(graph, "A"));