type TNode<T> = {
    value: T;
    next?: TNode<T>;
    prev?: TNode<T>;
};

class DoublyLinkedList<T> {
    public length: number;
    private head: TNode<T> | undefined;
    private tail: TNode<T> | undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;
        const newNode: TNode<T> = { value: item };
        if (!this.head) {
            this.head = this.tail = newNode;
            return;
        }

        const prevHead = this.head;

        newNode.next = prevHead;
        prevHead.prev = newNode;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) throw new Error("oh no");
        if (idx === this.length) return this.append(item);
        if (idx === 0) return this.prepend(item);

        this.length++;
        let count = 0;
        let current = this.head;

        while (current && count < idx) {
            count++;
            current = current.next;
        }

        if (!current?.prev || !current?.next) return;

        const node = { value: item } as TNode<T>;
        node.next = current;
        node.prev = current.prev;
        current.prev = node;
        current.prev.next = node;
    }

    append(item: T): void {
        this.length++;
        const newNode = { value: item } as TNode<T>;

        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }

        const prevTail = this.tail;
        prevTail.next = newNode;
        newNode.prev = prevTail;
        this.tail = newNode;
    }

    remove(item: T): T | undefined {
        let current = this.head;
        let counter = 0;
        while (current && counter < this.length) {
            counter++;
            if (current.value === item) break;
            current = current.next;
        }

        if (!current) return;
        if (this.length === 0) this.head = this.tail = undefined;
        if (current.prev?.next) current.prev.next = current.next;
        if (current.next?.prev) current.next.prev = current.prev;
        current.next = current.prev = undefined;

        this.length--;

        return current?.value;
    }

    get(idx: number): T | undefined {
        let counter = 0;
        let current = this.head;
        if (idx > this.length) throw new Error("oh no");
        if (idx === 0) return this.head?.value;
        if (idx === this.length - 1) return this.tail?.value;

        while (current && counter < idx) {
            counter++;
            current = current.next;
        }

        return current?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx > this.length) throw new Error("oh no");
        if (idx === this.length) return this.remove as any;
        let counter = 0;
        let current = this.head;

        while (current && counter < idx) {
            counter++;
            current = current.next;
        }

        if (!current) return;

        if (current?.prev?.next) current.prev.next = current.next;
        if (current?.next?.prev) current.next.prev = current.prev;
        this.length--;
        return current?.value;
    }
}

export default DoublyLinkedList;
