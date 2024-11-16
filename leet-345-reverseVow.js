var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let strVow = [];
    let outArr = [];
    
    strVow = s.split('').filter((el) => vowels.includes(el) && el );

    for(let i = 0, j = strVow.length - 1; i < s.length; i++){
        if(vowels.includes(s.charAt(i))){
            outArr.push(strVow[j]);
            j--;
        }else{
            outArr.push(s.charAt(i))
        }
    }
    
    return outArr.join("")
    
};