var makeFancyString = function(s) {
    let arr = s.split("");
    let outArr = [];
    for(let i = 0; i < s.length - 2; i++){
        let curLet = s[i];
        if(curLet !== s[i+1] || curLet !== s[i+2]) outArr.push(curLet)
    }
    outArr.push(s[s.length - 2])
    outArr.push(s[s.length - 1])
    return outArr.join("");
};