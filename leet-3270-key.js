var generateKey = function(num1, num2, num3) {
    
    // 1. make all nums 4 digit string in array
    let arr = [num1, num2, num3].map(el => el.toString().padStart(4, "0"));
    // for(let i =0; i < 3; i++){
    //     if(arguments[i].toString().length === 1) arr.push("000" + arguments[i].toString())
    //     if(arguments[i].toString().length === 2) arr.push("00" + arguments[i].toString())
    //     if(arguments[i].toString().length === 3) arr.push("0" + arguments[i].toString())
    // }

    

    

    // 2. find all mins for each digit of arr[i] and create in a new array
    let minArr = [];
    for(let i = 0 ; i < 4; i++){
        let n1 = Number(arr[0][i]);
        let n2 = Number(arr[1][i]);
        let n3 = Number(arr[2][i]);
       minArr[i] = Math.min(n1, n2, n3)
    }

    // console.log("arr: " + arr)
    // console.log("minArr: " + Number(minArr.join("")))

    return Number(minArr.join(""))
};

console.log(generateKey(12,4,676))