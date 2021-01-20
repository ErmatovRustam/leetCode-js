var countPrimes = function(n) {
    let sumPrimes = 1;
    let sumNotPrimes = 0;
    if(n <= 2) return 0;
    for(let i = 3; i < n; i+= 2){
        for(let j = 3; j <= Math.floor(Math.sqrt(i)); j+= 2){
            if(i % j === 0){
                sumNotPrimes++;
                continue;
            }
        }
        if(sumNotPrimes===0) sumPrimes++;
        sumNotPrimes = 0;
    }
    return sumPrimes
};

console.log(countPrimes(10))
//
// Example 1:
//
// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:
//
// Input: n = 0
// Output: 0
// Example 3:
//
// Input: n = 1
// Output: 0
//
//
// Constraints: