var lengthOfLongestSubstring = function(s) {
    if(s.length === 0 || s.length === 1) return s.length;
    let max = 1;
    let row = 0;
    let obj = {};
    for(let i = 0; i < s.length - 1; i++){
        obj = {};
        obj[s.charAt(i)] = 1;
        row = 1;
        for(let j = i + 1; j < s.length; j++){
            if(obj[s.charAt(j)] !== undefined){
                row = 0;
                j = s.length
            }else{
                obj[s.charAt(j)] = 1;
                row += 1;
                if(max < row){
                    max = row;
                }
            }
        }
    }
     return  max > row ? max : row
};

console.log(lengthOfLongestSubstring("abcabcbb"))
//
// Example 1:
//
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.