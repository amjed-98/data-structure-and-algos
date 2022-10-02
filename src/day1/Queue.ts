type TNode<T> = {
    value: T;
    next?: TNode<T>;
};

class Queue<T> {
    public length: number;
    private head?: TNode<T>;
    private tail?: TNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = { value: item };
        this.length++;
        if (!this.tail) {
            this.tail = this.head = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        const head = this.head;
        this.head = this.head.next;

        return head.value;
    }
    peek(): T | undefined {
        return this.tail?.value;
    }
}

export default Queue;

// * enqueue:
// Todo: check of there is a this.tail
// Todo: if not then this.head = this.tail = {value:item} , this.length++
// Todo: else: store the pevTail and then point this.tail = {value:item, next:prevTail}
// Todo: than point prevTail.next = newTail

// * deque
// Todo: if there is no head then return undefined
// Todo: else store the prevHead and then this.head = prevHead.next
// Todo: this.length--

// * peek
// Todo just the return the tail value if it exists else return undefined
