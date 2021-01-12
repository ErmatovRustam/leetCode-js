var isPalindrome = function(x) {
    let str = String(x);
    var strLength = str.length;

    for(let i = 0, j = strLength-1; i< Math.floor(strLength / 2); i++, j--){
        if(str.charAt(i) != str.charAt(j)){
            return;
        }
    }
    return true
};

isPalindrome(121);

/**
 * @param {number} x
 * @return {boolean}


 * Example 1:
 Input: x = 121
 Output: true

 * Example 2:
 Input: x = -121
 Output: false
 Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

 * Example 3:
 Input: x = 10
 Output: false
 Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

 * Example 4:
 Input: x = -101
 Output: false

 *Constraints:
 -231 <= x <= 231 - 1

 */
