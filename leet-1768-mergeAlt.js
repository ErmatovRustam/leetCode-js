var mergeAlternately = function(word1, word2) {
    let outWd = "";
    let min = Math.min(word1.length, word2.length);
    for(let i = 0; i < min; i++){
        outWd += word1[i];
        outWd += word2[i];
    }

    if(word1.length > word2.length) outWd += word1.substring(min)
    if(word1.length < word2.length) outWd += word2.substring(min)

    return outWd
};