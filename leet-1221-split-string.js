var balancedStringSplit = function(s) {
    let output  = 0;
    let l = 0;
    let r = 0;
    for(let i =  0; i< s.length; i++){
        if(s.charAt(i) === 'L') l++;
        if(s.charAt(i) === 'R') r++;
        if(l === r && l !== 0){
            output++;
            r = 0;
            l = 0;
        }
    }
    return output
};
console.log(balancedStringSplit("RLRRRLLRLL"))
//
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
