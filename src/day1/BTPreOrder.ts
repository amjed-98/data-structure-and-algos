const traverse = <T>(curr: BinaryNode<T> | null, path: T[]): T[] => {
    if (!curr) return path;

    path.push(curr.value);

    traverse(curr.left, path);
    traverse(curr.right, path);

    return path;
};

const pre_order_search = (head: BinaryNode<number>): number[] => {
    return traverse(head, []);
};

export default pre_order_search;
