var reverseWords = function(s) {
    let arr = s.split(' ');
    let outputArr = [];
    for(let  i = 0; i < arr.length; i++){
        outputArr.push(arr[i].split('').reverse().join(''))
    }
    return outputArr.join(" ");
};

console.log(reverseWords("Let's take LeetCode contest"))

// Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.