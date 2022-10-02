// O(n2)

const bubble_sort = (arr: number[]): void => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(i, j);
            }
        }
    }

    function swap(i: number, j: number) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
};

export default bubble_sort;

// * loop through the array while i is less than array.length
// * declare an inner loop while (j < array.length - i - 1)
// * check if arr[j] > arr[j+1] ? swap(i,j)
