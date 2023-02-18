/*
find the greatest common divisor of two numbers. example: 4,6==2 and
example:2,3==1 
*/

function getCD(x, y) {
    let min = Math.min(x, y);
    let max = min === x ? y : x;

    if (max % min === 0) {
        return min;
    }
    else {
        let mid = Math.floor(max / 2);

        let divisor = [];

        for (let i = mid; i > 0; i--) {
            if (max % i === 0 && min % i === 0) {
                return i;
            }
        }
        return divisor;
    }
};
console.log(getCD(4, 6));