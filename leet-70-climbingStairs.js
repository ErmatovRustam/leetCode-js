var climbStairs = function(n) {
    if(n === 1 || n === 0) return 1;
    return (climbStairs(n-1) + climbStairs(n-2)) 
};


// this solution works but giving time limit exceeded error
// needs to be optimized