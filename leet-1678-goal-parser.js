var interpret = function(command) {
    let arr = command.split('');
    for(let i = 0; i< arr.length - 1; i++){
        if(arr[i] === '(' && arr[i + 1] === ')' ){
            arr[i] = 'o';
            arr[i + 1] = '';
        }else if(arr[i] === '(' && arr[i + 1] === 'a' ){
            arr[i] = 'a';
            arr[i + 1] = 'l';
            arr[i + 2] = '';
            arr[i + 3] = '';
        }
    }
    return arr.join('')
};

console.log(interpret('G()(al)'))

//
// Example 1:
//
// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
//     G -> G
//     () -> o
// (al) -> al
// The final concatenated result is "Goal".
//     Example 2:
//
// Input: command = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:
//
// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"
//
//
// Constraints:
//
//     1 <= command.length <= 100
// command consists of "G", "()", and/or "(al)" in some order.