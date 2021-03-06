var numJewelsInStones = function(jewels, stones) {
    let jewArr = jewels.split('');
    let stonArr = stones.split('');
    let output = 0;
    stonArr.map(el => jewArr.includes(el) ? output++ : output);
    return output;
};
let jewels = "z", stones = "ZZ"
console.log(numJewelsInStones(jewels, stones))

// Example 1:
//
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:
//
// Input: jewels = "z", stones = "ZZ"
// Output: 0
//
//
// Constraints:
//
//     1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
//     All the characters of jewels are unique.