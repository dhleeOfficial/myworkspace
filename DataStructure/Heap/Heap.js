class Heap {
    constructor() {
        this.heap = [0, ];
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
    }

    insert(value) {
        this.heap.push(value);

        const curHeapSize = this.heap.length - 1;

        if (curHeapSize > 0) {
            let parentIdx = curHeapSize / 2;
            let curIdx = curHeapSize;

            while (parentIdx > 0) {
                if (this.heap[parentIdx] < this.heap[curIdx]) {
                    this.swap(parentIdx, curIdx);
                } else {
                    break;
                }

                curIdx = parentIdx;
                parentIdx = parentIdx / 2;
            }
        }
    }

    delete() {
        if (this.heap.length - 1 === 0) {
            return;
        } else {
            const elem = this.heap.pop();
            const curHeapSize = this.heap.length - 1;

            if (curHeapSize <= 1) {
                return;
            } else {
                this.heap[1] = elem;

                let curIdx = 1;

                while (true) {
                    if (curHeapSize < curIdx * 2) {
                        break;
                    } else {
                        if (curHeapSize < curIdx * 2 + 1) {
                            if (this.heap[curIdx] < this.heap[curIdx * 2]) {
                                this.swap(curIdx, curIdx * 2);
                                break;
                            }
                        } else {
                            if (this.heap[curIdx * 2] > this.heap[curIdx * 2 + 1]) {
                                this.swap(curIdx, curIdx * 2)
                                curIdx = curIdx * 2;
                            } else {
                                this.swap(curIdx, curIdx * 2 + 1)
                                curIdx = curIdx * 2 + 1;
                            }
                        }
                    }
                }
            }
        }
    }

    printHeap() {
        console.log(this.heap);
    }

    peek() {
        console.log(this.heap[1]);
    }
}

const heap = new Heap();

heap.insert(4);
heap.insert(7);
heap.insert(1);
heap.insert(9);
heap.printHeap();

heap.delete();
heap.printHeap();

heap.delete();
heap.printHeap();

heap.delete();
heap.printHeap();
