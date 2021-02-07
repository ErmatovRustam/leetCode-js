var firstUniqChar = function(s) {
    let obj = {};
    for(let i = 0; i<s.length; i++){
        obj[s.charAt(i)] === undefined ? obj[s.charAt(i)] = 1: obj[s.charAt(i)]++;
    }
    let values = Object.values(obj);
    let keys = Object.keys(obj);

    for(let  i = 0; i< values.length; i++){
        if(values[i] === 1){
            return s.indexOf(keys[i])
        }
    }
    return -1

};

console.log(firstUniqChar("loveleetcode"))