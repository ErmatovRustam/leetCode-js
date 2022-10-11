// var longestPalindrome = function(s) {
//     if(s.length === 1) return s;
//     let max = '';
//     for(let i = 0; i < s.length - 1; i++){
//         for(let j = i; j < s.length; j++){
//             let subSt = s.substring(i, j + 1);
//             let revSub = subSt.split('').reverse().join('');
//             if(subSt === revSub){
//                 if(subSt.length > max.length){
//                     max = subSt;
//                 }
//             }
//         }
//     }
//     return max;
// };
var longestPalindrome = function(s) {
    if(s.length === 1) return s;
    let max = '';
    let count = 1;
    let start = 0;
    let finish = 1;
    let ind = 1;
    while(count < s.length){
        finish++;
        let subSt = s.substring(start, ind + start);
        console.log(subSt)
        let revSub = subSt.split('').reverse().join('');
        if(subSt === revSub){
            if(subSt.length > max.length){
                max = subSt;
            }
        }
        if(finish === s.length -1){
            count++;
            start++;
        }
        ind++;
    }
    return max;
};

console.log(longestPalindrome('abcdbbfcba'))