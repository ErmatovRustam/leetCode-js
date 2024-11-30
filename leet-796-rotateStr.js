var rotateString = function(s, goal) {
    let counter = 0;
    while(counter < s.length){
        let firstLetter = s[0];
        s = s.slice(1) + firstLetter
        if(s === goal) return true
        counter++
    }
    return false
};