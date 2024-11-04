var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let obj = {};

    for(let i = 0; i < s.length; i++){
        let currLet = s.charAt(i)
        obj[currLet] = (obj[currLet] || 0) + 1;
    }

      for(let i = 0; i < t.length; i++){
        let currLet = t.charAt(i)
        if(!obj.hasOwnProperty(currLet)) return false;
        obj[currLet] -= 1;
        if(obj[currLet] < 0) return false
    }
    return true
};

console.log(isAnagram("aacc", 'ccac'))