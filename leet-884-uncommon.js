var uncommonFromSentences = function(s1, s2) {
    let obj = {};
    let outArr = [];

    s1.split(" ").forEach((el) => {
        obj[el] = (obj[el] || 0) + 1;
    });

    s2.split(" ").forEach((el) => {
        obj[el] = (obj[el] || 0) + 1;
    });

    for (let word in obj) {
        if (obj[word] === 1) {
            outArr.push(word);
        }
    }

    return outArr;
};
