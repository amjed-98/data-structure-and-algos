const traverse = <T>(curr: BinaryNode<T> | null, path: T[]): T[] => {
    if (!curr) return path;

    traverse(curr.left, path);
    traverse(curr.right, path);
    path.push(curr.value);

    return path;
};

const post_order_search = (head: BinaryNode<number>): number[] => {
    return traverse(head, []);
};

export default post_order_search;
