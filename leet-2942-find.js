var findWordsContaining = function(words, x) {
    let outArr = [];
    for(let i = 0; i< words.length; i++){
        if(words[i].includes(x)) outArr.push(i);
    }

    return outArr
};