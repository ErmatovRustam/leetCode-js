var freqAlphabets = function(s) {
    let sArr = s.split("");
    let outArr = [];

    for(let i = 0; i< sArr.length; i++){
        if(sArr[i + 2] !== "#" && sArr[i] !== "#"){
            outArr.push(sArr[i]);
        }else if(sArr[i] !== "#"){
            outArr.push(sArr[i] + sArr[i+1]);
            i++;
        }
    }
   

    return outArr.map((el) => {
        return (String.fromCharCode(Number(el) + 96))
    }).join("")
};