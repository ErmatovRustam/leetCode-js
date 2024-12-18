var finalPrices = function(prices) {
    let outArr = [];
    for(let i = 0; i < prices.length; i++){
        let counter = i + 1;
        while(counter < prices.length){
            if(prices[counter] <= prices[i]){
                outArr.push(prices[i] - prices[counter])
                counter = prices.length
            }
            counter++
        }

        if(outArr.length < i + 1){
            outArr.push(prices[i])
        }
    }

    return outArr
};



console.log(finalPrices([10,5,7,4,3,7,9,1,2]))