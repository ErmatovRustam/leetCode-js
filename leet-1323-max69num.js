var maximum69Number  = function(num) {
    let arr = String(num).split('');
    let max = num;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 6 || arr[i] == 9) {
            if (arr[i] == 6) {
                arr[i] = 9;
            } else if (arr[i] == 9) {
                arr[i] = 6;
            }
        }
        if(Number(arr.join('')) > max){
            max = Number(arr.join(''))
        }
        arr = String(num).split('');
    }
    return max;
};
console.log(maximum69Number(9996))

//
// Example 1:
//
// Input: num = 9669
// Output: 9969
//
// Explanation:
//     Changing the first digit results in 6669.
// Changing the second digit results in 9969.
// Changing the third digit results in 9699.
// Changing the fourth digit results in 9666.
// The maximum number is 9969.
// Example 2:
//
// Input: num = 9996
// Output: 9999
// Explanation: Changing the last digit 6 to 9 results in the maximum number.
//     Example 3:
//
// Input: num = 9999
// Output: 9999
// Explanation: It is better not to apply any change.
//
//
//     Constraints:
//
// 1 <= num <= 10^4
// num's digits are 6 or 9.