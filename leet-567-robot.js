var judgeCircle = function(moves) {
    let counterR = 0;
    let counterL = 0;
    let counterU = 0;
    let counterD = 0;

    moves.forEach((el) =>{
        if(el === 'R') counterR++;
        if(el === 'L') counterL++;
        if(el === 'U') counterU++;
        if(el === 'D') counterD++;
    })

    return (counterR === counterL) && (counterU === counterD)
};