// O(sqrt(n))
const two_crystal_balls = (breaks: boolean[]): number => {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));

    let i = jumpAmount;

    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i]) break;
    }

    i -= jumpAmount;

    for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
        if (breaks[i]) return i;
    }

    return -1;
};

export default two_crystal_balls;

// * sorted in a way like this [false,false,false,false,true,true,true,true,true,true,true,]
// * declare a jumpAmount variable equals initially to Math.floor(Math.sqrt(breaks.length))
// * declare an i  variable that holds the jumpAmount value
// * loop using for loop while the break is i < breaks.length and increment i+=jumpAmount to jump squarely
// * if breaks[i] then break the loop
// * then decrement i (i -= jumpAmount) to get that last safePoint
// * loop again width j = 0 while j < jumpAmount && i < break.length; j++, i++
// * if breaks[i] return i
// * else return -1
