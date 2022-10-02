// O(log n)
const bs_list = (haystack: number[], needle: number): boolean => {
    let low = 0;
    let high = haystack.length;

    do {
        const midIndex = Math.floor(low + (high - low) / 2);
        const midValue = haystack[midIndex];

        if (needle === midValue) return true;
        else if (needle > midValue) low = midIndex + 1;
        else high = midIndex;
    } while (low < high);

    return false;
};

export default bs_list;

// * if array is sorted
// * create a low end which is initially is 0
// * create a high end which is initially is array.length
// * create a loop with the break condition is low > high
// * create a midIndex which is initially low + (high - low) / 2
// * if the middle value equals needle great !!
// * if mid is less than needle then assign low = mid + 1
// *  if mid is higher than needle then assign hight to mid
// * else return false
