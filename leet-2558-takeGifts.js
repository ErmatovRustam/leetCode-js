var pickGifts = function(gifts, k) {
    for(let i = 0; i < k; i++){
        let max = Math.max(...gifts);
        let indMax = gifts.indexOf(max);
        gifts[indMax] = Math.floor(Math.sqrt(max));
    }
   
    return Math.round(gifts.reduce((acc, el) => acc += el))
};

console.log(pickGifts([25,64,9,4,100], 4))