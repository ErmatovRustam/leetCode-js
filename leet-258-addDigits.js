var addDigits = function(num) {
    while(num.toString().length !== 1){
        let temp = 0;
        for(let i = 0; i < num.toString().length; i++){
            temp += Number(num.toString()[i])
        }
        num = temp
    }

    return num
};