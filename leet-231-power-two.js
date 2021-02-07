var isPowerOfTwo = function(n) {
    let i = 1;
    while(i<n){
        i *= 2;
    }
    return i === n
};

console.log(isPowerOfTwo(4))
//
// Input: n = 1
// Output: true
// Explanation: 20 = 1