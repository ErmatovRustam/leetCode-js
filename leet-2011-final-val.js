var finalValueAfterOperations = function(operations) {
    let counter = 0;
    for(let i = 0; i < operations.length; i++){
        if(operations[i] === "++X" || operations[i] === "X++") counter++;
        if(operations[i] === "--X" || operations[i] === "X--") counter--;
    }

    return counter
};