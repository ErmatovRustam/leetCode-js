// 1. split the string so we can loop each char and check whether it is i or not
// 2. if char is not i we add to outStr, if char === i we have to reverse the outStr
var finalString = function(s) {
    s = s.split("");
    outStr = "";

    for(let i = 0; i < s.length; i++){
        if(s[i] !== "i"){
            outStr += s[i];
        }else{
            outStr = outStr.split("").reverse().join("");
        }
    }

    return outStr;
};

console.log(finalString("poiinter"))