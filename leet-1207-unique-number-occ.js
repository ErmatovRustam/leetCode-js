var uniqueOccurrences = function(arr) {
    let obj = {};
    arr.map((el, ind) => typeof (obj[el]) === "undefined" ? obj[el] = 1 : obj[el]+= 1 )
    let keys = Object.values(obj);
    let obj2 = {};
    for(let i = 0; i < keys.length; i++){
        if(obj2[keys[i]] === undefined){
            obj2[keys[i]] = 1;
        }else if(obj2[keys[i]] > 0){
            return false;
        }
    }
    return  true;
};

console.log(uniqueOccurrences([1,2,2,1,1,3,3,4,4,4,4,4,4,4]))
//
// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
//
//     Example 1:
//
// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
//     Example 2:
//
// Input: arr = [1,2]
// Output: false
// Example 3:
//
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true