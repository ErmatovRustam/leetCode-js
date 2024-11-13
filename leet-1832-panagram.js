var checkIfPangram = function(sentence) {
    let outArr = [];
     outArr[25] = 0;
    let arr = sentence.split("");
    for(let i = 0; i< arr.length; i++){
         outArr[arr[i].charCodeAt() - 97] = (outArr[arr[i].charCodeAt() - 97] || 0) + 1;
    } 
 
     for(let j = 0; j< outArr.length; j++){
         if(!outArr[j]) return false
     }
 
     return true
 };