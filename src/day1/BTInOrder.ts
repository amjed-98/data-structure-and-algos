const traverse = <T>(curr: BinaryNode<T> | null, path: T[]): T[] => {
    if (!curr) return path;

    traverse(curr.left, path);
    path.push(curr.value);
    traverse(curr.right, path);

    return path;
};

const in_order_search = (head: BinaryNode<number>): number[] => {
    return traverse(head, []);
};

export default in_order_search;
