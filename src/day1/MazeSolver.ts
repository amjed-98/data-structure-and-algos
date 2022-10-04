const maze = [
    "xxxxxxxxxx x",
    "x        x x",
    "x        x x",
    "x xxxxxxxx x",
    "x          x",
    "x xxxxxxxxxx",
];

// the four directions can go
const directions = [
    [0, 1], // up
    [0, -1], // down
    [-1, 0], // left
    [1, 0], // right
];

const walk = (
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean => {
    // * BASE CASE

    const offTheXAxis = curr.x < 0 || curr.x >= maze[0].length;
    const offTheYAxis = curr.y < 0 || curr.y >= maze.length;

    const offTheMaze = offTheXAxis || offTheYAxis;
    const hitWall = maze[curr.y][curr.x] === wall;
    const alreadyBeenThere = seen[curr.y]?.[curr.x];
    const finishedTheMaze = curr.y === end.y && curr.x === end.x;

    if (offTheMaze) return false;
    if (hitWall) return false;
    if (alreadyBeenThere) return false;
    if (finishedTheMaze) {
        path.push(curr);
        return true;
    }

    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);

    for (let i = 0; i < directions.length; i += 1) {
        const [goHorizontal, goVertical] = directions[i];

        const solved = walk(
            maze,
            wall,
            { x: curr.x + goHorizontal, y: curr.y + goVertical },
            end,
            seen,
            path,
        );

        if (solved) return true;
    }

    // post
    path.pop();

    return false;
};

const solve = (maze: string[], wall: string, start: Point, end: Point): Point[] => {
    const path: Point[] = [];
    const seen: boolean[][] = [];

    for (let i = 0; i < maze.length; i++) {
        const initialSeenArray = new Array(maze[0].length).fill(false);
        seen.push(initialSeenArray);
    }

    walk(maze, wall, start, end, seen, path);

    return path;
};

export default solve;
