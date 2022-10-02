type TNode<T> = {
    value: T;
    prev?: TNode<T>;
};

class Stack<T> {
    public length: number;
    private head?: TNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        this.length++;
        const newHead: TNode<T> = { value: item, prev: undefined };

        if (!this.head) {
            this.head = { value: item };
            return;
        }
        const prevHead = this.head;

        newHead.prev = prevHead;
        this.head = newHead;
    }

    pop(): T | undefined {
        if (!this.head) return;

        const prevHead = this.head;

        this.head = prevHead.prev;

        this.length--;
        return prevHead.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

export default Stack;

// * push
// Todo: check if there is a head first
// Todo: if not then this.head = this.tail = {value:item}
// Todo: else point newHead = {value:item,prev:prevHead}; this.head = newHead
// Todo:  this.length++

// * pop
// Todo: check if there is a head first if not then return undefined
// Todo: else this.head = prevHead.prev
// Todo: return this.head.value
// Todo: this.length--

// * peek
// Todo: return this.head.value else return undefined
