const partition = (arr: number[], low: number, high: number): number => {
    const pivot = arr[high];

    let index = low - 1;

    for (let i = low; i < high; i++) {
        if (arr[i] <= pivot) {
            index++;
            [arr[i], arr[index]] = [arr[index], arr[i]];
        }
    }

    index++;
    [arr[high], arr[index]] = [arr[index], arr[high]];

    return index;
};

const qs = (arr: number[], low: number, high: number): void => {
    if (low >= high) return;

    const pivotIndex = partition(arr, low, high);
    qs(arr, low, pivotIndex - 1);
    qs(arr, pivotIndex + 1, high);
};

const quickSort = (arr: number[]): void => {
    qs(arr, 0, arr.length - 1);
};

export default quickSort;
