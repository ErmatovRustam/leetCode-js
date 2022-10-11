var isValid = function(s) {
    let sArr = s.split('');
   let open = ['(', '{' , '['];
   let close = [')', '}' , ']'];
   let counter = 0;
    for(let i = 0; i<s.length - 1; i++){
        let char = sArr[i];
        let nextChar = sArr[i+1];
        let endChar = sArr[s.length - i - 1];
        if((char === open[0] && nextChar === close[0]) ||
            (char === open[1] && nextChar === close[1]) ||
            (char === open[2] && nextChar === close[2]) ){
            counter++;
        }else if(i !== s.length / 2){
            if((char === open[0] && endChar === close[0]) ||
                (char === open[1] && endChar === close[1]) ||
                (char === open[2] && endChar === close[2]) ) {
                counter++;
                sArr.splice(s.length - i - 1, 1, 'a').join('');
            }
        }

    }
    return(counter === s.length / 2)
};

console.log(isValid("[[[]"));