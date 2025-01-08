var convert = function(s, numRows) {
    if(numRows === 1) return s
    s = s.split("");
    let outArr = [];
    let ind = 0;
    let isGrowing = true;
    for(let i = 0; i < s.length; i++){
        if(isGrowing){
            outArr[ind] = (outArr[ind] || "" ) + s[i]
            ind++;
            if(ind === numRows){
                isGrowing = false
                ind -= 2;
            }
        }else{
             outArr[ind] = (outArr[ind] || "" ) + s[i]
             ind--;
             if(ind === - 1){
                isGrowing = true;
                ind += 2;
             }
        }
    }

    return outArr.reduce((acc, el) => acc += el)
};

// var convert = function(s, numRows) {
//     if(numRows === 1) return s
//     s = s.split("");
//     let outArr = [];
//     let ind = 0;
//     let isGrowing = true;
//     for(let i = 0; i < s.length; i++){
//         if(isGrowing){
//             outArr[ind] = (outArr[ind] || "" ) + s[i]
//             ind++;
//             if(ind === numRows){
//                 isGrowing = false
//                 ind -= 2;
//             }
//         }else{
//              outArr[ind] = (outArr[ind] || "" ) + s[i]
//              ind--;
//              if(ind === - 1){
//                 isGrowing = true;
//                 ind += 2;
//              }
//         }
//     }

//     return outArr.reduce((acc, el) => acc += el)
// };