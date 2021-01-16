var longestCommonPrefix = function(strs) {
    let word1 = strs[0];
    let output = '';
    if(strs.length === 0) return output
    for(let i = 0; i< word1.length; i++){
        let currLet = word1.charAt(i);
        let counter = 0;

        for(let j = 1; j < strs.length; j++){
            if(currLet !== strs[j].charAt(i)){
                return output;
            }else{
                counter++;
            }
        }

        if(counter === strs.length - 1){
            output += word1.charAt(i);
            counter = 0;
        }
    }
    return output;
};
